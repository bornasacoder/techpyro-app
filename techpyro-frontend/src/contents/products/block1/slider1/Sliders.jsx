import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderItem from './sliderItem/SliderItem';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import "./slider.css";
import { Box, styled } from '@mui/material';
const SliderContainer = styled(Box)(({theme})=>({
  marginLeft:"10px",
  width:"450px",
  height:"250px",
  [theme.breakpoints.down('lg')]: {
    width:'300px',
    height:"250px"
},
[theme.breakpoints.down('md')]: {
  width:'250px',
  height:"150px"
},
[theme.breakpoints.down('sm')]: {
  width:'94vw',
  height:"250px",
  marginLeft:"0px"
},
}))

const PreviousBtn = (props) =>{

  const {className,onClick} = props;
  
   return (
         <div className={className}   onClick={onClick}>
          <ChevronLeftOutlined style={{color:'black',zIndex:'10',fontSize:'3rem' }} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className}  onClick={onClick}>
       <ChevronRightOutlined style={{color:'black',  zIndex:'10',fontSize:'3rem'}} />
     </div>
   )
}


const Sliders = (props) => {
  const settings = {
    dots: false,
    arrows:true,
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
  };
  return (
    <>
       
      <SliderContainer>

      <Slider {...settings} >
        { props.sliderData.map((item)=>(
          <SliderItem posterLinks={item} />
          ))}
        </Slider> 
          </SliderContainer>
   
    </>
  )
}

export default Sliders