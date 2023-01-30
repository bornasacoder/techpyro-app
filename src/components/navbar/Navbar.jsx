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
  Typography,
} from "@mui/material";

import {
  Menu,
  Person,
  FavoriteBorder,
  ShoppingBagOutlined,
  Search,
  Flight,
  FlightOutlined,
  FlightTwoTone,
  ShoppingCart,
  FormatAlignJustifyTwoTone,
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
  [theme.breakpoints.down("md")]: {
padding:"0px"
  },
  
}));
const NavRight = styled(Box)(({ theme }) => ({
  // display: "flex",
  // flexDirection: "coloumn",
  // justifyContent: "flex-start",
  display:"flex", gap:"10px", alignItems:"center",
  [theme.breakpoints.down("md")]: {
  //  display:"none"
  },
  [theme.breakpoints.down("sm")]: {
    width:"100%",
    justifyContent: "space-between",
    paddingTop:"20px",
  },
}));
const NavBar = styled(Box)(({ theme }) => ({
  color: theme.colors.alpha.black[60],
  display: "flex",
  justifyContent: "space-between",
  zIndex: "20",
  alignItems:"center",
  padding: "5px 35px",
  backgroundColor:'#FFFFFF',
  [theme.breakpoints.down("md")]: {
  padding: "5px 10px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection:"column",
  },
}));
const Image = styled("img")(({ theme }) => ({
  height: "130px",
  width: "150px",
  alignItems:'center',
  [theme.breakpoints.down('sm')]: {
         height:"130px",
         width:'150px'
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
        <NavLeft> <Image src="/images/category/techpyro.jpeg" /> 
          {/* <NavButton /> */}
        </NavLeft>
<Box sx={{ width:{md:'50%',xs:'98vw'},color:"#A7A7A7",}}>
<SearchBar/>
</Box>
        <NavRight>
          <Box sx={{display:{md:"flex",sm:"none",xs:"flex"}}}>
           <FlightTwoTone sx={{fontSize:"40px",color:"#686868"}}/>
           <Typography>product <br/> Trace</Typography>
           </Box>
           <Box sx={{display:{md:"flex",sm:"none",xs:"flex"}}}>
           <ShoppingCart sx={{fontSize:"40px",color:"#686868"}}/>
           <Typography>My Cart <br/> 02 item</Typography>
           </Box>
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
