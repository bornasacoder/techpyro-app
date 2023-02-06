import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
// import "./BigSlider.css"
import SliderItem from '../../carousel/carousel2/sliderItem/SliderItem';
import {  ArrowCircleLeftOutlined, ArrowCircleRightOutlined, ChevronLeftOutlined, ChevronRightOutlined, } from '@mui/icons-material';
import { color } from '@mui/system';
import { Box, Typography } from '@mui/material';
import SliderEtem from './sliderItem/SliderEtem';
const SliderContainer = styled('div')({
width:"100%",
height:"auto",
padding:'50px 0px',
overflow:"hidden",
backgroundColor:'#F6F5F5',
display:'flex',
justifyContent:"center",
// border:'1px solid black',
// boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
"@media (max-width: 1490px)": {
  // margin:"2% "


},
"@media (max-width: 480px)": {
   
    width:'100%',
   margin:'0px'
 },


})
const SliderInnerContainer = styled('div')({
  display: "flex",
  width:"700px",
  height:"300px",
  justifyContent:"center",
  // margin:'0px 100px',
  backgroundColor:'#F6F5F5',
  flexDirection:"column", 
  // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
 paddingLeft:'0px',
  "@media (max-width: 480px)": {
    
   padding:'0px',
 margin:'0px'
 },
})



const PreviousBtn = (props) =>{
  const {className,onClick} = props;
  
   return (
         <div className={className} onClick={onClick}>
          <ChevronLeftOutlined sx={{color:'black',zIndex:'10',fontSize:'2.5rem',border:'3px solid rgba(0,0,0,0.5)',borderRadius:'50px', backgroundColor:'#FFFFFF',marginLeft:'-5px'}} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className} onClick={onClick}>
       <ChevronRightOutlined sx={{color:'black',  zIndex:'10',fontSize:'2.5rem',border:'3px solid rgba(0,0,0,0.5)',borderRadius:'50px', backgroundColor:'#FFFFFF',marginRight:'300px'}} />
     </div>
   )
}


const Sliders = (props) => {
  
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
   
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    // speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide:0,
    prevArrow:<PreviousBtn />,
    nextArrow:<NextBtn />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:true,
          },
        },
         {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
           
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
           
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          },
        },
    ]
  };
  return (
    <>
 <SliderContainer>         
       <SliderInnerContainer>
    <Slider {...settings}>
     { props.sliderData.map ((item)=>(
      <SliderEtem posterLinks={item} />
      ))}
    </Slider>
      </SliderInnerContainer>  
    </SliderContainer>


      <Box sx={{width:'100%',height:{xs:'auto',sm:'auto',md:'200px'}, display:'flex',justifyContent:'center',alignItems:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:{xs:'20px',sm:'20px',md:'0px'},backgroundColor:'#F6F5F5',paddingBottom:'50px'}}>
        <Box sx={{display:'flex'}}>
          <Box sx={{display:'flex',color:'black',flexDirection:'column',justifyContent:'center',alignItems:'center',width:{xs:'130px',sm:'200px',md:'200px'},gap:{xs:'10px',sm:'10px',md:'10px'}}}>
            
            <Typography sx={{fontSize:{xs:'25px',sm:'30px',md:'25px'},fontWeight:'600',color:'blue'}}>3456</Typography>
            <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'400'}}>Happy Clients</Typography>
          </Box>

          <Box sx={{display:'flex',color:'black',flexDirection:'column',justifyContent:'center',alignItems:'center',width:{xs:'130px',sm:'200px',md:'200px'},borderRight:{xs:'none',sm:'none',md:'none'},gap:{xs:'10px',sm:'10px',md:'10px'},textAlign:'center'}}>
            
            <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'25px'},fontWeight:'600',color:'green'}}>7564</Typography>
            <Typography sx={{fontSize:{xs:'15px',sm:'25px',md:'20px'},fontWeight:'400'}}>Members</Typography>
          </Box>
          </Box>

          <Box sx={{display:'flex',}}>
          <Box sx={{display:'flex',color:'black',flexDirection:'column',justifyContent:'center',alignItems:'center',width:{xs:'130px',sm:'200px',md:'200px'},borderRight:'none',gap:{xs:'10px',sm:'10px',md:'10px'}}}>
            
            <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'25px'},fontWeight:'600',color:'orange'}}>50+</Typography>
            <Typography sx={{fontSize:{xs:'15px',sm:'25px',md:'20px'},fontWeight:'400'}}>Staffs</Typography>
          </Box>

          <Box sx={{display:'flex',color:'black',flexDirection:'column',justifyContent:'center',alignItems:'center',width:{xs:'130px',sm:'200px',md:'200px'},gap:{xs:'10px',sm:'10px',md:'0px'},textAlign:'center'}}>
            
            <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'25px'},fontWeight:'600',color:'red'}}>20k</Typography>
            <Typography sx={{fontSize:{xs:'15px',sm:'25px',md:'20px'},fontWeight:'400'}}> Our Followers</Typography>
          </Box>
          </Box>
           </Box>
   

      
    </>
  )
}

export default Sliders