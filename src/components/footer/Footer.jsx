
import { AutoStories, Call, CurrencyExchangeTwoTone, EastOutlined, Facebook, FiberManualRecordTwoTone, Instagram, LinkedIn, LocalShippingTwoTone, Mail, MoneyTwoTone, Pin, Pinterest, Room, School, Twitter, YouTube } from '@mui/icons-material';
import { Box, Typography,styled, TextField, Button } from '@mui/material'
import React from 'react'
import "./footer.css"
  
const Ram = styled(Box)(({theme}) => ({
        display:'flex',
        // alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#343A40',
        height:'auto',
        width:'100%',
        gap:'40px',
        marginTop:'50px',
        // color:theme.colors.alpha.white[100],
        paddingTop:'20px',
        [theme.breakpoints.down('md')]: {
        flexDirection:'column',
          padding:'20px',
          marginTop:'0px',
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
  backgroundColor:'#343A40',
  height:'100px',
  width:'100%',
  flexDirection:'row',
  // color:theme.colors.alpha.white[100],
  alignItems:'center',
  borderTop:'1px solid rgba(0,0,0,0.1)',
  [theme.breakpoints.down('md')]: {
     flexDirection:'column',
      padding:'0px',
    // width:'300px',
    height:'auto',
    display:'flex',
    
  }

}));

const Footer = () => {
  return (
   <Box>



      <Ram >

      <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'300px',md:'350px'},display:'flex',flexDirection:'column',gap:'20px',color:'#DC3545'}}>
      <Box>
        <img src='https://dpsazaadnagar.com/wp-content/uploads/elementor/thumbs/AZ-1-2-pns6qem6a003erqhh8uy99qnxo34eiszhk9usm8kjk.png' style={{width:'300px'}}/>
      </Box>
        <Box sx={{display:'flex',flexDirection:'column',gap:'30px',color:'white',justifyContent:'center',alignItems:'center'}}>
       <Typography>5th Floor, North Wing, SJR The HUB, Sy. Number 8/2 & 9, Sarjapur Road, Bengaluru, Karnataka- 560 103</Typography>
       <Typography >partner.institute@teachmint.com</Typography>
       <Typography >+91-8035073710 (8 AM - 8 PM Everyday)</Typography>
      
      
      </Box>
       
        </Box>
        
      

      <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'150px',sm:'150px',md:'300px'},display:'flex',flexDirection:'column',gap:'20px',color:'#DC3545'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'20px'},fontWeight:'500',display:'flex'}}>Branches</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px',color:'white'}}>

       <Typography sx={{borderBottom:'0.5px solid rgba(0,0,0,0.1)',padding:'10px 0px'}}>Learning mannagement system</Typography>
       <Typography sx={{borderBottom:'0.5px solid rgba(0,0,0,0.1)',padding:'10px 0px'}}>Digital Content</Typography>
       <Typography sx={{borderBottom:'0.5px solid rgba(0,0,0,0.1)',padding:'10px 0px'}}>Assesment</Typography>
       <Typography sx={{borderBottom:'0.5px solid rgba(0,0,0,0.1)',padding:'10px 0px'}}>Fee Management</Typography>
       <Typography sx={{borderBottom:'0.5px solid rgba(0,0,0,0.1)',padding:'10px 0px'}}>Student Information Management</Typography>
       <Typography sx={{borderBottom:'0.5px solid rgba(0,0,0,0.1)',padding:'10px 0px'}}>Admission Management</Typography>
       </Box>
      
        </Box>


          <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'200px',sm:'200px',md:'300px'},display:'flex',flexDirection:'column',gap:'20px',color:'#DC3545'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'20px'},fontWeight:'500',display:'flex'}}>Quick Links</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px',color:'white'}}>

       <Typography sx={{borderBottom:'0.5px solid rgba(0,0,0,0.1)',padding:'10px 0px'}}>Home</Typography>
       <Typography sx={{borderBottom:'0.5px solid rgba(0,0,0,0.1)',padding:'10px 0px'}}>Blog</Typography>
       <Typography sx={{borderBottom:'0.5px solid rgba(0,0,0,0.1)',padding:'10px 0px'}}>Partners</Typography>
       <Typography sx={{borderBottom:'0.5px solid rgba(0,0,0,0.1)',padding:'10px 0px'}}>Privacy Policy</Typography>
       <Typography sx={{borderBottom:'0.5px solid rgba(0,0,0,0.1)',padding:'10px 0px'}}>Terms & Services</Typography>
      
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
    {/* <Box sx={{display:'flex',alignItems:'center',flexDirection:'column',paddingTop:'30px'}}> */}
      {/* <Box>
      <Typography>Enter your mail*</Typography>
      <Box sx={{borderRadius:'0'}}>
      <TextField variant='standard' sx={{width:{xs:'200px',sm:'300px',md:'600px'}}}></TextField>
      <Button variant='contained'  sx={{borderRadius:'0'}}>SUBMIT</Button>
      
      </Box>
      </Box> */}
    {/* </Box> */}
    
      <Sita>
      {/* <Box sx={{display:{xs:'flex',sm:'flex',md:'flex'},alignItems:'center',gap:'5px'}}>
            <AutoStories sx={{color:'#1DA1F2',fontSize:{xs:'30px',sm:'20px',md:'40px'}}}/>
          <Typography sx={{fontSize:{xs:'30px',sm:'20px',md:'30px'},fontWeight:'700',color:'#1F3965'}}>Teachmint</Typography>
          </Box> */}
        <Typography sx={{color:'white'}}>©Copyright 2023 , Techpyro Technologies Pvt. Ltd.</Typography>
        <Box sx={{fontSize:{xs:'12px',sm:'20px',md:'30px'},}}>
        <LinkedIn sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'white'}} />
          <Instagram sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'white'}} />
          <Facebook sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'white'}}/>
          <Twitter sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'white'}}/>
         
        </Box>
      </Sita>
      </Box>
   
  )
}

export default Footer