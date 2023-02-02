import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "./swiggyslider.css"
import { Box, Typography } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TvIcon from '@mui/icons-material/Tv';
import ShowerIcon from '@mui/icons-material/Shower';
import SmartScreenIcon from '@mui/icons-material/SmartScreen';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import LaptopIcon from '@mui/icons-material/Laptop';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import {Link} from 'react-router-dom';





const SwiggySlider = () => {
  
  const settings = {
    dots: true,
    arrows:true,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide:0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
            speed: 300,
            arrows:true,
          },
        },
         {
          breakpoint: 960,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
            dots: true,
            infinite: true,
          },
        },
    ]
  };
  return (
    <>
      
<Box sx={{width:{lg:"94%", md:'90%', sm:"99%", xs:"98%"}, height:{xl:'290px',lg:'300px',md:'350px',sm:'400px',xs:'330px'}, display:"flex", justifyContent:"center", flexDirection:"column", marginLeft:{lg:"80px", md:"60px", sm:"10px", xs:"5px"},marginTop:{sm:'0px'}}} >

     <Box>
         <Typography sx={{display:'flex',justifyContent:'center',fontSize:{xs:'37px',sm:'40px',md:'50px'},textAlign:'center',color:'black', marginBottom:"40px",}}>Shop our Limited time offers </Typography> 
       </Box>
       <Box>
   <Slider {...settings}>
         <Box sx={{display:'flex',flexDirection:'column', alignItems:"center",justifyContent:'center' }}>
           <Link to="/verifiedicon" ><VerifiedIcon sx={{fontSize:'50px',color:'white',backgroundColor:'black',borderRadius:'40%',marginBottom:'7px',display:'flex' ,justifyContent:'center',alignItems:"center","&:hover":{transform:'scale(1.2)'} ,}}></VerifiedIcon></Link>
           <Link to="/featuresDeals" style={{textDecoration:'inherit'}}><Typography  sx={{color:'black',"&:hover":{textDecoration:'underline'}}}  >Featured Deals</Typography></Link>
         </Box>
         <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:"center"}}>
         <Link to="/gift" ><CardGiftcardIcon sx={{fontSize:'50px',color:'white',backgroundColor:'black',borderRadius:'40%',marginBottom:'7px' ,"&:hover":{transform:'scale(1.2)'}}}></CardGiftcardIcon></Link>
           <Link to="/buyMoreSaveMore" style={{textDecoration:'inherit'}}><Typography sx={{color:'black',"&:hover":{textDecoration:'underline'} }} >Buy more </Typography></Link>
         </Box>
         <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:"center"}}>
         <Link to="/smartPhoneicon" ><SmartphoneIcon sx={{fontSize:'50px',color:'white',backgroundColor:'black',borderRadius:'40%',marginBottom:'7px' ,"&:hover":{transform:'scale(1.2)'}}}></SmartphoneIcon></Link>
           <Link to="/mobiles" style={{textDecoration:'inherit'}}><Typography sx={{color:'black',"&:hover":{textDecoration:'underline'} }} >Mobiles</Typography></Link>
         </Box>
         <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:"center"}}>
         <Link to="/Tvicon" ><TvIcon sx={{fontSize:'50px',color:'white',backgroundColor:'black',borderRadius:'40%',marginBottom:'7px' ,"&:hover":{transform:'scale(1.2)'}}}></TvIcon></Link>
           <Link to="/television"  style={{textDecoration:'inherit'}}><Typography sx={{color:'black',"&:hover":{textDecoration:'underline'} }} >Television</Typography></Link>
         </Box>
         <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:"center"}}>
         <Link to="/showericon" ><ShowerIcon sx={{fontSize:'50px',color:'white',backgroundColor:'black',borderRadius:'40%',marginBottom:'7px' ,"&:hover":{transform:'scale(1.2)'}}}></ShowerIcon></Link>
           <Link to="/shower" style={{textDecoration:'inherit'}}><Typography sx={{color:'black', "&:hover":{textDecoration:'underline'}}} >Shower</Typography></Link>
         </Box>
         <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:"center"}}>
         <Link to="/smartScreenicon" ><SmartScreenIcon sx={{fontSize:'50px',color:'white',backgroundColor:'black',borderRadius:'40%',marginBottom:'7px' ,"&:hover":{transform:'scale(1.2)'}}}></SmartScreenIcon></Link>
           <Link to="smartscreen" style={{textDecoration:'inherit'}}><Typography sx={{color:'black',"&:hover":{textDecoration:'underline'} }} >Smart screen</Typography></Link>
         </Box>
         <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:"center"}}>
         <Link to="/phoneLinkicon" ><PhonelinkIcon sx={{fontSize:'50px',color:'white',backgroundColor:'black',borderRadius:'30%',marginBottom:'7px' ,"&:hover":{transform:'scale(1.2)'}}}></PhonelinkIcon></Link>
          <Link to="/tablet&Wireless" style={{textDecoration:'inherit'}}> <Typography sx={{color:'black',"&:hover":{textDecoration:'underline'} }} >Tablet&Wireless</Typography></Link>
         </Box>
         <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:"center"}}>
         <Link to="/laptopicon" ><LaptopIcon sx={{fontSize:'50px',color:'white',backgroundColor:'black',borderRadius:'40%',marginBottom:'7px' ,"&:hover":{transform:'scale(1.2)'}}}></LaptopIcon></Link>
           <Link to="/laptop" style={{textDecoration:'inherit'}}><Typography sx={{color:'black',"&:hover":{textDecoration:'underline'} }} >Laptop</Typography></Link>
         </Box>
         <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center', alignItems:"center"}}>
         <Link to="/microwaveicon" ><MicrowaveIcon sx={{fontSize:'50px',color:'white',backgroundColor:'black',borderRadius:'40%',marginBottom:'7px' ,"&:hover":{transform:'scale(1.2)'}}}></MicrowaveIcon></Link>
           <Link to="/microwave" style={{textDecoration:'inherit'}}><Typography sx={{color:'black',"&:hover":{textDecoration:'underline'} }} >Microwave</Typography></Link>
         </Box>
</Slider>
       </Box>
</Box>

       </>
  )
}

export default SwiggySlider