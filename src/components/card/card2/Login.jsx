import { Button, styled, TextField, Typography } from '@mui/material';
import { Box, color } from '@mui/system'
import React from 'react'
const Box1= styled(Box)(({}) =>({
    backgroundImage: `url(${"/images/category/dps8.jpg"})`,
    backgroundSize:'cover',
    height:'750px',
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
}))
const Login = () => {
  return (
    <>
     <Box1>
<Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'20px',height:'auto',background:'rgba(145,145,145,0.7)',padding:'20px',boxShadow: "0 1px 5px rgba(104, 104, 104, 0.99)",borderRadius:'20px'}}>
    <Box>
        <img src='https://dpsazaadnagar.com/wp-content/uploads/elementor/thumbs/Logo__-pcha5s04ovhicj1h2wet2uykgqcnbrb0g6z13fb01s.png'/>
    </Box>
    <Typography sx={{fontWeight:'600px',fontSize:'16px',color:'black'}}>DELHI PUBLIC SCHOOL, AZAAD NAGAR</Typography>
    <TextField variant='outlined' label='Username' name='name' sx={{"& fieldset": {borderRadius:'0px',height:'50px'},backgroundColor:'#F6F4F4',height:'45px',width:'300px'}}></TextField>
    <TextField variant='outlined' label='Password' name='password' sx={{"& fieldset": {borderRadius:'0px',height:'50px'},backgroundColor:'#F6F4F4',height:'45px',width:'300px'}}></TextField>
    <Button variant='contained' type='submit' sx={{width:'300px',borderRadius:'0px',background:'red'}}>Login</Button>
</Box>
     </Box1>
    </>
  )
}

export default Login
