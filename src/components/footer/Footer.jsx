
import { CurrencyExchangeTwoTone, EastOutlined, Facebook, FiberManualRecordTwoTone, Instagram, LocalShippingTwoTone, Mail, MoneyTwoTone, Pinterest, Twitter, YouTube } from '@mui/icons-material';
import { Box, Typography,styled, TextField, Button } from '@mui/material'
import React from 'react'
import "./footer.css"
  
const Ram = styled(Box)(({theme}) => ({
        display:'flex',
        // alignItems:'center',
        justifyContent:'center',
        // backgroundColor:theme.colors.alpha.black[100],
        height:'auto',
        width:'100%',
        gap:'20px',
        // color:theme.colors.alpha.white[100],
        paddingTop:'20px',
        [theme.breakpoints.down('md')]: {
         flexDirection:'column',
          padding:'20px'
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
  height:'50px',
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
    <Box sx={{backgroundColor:'#DFE2E7',marginTop:'80px'}}>
       <Box sx={{display:'flex',justifyContent:'space-evenly',height:'80px',border:'1px solid rgba(0,0,0,0.1)',alignItems:'center'}}>
        <Typography sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px'}}> <MoneyTwoTone sx={{fontSize:'35px',color:'green'}}/>Cash On Delievery</Typography>
        <Typography sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px'}}> <LocalShippingTwoTone sx={{fontSize:'35px'}}/>Free Delievery</Typography>
        <Typography sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px'}}><CurrencyExchangeTwoTone sx={{fontSize:'35px',color:'red'}}/>Easy Exchange</Typography>
       </Box>
      <Ram >
        
      
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'300px'},display:'flex',flexDirection:'column',gap:'20px',color:'black'}}>
        <Typography sx={{paddingTop:{xs:'20px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',display:'flex'}}>ORDER QUERIES</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
       <Typography>Track Orders</Typography>
       <Typography >Shipping & Handaling</Typography>
       <Typography >Cancellation</Typography>
       <Typography >Return & Refund Policy</Typography>
      </Box>
       
        </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'250px'},display:'flex',flexDirection:'column',gap:'20px',color:'black'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',display:'flex'}}>USEFUL LINKS</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>

       <Typography>Cintact Us</Typography>
       <Typography>FAQs</Typography>
       <Typography>Payment</Typography>
       <Typography>Terms & Conditions</Typography>
       <Typography>Grievance Officer</Typography>
       <Typography>Anti Corruption Policy</Typography>
      <Typography>Virat's WROGN Style</Typography>
      <Typography>USPL World Blogs</Typography>
      
       </Box>
       
        </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'300px'},display:'flex',flexDirection:'column',gap:'10px',color:'black'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',display:'flex'}}>FIND OUR STORE</Typography>
        <Typography sx={{fontSize: {xs:'20px',sm:'20px',md:'15px'},fontWeight:'500'}}>ABOUT US</Typography>
        <hr></hr>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
        <Typography sx={{fontSize: {xs:'20px',sm:'20px',md:'15px'},fontWeight:'500'}}>WROGN Match Up Game T&C</Typography>
       <Typography> Connect With Us</Typography>
       <Box sx={{fontSize:{xs:'12px',sm:'20px',md:'30px'},}}>
          
          <Instagram sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'purple'}} />
          <Facebook sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'blue'}}/>
          <Twitter sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'skyblue'}}/>
          <YouTube sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'red'}}/>
          <Pinterest sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'orange'}}/>
        </Box>
       </Box>
       
        </Box>
<Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'300px'},display:'flex',flexDirection:'column',gap:'20px',color:'black',alignItems:'center'}}>
        <Typography sx={{paddingTop:{xs:'20px',sm:'20px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'20px'},fontWeight:'500',display:'flex'}}>TRACK ORDER</Typography>
        <Box  sx={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center'}}>
       <TextField variant='outlined' label="Order Id" sx={{"& fieldset": {border:'none'},width:'300px',backgroundColor:'white'}}></TextField>
       <Button variant='contained' sx={{width:'300px',borderRadius:'2px',backgroundColor:'black'}}>TRACK</Button>
       
       </Box>
       
        </Box>
        <Typography sx={{paddingTop:{xs:'20px',sm:'20px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',display:'flex'}}>ADDRESS</Typography>
        <Typography>HARIDWAR</Typography>
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
        <Box>
          <Typography>Privacy Policy</Typography>
        </Box>
       
        <Box>
          <Typography>Terms & Conditions</Typography>
        </Box>
      <Box>
        <Typography>Cookie Policy</Typography>
      </Box>
        
      </Sita>
      </Box>
   
  )
}

export default Footer