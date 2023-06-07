import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Select1 from '../../../components/selectType/Select1'
import Select2 from '../../../components/selectType/Select2'
const card3 = () => {
  return (
   <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
   <Box sx={{backgroundColor:'#003728',display:{xs:'none',sm:'none',md:'flex'},justifyContent:'center',padding:'20px',width:{xs:'95%',sm:'95%',md:'70%'},margin:'10px'}}>
    <img src='https://lh3.googleusercontent.com/YGFZ2_b6sixNsuKFM2xpEmDPorbZ289_3iZRWTWakY7dhNuaJjlSxnqmKXaRzF7qDoWdgph7_SYmleXKqx4TUuBBD-4bZoJSlWY' />
   </Box>

   <Box sx={{backgroundColor:'#003728',display:{xs:'flex',sm:'flex',md:'none'},justifyContent:'center',padding:'20px',width:{xs:'95%',sm:'95%',md:'70%'},margin:'10px'}}>
    <img src='https://lh3.googleusercontent.com/YGFZ2_b6sixNsuKFM2xpEmDPorbZ289_3iZRWTWakY7dhNuaJjlSxnqmKXaRzF7qDoWdgph7_SYmleXKqx4TUuBBD-4bZoJSlWY' style={{width:'300px'}}/>
   </Box>

   <Box sx={{backgroundColor:'#003728',display:'flex',justifyContent:'center',margin:'10px',width:{xs:'95%',sm:'95%',md:'70%'}}}>
    <Typography sx={{color:'white',fontSize:'25px'}}>ENQUIRY FORM FOR ADMISSION</Typography>
   </Box>
   <Box sx={{display:'flex',gap:{xs:'30px',sm:'60px',md:'80px'}}}>
   <Box sx={{display:'flex',flexDirection:'column',gap:{xs:'10px',sm:'10px',md:'20px'}}}>
    <Box> 
      <Typography>Select Branch*</Typography>
    <Select1 />
    </Box>

    <Box > 
      <Typography>Student's first Name*</Typography>
      <TextField variant='outlined' sx={{width:{xs:'150px',sm:'200px',md:'400px'},"& fieldset": {borderRadius:'0px',height:'50px'},backgroundColor:'#F6F4F4',height:'50px'}}/>
    </Box>

    <Box > 
      <Typography> Father's Name*</Typography>
      <TextField variant='outlined' sx={{width:{xs:'150px',sm:'200px',md:'400px'},"& fieldset": {borderRadius:'0px',height:'50px'},height:'50px',backgroundColor:'#F6F4F4'}}/>
    </Box>

    <Box > 
      <Typography>Gender*</Typography>
      <TextField variant='outlined' sx={{width:{xs:'150px',sm:'200px',md:'400px'},"& fieldset": {borderRadius:'0px',height:'50px'},height:'50px',backgroundColor:'#F6F4F4'}}/>
    </Box>

    <Box > 
      <Typography>Phone Number*</Typography>
      <TextField variant='outlined' type='number' sx={{width:{xs:'150px',sm:'200px',md:'400px'},"& fieldset": {borderRadius:'0px',height:'50px'},height:'50px',backgroundColor:'#F6F4F4'}}/>
    </Box>

    <Box > 
      <Typography>How did you hear about us?*</Typography>
      <TextField variant='outlined' sx={{width:{xs:'150px',sm:'200px',md:'400px'},"& fieldset": {borderRadius:'0px',height:'50px'},height:'50px',backgroundColor:'#F6F4F4'}}/>
    </Box>
   </Box>


   <Box sx={{display:'flex',flexDirection:'column',gap:{xs:'10px',sm:'10px',md:'20px'}}}>
   <Box> 
      <Typography>Class Of Intrest*</Typography>
    <Select2 />
    </Box>

   <Box > 
      <Typography>Student's Last Name*</Typography>
      <TextField variant='outlined' sx={{width:{xs:'150px',sm:'200px',md:'400px'},"& fieldset": {borderRadius:'0px',height:'50px'},backgroundColor:'#F6F4F4',height:'50px'}}/>
    </Box>

    <Box > 
      <Typography> Mother's Name*</Typography>
      <TextField variant='outlined' sx={{width:{xs:'150px',sm:'200px',md:'400px'},"& fieldset": {borderRadius:'0px',height:'50px'},backgroundColor:'#F6F4F4',height:'50px'}}/>
    </Box>
    <Box > 
      <Typography>Date of Birth*</Typography>
      <TextField variant='outlined' type='number' sx={{width:{xs:'150px',sm:'200px',md:'400px'},"& fieldset": {borderRadius:'0px',height:'50px'},height:'50px',backgroundColor:'#F6F4F4'}}/>
    </Box>

    <Box > 
      <Typography>Email*</Typography>
      <TextField variant='outlined' sx={{width:{xs:'150px',sm:'200px',md:'400px'},"& fieldset": {borderRadius:'0px',height:'50px'},backgroundColor:'#F6F4F4',height:'50px'}}/>
    </Box>
   </Box>
   </Box>
   <Button variant='contained' sx={{width:'200px',borderRadius:'0px',backgroundColor:'#003728',margin:'40px'}}>SUBMIT ENQUIRY</Button>
   </Box>
  )
}

export default card3
