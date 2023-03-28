import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
import "./minislider.css"
import SliderItem from './sliderItem/SliderItem';
import { ArrowLeftOutlined, ArrowRightAltOutlined, ArrowRightOutlined, ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

const SliderContainer = styled('div')({
width:"100%",
height:"auto",
display:'flex',
justifyContent:'center',
marginTop:'60px',
// margin:"2% 0.3%",
overflow:"hidden",
// boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
"@media (max-width: 900px)": {


},
"@media (max-width: 600px)": {
  
 
 },


})
const SliderInnerContainer = styled('div')({
  width:"60%",
  display: "flex",
  justifyContent:"space-between",
  flexDirection:"column",
  // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  padding:"0px 40px",

  "@media (max-width: 900px)": {
width:'100%',

  },
  "@media (max-width: 600px)": {
    width:'100%',
   
   },
})


const PreviousBtn = (props) =>{
  const {className,onClick} = props;
  
   return (
         <div className={className} onClick={onClick}>
          <ArrowLeftOutlined sx={{color:'black',zIndex:'10',fontSize:'2rem',border:'2px solid black',borderRadius:'50px',marginLeft:'-10px' }} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className} onClick={onClick}>
       <ArrowRightOutlined sx={{color:'black',  zIndex:'10',fontSize:'2rem',border:'2px solid black',borderRadius:'50px',marginLeft:'20px'}} />
     </div>
   )
}


const MiniSlider = (props) => {
  
  const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:false,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:false,
          },
        },
    ]
  };
  return (
    <>
    <SliderContainer> 
           
       <SliderInnerContainer>
        {/* <Box sx={{display:'flex', justifyContent:'space-between'}}>
       <Typography variant='h3' sx={{fontSize: {xs:'15px',sm:'20px',md:'30px'},fontFamily:'inherit'}}>Fast Food</Typography> 
       <Typography variant='h3' sx={{fontSize: {xs:'15px',sm:'20px',md:'30px'},fontFamily:'inherit'}}>View More</Typography> 
       </Box>   */}
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