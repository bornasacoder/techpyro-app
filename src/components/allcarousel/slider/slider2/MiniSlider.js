import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
// import "./BigSlider.css"
import SliderItem from '../../carousel/carousel2/sliderItem/SliderItem';
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
          <ChevronLeftOutlined sx={{color:'black',zIndex:'10',fontSize:'2.5rem',border:'3px solid rgba(0,0,0,0.5)',borderRadius:'0px', backgroundColor:'#FFFFFF',marginLeft:'10px'}} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className} onClick={onClick}>
       <ChevronRightOutlined sx={{color:'black',  zIndex:'10',fontSize:'2.5rem',border:'3px solid rgba(0,0,0,0.5)',borderRadius:'0px', backgroundColor:'#FFFFFF',marginRight:'300px'}} />
     </div>
   )
}


const MiniSlider = (props) => {
  
  const settings = {
    dots: false,
    arrows:true,
    infinite:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
            arrows:true,
            // autoplay:true,
            // dots: true,
          },
        },
    ]
  };
  return (
    <>
     <Box sx={{display:'flex',padding:{xs:'20px',sm:'30px',md:'0px 0px 30px 200px'},justifyContent:'center',flexDirection:'column'}}>
       <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'30px'},fontWeight:'500',color:'black'}}>Popular Courses</Typography>
       <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500',color:'black'}}>Limitless learning, more possibilities</Typography>
      
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
{/* 
      <Box sx={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
      <Button variant='contained' sx={{backgroundColor:'#FE8C3C',color:'white',border:'1px solid black',borderRadius:'10px',"&:hover":{backgroundColor:'black',color:'white'},width:'150px',fontSize:'20px'}}>Explore All</Button>
      </Box> */}
    </>
  )
}

export default MiniSlider