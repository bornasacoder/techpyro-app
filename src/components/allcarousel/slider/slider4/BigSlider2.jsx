import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {  ArrowCircleLeftOutlined, ArrowCircleRightOutlined, } from '@mui/icons-material';
// import { CalendarMonth, ChatBubbleOutlineRounded, Coffee, DinnerDining, EastOutlined, FavoriteBorder, Liquor, Mood, Person2Outlined, RiceBowlTwoTone, Star, StarHalf } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { styled } from '@mui/system';
// import "./slider.css"
import SliderItem from '../slider4/item/SliderItem';
import { Box, Button } from '@mui/material';

// ..
AOS.init();


const SliderContainer = styled('div')({
  width:"100%",
  height:"auto",
  // margin:"2% 0.3%",
  display:'flex',
  justifyContent:'center',
  overflow:"hidden",
  backgroundColor:"transparent",
  // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  "@media (max-width: 1490px)": {
  //  margin:"2% -1.5%"
  
  
  },
  "@media (max-width: 480px)": {
      backgroundColor:'white',
      width:'100%'
   
   },
  
  
  })
  
  const SliderInnerContainer = styled('div')({
    width:'75%',
      dispay:'flex',
      justifyContainer:'center',
      flexDirection:'column',
      // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
      // padding:"20px 80px",
      "@media (max-with:480px)":{
        backgroundColor:'white',
        padding:'0px',
      }
  })
  
  
  
  const PreviousBtn = (props)=>{
    const{className , onClick} = props;
    return(
      <div className={className} onClick={onClick}>
         <ArrowCircleLeftOutlined  style={{color:'white',backgroundColor:'black',borderRadius:'50%', fontSize:'3rem',zIndex:'10'}}/>
      </div>
    )
  }
  
  const NextBtn = (props)=>{
    const{className , onClick} = props;
    return(
      <div className={className} onClick={onClick}>
         <ArrowCircleRightOutlined  style={{color:'white',backgroundColor:'black',borderRadius:'50%', fontSize:'3rem',zIndex:'20'}}/>
      </div>
    )
  }
  const Box1 = styled('btn')({
    display:'flex',
    gap:'7px',
    marginTop:'10px'
})
const Box2 = styled('btn')({
    display:'flex',
    gap:'7px',
    marginTop:'20px',
    padding:'40px 0px 24px'
    
})

  const Img = styled('img')({
    height:'290px',
    width:'350px',
    marginTop:'-150px'
})
const Boxhead1 = styled(Box)({
 width:'100%',
 display:'flex',
 justifyContent:'center'
})
const Boxhead2 = styled(Box)({
  width:'70%'
})
export default function BigSlider2(props){
  
  const settings = {
    dots: true,
    arrows:true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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
            autoplay:true,
            dots: true,
            infinite: true,
          },
        },
    ]
  };
  return(
    <>     
          <Boxhead1 sx={{backgroundColor:'white'}}>
            <Boxhead2>
                    <h1>Inspired students. Inspired results</h1>
                    <p>Our results reflect the passion, hardwork and efforts 
                      of our students and teachers.</p>
                    <Box1>
                    <Button sx={{backgroundColor:'#FF693D',color:'white'}} variant='outlined'>Explore Courses</Button>
                    <Button sx={{backgroundColor:'black',color:'white'}} variant='outlined'>View Our results</Button>
                    </Box1>
                    <Box2 >
                        <Button variant='outlined' sx={{height:'31px',width:'80px'}}>All</Button>
                        <Button variant='outlined' sx={{height:'31px',width:'90px'}}>IIT-JEE</Button>
                        <Button variant='outlined' sx={{height:'31px',width:'80px'}}>NEET</Button>
                        <Button variant='outlined' sx={{height:'31px',width:'125px'}}>10th Board</Button>
                        <Button variant='outlined' sx={{height:'31px',width:'125px'}}>12th Board</Button>
                        <Button variant='outlined' sx={{height:'31px',width:'80px'}}>NTSE</Button>
                        <Button variant='outlined' sx={{height:'31px',width:'115px'}}>Olympiad</Button>
                        <Img src="https://www.vedantu.com/cdn/images/new-home-page/B2/results-hero-image.webp"/>
                    </Box2>
                  </Boxhead2>
                </Boxhead1>
            
            <SliderContainer sx={{backgroundColor:'white'}}>
              <SliderInnerContainer>
                <Slider {...settings}>
                  {props.sliderData.map((item)=>(
                    <SliderItem posterLinks={item} />
                    ))}
                </Slider>
                </SliderInnerContainer>
            </SliderContainer>
      </>
  )
}