import React, { useState } from "react";
import SearchBar from "../../components/navbar/searchbar/SearchBar";
import NavButton from "../../components/navbar/navButton/NavButton";
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
} from "@mui/icons-material";
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
// import MenuButtons from "./menuButtons/MenuButtons";
import MainCarousel from "../../components/carousel/MainCarousel";
import Content from "../../components/content/Content";
import MenuButtons from "./menuButtons/MenuButtons";
import StorefrontIcon from '@mui/icons-material/Storefront';

const StyleToolbar = styled(Toolbar)(({ theme }) => ({
  bgcolor: "#575B5C",
  display: "flex",
  justifyContent: "space-between",
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
const NavLeft = styled(Box)(({ theme }) => ({
  // gap: "120px",
  display: "flex",
  flex: 2,
  marginLeft:"30px",
  // border:"2px solid black",
  // justifyContent: "space-between",
  // alignItems: "center",
  // marginTop: "5px",
  [theme.breakpoints.down("md")]: {
    justifyContent:'center',
    flexDirection:'row-reverse'
  },
  [theme.breakpoints.down("sm")]: {
    justifyContent:"center",
    flexDirection:'row-reverse'
  },
 
}));
const NavRight = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection:"coloumn",
  justifyContent:"flex-start",
  flex: 2,
  // flexDirection:"end",
  // justifyContent:"flex-end",

  // gap: "120px",
  // border:"2px solid black",
  // alignItems: "center",
  // paddingRight: "20px",
  // marginTop: "10px",
  [theme.breakpoints.down("md")]: {
    justifyContent:"flex-end",
    marginRight:"20px"
  },
  [theme.breakpoints.down("sm")]: {
    justifyContent:"flex-end",
    marginRight:"20px"
  },
}));
const NavBar = styled(Box)(({ theme }) => ({
  // background: theme.header.background,
  background: "#fff",
  color: theme.colors.alpha.black[100],
  display: "flex",
  justifyContent:"space-between",
  gap: "50px",
  flexDirection: "column",
  zIndex:"20",
  // height: "150vh",
  paddingBottom: "15px",
  // color: "white",
  [theme.breakpoints.down("sm")]: {
    // height: "100vh",
  },
  // width: "100%",
  // color: "#fff",
  // zIndex: 200,
  // position: "static",
  // background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)
  // ),url(${"/images/category/header1.jpg"})
  //  center/cover no-repeat`,
}));

export default function Navbar() {
  
  // const [location, setLocation] = useState("");
  // const updatevalue = (e, vel) => {
  //   setLocation(e.target.value);
  // };

  // const handleClick = () => {
  //   setOpen(open);
  // };
  return (
    // <Box>
    <NavBar >
      {/* <Box display="flex" flexDirection="column"sx={{gap:{md:'5px',sm:'20px',xs:'60px'}}}>
        <Content />
        
        {/* <MenuButtons/> */}
          {/* <MenuButtons >
          <Menu   sx={{color:"white"}}/>
    </MenuButtons> */}

      {/* </Box>  */}
      

       <StyleToolbar>
        <NavLeft>
        {/* <StorefrontIcon sx={{fontSize:"60px",color:'#60bcba'}}/> */}
        <Box sx={{width:80,height:80}}><img style={{width:'100%',height:'100%'}} src="/images/category/logo.jpg"/></Box>
        <NavButton/>
          {/* <MenuButtons >
          <Menu   sx={{color:"black"}}/>
    </MenuButtons>

          <Box sx={{ display: "flex", justifyContent: "center",fontSize:{md:"26px",sm:"22px",xs:"21px"} }}>
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
         
        </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "2" }}>
            <GetApp fontSize="medium" />
            <Typography component="h1">Get the App</Typography>
          </Box> 
          <NavButton /> */}
        </NavLeft>

        <NavRight>
      <Box>   
         <Box sx={{display:{md:"flex",sm:"none",xs:"none"}}}>
         <Button
          sx={{
            color: "#000",
            border:"none",
            fontSize:"11px"
          }}
        >
          blog
        </Button>
         <Button
          sx={{
            color: "#000",
            border:"none",
            fontSize:"11px"
          }}
        >
          help
        </Button>
         <Button
          sx={{
            color: "#000",
            border:"none",
            fontSize:"11px"
          }}
        >
          exchanges&returns
        </Button>
         <Button
          sx={{
            color: "#000",
            border:"none",
            fontSize:"11px"
          }}
        >
         order tracker
        </Button>
         <Button
          sx={{
            color: "#000",
            border:"none",
            fontSize:"11px"
          }}
        >
          news latter
        </Button>
         <Button
          sx={{
            color: "#000",
            border:"none",
            fontSize:"11px"
          }}
        >
          login
        </Button>
         <Button
          sx={{
            color: "#000",
            border:"none",
            fontSize:"11px"
          }}
        >
          signup
        </Button>
         </Box>
         <Box display="flex" justifyContent="flex-end" gap={1}>
<SearchBar/>
<PersonOutline sx={{fontSize:"30px"}}/>
<FavoriteBorder sx={{fontSize:"30px",display:{md:"block",sm:"none",xs:"none"}}}/>
<Search sx={{fontSize:"30px",display:{md:"none",sm:"block",xs:"block"}}}/>
<ShoppingBagOutlined sx={{fontSize:"30px"}}/>
         </Box>
     </Box> 
          {/* <Avatar
            lt="Remy Sharp"
            src="/images/category/logo.png"
            sx={{
              width: 56,
              height: 56,
              display: { md: "none", sm: "block", xs: "block" },
              marginRight: { md: "10px", sm: "10px", xs: "20px" },
            }}
          />
         <Button
          variant="contained"
          sx={{
            color: "#fffff",
            bgcolor: "#7AA93C",
            padding: "5px 20px",
            display: { xs: "none", md: "block", sm: "block" },
          }}
        >
          Buy now
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
            </Button>  */}
        </NavRight>
      </StyleToolbar> 
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Typography  sx={{ fontSize: {md:"68px",sm:"50px",xs:"30px"}, fontFamily: "Dancing Script",fontWeight:"200px" }}>
          You do not need a silver fork to eat <br /> good food
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button
            sx={{
              // border: "3px solid #000",
              background: "red",
              color: "white",
              borderRadius: "0px",
              "&:hover": {
                backgroundColor: "#000",
                color: "#ffffff",
              },
              // display: { md: "block", sm: "none", xs: "none" },
            }}
          >
            READ MORE
          </Button>
        </Box>
      </Box> */}
    </NavBar>
    // </Box>
  );
}
