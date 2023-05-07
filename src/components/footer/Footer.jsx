
import { Call, CurrencyExchangeTwoTone, EastOutlined, Facebook, FiberManualRecordTwoTone, Instagram, LocalShippingTwoTone, Mail, MoneyTwoTone, Pin, Pinterest, Room, School, Twitter, YouTube } from '@mui/icons-material';
import { Box, Typography,styled, TextField, Button } from '@mui/material'
import React from 'react'
import "./footer.css"
  
const Ram = styled(Box)(({theme}) => ({
        display:'flex',
        // alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#2C2C2C',
        height:'auto',
        width:'100%',
        gap:'20px',
        marginTop:'0px',
        // color:theme.colors.alpha.white[100],
        paddingTop:'20px',
        [theme.breakpoints.down('md')]: {
        flexDirection:'column',
          padding:'20px',
          marginTop:'50px',
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
  backgroundColor:'#004F9A',
  height:'150px',
  width:'100%',
  flexDirection:'column',
  // color:theme.colors.alpha.white[100],
  alignItems:'center',
 
  [theme.breakpoints.down('md')]: {
    //  flexDirection:'column',
      padding:'10px',
    // width:'300px',
    height:'auto',
    display:'block'
  }

}));

const Footer = () => {
  return (
   <Box>

 <Box sx={{display:{xs:'none',sm:'none',md:'flex'},flexDirection:'column',alignItems:'center',margin:{xs:'100px 30px',sm:'100px 50px',md:'80px 0px 0px 0px'},height:'300px',backgroundColor:'#FFB606',color:'white',justifyContent:'center',gap:'50px'}}>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'30px'},fontWeight:'700'}}>Our Global Partners</Typography>
       <Box sx={{display:'flex',gap:'100px'}}>
        <Box>
          <img src='https://eduma.thimpress.com/demo-modern-university/wp-content/uploads/sites/64/2022/06/gallery-img-1.png'/>
        </Box>

        <Box>
          <img src='https://eduma.thimpress.com/demo-modern-university/wp-content/uploads/sites/64/2022/06/gallery-img-2.png'/>
        </Box>

        <Box>
          <img src='https://eduma.thimpress.com/demo-modern-university/wp-content/uploads/sites/64/2022/06/gallery-img-3.png'/>
        </Box>

        <Box>
          <img src='https://eduma.thimpress.com/demo-modern-university/wp-content/uploads/sites/64/2022/06/gallery-img-4.png'/>
        </Box>

        <Box>
          <img src='https://eduma.thimpress.com/demo-modern-university/wp-content/uploads/sites/64/2022/06/gallery-img-5.png'/>
        </Box>
       </Box>

       
       </Box>

      <Ram >
        
      <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'}}}>

        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'150px',sm:'150px',md:'250px'},display:'flex',flexDirection:'column',gap:'20px',color:'#E1A910'}}>
        <Box sx={{display:{xs:'flex',sm:'flex',md:'flex'},alignItems:'center',gap:'5px'}}> 
        <School sx={{fontSize:'50px',color:'#FFB606'}}/>
          <Typography sx={{fontSize:{xs:'30px',sm:'20px',md:'30px'},fontWeight:'700',color:'white'}}>ABC School</Typography>
          </Box>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px',color:'white'}}>
        <Box sx={{display:{xs:'flex',sm:'flex',md:'flex'},alignItems:'center',gap:'5px'}}>  
          <Call sx={{color:'#FFB606',fontSize:'20px'}}/>      
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'rgba(255,255,255,0.5)',"&:hover":{color:'orange'}}}>+91-9876543210</Typography>
          </Box>

          <Box sx={{display:{xs:'flex',sm:'flex',md:'flex'},alignItems:'center',gap:'5px'}}>  
          <Room sx={{color:'#FFB606',fontSize:'20px'}}/>       
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'rgba(255,255,255,0.5)',"&:hover":{color:'orange'}}}>Haridwr,UK</Typography>
          </Box>

          <Box sx={{display:{xs:'flex',sm:'flex',md:'flex'},alignItems:'center',gap:'5px'}}>  
          <Mail sx={{color:'#FFB606',fontSize:'20px'}}/>       
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'400',color:'rgba(255,255,255,0.5)',"&:hover":{color:'orange'}}}>agency@gmail.com</Typography>
          </Box>

          <Box sx={{fontSize:{xs:'12px',sm:'20px',md:'30px'},}}>
          
          <Instagram sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'rgba(255,255,255,0.5)'}} />
          <Facebook sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'rgba(255,255,255,0.5)'}}/>
          <Twitter sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'rgba(255,255,255,0.5)'}}/>
         
        </Box>
      </Box>
       
        </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'150px',sm:'150px',md:'200px'},display:'flex',flexDirection:'column',gap:'20px',color:'White'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'25px'},fontWeight:'500',display:'flex'}}>Company</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px',color:'rgba(255,255,255,0.5)'}}>

       <Typography>About</Typography>
       <Typography>Blog</Typography>
       <Typography>Contact</Typography>
       <Typography>Become a teacher</Typography>
       
      
       </Box>
      
    
       
        </Box>

        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'150px',sm:'150px',md:'200px'},display:'flex',flexDirection:'column',gap:'10px',color:'white'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'25px'},fontWeight:'500',display:'flex'}}>Links</Typography>
       <Box sx={{display:'flex',flexDirection:'column',gap:'10px',color:'rgba(255,255,255,0.5)'}}>

<Typography>Courses</Typography>
<Typography>Events</Typography>
<Typography>Gallery</Typography>
<Typography>FAQs</Typography>



</Box>
     </Box>  
</Box>

       <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
       
        
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'150px',sm:'150px',md:'200px'},display:'flex',flexDirection:'column',gap:'20px',color:'white'}}>
        <Typography sx={{paddingTop:{xs:'20px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'25px'},fontWeight:'500',display:'flex'}}>Support</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px',color:'rgba(255,255,255,0.5)'}}>
       <Typography>Documentation</Typography>
       <Typography >Forum</Typography>
       <Typography >Language Packs</Typography>
       <Typography >Release Status</Typography>
    
      </Box>

    
     
       
        </Box>
        
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'150px',sm:'150px',md:'200px'},display:'flex',flexDirection:'column',gap:'20px',color:'white'}}>
        <Typography sx={{paddingTop:{xs:'20px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'25px'},fontWeight:'500',display:'flex'}}>Recommend</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px',color:'rgba(255,255,255,0.5)'}}>
       <Typography>WorldPress</Typography>
       <Typography >LearnPress</Typography>
       <Typography >WooPress</Typography>
       <Typography >bbPress</Typography>
      
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
    {/* <Box sx={{display:'flex',alignItems:'center',flexDirection:'column',paddingTop:'30px'}}> */}
      {/* <Box>
      <Typography>Enter your mail*</Typography>
      <Box sx={{borderRadius:'0'}}>
      <TextField variant='standard' sx={{width:{xs:'200px',sm:'300px',md:'600px'}}}></TextField>
      <Button variant='contained'  sx={{borderRadius:'0'}}>SUBMIT</Button>
      
      </Box>
      </Box> */}
    {/* </Box> */}
      {/* <hr></hr>
      <Sita>
        <Box sx={{display:'flex',gap:{xs:'10px',sm:'15px',md:'20px'},color:'white',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
          <Typography>All Departments</Typography>
          <Typography>Store Directory</Typography>
        <Typography>Careers</Typography>
        <Typography>our company</Typography>
        <Typography>Sell on Wallmart.com</Typography>
        <Typography>Help</Typography>
        <Typography>Product shelter</Typography>
      </Box>
        <Typography sx={{color:'white'}}>@2023Walmart.All rights reserved</Typography>
      </Sita> */}
      </Box>
   
  )
}

export default Footer