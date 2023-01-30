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
  NativeSelect,
  InputBase,
} from "@mui/material";
import React, { useRef, useState } from "react";
import "./searchbar.css"
const Search = styled("div")(({ theme }) => ({
  borderRadius: "5px",
  width: "100%",
  height:"50px",
  backgroundColor:"#BCF2FF",
  // padding:"2px 8px",
  // borderRadius:"20px",
color:"#A7A7A7",
  display: "flex",
  alignItems: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {},
}));

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
    setLocation(e.target.value);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Search>
      <FormControl fullWidth sx={{display:"flex",alignItems:"center", width:"25%",paddingLeft:"20px"}}>
  <NativeSelect
    defaultValue={5}
    inputProps={{
      name: 'age',
    }}
    
  >
    <option value={10}>All Category</option>
    <option value={20}>Smartphones</option>
    <option value={30}>Computers</option>
    <option value={40}>Laptops</option>
  </NativeSelect>
      </FormControl>
    <Typography sx={{ fontSize: "30px", fontWeight: "50", }}> | </Typography>
      <Box sx={{width:"50%",paddingLeft:"20px"}} >
        <StyledInputBase placeholder="Enter Your E-mail " />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          width:"25%",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ display: "flex", gap: "20px", width:"100%", alignItems:"center" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "50" }}>
            |
          </Typography>{" "}
          Search
        </Typography>
      </Box>
    </Search>
  );
}
