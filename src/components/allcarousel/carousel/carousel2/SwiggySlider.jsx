import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
import "./swiggyslider.css"
import SliderItem from '../../carousel/carousel2/sliderItem/SliderItem';
import {  ArrowBack, ArrowCircleLeftOutlined, ArrowCircleRightOutlined, ArrowForward, } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
const SliderContainer = styled('div')({
width:"100%",
height:"auto",
display:'flex',

justifyContent:'center',
backgroundColor:'transparent',
overflow:"hidden",
backgroundColor:"#171A29",
// boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
"@media (max-width: 900px)": {
//  margin:"2% -1.5%"
backgroundColor:'transparent',
flexDirection:'column',

},
"@media (max-width: 480px)": {
    backgroundColor:'transparent',
    flexDirection:'column',
 },


})
const SliderInnerContainer = styled('div')({
  display: "flex",
  justifyContent:"center",
  backgroundColor:'transparent',
  flexDirection:"column",
  height:'350px',
  width:'85%',
  // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  // padding:"20px 40px"
  // border:'1px solid black'
  "@media (max-width: 900px)": {
    backgroundColor:'transparent',
   height:'220px',
 width:'100%'
  
  },
  "@media (max-width: 600px)": {
   backgroundColor:'transparent',
   height:'220px',
 width:'100%'
 },
})


const PreviousBtn = (props) =>{
  const {className,onClick} = props;
  
   return (
         <div className={className}   onClick={onClick}>
          <ArrowBack sx={{color:'black',zIndex:'100',background:'white',borderRadius:'50px',fontSize:'40px',marginLeft:'20px' }} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className}  onClick={onClick}>
       <ArrowForward sx={{color:'black',zIndex:'100',background:'white',borderRadius:'50px',fontSize:'40px' }} />
     </div>
   )
}


const SwiggySlider = (props) => {
  
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
    initialSlide:0,
    prevArrow:<PreviousBtn />,
    nextArrow:<NextBtn />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
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
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
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
          },
        },
    ]
  };
  return (
    <>
    <SliderContainer>  
    <Box sx={{display:{xs:'block',sm:'block',md:'none'},paddingLeft:'10px'}}>
       <Typography variant='h3' sx={{fontSize: {xs:'25px',sm:'20px',md:'30px'},fontFamily:'inherit'}}>Today's Featured</Typography> 
      
       </Box>        
       <SliderInnerContainer>
    <Slider {...settings}>
     { props.sliderData.map((item)=>(
      <SliderItem posterLinks={item} />
      ))}
    </Slider>
      </SliderInnerContainer>  
    </SliderContainer>

      
    </>
  )
}

export default SwiggySlider