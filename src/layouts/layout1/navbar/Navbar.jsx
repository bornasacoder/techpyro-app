import React, { useState } from "react";
import NavButton from "./navButton/NavButton";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Siderbar from '../sideBar/Siderbar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
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
import zIndex from "@mui/material/styles/zIndex";
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
 
  color:'#fff',
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


const NavBar = styled(Box)(({ theme }) => ({
  // background: theme.header.background,
  background:"#000",
  color: theme.colors.alpha.black[100],
  // height: "450px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection:"row",
 // alignItems:"center",
  color: "#fff",
  width:'100%',
  padding:'20px 20px',
  position:'fixed',
  zIndex:'1000',
  [theme.breakpoints.down("md")]: {
   flexDirection:'row',
   alignItems:'flex-start',
   padding:'15px 10px',
   gap:'15px'
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
   
      {/* <StyleToolbar> */}
        <NavLeft>
         
         <Box sx={{display:'flex',gap:'40px',alignItems:'center',justifyContent:'center'}}>

          <Box  sx={{display:"flex", justifyContent:"center", alignItems:"center",gap:'3px'}} >
          <MenuButtons sx={{display:{xs:'flex',md:'flex'}}} onClick={handleOpen}>
            <RestaurantIcon sx={{color:'#fff'}}/>
            </MenuButtons>
          <Typography variant="h1" fontSize="20px">
          Bakery
          </Typography>
          </Box>

          <Box sx={{display:{xs:'none',md:'flex'},alignItems:'center',justifyContent:'center',gap:'25px'}}>
            <Typography sx={{fontWeight:'400',fontSize:'16px'}}>Burger</Typography>
            <Typography sx={{fontWeight:'400',fontSize:'16px'}}>Pizza</Typography>
            <Typography sx={{fontWeight:'400',fontSize:'16px'}}>Cake</Typography>
            <Typography sx={{fontWeight:'400',fontSize:'16px'}}>Noodles</Typography>
            <Typography sx={{fontWeight:'400',fontSize:'16px'}}>Coke</Typography>
            <Typography sx={{fontWeight:'400',fontSize:'16px'}}>Pepsi</Typography>

          </Box>

          </Box>
           <Drawer open={open} onClose={handleClose} sx={{ position: "absolute", }}>
          <Siderbar />
        </Drawer>
        </NavLeft>
       
          <NavRight>
         
          <Box sx={{display:{xs:'none',md:'flex'},gap:'10px',background:'black',boxShadow:'0 1px 5px rgba(104,104,104,0.8)',padding:'5px 10px'}}>
        <SearchIcon sx={{fontSize:'30px'}} />
        <input type='text' style={{background:'#000',height:'30px',color:'#fff',border:'none',fontSize:'16px',outline:'none'}} placeholder="Search Taz.com"/>
        </Box>
          
          <FavoriteBorderIcon />
          <ShoppingBasketIcon  />
          <PersonOutlineIcon />
          <MenuButtons  onClick={handleOpen}>
            <Menu sx={{display:{xs:'flex',md:'none'}}} />
            </MenuButtons>
           </NavRight>
   
      {/* </StyleToolbar> */}
   
   

    </NavBar>
  );
}
