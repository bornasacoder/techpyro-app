import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderItem from './sliderItem/SliderItem';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import {RestaurantsProducts} from "../../../../../constants/websites/Restaurant"
import "./slider.css";
import { Box, styled } from '@mui/material';
const SliderContainer = styled(Box)(({theme})=>({
  marginLeft:"10px",
  width:"450px",
  height:"250px",
 
  marginBottom:"50px",
  [theme.breakpoints.down('lg')]: {
    width:'300px',
    height:"250px",
    
  marginBottom:"40px",
},
[theme.breakpoints.down('md')]: {
  width:'300px',
  height:"300px",
  marginLeft:"0px",
  
  marginBottom:"40px",
},
[theme.breakpoints.down('sm')]: {
  width:'100%',
  height:"300px",
  marginBottom:"40px",
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


const SlidersLeft = (props) => {
  const settings = {
    dots:true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide:0,
    prevArrow:<PreviousBtn />,
    nextArrow:<NextBtn />,
  };
  console.log(RestaurantsProducts.data[0].productsimage);
  return (
    <>
       
      <SliderContainer>

      <Slider {...settings} >
        { RestaurantsProducts.data[0].productsimage.map((item)=>(
          <SliderItem posterLinks={item} />
          ))}
        </Slider> 
          </SliderContainer>
   
    </>
  )
}

export default SlidersLeft