import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
import {  ChevronLeftOutlined, ChevronRightOutlined, } from '@mui/icons-material';
import { Box } from '@mui/material';
import SliderItem from './sliderItem/SliderItem';
import   '../slider3/sliderItem/BigSlider.css'


const SliderContainer = styled('div')({
    width:"100%",
    overflow:"hidden",
    background:'#fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:"100px",
    "@media (max-width: 480px)": {
        backgroundColor:'transparent',
        width:'100%',
      margin:'0px'
    },


})
const SliderInnerContainer = styled('div')({
  display: "flex",
  height:'300px',
  width:'100%',
  gap:'15px',
  background:'#fff',
  justifyContent:"center",
  flexDirection:"column",
  "@media (max-width: 480px)": {
    backgroundColor:'white',
 },

})



const PreviousBtn = (props) =>{
  const {className,onClick} = props;
  
   return (
         <div className={className} onClick={onClick}>
           <ChevronLeftOutlined sx={{color:'black', cursor:'pointer',zIndex:'500',fontSize:'2.5rem' }} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className} onClick={onClick}>
       <ChevronRightOutlined sx={{color:'black',cursor:'pointer',  zIndex:'500',fontSize:'2.5rem'}} />
     </div>
   )
}


const BigSlider = (props) => {
  
  const settings = {
    dots: true,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    initialSlide:0,
    prevArrow:<PreviousBtn />,
    nextArrow:<NextBtn />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
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
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
            dots: true,
          },
        },
        {
          breakpoint:480,
          settings:{
            slidesToShow: 1 ,
            slidesToScroll: 1 ,
            speed: 300 ,
            arrows:false ,
            autoplay:true ,
            dots: true ,
          }
        },
    ]
  };
  return (
    <>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center', background:"white"}}>
              <SliderContainer>         
                  <SliderInnerContainer>
                      <Slider {...settings}>
                          { props.sliderData.map((item ,id)=>(
                             <SliderItem key={id} posterLinks={item} />
                            ))}
                      </Slider>
                  </SliderInnerContainer>  
              </SliderContainer>
          
          </Box>

      
    </>
  )
}

export default BigSlider