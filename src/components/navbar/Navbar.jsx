import React, { useState } from "react";
import SearchBar from "components/navbar/searchbar/SearchBar";
import NavButton from "components/navbar/navButton/NavButton";
import {
  Box,
  styled,
  Drawer,
  IconButton,
} from "@mui/material";

import {
  Menu,
  Search,
} from "@mui/icons-material";
import MenuButtons from "./menuButtons/MenuButtons";
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  zIndex:"200",
  [theme.breakpoints.down("md")]: {
    display: "block",
    marginRight:"0px!important",
  },
}));
const NavLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  
}));
const NavRight = styled(Box)(({ theme }) => ({
  display:"flex", alignItems:"center",
 
}));
const NavBar = styled(Box)(({ theme }) => ({
  color: theme.colors.alpha.black[60],
  display: "flex",
  justifyContent: "space-between",
  zIndex: "20",
  alignItems:"center",
  padding: "15px 35px",
  backgroundColor:'#FFFFFF',
  position:"sticky",
  top:"0",
}));
const Image = styled("img")(({ theme }) => ({
  height: "30px",
  width: "120px",
  alignItems:'center',
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <NavBar>
        <NavLeft> <Image src="https://eduma.thimpress.com/wp-content/uploads/2022/06/logo-edu_black-1.png" /> 
        </NavLeft>
        <NavRight>
        <NavButton />
        <Search sx={{"&:hover":{
    color:"#FFB606"
  }}}/>
             <MenuButton  onClick={handleOpen} >
    <Menu sx={{fontSize:"30px"}}/>
</MenuButton>
 <Drawer open={open} onClose={handleClose} sx={{ position: "absolute", }}>
          <MenuButtons sx={{marginTop:{sm:"20px",sx:"20px"}}} />
        </Drawer>
        </NavRight>
    </NavBar>
  );
}
