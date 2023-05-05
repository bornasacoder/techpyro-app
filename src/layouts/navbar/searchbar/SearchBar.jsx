import {
  styled,
  TextField,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  MenuItem,
  Select,
  Avatar,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { getCordinate } from "components/location/Location";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
const Search = styled(Box)(({ theme }) => ({
  // border-radius: 5px;
  // margin-left: 10px;
  width: "70%",
  backgroundColor: "#fff",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    width: "75%",
  },
}));
const SearchField = styled(TextField)(({ theme }) => ({
  fontSize: "unset",
  width: "100%",
  flex: 3,
  border: "none",
  outline: "none",
  "&::placeholder": {
    marginLeft: "100px",
    fontSize: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const SearchList = styled(List)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
  },
}));

const StyledListItem = styled(ListItem)`
  padding: 2px 10px;
`;

export default function SearchBar() {
  const products = useSelector((state)=>state.product.products)
  const [showSearch, setShowSearch] = useState("none");
  const [value, setValue] = useState(null) 
  const catMenu = useRef(null);
  const searchHandler = () => {
    setShowSearch("flex");
  };

  const closeOpenMenus = (e) => {
    if (catMenu.current && showSearch && !catMenu.current.contains(e.target)) {
      setShowSearch("none");
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);
  const [location, setLocation] = useState("");
  const updatevalue = (e, vel) => {
    // console.warn(e.target.value);
    setLocation(e.target.value);
  };
  const [address, setaddress] = useState([])
  const fetchData = async () =>{
    getCordinate(setaddress)
  }
  useEffect(() => {
   fetchData()
  }, []);
const [searchdata, setSearchdata] = useState([])
  const handleChange = (e) =>{
    console.log(products)
     const arr = products.filter((item) => {
     return  item.maincategory.toLowerCase().includes(e.target.value) || item.shopname.toLowerCase().includes(e.target.value)
     })

     setSearchdata([...arr]);
     console.log(arr);
  }
  const nevigate = useNavigate()
  const handleClick =(id)=>{
    nevigate(`/Product/${id}`)
  }

  return (
    <Search sx={{  position: "relative", borderRadius: "5px",width:"50vw",height:"55px" }}>
      <Box display="flex" border="none" outline="none" alignItems="center" >
        <Select
          flex={1}
          value={location}
          outline="none"
          border="none"
          displayEmpty
          onChange={updatevalue}
          sx={{
            position: "relative",
            "& fieldset": { border: "none" },
            borderRight: "2px solid #EEEEEE",
            // paddingRight:"100px",
            borderRadius: "1px",
            display: { md: "block", sm: "none", xs: "none" },
            color:"hotpink"
          }}
        >
          <MenuItem value="" width="100%">{address&&address.length!==0 && address[0].properties.county}</MenuItem>
        </Select>
      </Box>
      <Box display="flex" sx={{ width: "100%", position: "relative" }}>
        <SearchIcon
          color="secondary"
          border="none"
          outline="none"
          sx={{
            position: "absolute",
            left: "20px",
            top: "15px",
            fontSize: "30px",
            color:"hotpink"
          }}
        />
        <SearchField
          placeholder="search anything... "
          sx={{
            "& .MuiInputBase-input": {
              padding: "6px 10px",
              marginLeft: "45px",
              height: 40,
              position:"relative",
              width: "100%",
              outline: "none",
              color:"hotpink"
            },
            "& fieldset": { border: "none" },
          }}
          value={value}
          onChange={(e)=>handleChange(e)}
          onClick={searchHandler}
          ref={catMenu}
        />
        <SearchList
          sx={{
            display: showSearch,
            flexDirection: "column",
            marginTop: "70px",
            bgcolor: "#fff",
            position: "absolute",
            right:"0px",
            left:"0px",
            color: "red",
            zIndex: "100",
            maxHeight:"220px",
            overflowY:"scroll",
            borderRadius:"10px"

          }}
          component="nav"
          aria-label="mailbox folders"
          ref={catMenu}
          >
            {searchdata.length!==0 && searchdata.map((item)=>(
          <StyledListItem button sx={{display:"flex",gap:"40px",alignItems:"center"}} onClick={()=>handleClick(item.id)} >
<Avatar alt="Remy Sharp" src={item.image} sx={{height:"75px",width:"75px"}} />
<Box>
    <Typography  sx={{fontSize:"18px",fontWeight:"600",color:"hotpink"}} >{item.shopname}</Typography>
    <Box sx={{display:"flex",color:"#000"}}>
    {item.category.map((value,index)=>(
    <Typography > {` ${value} `} {item.category.length-2>=index && ` | `} </Typography>
    ))}
    </Box>
 </Box>
 <Divider />
          </StyledListItem>
          ))}
         
        </SearchList>
      </Box>
    </Search>
  );
}
