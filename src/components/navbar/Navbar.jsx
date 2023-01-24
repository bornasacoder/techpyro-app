import React, { useState } from "react";
import SearchBar from "components/navbar/searchbar/SearchBar";
import NavButton from "components/navbar/navButton/NavButton";
import {
  Box,
  Toolbar,
  styled,
  Badge,
  Drawer,
  IconButton,
} from "@mui/material";

import {
  Menu,
  Person,
  FavoriteBorder,
  ShoppingBagOutlined,
  Search,
} from "@mui/icons-material";
import MenuButtons from "./menuButtons/MenuButtons";
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  zIndex:"200",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
const NavLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  
}));
const NavRight = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "coloumn",
  justifyContent: "flex-start",
}));
const NavBar = styled(Box)(({ theme }) => ({
  background: "#00B0B5",
  color: theme.colors.alpha.white[100],
  display: "flex",
  justifyContent: "space-between",
  zIndex: "20",
  width:"100vw",
  alignItems:"center",
  position:"fixed",
  padding: "5px 35px",
  [theme.breakpoints.down("sm")]: {
  },
}));
const Image = styled("img")(({ theme }) => ({
  height: "60px",
  width: "170px",
  alignItems:'center',
  [theme.breakpoints.down('sm')]: {
         height:"40px",
         width:'100px'
          },
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
        <NavLeft> <Image src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/icons/logo_pantaloons.svg" /> 
          <NavButton />
        </NavLeft>

        <NavRight>
          <Box display="flex" gap={1} alignItems="center"justifyContent="center">
             <Search/>
            <Person/>
            <FavoriteBorder/>
            <Badge
              badgeContent={4}
            >
              <ShoppingBagOutlined
                sx={{
                 display:{md:'flex',sm:'flex',xs:"none"}
                }}
              />
            </Badge>
             <MenuButton  onClick={handleOpen} >
    <Menu sx={{fontSize:"30px",color:"#fff"}}/>
</MenuButton>
 <Drawer open={open} onClose={handleClose} sx={{ position: "absolute", }}>
          <MenuButtons sx={{marginTop:{sm:"20px",sx:"20px"}}} />
        </Drawer>
          </Box>
        </NavRight>
    </NavBar>
  );
}
