
import { Facebook, Instagram, Mail, Twitter } from '@mui/icons-material';
import { Box, Typography,styled } from '@mui/material'
import React from 'react'
import "./footer.css"
  
const Ram = styled(Box)(({theme}) => ({
        display:'flex',
        justifyContent:'space-evenly',
        backgroundColor:'black',
        height:'auto',
        width:'100%',
        color:'white',
        padding:'40px',
        [theme.breakpoints.down('md')]: {
         flexDirection:'column',
          padding:'30px'
      }
        
}));
const Sita = styled(Box)(({theme}) => ({
  display:'flex',
  justifyContent:'space-evenly',
  backgroundColor:'black',
  height:'auto',
  width:'100%',
  color:theme.colors.alpha.white[100],
  alignItems:'center'

}));

const Footer = () => {
  return (
    <>
      <Ram >
        
        <Box sx={{fontSize: {xs:'8px',sm:'12px',md:'18px'},paddingBottom:{xs:'15px',sm:'18px',md:'none'}}}>
        <Typography sx={{paddingBottom:{xs:'0px',sm:'0px',md:'20px'},fontSize: {xs:'16px',sm:'20px',md:'18px'}}}>COMPANY</Typography>
       
          <p>About us</p>
          <p>Team</p>
          <p>Career</p>
          <p>Refund & Cancellation</p>
          <p>Cookie policy</p>
          <p>Offer Terms</p>
          <p>Phising & Fraud</p>
        
        </Box>
        <Box sx={{fontSize: {xs:'8px',sm:'12px',md:'18px'},paddingBottom:{xs:'15px',sm:'18px',md:'none'}}}>
        <Typography sx={{paddingBottom:{xs:'none',sm:'none',md:'20px'},fontSize:{xs:'16px',sm:'20px',md:'18px'}}}>CONTACT</Typography>
        
          <p>Help & Support</p>
          <p>Partner with us</p>
          <p>Ride with us</p>
        
        </Box>
        <Box sx={{fontSize: {xs:'8px',sm:'12px',md:'18px'}}}>
        <Typography sx={{paddingBottom:{xs:'none',sm:'none',md:'20px'},fontSize: {xs:'16px',sm:'20px',md:'18px'}}}>LEGAL</Typography>
        
          <p>Terms & Conditions</p>
          <p>Privacy  Policy</p>
          <p>Refund & Cancellation</p>
          <p>Cookie policy</p>
          <p>Offer Terms</p>
          <p>Phising & Fraud</p>
        
        </Box>
       
      </Ram>
      <hr></hr>
      <Sita>
        <Box>
          <Typography sx={{fontSize:{xs:'12px',sm:'20px',md:'30px'}}}>TECHPYRO</Typography>
        </Box>
        <Box>
          <Typography>@Techpyro2023</Typography>
        </Box>
        <Box sx={{fontSize:{xs:'12px',sm:'20px',md:'30px'},}}>
          <Instagram sx={{fontSize: {xs:'30px',sm:'40px',md:'50px'} , padding:{xs:'5px',sm:'8px',md:'10px'}}} />
          <Facebook sx={{fontSize: {xs:'30px',sm:'40px',md:'50px'} , padding:{xs:'5px',sm:'8px',md:'10px'}}}/>
          <Twitter sx={{fontSize: {xs:'30px',sm:'40px',md:'50px'} , padding:{xs:'5px',sm:'8px',md:'10px'}}}/>
          <Mail sx={{fontSize: {xs:'30px',sm:'40px',md:'50px'} , padding:{xs:'5px',sm:'8px',md:'10px'}}}/>
        </Box>
      </Sita>
      </>
   
  )
}

export default Footer