import React, { useState } from "react";
import SearchBar from "../navbar/searchbar/SearchBar";
import NavButton from "../navbar/navButton/NavButton";
import {
  Box,
  styled,
  Drawer,
  IconButton,
  alpha,
  Modal,
  InputBase,
} from "@mui/material";

import {
  Close,
  Menu,
  Search,
  SearchRounded,
} from "@mui/icons-material";
import MenuButtons from "../navbar/menuButtons/MenuButtons";
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  zIndex:"200",
  [theme.breakpoints.down("md")]: {
    display: "block",
    marginRight:"0px!important",
  },
}));
const Searc = styled('div')(({ theme }) => ({
  position: 'relative',
  // borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  width:"60% !important",
  height:"12vh!important",
  display:"flex",
  alignItems:"center",
  '&:hover': {
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  [theme.breakpoints.down('sm')]: {
    // marginLeft: theme.spacing(3),
    width: '80% !important',
    height:"8vh !important",
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  width:"5vw",
  backgroundColor:"#FFB606",
  position: 'absolute',
  pointerEvents: 'none',
  right:"0px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width:"15vw"
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%!important',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const NavLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  
}));
const NavRight = styled(Box)(({ theme }) => ({
  display:"flex", alignItems:"center",
 
}));
const NavBar = styled(Box)(({ theme }) => ({
  color: theme.colors.alpha.black[60],
  display: "flex",
  justifyContent: "space-between",
  zIndex: "20",
  alignItems:"center",
  padding: "15px 35px",
  backgroundColor:'#FFFFFF',
  position:"sticky",
  top:"0",
}));
const Image = styled("img")(({ theme }) => ({
  height: "30px",
  width: "120px",
  alignItems:'center',
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [openar, setOpenar] = React.useState(false);
  const handleOpenmodle = () => setOpenar(true);
  const handleClosemodel = () => setOpenar(false);
  
  return (
    <NavBar>
        <NavLeft> <Image src="https://eduma.thimpress.com/wp-content/uploads/2022/06/logo-edu_black-1.png" /> 
        </NavLeft>
        <NavRight>
        <NavButton />
        <Search sx={{"&:hover":{
    color:"#FFB606"
  }}} onClick={handleOpenmodle}/>
   <Modal
        keepMounted
        open={openar}
        onClose={handleClosemodel}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",position:"relative"}}>
          <Close sx={{position:"absolute",top:"20px",right:"30px",fontSize:"30px",color:"#FFB606"}} onClick={handleClosemodel}/>
        <Searc>
            <SearchIconWrapper>
              <SearchRounded />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Searc>
          </Box>
      </Modal>
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
