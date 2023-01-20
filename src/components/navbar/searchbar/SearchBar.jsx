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
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled(Box)(({ theme }) => ({
  // border-radius: 5px;
  // margin-left: 10px;
  // width: "60%",
  width: "55vw",
  display: "flex",
  backgroundColor: "#F7F2F1",

  [theme.breakpoints.down('sm')]: {
    display:"flex",
    width:"100vw",
    flexDirection:"column !important",
     gap:"20px" 
  },
 
}));
const SearchField = styled(TextField)(({ theme }) => ({
  // height:'40px',
  // padding:' 8.5px 21px',
  fontSize: "unset",
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  // padding:"30px 70px",
  // padding-left: 20px,
  flex: 3,
  // "&::placeholder": {
  //   marginLeft: "100px",
  //   fontSize: "40px",
  // },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const SearchList = styled(List)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));

const StyledListItem = styled(ListItem)`
  padding: 2px 10px;
`;

export default function SearchBar() {
  const [showSearch, setShowSearch] = useState("none");

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

  return (
    <Search>
      <SearchField
        placeholder="email@example.com "
        sx={{
          "& .MuiInputBase-input": {
            // marginBottom:"70px",
            fontSize: "20px",
            paddingLeft: "30px",
          },
          "& fieldset": { border: "1px solid #000", borderRadius: "40px" },
        }}
        onClick={searchHandler}
        ref={catMenu}
      ></SearchField>
      <Box
        sx={{
          position: {md:"absolute",sm:"absolute",xs:"relative"},
          left: {md:"67vw",sm:"67vw",xs:"0"},
          padding:"12px 12px",
        borderRadius:{md:"0px 40px 40px 0px",sm:"0px 40px 40px 0px",xs:"40px"},
          backgroundColor: "#000",
          color: "#fff",
         
          "&:hover":{
            backgroundColor:"#FE7E57"
          }
        }}
      >
        <Typography sx={{ fontSize: "25px" }}>Subscribe</Typography>
      </Box>
    </Search>
  );
}
