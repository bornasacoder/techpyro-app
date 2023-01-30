
import { CurrencyExchangeTwoTone, EastOutlined, Facebook, FiberManualRecordTwoTone, Instagram, LocalShippingTwoTone, Mail, MoneyTwoTone, Pinterest, Twitter, YouTube } from '@mui/icons-material';
import { Box, Typography,styled, TextField, Button } from '@mui/material'
import React from 'react'
import "./footer.css"
  
const Ram = styled(Box)(({theme}) => ({
        display:'flex',
        // alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#813588',
        height:'auto',
        width:'100%',
        gap:'20px',
        marginTop:'50px',
        // color:theme.colors.alpha.white[100],
        paddingTop:'20px',
        [theme.breakpoints.down('md')]: {
        
          padding:'20px'
        
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
      <Ram >
        
      <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'}}}>

        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'150px',sm:'150px',md:'150px'},display:'flex',flexDirection:'column',gap:'20px',color:'#E1A910'}}>
        <Typography sx={{paddingTop:{xs:'20px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',display:'flex'}}>COURSES</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px',color:'white'}}>
       <Typography>CBSE</Typography>
       <Typography >ICSE</Typography>
       <Typography >JEE</Typography>
       <Typography >NEET</Typography>
       <Typography >IAS</Typography>
       <Typography >CAT</Typography>
       <Typography >JEE Main</Typography>
       <Typography >NCERT</Typography>
      </Box>
       
        </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'150px',sm:'150px',md:'150px'},display:'flex',flexDirection:'column',gap:'20px',color:'#E1A910'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',display:'flex'}}>EXAMS</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px',color:'white'}}>

       <Typography>JEE Exam</Typography>
       <Typography>GATE Exam</Typography>
       <Typography>IAS Exam</Typography>
       <Typography>UPSC Exam</Typography>
       <Typography>UPSC 2023</Typography>
       <Typography>Bank Exam</Typography>
      <Typography>Government Exams</Typography>
      <Typography>Education News</Typography>
      
       </Box>
       <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',display:'flex'}}>CLASSES</Typography>
       <Box sx={{display:'flex',flexDirection:'column',gap:'10px',color:'white'}}>

<Typography>Kids Learning</Typography>
<Typography>Class 1st to 3rd</Typography>
<Typography>class 4th to 6th</Typography>
<Typography>Class 7th to 10th</Typography>
<Typography>class 11th to 12th</Typography>


</Box>
       
        </Box>

        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'150px',sm:'150px',md:'150px'},display:'flex',flexDirection:'column',gap:'10px',color:'#E1A910'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',display:'flex'}}>CLASSES</Typography>
       <Box sx={{display:'flex',flexDirection:'column',gap:'10px',color:'white'}}>

<Typography>Kids Learning</Typography>
<Typography>Class 1st to 3rd</Typography>
<Typography>class 4th to 6th</Typography>
<Typography>Class 7th to 10th</Typography>
<Typography>class 11th to 12th</Typography>


</Box>
     </Box>  
</Box>

       <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
       
        
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'150px',sm:'150px',md:'150px'},display:'flex',flexDirection:'column',gap:'20px',color:'#E1A910'}}>
        <Typography sx={{paddingTop:{xs:'20px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',display:'flex'}}>COURSES</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px',color:'white'}}>
       <Typography>CBSE</Typography>
       <Typography >ICSE</Typography>
       <Typography >JEE</Typography>
       <Typography >NEET</Typography>
       <Typography >IAS</Typography>
       <Typography >CAT</Typography>
       <Typography >JEE Main</Typography>
       <Typography >NCERT</Typography>
      </Box>

      <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',display:'flex'}}>FOLLOW US</Typography>
       <Box sx={{fontSize:{xs:'12px',sm:'20px',md:'30px'},}}>
          
          <Instagram sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'white'}} />
          <Facebook sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'white'}}/>
          <Twitter sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'white'}}/>
         
        </Box>
       
        </Box>
        
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'150px',sm:'150px',md:'150px'},display:'flex',flexDirection:'column',gap:'20px',color:'#E1A910'}}>
        <Typography sx={{paddingTop:{xs:'20px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',display:'flex'}}>COURSES</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px',color:'white'}}>
       <Typography>CBSE</Typography>
       <Typography >ICSE</Typography>
       <Typography >JEE</Typography>
       <Typography >NEET</Typography>
       <Typography >IAS</Typography>
       <Typography >CAT</Typography>
       <Typography >JEE Main</Typography>
       <Typography >NCERT</Typography>
      </Box>
       
        </Box>

        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'150px',sm:'150px',md:'150px'},display:'flex',flexDirection:'column',gap:'20px',color:'#E1A910'}}>
        <Typography sx={{paddingTop:{xs:'20px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',display:'flex'}}>COURSES</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px',color:'white'}}>
       <Typography>CBSE</Typography>
       <Typography >ICSE</Typography>
       <Typography >JEE</Typography>
       <Typography >NEET</Typography>
       <Typography >IAS</Typography>
       <Typography >CAT</Typography>
       <Typography >JEE Main</Typography>
       <Typography >NCERT</Typography>
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