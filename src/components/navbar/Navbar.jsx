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
  PersonOffOutlined,
  Person,
  PersonOutline,
  Favorite,
  FavoriteBorder,
  ShoppingBag,
  ShoppingBagOutlined,
  Diamond,
  Search,
  Settings,
  SettingsOutlined,
} from "@mui/icons-material";
// import MenuButtons from "./menuButtons/MenuButtons";
import MainCarousel from "components/carousel/MainCarousel";
import Content from "components/content/Content";
import MenuButtons from "./menuButtons/MenuButtons";

const StyleToolbar = styled(Toolbar)(({ theme }) => ({
  bgcolor: "#575B5C",
  display: "flex",
  justifyContent: "space-between",
  // gap: 2,
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
// const MenuButtons = styled(IconButton)(({ theme }) => ({
//   display: "flex",
//   // top:"50px",
//   // color:"black!important",
//   // zIndex:"200",
//   color: theme.colors.alpha.white[100],
//   [theme.breakpoints.down("md")]: {
//     display: "block",
//     right: "50px",
//     // left:'20px',
//   },
// }));
// const NavButton = styled(IconButton)(({ theme }) => ({
//   display: "flex",
//   // top:"50px",
//   // color:"black!important",
//   // zIndex:"200",
//   // color: theme.colors.alpha.white[100],
//   // [theme.breakpoints.down("md")]: {
//   //   display: "block",
//   //   right: "50px",
//   //   // left:'20px',
//   // },
// }));
// const Cart = styled(Box)`
//   flex: 1;
// `;

// const CartButton = styled(Box)`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  // top:"50px",
  // color:"black!important",
  zIndex:"200",
  // color: theme.colors.alpha.white[100],
  [theme.breakpoints.down("md")]: {
    display: "block",
    // right: "50px",
    // left:'120px',
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
  // background: theme.header.background,
  background: "#fff",
  color: theme.colors.alpha.black[100],
  display: "flex",
  justifyContent: "space-between",
  // gap: "50px",
  // flexDirection: "column",
  zIndex: "20",
  position:"fixed",
  width:"100vw",
  // height: "150vh",
  padding: "15px 15px",
  // color: "white",
  [theme.breakpoints.down("sm")]: {
    // height: "100vh",
  },
  // width: "100%",
  // color: "#fff",
  // zIndex: 200,
  // background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)
  // ),url(${"/images/category/header1.jpg"})
  //  center/cover no-repeat`,
}));
const Image = styled("img")(({ theme }) => ({
  height: "50px",
  width: "100px",
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  // const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    // <Box>
    <NavBar>
    
        <NavLeft>
          <Image src="https://cdn-icons-png.flaticon.com/512/145/145433.png?w=740&t=st=1686651356~exp=1686651956~hmac=0540223812434f360a8331dde4f89319a3e4627729a38adc0b3266cebc4b9d77" />
          <NavButton />
        
        </NavLeft>

        <NavRight>
          <Box display="flex" gap={1} alignItems="center">
            {/* <SearchBar/> */}
            <Search
              sx={{
                fontSize: "30px",
                "&:hover": {
                  color: "red",
                },
                display:{md:"flex", sm:"none", xs:"none"}
              }}
            />
            <Badge
              badgeContent={4}
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: 18,
                  height: 18,
                  minWidth: 15,
                  color: "#fff",
                  bgcolor: "#000",
                },
              }}
              overlap="circular"
            >
              <ShoppingBagOutlined
                sx={{
                  fontSize: "30px",
                  fontWeight: "200px",
                  "&:hover": {
                    color: "red",
                  },
                }}
              />
            </Badge>
            <Typography fontSize="20px">$245</Typography>
            <SettingsOutlined
              sx={{
                fontSize: "30px",
                fontWeight: "200px!important",
                "&:hover": {
                  color: "red",
                },
                display:{md:"flex", sm:"none", xs:"none"}
              }}
            />
             <MenuButton sx={{}} onClick={handleOpen} >
    <Menu sx={{fontSize:"30px"}}/>
</MenuButton>
 <Drawer open={open} onClose={handleClose} sx={{ position: "absolute", }}>
          <MenuButtons sx={{marginTop:{sm:"20px",sx:"20px"}}} />
        </Drawer>
    
          </Box>
         
        </NavRight>
     
      
    </NavBar>
    // </Box>
  );
}
