import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
// import "./BigSlider.css"

import {  ArrowCircleLeftOutlined, ArrowCircleRightOutlined, ArrowForward, ChevronLeftOutlined, ChevronRightOutlined, } from '@mui/icons-material';
import { color } from '@mui/system';
import { Box, Typography } from '@mui/material';
import SliderAtem from './sliderItem/SliderAtem';
const SliderContainer = styled('div')({
width:"500px",
height:"500px",
margin:'0px 0px 0px 200px',
overflow:"hidden",
display:'flex',
justifyContent:'center',
flexDirection:'column',
// alignItems:'center',
backgroundColor:'#FFFFFF',
position:'static',
// border:'1px solid black',
boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
borderRadius:'20px',

"@media (max-width: 480px)": {
    // backgroundColor:'transparent',
    width:'100%',
   margin:'0px',
   boxShadow:'none'
 },


})
const SliderInnerContainer = styled('div')({
  display: "flex",
  backgroundColor:'transparent',
  justifyContent:"center",
  // alignItems:'center',
  margin:'30px 70px',
  // backgroundColor:'#FFFFFF',
  flexDirection:"column", 
  // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
//  paddingLeft:'20px',
  "@media (max-width: 480px)": {
    // backgroundColor:'white',
  //  paddingLeft:'60px 30px',
   margin:'0px 10px'
 
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


const BigSlider = (props) => {
  
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
            arrows:true,
            autoplay:true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:true,
            autoplay:true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            // arrows:true,
            // autoplay:true,
            // dots: true,
          },
        },
    ]
  };
  return (
    <>
     
    <SliderContainer>         
       <SliderInnerContainer>
    <Slider {...settings}>
     { props.sliderData.map((item)=>(
      <SliderAtem posterLinks={item} />
      ))}
    </Slider>
      </SliderInnerContainer>  
    </SliderContainer>

      {/* <Box sx={{display:'flex',padding:{xs:'10px',sm:'30px',md:'0px'},display:'flex',justifyContent:'center',padding:'10px'}}>
       <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'20px'},fontWeight:'500',color:'white',backgroundColor:'#4A68E4',height:'50px',justifyContent:'center',alignItems:'center',display:'flex',gap:'20px',borderRadius:'20px',padding:'0px 10px'}}>1000s of reviews by happy students <ArrowForward /></Typography>
       
       </Box> */}
    </>
  )
}

export default BigSlider