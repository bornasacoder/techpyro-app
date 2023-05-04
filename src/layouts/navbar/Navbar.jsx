import React, { useEffect, useState } from "react";
// import SearchBar from "components/navbar/searchbar/SearchBar";
// import NavButton from "components/navbar/navButton/NavButton";
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
  Grid,
  InputAdornment,
  OutlinedInput,
  FormControl,
  TextField,
  DialogTitle,
  CardContent,
  Card,
  DialogContent,
  Dialog,
  DialogActions,
  Avatar,
} from "@mui/material";

import {
  ShoppingCart,
  Menu,
  Padding,
  GetApp,
  Title,
  LocalActivity,
  Facebook,
  Google,
  VisibilityOff,
  Visibility,
  Apple,
} from "@mui/icons-material";
import MenuButtons from "./menuButtons/MenuButtons";
import MainCarousel from "components/carousel/MainCarousel";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "schema";
import { getCordinate } from "components/location/Location";
import Login from "pages/auth/Login";
import Signup from "pages/auth/Signup";
import SearchBar from "./searchbar/SearchBar";
import NavButton from "./navButton/NavButton";

const StyleToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.down("sm")]: {
    height: "100px",
    top: "-21px",
    justifyContent:"sapce-around"
  },
}));


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
  background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.5)
  ),url("https://images.pexels.com/photos/2954405/pexels-photo-2954405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") 
   center/cover no-repeat`,
  [theme.breakpoints.down("sm")]:{
    display:"flex",
    justifyContent:"space-between"
  }
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
 
  const handleCloseForm = () => {
    setOpener(false);
  };
  const handleSignup = () => {
    setSignupopen(false);
  };
  const [opener, setOpener] = React.useState(false);
  const [signupopen, setSignupopen] = React.useState(false);

  const handleClickOpen = () => {
  setOpener(true);
  };
  const handleSignupOpen = () => {
  setSignupopen(true);
  };

  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate()
  const handlehome = () =>{
    navigate("/")
  }

 

    const [address, setaddress] = useState([])
  const fetchData = async () =>{
    getCordinate(setaddress)
  }
  useEffect(() => {
   fetchData()
  }, []);
  return (
    <NavBar>
   <Dialog open={opener} onClose={handleCloseForm} >
        <DialogContent>
       <Login opener={opener} setOpener={setOpener} signupopen ={signupopen} setSignupopen={setSignupopen}/>
        </DialogContent>
      </Dialog>
   <Dialog open={signupopen} onClose={handleSignup} >
        <DialogContent>
       <Signup signupopen ={signupopen} setSignupopen={setSignupopen} opener={opener} setOpener={setOpener}/>
        </DialogContent>
      </Dialog>
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
        <MenuItem value="">{address&&address.length!==0 && address[0].properties.county}</MenuItem>
        </Select>
        <Drawer open={open} onClose={handleClose} sx={{ position: "absolute", }}>
          <MenuButtons sx={{marginTop:{sm:"20px",sx:"20px"}}} />
        </Drawer>
        <NavLeft>
           <Avatar src="/images/category/logo2.png" sx={{height:"48px",width:"58px",borderRadius:"0px"}}/>
          <NavButton />
        </NavLeft>
        <Box display="flex">
          <NavRight>
            <Typography
              component="h1"
              sx={{
                fontSize: { md: "18px", xs: "15px" },
                display: { xs: "none", sm: "none", md: "block" },
                cursor:"pointer",
              }}
              onClick={handleSignupOpen}
            >
              Sign up
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontSize: { md: "18px", xs: "15px" },
                display: { xs: "none", sm: "none", md: "block" },
                cursor:"pointer",
              }}
              onClick={handleClickOpen}
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
        <Typography sx={{ fontSize: { md: "60px", sm: "40px", xs: "35px" },fontFamily:"cursive",color:"#CFD1D1" }}>
        Shopping Mall
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
        <Typography sx={{ fontSize: { md: "26px", sm: "20px", xs: "15px" },fontFamily:"cursive" }}>
          Discover the best Shopping Mall  in {address&&address.length!==0 && address[0].properties.county}
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
