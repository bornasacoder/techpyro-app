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
      {/* <Box display="flex" flexDirection="column"sx={{gap:{md:'5px',sm:'20px',xs:'60px'}}}>
        <Content />
        
        {/* <MenuButtons/> */}
      {/* <MenuButtons >
          <Menu   sx={{color:"white"}}/>
    </MenuButtons> */}

      {/* </Box>  */}
        <NavLeft>
          <Image src="https://img.freepik.com/free-vector/coffee-shop-badge-vintage-style_1176-95.jpg?size=626&ext=jpg" />
          <NavButton />
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
            {/* <PersonOutline sx={{fontSize:"30px"}}/>
<FavoriteBorder sx={{fontSize:"30px",display:{md:"block",sm:"none",xs:"none"}}}/> */}
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
