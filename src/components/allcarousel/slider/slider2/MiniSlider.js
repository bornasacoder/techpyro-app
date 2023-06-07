import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
// import "./BigSlider.css"

import {  ArrowCircleLeftOutlined, ArrowCircleRightOutlined, ChevronLeftOutlined, ChevronRightOutlined, } from '@mui/icons-material';
import { color } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';
import SliderOtem from './sliderItem/SliderOtem';
const SliderContainer = styled('div')({
width:"100%",
height:"auto",
// margin:'0px 100px',
overflow:"hidden",
// backgroundColor:'#FFFFFF',
// border:'1px solid black',
// boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
"@media (max-width: 1490px)": {
  // margin:"2% "


},
"@media (max-width: 480px)": {
    backgroundColor:'transparent',
    width:'100%',
   margin:'0px',
   display:'none',
 },


})
const SliderInnerContainer = styled('div')({
  display: "flex",
  backgroundColor:'transparent',
  justifyContent:"center",
  margin:'0px 150px',
  // backgroundColor:'#FFFFFF',
  flexDirection:"column", 
  // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
 paddingLeft:'20px',
  "@media (max-width: 480px)": {
    backgroundColor:'white',
   paddingLeft:'0px',
   margin:'0px '
 
 },
})



const PreviousBtn = (props) =>{
  const {className,onClick} = props;
  
   return (
         <div className={className} onClick={onClick}>
          <ChevronLeftOutlined sx={{color:'#E294DF',zIndex:'10',fontSize:'2.5rem',marginLeft:'-40px',fontSize:'50px'}} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className} onClick={onClick}>
       <ChevronRightOutlined sx={{color:'#E294DF',  zIndex:'20',fontSize:'2.5rem',marginLeft:'60px',fontSize:'50px'}} />
     </div>
   )
}


const MiniSlider = (props) => {
  
  const settings = {
    dots: false,
    arrows:true,
    infinite:false,
    speed: 500,
    slidesToShow: 4.3,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: "linear",
    initialSlide:0,
    prevArrow:<PreviousBtn />,
    nextArrow:<NextBtn />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            speed: 300,
            arrows:true,
          },
        },
         {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            // autoplay:true,
            // dots: true,
          },
        },
    ]
  };
  return (
    <>
     <Box sx={{display:'flex',padding:{xs:'10px',sm:'30px',md:'100px 0px 30px 0px'},justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
       <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'50px'},fontWeight:'500',color:'black',fontFamily:'cursive'}}>The learning tree</Typography>
       <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500',color:'black'}}>A student's go-to blog for the latest stories,</Typography>
       <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500',color:'black'}}>discoveries, fun activities, exam tips, and more.</Typography>
       </Box>
    <SliderContainer>         
       <SliderInnerContainer>
    <Slider {...settings}>
     { props.sliderData.map ((item)=>(
      <SliderOtem posterLinks={item} />
      ))}
    </Slider>
      </SliderInnerContainer>  
    </SliderContainer>

      <Box sx={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
      <Button variant='contained' sx={{backgroundColor:'#FE8C3C',color:'white',border:'1px solid black',borderRadius:'10px',"&:hover":{backgroundColor:'black',color:'white'},width:'150px',fontSize:'20px'}}>Explore All</Button>
      </Box>
    </>
  )
}

export default MiniSlider