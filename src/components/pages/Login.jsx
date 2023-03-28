import React from 'react'
import Signup from '../pages/Signup'
import {
    styled,
    Badge,
    Button,
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
    TextField,
    Drawer,
  } from "@mui/material";
import { Clear, Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login({setOpen}) {
  const [close,setClose]=useState(false);
  const handleSign = ()=>{
    setClose(true);
    // console.log(setClose)
};

const handleLog = ()=>{
    setClose(false);
};


  const handleClose = ()=>{
    setOpen(false)
  }
  return (
    <List component="nav" aria-label="mailbox folders" sx={{width:{xs:'250px',sm:'300px',md:'500px'},padding:'50px'}}>
        <Box sx={{color:'black',width:'100%',display:{xs:'none',sm:'none',md:'flex'},justifyContent:'right',}}>
           
            <Clear sx={{color:'black'}} onClick={handleClose}/>
        </Box>
      <Box>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <Typography sx={{fontSize:'25px',fontWeight:'500'}}>Login</Typography>

            <Box>
            <Typography sx={{color:'orange',cursor:'pointer'}} onClick = {handleSign} >or Create an Account</Typography>
            <Drawer open={close} onClose={handleLog} sx={{position:'absolute',zIndex:'1000'}}>
               <Signup />
            </Drawer>
            </Box>

            <Typography sx={{color:'black',fontWeight:'500'}}>______</Typography>
        </Box>
        <Box sx={{width:{xs:'250px',sm:'250px',md:'330px'}}}>
        <TextField variant='outlined'label='Phone number'type='number' sx={{width:{xs:'250px',sm:'250px',md:'330px'},height:'80px',marginTop:'50px'}}></TextField>
        <Button variant='containe' sx={{background:'orange',width:{xs:'250px',sm:'250px',md:'330px'},height:'50px',borderRadius:'0px'}}>LOGIN</Button>
        <Typography sx={{fontWeght:'600px'}}>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</Typography>
        </Box>
      </Box>
    </List>
  )
}
