import { Avatar, Box, Dialog, DialogContent, IconButton, Menu, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import SearchBar from './searchbar/SearchBar';
import Login from 'pages/auth/Login';
import Signup from 'pages/auth/Signup';
const Top = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "1px solid #CCCCCC",
    background:"#0C487C",
    
    // paddingBottom:"20px",
    // paddingTop:"20px",
    padding: "20px 20px",
    [theme.breakpoints.down("md")]:{
      padding:"20px 20px"
    },
    [theme.breakpoints.down("sm")]:{
      padding:"20px 20px",
      flexDirection:"column"
    }
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
  const MenuButton = styled(IconButton)(({ theme }) => ({
    display: "none",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      display: "block",
      right: "12px",
    },
  }));
export default function Navbar2() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
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
      
  return (
    <Top>
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
        <Box>
        <MenuButton onClick={handleOpen}>
          <Menu sx={{ margin: "25px 50px 0px " }} />
        </MenuButton>
          <Typography variant="h1" sx={{ fontSize: {md:"30px",sm:"30px",xs:"24px"},color:"#fff" }}>
            TECHPYRO
          </Typography>
        </Box>
        <br/>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            boxShadow: "2px gray",
            alignItems: "center",
            width:{xs:"100vw"}
          }}
        >
          <SearchBar />
        </Box>
        <Box sx={{display:"flex",gap:'40px',}}>
          <Typography
            sx={{ fontSize: "18px", color:"#fff", cursor: "pointer",display: { xs: "none", sm: "none", md: "block" }, }}
            
            onClick={handleClickOpen}
          >
            Login
          </Typography>
          <Typography
            sx={{ fontSize: "18px", color:"#fff", cursor: "pointer",display: { xs: "none", sm: "none", md: "block" }, }}
            onClick={handleSignupOpen}
           >
            Signup
          </Typography>
            </Box>
      </Top> 
  )
}
