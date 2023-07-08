
import { EastOutlined, Facebook, FiberManualRecordTwoTone, Instagram, Mail, Twitter } from '@mui/icons-material';
import { Box, Typography,styled, TextField, Button } from '@mui/material'
import React from 'react'
import "./footer.css"
  
const Box1 = styled(Box)(({theme}) => ({
        display:'flex',
       
        justifyContent:'center',
        
        height:'auto',
        width:'100%',
        
        paddingTop:'40px',
        [theme.breakpoints.down('md')]: {
         flexDirection:'column',
          padding:'20px'
        
      }
        
}));

const Box2 = styled(Box)(({theme}) => ({
  display:'flex',
  justifyContent:'space-evenly',
  
  height:'100px',
  width:'100%',
  flexDirection:'row',
 
  alignItems:'center',
 
  [theme.breakpoints.down('md')]: {
   
    height:'100px',
  }

}));

const Footer = () => {
  return (
    <>
    <hr></hr>
    <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'},alignItems:'center',padding:{xs:'30px 30px 30px 30px',sm:'100px 50px',md:'40px'},justifyContent:'center',gap:{xs:'20px',sm:'40px',md:'100px',backgroundColor:'yellowgreen',marginTop:'80px'}}}>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
       <Typography sx={{fontSize:{xs:'20px',sm:'35px',md:'25px'},fontWeight:'700'}}>JOIN ADIDAS AND GET 15% OFF</Typography>
       
       </Box>
       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
       <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'black',color:'white'}}>SIGN UP FOR FREE<EastOutlined sx={{paddingLeft:'10px'}}></EastOutlined></Button>
       </Box>
       
       </Box>
      <Box1>
        
      
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'200px'},display:'flex',flexDirection:'column',gap:'20px',color:'black'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'30px',sm:'40px',md:'20px'},fontWeight:'700',display:'flex'}}>PRODUCTS</Typography>
        <Box>
       <Typography> Footwear</Typography>
       <Typography> Clothing</Typography>
       <Typography> Accessories</Typography>
       <Typography>Outlet-sale</Typography>
       <Typography>New arrivals</Typography>
       <Typography>Special Offer</Typography>
       </Box>
       
        </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'200px'},display:'flex',flexDirection:'column',gap:'20px',color:'black'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'30px',sm:'40px',md:'20px'},fontWeight:'700',display:'flex'}}>SPORTS</Typography>
        <Box>
       <Typography>Running</Typography>
       <Typography> Football</Typography>
       <Typography> Gym/Training</Typography>
       <Typography>Swimmming</Typography>
       <Typography>Tennis</Typography>
       <Typography>Outdoor</Typography>
       <Typography>Basketball</Typography>
       <Typography>Skateboarding</Typography>
       </Box>
       
        </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'200px'},display:'flex',flexDirection:'column',gap:'20px',color:'black'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'30px',sm:'40px',md:'20px'},fontWeight:'700',display:'flex'}}>COLLECTIONS</Typography>
        <Box>
       <Typography> Ultraboost</Typography>
       <Typography> Superstar</Typography>
       <Typography> NMD</Typography>
       <Typography>Stain -Smith</Typography>
       <Typography>Sustainaibility</Typography>
       <Typography>Predator</Typography>
       <Typography>Parley</Typography>
       <Typography>Adicolor</Typography>
       </Box>
       
        </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'200px'},display:'flex',flexDirection:'column',gap:'20px',color:'black'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'30px',sm:'40px',md:'20px'},fontWeight:'700',display:'flex'}}>SUPPORT</Typography>
        <Box>
       <Typography> Help</Typography>
       <Typography> CustomerServices</Typography>
       <Typography> Returns & Exchange</Typography>
       <Typography>Sipping</Typography>
       <Typography>Order - Tracker</Typography>
       <Typography>Store Locator</Typography>
       <Typography>Runningshoe Finder</Typography>
       <Typography>BRa fit Guide</Typography>
       <Typography>Adiclub</Typography>
       <Typography>Adiclub terms & conditions</Typography>
       </Box>
       
        </Box>

        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'200px'},display:'flex',flexDirection:'column',gap:'20px',color:'black'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'30px',sm:'40px',md:'20px'},fontWeight:'700',display:'flex'}}>COMPANY INFO</Typography>
        <Box>
       <Typography> About Us</Typography>
       <Typography> Adidas Stories</Typography>
       <Typography> adidas apps</Typography>
       <Typography>Entinity Details</Typography>
       <Typography>Press</Typography>
       <Typography>Carrers</Typography>
       </Box>
       
        </Box>
       
       
       
      </Box1>
     

    <Box sx={{display:'flex',alignItems:'center',flexDirection:'column',paddingTop:'30px'}}>
     
    </Box>
      <hr></hr>
      <Box2>
       
        <Box sx={{fontSize:{xs:'12px',sm:'20px',md:'30px'},}}>
          <Instagram sx={{fontSize: {xs:'30px',sm:'40px',md:'45px'} , padding:{xs:'5px',sm:'8px',md:'0px'}}} />
          <Facebook sx={{fontSize: {xs:'30px',sm:'40px',md:'45px'} , padding:{xs:'5px',sm:'8px',md:'0px'}}}/>
          <Twitter sx={{fontSize: {xs:'30px',sm:'40px',md:'45px'} , padding:{xs:'5px',sm:'8px',md:'0px'}}}/>
          <Mail sx={{fontSize: {xs:'30px',sm:'40px',md:'45px'} , padding:{xs:'5px',sm:'8px',md:'0px'}}}/>
        </Box>
        <Box>
          <Typography>Copyright@2023adidas</Typography>
        </Box>
     
        
      </Box2>
      </>
   
  )
}

export default Footer