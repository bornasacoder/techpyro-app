import { Mail, Send } from "@mui/icons-material";
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
  borderRadius: "10px",
  width: "40vw",
  height: "40px",
  backgroundColor: "#FFFFFF",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width:"60vw"
  },
  [theme.breakpoints.down("sm")]: {
    width:"90vw"
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
      <Box sx={{ width: "50%", paddingLeft: "20px" }}>
        <StyledInputBase placeholder="Enter Your E-mail "  ></StyledInputBase> 
      </Box>
      <Box sx={{display:"flex",justifyContent:"center",rotate:"-45deg"}}>
        <Mail/>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          width: "30%",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FEBC1E",
            borderRadius:" 0px 10px 10px 0px"
          }}
        >
          SUBSCRIBE
        </Typography>
      </Box>
    </Search>
  );
}
