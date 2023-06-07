import React from 'react'
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
  } from "@mui/material";


export default function signup() {
   

 
  return (
    <List component="nav" aria-label="mailbox folders" sx={{width:{xs:'250px',sm:'300px',md:'600px'},padding:'50px'}}>
        
      <Box>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <Typography sx={{fontSize:'25px',fontWeight:'500'}}>Sign Up</Typography>
           
            <Typography sx={{color:'black',fontWeight:'500'}}>______</Typography>
        </Box>
        <Box sx={{width:{xs:'250px',sm:'250px',md:'330px'}}}>
        <TextField variant='outlined'label='Phone number'type='number' sx={{width:{xs:'250px',sm:'250px',md:'330px'},height:'80px',marginTop:'50px'}}></TextField>
        <TextField variant='outlined'label='Phone number'type='number' sx={{width:{xs:'250px',sm:'250px',md:'330px'},height:'80px',marginTop:'50px'}}></TextField>
        <TextField variant='outlined'label='Phone number'type='number' sx={{width:{xs:'250px',sm:'250px',md:'330px'},height:'80px',marginTop:'50px'}}></TextField>
        
        <Button variant='containe' sx={{background:'orange',width:{xs:'250px',sm:'250px',md:'330px'},height:'50px',borderRadius:'0px'}}>SIGN IN</Button>
        <Typography sx={{fontWeght:'600px'}}>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</Typography>
        </Box>
      </Box>
    </List>
  )
}
