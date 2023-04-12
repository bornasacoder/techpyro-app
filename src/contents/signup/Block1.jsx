import { Facebook, Google } from '@mui/icons-material';
import { Box, Button, TextField, Typography, styled } from '@mui/material'
import React from 'react'


const Box1= styled(Box)(({ theme }) => ({
    height:'750px',
    width:'40%',
    backgroundImage: `url(${"https://usplworld-static.s3.ap-south-1.amazonaws.com/static/img/wrogn/products/product_list/WITS1770.jpeg"})`,
    backgroundSize:'cover',
   
     [theme.breakpoints.down('sm')]: {
      height:'200px',
      width:'auto',
      margin:'0px 10px',
      display:'none',
    },
     }
  
   ));
const Block1 = () => {
  return (
    <>
      <Box sx={{width:'100%',display:'flex',justifyContent:'center',padding:{xs:'20px 0px',sm:'50px 0px',md:'50px 0px'}}}>
        <Box sx={{width:{xs:'95%',sm:'90%',md:'80%'},height:'750px',border:'1px solid black',display:'flex'}}>
           <Box1>

           </Box1>
           <Box sx={{margin:{xs:'10px',sm:'30px',md:'40px'},display:'flex',justifyContent:'center',alignItems:'center',width:{xs:'95%',sm:'60%',md:'60%'},flexDirection:'column',gap:'15px'}}>
                <Typography sx={{fontWeight:'700'}}>SIGN UP</Typography>

                <Box sx={{display:'flex',gap:'20px'}}>
                    <Button variant='outlined' sx={{borderRadius:'5px',display:'flex',gap:'5px'}}><Facebook/>Facebook</Button>
                    <Button variant='outlined' sx={{borderRadius:'5px',display:'flex',gap:'5px'}}><Google sx={{color:'green'}}/>Google</Button>
                </Box>

                <Typography>OR</Typography>

                <TextField variant='outlined' label='Mobile Number' type='number' sx={{width:'100%',"& fieldset": {height:'50px',borderRadius:'3px'},height:'50px'}}></TextField>

                <Button variant='contained' sx={{width:'100%',borderRadius:'3px'}}>SIGN UP USING OTP</Button>

                <Typography>OR</Typography>

                <Box sx={{display:'flex',gap:'20px',width:'100%'}}>
                <TextField variant='outlined' label='First Name' type='text' sx={{width:'100%',"& fieldset": {height:'50px',borderRadius:'3px'},height:'50px'}}></TextField>

                <TextField variant='outlined' label='Last name' type='text' sx={{width:'100%',"& fieldset": {height:'50px',borderRadius:'3px'},height:'50px'}}></TextField>
                </Box>

                <TextField variant='outlined' label='E-Mail Id' type='email' sx={{width:'100%',"& fieldset": {height:'50px',borderRadius:'3px'},height:'50px'}}></TextField>

                <TextField variant='outlined' label='Password' type='password' sx={{width:'100%',"& fieldset": {height:'50px',borderRadius:'3px'},height:'50px'}}></TextField>

                <TextField variant='outlined' label='Mobile Number' type='number' sx={{width:'100%',"& fieldset": {height:'50px',borderRadius:'3px'},height:'50px'}}></TextField>

                <Box sx={{display:'flex',gap:'20px',width:'100%'}}>
                <TextField variant='outlined' label='Date of Birth' type='text' sx={{width:'100%',"& fieldset": {height:'50px',borderRadius:'3px'},height:'50px'}}></TextField>

                <TextField variant='outlined' label='male' type='text' sx={{width:'100%',"& fieldset": {height:'50px',borderRadius:'3px'},height:'50px'}}></TextField>
                </Box>

                <Button variant='contained' sx={{width:'100%',borderRadius:'3px'}}>SIGN UP </Button>

                <Typography sx={{color:'green'}}>Already have an accounr? Login </Typography>
           </Box>
        </Box>
      </Box>
    </>
  )
}

export default Block1
