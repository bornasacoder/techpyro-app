import { Menu, Padding, SettingsOutlined } from '@mui/icons-material';
import { Drawer, IconButton, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import NavButton from '../NavButton';
import MenuButtons from './MenuButtons';
// import NavButton from '../NavButton';
const StyleToolbar = styled(Box)(({theme})=>({
    position:"sticky",
    top:"0px",
    backgroundColor:"#FFFFFF",
    zIndex:"100"
}))
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  zIndex:"200",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent:'center',
    marginRight:"0px!important",
  
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <StyleToolbar>
      <Box sx={{position:"relative"}}>
<Box sx={{display:"flex",justifyContent:"space-between",padding:"18px 58px"}}>
    <Box sx={{display:"flex",color:"#858585",alignItems:"center"}}>
    <Typography sx={{fontSize:"10px"}}>CALL US:</Typography>
    <Typography sx={{fontSize:"10px"}}>+91 9999999999</Typography>
    </Box>
    <Typography sx={{display:"flex",fontSize:"10px",color:"#858585",}}>EN  ES  RT  RU</Typography>
</Box>
<Box sx={{display:"flex",justifyContent:"center"}}>
  <Link  href='/' style={{textDecoration:"none",color:"#000"}} >
    <Typography sx={{fontSize:{md:"30px",sm:"28px",xs:"20px"},listStyle:"none"}}>BOOK YOUR TRAVEL PLACE</Typography>
    </Link>
</Box>
<br/>
<Box sx={{ backgroundColor:"#EEEEEE",display:"flex"}}>
<MenuButton onClick={handleOpen} >
  <Menu sx={{fontSize:"30px", }}/>
</MenuButton>
<Drawer open={open} onClose={handleClose} sx={{ position: "absolute", }}>
          <MenuButtons sx={{marginTop:{sm:"20px",sx:"20px"}}} setOpen={setOpen} />
</Drawer>
<NavButton/>
</Box>
<Box sx={{position:"absolute",bottom:"-30px",right:"0px",backgroundColor:"#FFFFFF",padding:"10px 10px",borderRadius:"10px 0px 0px 10px",zIndex:"100"}}>
<SettingsOutlined sx={{fontSize:"30px"}}/>
</Box>
</Box>
    </StyleToolbar>

  )
}

export default Navbar