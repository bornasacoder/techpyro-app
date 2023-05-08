import React, { useState } from "react";
import NavButton from "./navButton/NavButton";
import Siderbar from '../sideBar/Siderbar';
// import NavImage from 'images/category/png-10.jpeg'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  styled,
  Badge,
  Drawer,
  IconButton,
  Select,
  MenuItem,
  Button,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Collapse,
  List,
} from "@mui/material";

import {
  ShoppingCart,
  Menu,
  Padding,
  GetApp,
  Title,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
// import MenuButtons from "./menuButtons/MenuButtons";

const StyleToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems:"center",
  // position: "relative",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "transparent",
  color: "#fff",

  [theme.breakpoints.down("sm")]: {
    height: "100px",
    top: "-21px",
  },
}));
const MenuButtons = styled(IconButton)(({theme})=>({
  display:'none',
  color:theme.colors.alpha.white[100],
  [theme.breakpoints.down('md')]:{
    display:'block',
    left:'12px'
  },
}));
// const Cart = styled(Box)`
//   flex: 1;
// `;

// const CartButton = styled(Box)`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;
const NavLeft = styled(Box)(({ theme }) => ({
  gap: "60px",
  display: "flex",
  // border:"2px solid black",
  justifyContent: "flex-start",
  alignItems: "center",
  marginLeft: "40px",
  marginTop: "20px",
  [theme.breakpoints.down("sm")]: {
    height: "50px",
  },
}));
const NavRight = styled(Box)(({ theme }) => ({
  display: "flex",

  gap: "20px",
  // border:"2px solid black",
  alignItems: "center",
  marginRight: "40px",
  marginTop: "20px",

  [theme.breakpoints.down("sm")]: {
    height: "50px",
    gap: "15px",
  },
}));


const NavBar = styled(AppBar)(({ theme }) => ({
  // background: theme.header.background,
  background:"rgba(0,0,0,0.9)",
  color: theme.colors.alpha.black[100],
  // height: "450px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection:"row",
  alignItems:"center",

  // width: "100%",
  color: "#fff",
  zIndex:2
  // position: "static",
  // background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)
  // ),url(${"/images/category/header.jpg"})
  //  center/cover no-repeat`,
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [location, setLocation] = useState("");
  const updatevalue = (e, vel) => {
    setLocation(e.target.value);
  };
  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };
  return (
    <NavBar>
      {/* <StyleToolbar> */}
        <NavLeft>
         
          <Box gap={5} sx={{display:"flex", justifyContent:"center", alignItems:"center"}} >
          <Typography variant="h1" fontSize="26px">
          Clothes
          </Typography>
          <NavButton/>
          </Box>
           <Drawer open={open} onClose={handleClose} sx={{ position: "absolute", }}>
          <Siderbar />
        </Drawer>
          
          {/* <List
      sx={{ width: '100%', maxWidth: 100,color:"#000", marginTop:'20px'}}
     >
      <ListItemButton onClick={handleClick}>
        <ListItemText>Product</ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" color="#000">
            <ListItemText></ListItemText>
            <ListItemText>Features</ListItemText>
            <ListItemText>Features</ListItemText>
            <ListItemText>Features</ListItemText>
            <ListItemText>Features</ListItemText>
        </List>
      </Collapse>
    </List> */}
          {/* <Box sx={{ display: { xs: "none", md: "flex" }, gap: "2" }}>
            <GetApp fontSize="medium" />
            <Typography component="h1">Get the App</Typography>
          </Box> */}
          {/* <NavButton /> */}
        </NavLeft>
       
          <NavRight>
          
            <Button
              variant="contained"
              sx={{ color: "#AC78F6", bgcolor: "white",
              padding: "0px 10px",display:{xs:"none",md:"block",sm:"block"} }}
            >
              Sign up
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                bgcolor: "transparent",
                border: "1px solid white",
               
                padding: "0px 10px",display:{xs:"none",md:"block",sm:"block"}
              }}
            >
              Log in
            </Button>
            <MenuButtons onClick={handleOpen}>
            <Menu/>
            </MenuButtons>
            </NavRight>
   
      {/* </StyleToolbar> */}
    </NavBar>
  );
}
