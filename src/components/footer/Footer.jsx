
import { Facebook, Instagram, Mail, Twitter } from '@mui/icons-material';
import { Box, Typography,styled } from '@mui/material'
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
        //  flexDirection:'column',
        //   padding:'10px'
        display:'none'
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
    <Typography sx={{paddingTop:{xs:'30px',sm:'70px',md:'80px'},fontSize: {xs:'30px',sm:'40px',md:'40px'},fontWeight:'700',paddingLeft:{xs:'15px',sm:'30px',md:'30px'}}}>Countries with Uber Eats</Typography>
      <Ram >
      
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'}}}>
        
       
          <p>Australia</p>
          <p>Belgium</p>
          <p>Bolivia</p>
          <p>Canada</p>
          <p>chile</p>
          <p>Costarica</p>
          <p>Dominican Republic</p>
          <p>Ecuador</p>
        </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'}}}>
        
        
          <p>France</p>
          <p>Germanys</p>
          <p>El Salvador</p>
           <p>Guatemala</p>
           <p>Ireland</p>
            <p>Italy</p>
             <p>Japan</p>
           <p>Kenya</p>
        
        </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'}}}>
        
        
          <p>Mexico</p>
          <p>Netherland</p>
          <p>Newzealand</p>
          <p>Panama</p>
          <p>Poland</p>
          <p>Portugal</p>
          <p>South Africa</p>
          <p>Spain</p>
        
        </Box>
       
      </Ram>
      <Lakshman >
      
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
     
    </Lakshman>
      <hr></hr>
      <Sita>
        <Box>
          <Typography sx={{fontSize:{xs:'18px',sm:'20px',md:'30px'}}}>Uber Eats</Typography>
        </Box>
        <Box>
          <Typography>@2023Uber Eats</Typography>
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