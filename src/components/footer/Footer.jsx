
import { Facebook, Instagram, Mail, Twitter } from '@mui/icons-material';
import { Box, Typography,styled, TextField, Button } from '@mui/material'
import React from 'react'
import "./footer.css"
  
const Ram = styled(Box)(({theme}) => ({
        display:'flex',
        justifyContent:'space-evenly',
        // backgroundColor:theme.colors.alpha.black[100],
        height:'auto',
        width:'100%',
        // color:theme.colors.alpha.white[100],
        padding:'30px',
        [theme.breakpoints.down('md')]: {
         flexDirection:'column',
        //   padding:'10px'
        // display:'none'
      }
        
}));
const Lakshman = styled(Box)(({theme}) => ({
  display:'flex',
  justifyContent:'space-evenly',
  // backgroundColor:theme.colors.alpha.black[100],
  height:'auto',
  width:'100%',
  // color:theme.colors.alpha.white[100],
  padding:'30px',
  [theme.breakpoints.up('md')]: {
  //  flexDirection:'column',
  //   padding:'10px',
  display:'none',
}
  
}));
const Sita = styled(Box)(({theme}) => ({
  display:'flex',
  justifyContent:'space-evenly',
  // backgroundColor:theme.colors.alpha.black[100],
  height:'150px',
  width:'100%',
  flexDirection:'row',
  // color:theme.colors.alpha.white[100],
  alignItems:'center',
 
  [theme.breakpoints.down('md')]: {
    //  flexDirection:'column',
    //   padding:'10px'
    height:'100px',
  }

}));

const Footer = () => {
  return (
    <>
    <hr></hr>
   
      <Ram >
      
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'400px'},display:'flex',flexDirection:'column',gap:'30px'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'30px'},fontSize: {xs:'30px',sm:'40px',md:'20px'},fontWeight:'500',display:'flex',justifyContent:'center'}}>Opening Hours</Typography>
       <Box sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography>Monday-Friday</Typography>
        <Typography>08:00 am to 10:00 pm</Typography>
       
       </Box>
         <hr></hr>
         <Box sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography>Saturday</Typography>
        <Typography>08:00 am to 10:00 pm</Typography>
       
       </Box>
         <hr></hr>
         <Box sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography>Sunday</Typography>
        <Typography>08:00 am to 10:00 pm</Typography>
       
       </Box>
         <hr></hr>
        </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'400px'},display:'flex',flexDirection:'column',gap:'30px'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'30px'},fontSize: {xs:'30px',sm:'40px',md:'20px'},fontWeight:'500',display:'flex',justifyContent:'center'}}>Contact Us</Typography>
       <Typography>56/8, los angeles, rochy beach, Santa monica, United states of america - 1205</Typography>
        <Typography sx={{fontSize: {xs:'25px',sm:'25px',md:'25px'}}}>+91-9876543210</Typography>
        <Typography sx={{fontSize: {xs:'25px',sm:'25px',md:'25px'}}}>+91-9876543210</Typography>
        </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},width:{xs:'300px',sm:'350px',md:'400px'},display:'flex',flexDirection:'column',gap:'30px'}}>
        
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'30px'},fontSize: {xs:'30px',sm:'40px',md:'20px'},fontWeight:'500',display:'flex',justifyContent:'center'}}>Newsletter</Typography>
       <Typography >You can trust us. we only send promo offers, not a single spam.</Typography>
       <Box>
      <Typography>Enter your mail*</Typography>
      <Box sx={{borderRadius:'0'}}>
      <TextField variant='standard' sx={{width:{xs:'200px',sm:'300px',md:'200px'}}}></TextField>
      <Button variant='contained'  sx={{borderRadius:'0'}}>SUBMIT</Button>
      
      </Box>
      </Box>
        </Box>
       
      </Ram>
      {/* <Lakshman >
      
      <Box sx={{fontSize: {xs:'18px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'}}}>
      
     
        <p>Australia</p>
        <p>Belgium</p>
        <p>Bolivia</p>
        <p>Canada</p>
        <p>chile</p>
        <p>Costarica</p>
        <p>Dominican Republic</p>
        <p>Ecuador</p>
        <p>France</p>
        <p>Germanys</p>
        <p>El Salvador</p>
         <p>Guatemala</p>
      
         </Box>
     
      <Box sx={{fontSize: {xs:'18px',sm:'18px',md:'18px'}}}>
      
      
        <p>Mexico</p>
        <p>Netherland</p>
        <p>Newzealand</p>
        <p>Panama</p>
        <p>Poland</p>
        <p>Portugal</p>
        <p>South Africa</p>
        <p>Spain</p>
        <p>Ireland</p>
          <p>Italy</p>
           <p>Japan</p>
         <p>Kenya</p>
      
      </Box>
     
    </Lakshman> */}
    <Box sx={{display:'flex',alignItems:'center',flexDirection:'column',paddingTop:'30px'}}>
      {/* <Box>
      <Typography>Enter your mail*</Typography>
      <Box sx={{borderRadius:'0'}}>
      <TextField variant='standard' sx={{width:{xs:'200px',sm:'300px',md:'600px'}}}></TextField>
      <Button variant='contained'  sx={{borderRadius:'0'}}>SUBMIT</Button>
      
      </Box>
      </Box> */}
    </Box>
      <hr></hr>
      <Sita>
        {/* <Box>
          <Typography sx={{fontSize:{xs:'18px',sm:'20px',md:'20px'},fontWeight:'400'}}>Follow Us:</Typography>
        </Box> */}
        <Box>
          <Typography>@2023My Restaurents</Typography>
        </Box>
        <Box sx={{fontSize:{xs:'12px',sm:'20px',md:'30px'},}}>
          <Instagram sx={{fontSize: {xs:'30px',sm:'40px',md:'45px'} , padding:{xs:'5px',sm:'8px',md:'10px'}}} />
          <Facebook sx={{fontSize: {xs:'30px',sm:'40px',md:'45px'} , padding:{xs:'5px',sm:'8px',md:'10px'}}}/>
          <Twitter sx={{fontSize: {xs:'30px',sm:'40px',md:'45px'} , padding:{xs:'5px',sm:'8px',md:'10px'}}}/>
          <Mail sx={{fontSize: {xs:'30px',sm:'40px',md:'45px'} , padding:{xs:'5px',sm:'8px',md:'10px'}}}/>
        </Box>
        
      </Sita>
      </>
   
  )
}

export default Footer