import React, { useState } from "react";
import SearchBar from "components/navbar/searchbar/SearchBar";
import NavButton from "components/navbar/navButton/NavButton";
// import NavImage from 'images/category/png-10.jpeg'
import {
  AppBar,
  Box,
  Toolbar,
  styled,
  IconButton,
  Button,
  Avatar,
} from "@mui/material";

import {
  ShoppingCart,
  Menu,
  Padding,
  GetApp,
  Title,
  ExpandMore,
  ExpandLess,
  Spa,
  FacebookOutlined,
  Twitter,
  Instagram,
  MenuBookRounded,
  Phone,
  MoreVert,
} from "@mui/icons-material";
// import MenuButtons from "./menuButtons/MenuButtons";
import MainCarousel from "components/carousel/MainCarousel";
import Content from "components/content/Content";

const StyleToolbar = styled(Toolbar)(({ theme }) => ({
  bgcolor: "#575B5C",
  display: "flex",
  justifyContent:"space-between",
  gap: 2,
}));
const MenuButtons = styled(IconButton)(({ theme }) => ({
  display: "none",
  zIndex:"200",
  color: theme.colors.alpha.white[100],
  [theme.breakpoints.down("md")]: {
    display: "block",
    right: "50px",

  },
}));

const NavLeft = styled(Box)(({ theme }) => ({
  // gap: "120px",
  display: "flex",
  flex:1,
  // border:"2px solid black",
  justifyContent:"space-between",
  // alignItems: "center",
  marginTop: "5px",
  [theme.breakpoints.down("sm")]: {
    height: "50px",
    marginLeft: "15px",
  },
  [theme.breakpoints.down("md")]: {
    height: "50px",
    marginLeft: "90px",
  },
}));
const NavRight = styled(Box)(({ theme }) => ({
  display: "flex",
flex:3,
// flexDirection:"end",
justifyContent:"flex-end",

  // gap: "120px",
  // border:"2px solid black",
  alignItems: "center",
  paddingRight: "20px",
  marginTop: "10px",

  [theme.breakpoints.down("sm")]: {
    height: "50px",
    gap: "15px",
  },
}));
const NavBar = styled(AppBar)(({ theme }) => ({
  background: "#ffffff",
  color: theme.colors.alpha.black[100],
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  paddingBottom: "15px",

}));

export default function Navbar() {
  return (
    <NavBar>
      <StyleToolbar>
      <NavLeft>
      <MenuButtons >
          <Menu   sx={{color:"black"}}/>
    </MenuButtons>
       </NavLeft>

      <NavRight>
      <NavButton />
      <Button
          sx={{
            border: "3px solid #000",
            background: "#ffffff",
            color: "#000",
            borderRadius: "0px",
              "&:hover": {
                backgroundColor: '#000',
                color:"#ffffff",},
                display:{md:"block",sm:"none",xs:"none"}
            
          }}
        >
          RESERVATION
        </Button>
        <Avatar lt="Remy Sharp" src="/images/category/logo.png" sx={{ width: 56, height: 56,display:{md:'none',sm:"block",xs:"block"},marginRight:{md:"10px",sm:"10px",xs:"20px"} }}/>
  
      </NavRight>
      
      </StyleToolbar>
   
    </NavBar>
  );
}
