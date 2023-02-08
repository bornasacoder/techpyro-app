import { Mail, Padding, SearchOutlined, Send } from "@mui/icons-material";
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
import "./searchbar.css";
const Search = styled("div")(({ theme }) => ({
  borderRadius: "5px",
  width: "15vw",
  height: "35px",
  backgroundColor: "#FFFFFF",
  display: "flex",
  border:"1px solid #000",
  // justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display:"none"
  },
  [theme.breakpoints.down("sm")]: {
   display:"none"
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {},
}));

export default function SearchBar() {
  const [showSearch, setShowSearch] = useState("none");
  const catMenu = useRef(null);
  const closeOpenMenus = (e) => {
    if (catMenu.current && showSearch && !catMenu.current.contains(e.target)) {
      setShowSearch("none");
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);
  

  return (
    <Search>
      <Box sx={{ marginLeft:"10px" }}>
        <StyledInputBase placeholder="What do you want"></StyledInputBase> 
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          justifyContent: "flex-end",
          bgcolor:"#0056D2",
          padding:"0px 8px",
          color:"#fff"
        }}
      >
          <SearchOutlined />
      </Box>
    </Search>
  );
}
