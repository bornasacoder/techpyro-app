import React, { useState } from "react";
import NavButton from "./navButton/NavButton";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
 
  color:theme.colors.alpha.white[100],
/*  [theme.breakpoints.down('md')]:{
    display:'block',
    left:'12px'
  },
  */
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
  [theme.breakpoints.down("md")]: {
    alignSelf:'center'
  },
}));
const NavRight = styled(Box)(({ theme }) => ({
  display: "flex",
   
  gap: "20px",
  // border:"2px solid black",
  alignItems: "center",
  
  [theme.breakpoints.down("sm")]: {
    gap: "15px",
  },
}));


const NavBarTop = styled(Box)(({ theme }) => ({
  // background: theme.header.background,
  background:"#0066A7",
  color: theme.colors.alpha.black[100],
  // height: "450px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection:"row",
  alignItems:"center",
  color: "#fff",
  width:'100%',
  padding:'0px 40px',
  
  [theme.breakpoints.down("md")]: {
   flexDirection:'column',
   alignItems:'flex-start',
   padding:'15px 10px',
   gap:'15px'
  },
}));

const NavBarBottom = styled(Box)(({ theme }) => ({
  // background: theme.header.background,
  background:"#fff",
  color: '#000',
  // height: "450px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection:"row",
  alignItems:"center",
  color: "#fff",
   width:'100%',
   padding:'10px 40px',
   [theme.breakpoints.down("md")]: {
      display:'none'
   },
}));

const NavBar = styled(AppBar)(({ theme }) => ({
  // background: theme.header.background,
  background:"#fff",
  color: theme.colors.alpha.black[100],
  // height: "450px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection:"column",
  alignItems:"center",
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
    <NavBarTop>
      {/* <StyleToolbar> */}
        <NavLeft>
         
          <Box  sx={{display:"flex", justifyContent:"center", alignItems:"center",gap:'20px'}} >
          <MenuButtons sx={{display:{xs:'none',md:'flex'}}} onClick={handleOpen}>
            <Menu/>
            </MenuButtons>
          <Typography variant="h1" fontSize="20px">
          Tea & Coffee
          </Typography>
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
          <MenuButtons  onClick={handleOpen}>
            <Menu sx={{display:{xs:'flex',md:'none'}}} />
            </MenuButtons>
          <Box sx={{display:'flex',gap:'10px',background:'#005899',padding:'10px'}}>
        <LocationOnIcon />
        <Typography >Sector 46, Gurugram</Typography>
        </Box>
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px',display:{xs:'none',md:'flex'}}}>
            <Box>
            <AccountCircleIcon sx={{fontSize:'30px'}} />
            </Box>
            <Box >
              <Typography sx={{fontSize:'10px'}}>MY ACCOUNT</Typography>
              <Typography sx={{fontSize:'8px',opacity:'.8'}}>Login | Signup</Typography>
            </Box>
         </Box> 
           </NavRight>
   
      {/* </StyleToolbar> */}
    </NavBarTop>

    <NavBarBottom>
      <Typography sx={{color:'black',fontSize:'12px'}}>Masala Chai</Typography>
      <Typography sx={{color:'black',fontSize:'12px'}}>Lemon Tea</Typography>
      <Typography sx={{color:'black',fontSize:'12px'}}>Darjeeling Tea</Typography>
      <Typography sx={{color:'black',fontSize:'12px'}}>Green Tea</Typography>
      <Typography sx={{color:'black',fontSize:'12px'}}>Assam Tea</Typography>
      <Typography sx={{color:'black',fontSize:'12px'}}>Hot Coffee</Typography>
      <Typography sx={{color:'black',fontSize:'12px'}}>Cold Coffee</Typography>
      <Typography sx={{color:'black',fontSize:'12px'}}>Filter Coffee</Typography>
      <Typography sx={{color:'black',fontSize:'12px'}}>South Indian Filter Kaapi</Typography>
      <Typography sx={{color:'black',fontSize:'12px'}}>Cappuccino</Typography>
      <Typography sx={{color:'black',fontSize:'12px'}}>Indian Spiced Coffee</Typography>
      <Typography sx={{color:'black',fontSize:'12px'}}>Instant Coffee</Typography>

    </NavBarBottom>

    </NavBar>
  );
}
