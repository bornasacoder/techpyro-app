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
  // display: "flex",
  // height:"100px",
  // justifyContent: "space-between",
  // flexDirection:"column",
  // alignItems: "center",
  // position:"sticky",
  // overflow: "hidden",
  // position: "relative",
  // backgroundColor: "transparent",
  // color: "#fff",
// zIndex:"200",
  // [theme.breakpoints.down("sm")]: {
  //   height: "100px",
  //   top: "-21px",
  // },
}));
const MenuButtons = styled(IconButton)(({ theme }) => ({
  display: "none",
  // top:"50px",
  // color:"black!important",
  zIndex:"200",
  color: theme.colors.alpha.white[100],
  [theme.breakpoints.down("md")]: {
    display: "block",
    right: "50px",
    // left:'20px',

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
  // background: theme.header.background,
  background: "#ffffff",
  color: theme.colors.alpha.black[100],
  // position:"sticky",
  // height: "450px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  paddingBottom: "15px",

  // width: "100%",
  // color: "#fff",
  // zIndex: 200,
  // position: "static",
  // background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)
  // ),url(${"/images/category/header.jpg"})
  //  center/cover no-repeat`,
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
 

  // const [open, setOpen] = React.useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const [location, setLocation] = useState("");
  // const updatevalue = (e, vel) => {
  //   setLocation(e.target.value);
  // };

  const handleClick = () => {
    setOpen(open);
  };
  return (
    // <Box>
    <NavBar>
      <StyleToolbar>
      <NavLeft>
      <MenuButtons >
          <Menu   sx={{color:"black"}}/>
    </MenuButtons>
     
     
      
        {/* <Box sx={{ display: "flex", justifyContent: "center",fontSize:{md:"26px",sm:"22px",xs:"21px"} }}>
          <Box  marginRight="5px" color="#7AA93C">
            <Spa/>
          </Box>
          <Typography
            variant="span"
            sx={{  fontWeight: "400px" }}
          >
            Tech
          </Typography>
          <Typography
            variant="span"
            sx={{ fontWeight: "300px", color: "#7AA93C" }}
          >
            Pyro
          </Typography>
         
        </Box> */}
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
                color:"#ffffff"},
                display:{md:"block",sm:"none",xs:"none"}
            
          }}
        >
          RESERVATION
        </Button>
        <Avatar lt="Remy Sharp" src="/images/category/logo.png" sx={{ width: 56, height: 56,display:{md:'none',sm:"block",xs:"block"},marginRight:{md:"10px",sm:"10px",xs:"20px"} }}/>
       {/* <Button
          variant="contained"
          sx={{
            color: "#fffff",
            bgcolor: "#7AA93C",
            padding: "5px 20px",
            // display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          Buy now
        </Button> */}
        {/* <Button
              variant="contained"
              sx={{
                color: "#fff",
                bgcolor: "transparent",
                border: "1px solid white",
               
                padding: "0px 10px",display:{xs:"none",md:"block",sm:"block"}
              }}
            >
              Log in
            </Button> */}
       
      </NavRight>
      
      </StyleToolbar>
   
    </NavBar>
    // </Box>
  );
}
