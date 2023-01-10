import React, { useState } from "react";
import SearchBar from "components/navbar/searchbar/SearchBar";
import NavButton from "components/navbar/navButton/NavButton";
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
import MenuButtons from "./menuButtons/MenuButtons";
import MainCarousel from "components/carousel/MainCarousel";

const StyleToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems:"center",
  // position: "relative",
  overflow: "hidden",
  position: "sticky",
  backgroundColor: "#AC7AF7",
  color: "#fff",

  [theme.breakpoints.down("sm")]: {
    height: "100px",
    top: "-21px",
  },
}));

const Cart = styled(Box)`
  flex: 1;
`;

const CartButton = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const NavLeft = styled(Box)(({ theme }) => ({
  flex: 2,
  gap: "60px",
  display: "flex",
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
  flex: 3,
  gap: "20px",
  alignItems: "center",
  marginRight: "40px",
  marginTop: "20px",

  [theme.breakpoints.down("sm")]: {
    height: "50px",
    gap: "15px",
  },
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    display: "block",
    right: "12px",
  },
}));

const NavBar = styled(AppBar)(({ theme }) => ({
  background: theme.header.background,
  color: theme.colors.alpha.black[100],
  // height: "450px",
  position: "sticky",
  width: "100%",
  color: "#fff",
  zIndex:2
  // position: "static",
  // background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)
  // ),url(${"/images/category/header.jpg"})
  //  center/cover no-repeat`,
}));

export default function Navbar() {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };
  const [location, setLocation] = useState("");
  const updatevalue = (e, vel) => {
    setLocation(e.target.value);
  };
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <NavBar>
      <StyleToolbar>
        <NavLeft>
          {/* <MenuButton/> */}
          <Box gap={2}>
          <Typography variant="h1" color="#000">
            Onfleet
          </Typography>
          </Box>
          <Box>
          <NavButton/>
          </Box>
           {/* <Drawer open={open} onClose={handleClose} sx={{ position: "absolute", }}>
          <MenuButtons sx={{marginTop:{sm:"20px",sx:"20px"}}} />
        </Drawer> */}
          
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
        <Box display="flex">
          <NavRight>
            <Button
              variant="contained"
              sx={{ color: "#AC78F6", bgcolor: "white",
              padding: "0px 10px", }}
            >
              Sign up
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                bgcolor: "transparent",
                border: "1px solid white",
               
                padding: "0px 10px",
              }}
            >
              Log in
            </Button>
          </NavRight>
        </Box>
      </StyleToolbar>
    </NavBar>
  );
}
