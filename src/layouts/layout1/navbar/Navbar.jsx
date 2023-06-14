import React, { useState } from "react";
import NavButton from "./navButton/NavButton";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
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
 
  color:theme.colors.alpha.black[100],
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
  justifyContent: "flex-start!important",
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
  background:"#ffff",
  color: theme.colors.alpha.black[100],
  // height: "450px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection:"row",
 // alignItems:"center",
  color: "#000",
  width:'100%',
  padding:'0px 20px',
  
  [theme.breakpoints.down("md")]: {
   flexDirection:'row',
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
  flexDirection:"row",
  alignItems:"center",
  gap:'0px',
  color: "#fff",
   width:'100%',
   boxShadow:'0 1px 5px rgba(104,104,104,0.8)',
   padding:'0px 0px 0px 20px',
   [theme.breakpoints.down("md")]: {
      display:'flex'
   },
}));

const NavBar = styled(Box)(({ theme }) => ({
  // background: theme.header.background,
  background:"#fff",
  zIndex:'1000',
  color: theme.colors.alpha.black[100],
  // height: "450px",
  width:'100%',
  display: "flex",
  justifyContent: "flex-start",
  flexDirection:"column",
  alignItems:"flex-start",
  position:'fixed',
  width:'70vw',
  [theme.breakpoints.down("md")]: {
    width:'100vw'
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
         
          <Box  sx={{display:"flex", justifyContent:"center", alignItems:"center",gap:'5px'}} >
          <MenuButtons sx={{display:{xs:'flex',md:'flex'}}} onClick={handleOpen}>
            <LocalPizzaIcon/>
            </MenuButtons>
          <Typography variant="h1" fontSize="20px">
            Bakery
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
            <ShoppingBasketIcon sx={{display:{xs:'flex',md:'none'}}} />
            </MenuButtons>
          <Box sx={{display:{xs:'none',md:'flex'},gap:'10px',background:'#fff',padding:'10px'}}>
        <LocationOnIcon sx={{opacity:'0.5'}} />
        <Typography >Bhairav Mandir coloney,haridwar</Typography>
        </Box>
          <Box sx={{alignItems:'center',justifyContent:'center',gap:'10px',display:{xs:'none',md:'flex'}}}>
            <Box>
            <AccountCircleIcon sx={{fontSize:'30px',opacity:'0.5'}} />
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
      <Typography sx={{fontSize:'16px',fontWeight:'600',background:'#DD3739',color:'#ff',border:'.1px solid rgba(0,0,0,0.3)',borderTop:'0',borderBottom:'0',padding:{xs:'8px 10px',md:'15px 20px'}}}>Pizza</Typography>
      <Typography sx={{color:'black',fontSize:'16px',fontWeight:'600',border:'.1px solid rgba(0,0,0,0.3)',borderTop:'0',borderBottom:'0',borderLeft:'0',padding:{xs:'8px 10px',md:'15px 20px'}}}>Burger</Typography>
      <Typography sx={{color:'black',fontSize:'16px',fontWeight:'600',border:'.1px solid rgba(0,0,0,0.3)',borderTop:'0',borderBottom:'0',borderLeft:'0',padding:{xs:'8px 10px',md:'15px 20px'}}}>Bread</Typography>
      <Typography sx={{color:'black',fontSize:'16px',fontWeight:'600',border:'.1px solid rgba(0,0,0,0.3)',borderTop:'0',borderBottom:'0',borderLeft:'0',padding:{xs:'8px 10px',md:'15px 20px'}}}>Cakes</Typography>
      <Typography sx={{color:'black',fontSize:'16px',fontWeight:'600',border:'.1px solid rgba(0,0,0,0.3)',borderTop:'0',borderBottom:'0',borderLeft:'0',padding:{xs:'8px 10px',md:'15px 20px'}}}>Pastries</Typography>
      <Typography sx={{color:'black',fontSize:'16px',fontWeight:'600',border:'.1px solid rgba(0,0,0,0.3)',borderTop:'0',borderBottom:'0',borderLeft:'0',padding:{xs:'8px 10px',md:'15px 20px'}}}>Drinks</Typography>


    </NavBarBottom>

    </NavBar>
  );
}
