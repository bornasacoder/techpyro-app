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
} from "@mui/material";

import {
  ShoppingCart,
  Menu,
  Padding,
  GetApp,
  Title,
} from "@mui/icons-material";
import MenuButtons from "./menuButtons/MenuButtons";
import MainCarousel from "components/carousel/MainCarousel";

const StyleToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  overflow: "hidden",

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
  flex: "3",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginLeft: "100px",
  marginTop: "20px",
  [theme.breakpoints.down("sm")]: {
    height: "50px",
  },
}));
const NavRight = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "30px",
  marginRight: "100px",
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
  height: "450px",
  width: "100%",
  color: "#fff",
  position: "static",
  background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)
  ),url(${"/images/category/header.jpg"}) 
   center/cover no-repeat`,
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
  return (
    <NavBar>
      <StyleToolbar>
        <MenuButton onClick={handleOpen}>
          <Menu sx={{ margin: "25px 50px 0px " }} />
        </MenuButton>
        <Select
          value={location}
          displayEmpty
          onChange={updatevalue}
          sx={{
            "& fieldset": { border: "none" },
            color: "#fff",
            display: { md: "none" },
            fontSize: "15px",
            marginTop: { xs: "20px", sm: "20px " },
          }}
        >
          <MenuItem value="">Select location</MenuItem>
          <MenuItem value={1}>Haridwar</MenuItem>
          <MenuItem value={2}>Delhi</MenuItem>
          <MenuItem value={3}>Punjab</MenuItem>
          <MenuItem value={4}>Bihar</MenuItem>
        </Select>
        <Drawer open={open} onClose={handleClose} sx={{ position: "absolute", }}>
          <MenuButtons sx={{marginTop:{sm:"20px",sx:"20px"}}} />
        </Drawer>
        <NavLeft>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "2" }}>
            <GetApp fontSize="medium" />
            <Typography component="h1">Get the App</Typography>
          </Box>
          <NavButton />
        </NavLeft>
        <Box display="flex">
          <NavRight>
            <Typography
              component="h1"
              style={{ fontSize: "18px" }}
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                fontSize: { xs: "5px", sm: "none" },
              }}
            >
              Investor Relation
            </Typography>
            <Typography
              component="h1"
              style={{ fontSize: "18px" }}
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              Add Restaurant
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontSize: { md: "18px", xs: "15px" },
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              Sign up
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontSize: { md: "18px", xs: "15px" },
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              Log in
            </Typography>
          </NavRight>
        </Box>
      </StyleToolbar>

      <Box
        style={{
          height: "100px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <Typography sx={{ fontSize: { md: "50px", sm: "40px", xs: "35px" } }}>
          SweetCart
        </Typography>
      </Box>
      <Box
        style={{
          height: "100px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <Typography sx={{ fontSize: { md: "26px", sm: "20px", xs: "15px" } }}>
          Discover the best food & drinks in Haridwar
        </Typography>
      </Box>
      <Box
        style={{
          height: "110px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
          marginBottom: "100px",
        }}
      >
        <SearchBar flex={3} />
      </Box>
    </NavBar>
  );
}
