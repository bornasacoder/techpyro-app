import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
// import "../minislider/minislider.css"
import SliderItem from './sliderItem/SliderItem';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
// import { createTheme } from '@mui/material';

const SliderContainer = styled('div')({
width:"99%",
height:"auto",
display:'flex',
flexDirection:'column',
alignItems:'center',
justifyContent:'center',
margin:"2% 0.3%",
overflow:"hidden",
backgroundColor:"primary",
// boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
"@media (max-width: 900px)": {


},
"@media (max-width: 600px)": {
  width:"100%",
 
 
 },


})
const SliderInnerContainer = styled('div')({
  display: "flex",
  width:"85%",
  justifyContent:"space-between",
  flexDirection:"column",
  // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  padding:"0px 40px",
  backgroundColor:"primary",
  "@media (max-width: 900px)": {


  },
  "@media (max-width: 600px)": {
    width:"100%",
   
   
   },
})


const PreviousBtn = (props) =>{
  const {className,onClick} = props;
  
   return (
         <div className={className} onClick={onClick}>
          <ChevronLeftOutlined style={{color:'black',zIndex:'10',fontSize:'2.5rem' }} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className} onClick={onClick}>
       <ChevronRightOutlined style={{color:'black',  zIndex:'10',fontSize:'2.5rem'}} />
     </div>
   )
}


const MiniSlider = (props) => {
  
  const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    prevArrow:<PreviousBtn />,
    nextArrow:<NextBtn />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll:1,
            speed: 300,
            arrows:false,
          },
        },
    //      {
    //       breakpoint: 980,
    //       settings: {
    //         slidesToShow: 7,
    //         slidesToScroll: 3,
    //         speed: 300,
    //         arrows:false,
    //       },
    //     },
    //     {
    //       breakpoint: 800,
    //       settings: {
    //         slidesToShow: 5,
    //         slidesToScroll: 3,
    //         speed: 300,
    //         arrows:false,
    //       },
    //     },
    //     {
    //       breakpoint: 680,
    //       settings: {
    //         slidesToShow: 4,
    //         slidesToScroll: 2,
    //         speed: 300,
    //         arrows:false,
    //       },
    //     },
    //     {
    //       breakpoint: 500,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 2,
    //         speed: 300,
    //         arrows:false,
    //       },
    //     },
     ]
  };
  return (
    <>
    <SliderContainer>  
       <Box sx={{display:'flex', justifyContent:'space-between',width:'80%'}}>
       <Typography variant='h3' sx={{fontSize: {xs:'15px',sm:'20px',md:'30px'},fontFamily:'inherit'}}>Our Chef</Typography> 
       <Typography variant='h3' sx={{fontSize: {xs:'15px',sm:'20px',md:'30px'},fontFamily:'inherit'}}>Know More</Typography> 
       </Box>         
       <SliderInnerContainer>
    <Slider {...settings}>
     { props.sliderData.data.map((item)=>(
      <SliderItem posterLinks={item} />
      ))}
    </Slider>
      </SliderInnerContainer>  
    </SliderContainer>

      
    </>
  )
}

export default MiniSlider