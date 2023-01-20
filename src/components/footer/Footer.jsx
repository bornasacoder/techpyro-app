
import { EastOutlined, Facebook, FiberManualRecordTwoTone, Instagram, Mail, Twitter } from '@mui/icons-material';
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
  height:'100px',
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
        
      
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'400px'},display:'flex',flexDirection:'column',gap:'20px',color:'black'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'30px',sm:'40px',md:'20px'},fontWeight:'700',display:'flex'}}>Contact Us</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
       <Typography>Call Us 24/7</Typography>
       <Typography sx={{fontSize:'30px'}}>+91-9876543210</Typography>
       <Typography sx={{fontSize:'20px'}}>Shankar ashram ,Haridwar</Typography>
      
      </Box>
       
        </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'250px'},display:'flex',flexDirection:'column',gap:'20px',color:'black'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'30px',sm:'40px',md:'20px'},fontWeight:'700',display:'flex'}}>Customer Services</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>

       <Typography> Help</Typography>
       <Typography> Returns & Exchange</Typography>
       <Typography>Sipping</Typography>
       <Typography>Order - Tracker</Typography>
       <Typography>Store Locator</Typography>
       <Typography>Runningshoe Finder</Typography>
      <Typography>Buy Wholesale</Typography>
       
       </Box>
       
        </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'200px'},display:'flex',flexDirection:'column',gap:'20px',color:'black'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'30px',sm:'40px',md:'20px'},fontWeight:'700',display:'flex'}}>Information</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
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

        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'300px'},display:'flex',flexDirection:'column',gap:'20px',color:'black'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'30px',sm:'40px',md:'20px'},fontWeight:'700',display:'flex'}}>News Letter</Typography>
        <Box  sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
       <Typography>Register now to get latest updates on promotions and coupons. Don’t worries, we not spam! </Typography>
       <Button variant='contained' sx={{width:'200px',borderRadius:'2px',backgroundColor:'red'}}>Subscribe</Button>
       <Typography>By subscribing, you accepted the our policy!</Typography>
       
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
        <Box>
          <Typography sx={{fontSize:{xs:'18px',sm:'20px',md:'20px'},fontWeight:'400'}}>Follow Us:</Typography>
        </Box>
        <Box sx={{fontSize:{xs:'12px',sm:'20px',md:'30px'},}}>
          
          <Instagram sx={{fontSize: {xs:'30px',sm:'40px',md:'45px'} , padding:{xs:'5px',sm:'8px',md:'0px'}}} />
          <Facebook sx={{fontSize: {xs:'30px',sm:'40px',md:'45px'} , padding:{xs:'5px',sm:'8px',md:'0px'}}}/>
          <Twitter sx={{fontSize: {xs:'30px',sm:'40px',md:'45px'} , padding:{xs:'5px',sm:'8px',md:'0px'}}}/>
          <Mail sx={{fontSize: {xs:'30px',sm:'40px',md:'45px'} , padding:{xs:'5px',sm:'8px',md:'0px'}}}/>
        </Box>
        <Box>
          <Typography>Copyright@2023Brator</Typography>
        </Box>
     
        
      </Sita>
      </>
   
  )
}

export default Footer