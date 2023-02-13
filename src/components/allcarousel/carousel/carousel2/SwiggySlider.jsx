import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
import "./swiggy.css"
import SliderItem from '../../carousel/carousel2/sliderItem/SliderItem';
import {  ArrowCircleLeftOutlined, ArrowCircleRightOutlined, ChevronLeftOutlined, ChevronRightOutlined, } from '@mui/icons-material';
import { color } from '@mui/system';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const SliderContainer = styled('div')({
width:"auto",
height:"auto",
// padding:"-10px 100px",
position:'',
overflow:"hidden",
zIndex:'-100',
backgroundColor:"transparent",
// boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
"@media (max-width: 1490px)": {
//  margin:"2% -1.5%"


},
"@media (max-width: 480px)": {
    backgroundColor:'white',
    width:'100%',
    padding:'0px',
 
 },


})
const SliderInnerContainer = styled('div')({
  display: "flex",
  width:'100%',
  justifyContent:"center",
  backgroundColor:'#FFFFFF',
  zIndex:'-10000',
  // alignItems:'center',
  flexDirection:"column",
  // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  padding:"0px ",
  "@media (max-width: 480px)": {
    backgroundColor:'white',
   padding:'0px'
 
 },
})


const PreviousBtn = (props) =>{
  const {className,onClick} = props;
  
   return (
         <div className={className}   onClick={onClick}>
          <ChevronLeftOutlined style={{color:'white',zIndex:'200',fontSize:'3rem' ,border:'5px solid gray'}} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className}  onClick={onClick}>
       <ChevronRightOutlined style={{color:'white',  zIndex:'20',fontSize:'3rem',border:'5px solid gray'}} />
     </div>
   )
}


const SwiggySlider = (props) => {
  
  const settings = {
    dots: true,
    arrows:true,
    infinite:false,
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
  return (
    <>
     {/* <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:'80px'}}>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'45px'},fontWeight:'700',color:'black',paddingLeft:{xs:'10px',sm:'60px',md:'120px'}}}>NEW ARRIVALS</Typography>
       
       </Box> */}
    <SliderContainer>         
       <SliderInnerContainer>
    <Slider {...settings}>
     { props.sliderData.map((item)=>(
      <SliderItem posterLinks={item} />
      ))}
    </Slider>
      </SliderInnerContainer>  
    </SliderContainer>

      <Box sx={{display:{xs:'flex',sm:'flex',md:'none'},justifyContent:'space-between'}}>
        <Link to='/Admission Form' style={{textDecorationLine:'none'}}>
      <Button variant='contained' sx={{fontSize:'20px',backgroundColor:'#A81E2A',color:'white',borderRadius:'0px',"&:hover":{backgroundColor:'white',color:'#0D2D62'},width:'120px'}}>Apply</Button>
      </Link>

      <Link to='/Admission Form' style={{textDecorationLine:'none'}}>
      <Button variant='contained' sx={{fontSize:'20px',backgroundColor:'#A81E2A',color:'white',borderRadius:'0px',"&:hover":{backgroundColor:'white',color:'#0D2D62'},width:'120px'}}>Equire</Button>
      </Link>

      <Link to='/Login' style={{textDecorationLine:'none'}}>
      <Button variant='contained' sx={{fontSize:'20px',backgroundColor:'#A81E2A',color:'white',borderRadius:'0px',"&:hover":{backgroundColor:'white',color:'#0D2D62'},width:'110px'}}>PayFees</Button>
      </Link>
      </Box>
    </>
  )
}

export default SwiggySlider