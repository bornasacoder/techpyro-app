import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
import "./minislider.css"
import SliderItem from './sliderItem/SliderItem';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

const SliderContainer = styled('div')({
width:"100%",
height:"auto",
margin:"2% 0px 1% 0px",
overflow:"hidden",
boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
"@media (max-width: 1490px)": {
 margin:"3% 0px 2% 0px"

},
"@media (max-width: 1200px)": {
  width:"95%",
  margin:"30px 10px 10px 10px"
 
 },


})
const SliderInnerContainer = styled('div')({
  display: "flex",
  justifyContent:"space-between",
  flexDirection:"column",

  marginLeft:"6px",
  padding:"0px 20px 0px 17px"
})


const PreviousBtn = (props) =>{
  const {className,onClick} = props;
  
   return (
         <div className={className} onClick={onClick} style={{height:"40px",width:"40px",border:"3px solid #fff",borderRadius:"50%",marginLeft:"0px",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <ChevronLeftOutlined style={{color:'#fff',zIndex:'10',fontSize:'2.5rem', }} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className} onClick={onClick} style={{height:"40px",width:"40px",borderRadius:"50%",marginLeft:"-5px",border:"3px solid #fff",display:"flex",justifyContent:"center",alignItems:"center"}}>
       <ChevronRightOutlined style={{color:'#fff',  zIndex:'10',fontSize:'2.5rem'}} />
     </div>
   )
}


const MiniSlider = ({sliderData,category}) => {
 const [filterData, setFilterData] =  useState([])

  
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
            slidesToShow: 5,
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
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:false,
          },
        },
    ]
  };
  useEffect(() => {
    setFilterData(sliderData.filter((item)=>
    item.maincategory.includes(category)
    ))
    console.log(filterData)
    }, [])
  return (
    <>
    <SliderContainer> 
           
       <SliderInnerContainer>
        <Box sx={{display:'flex', justifyContent:'space-between' ,alignItems:"center", marginTop:"10px"}}>
       <Typography variant='h3' sx={{fontSize: {xs:'15px',sm:'20px',md:'24px'},fontFamily:'inherit',color:"#230101"}}>Top Items</Typography> 
       <Typography variant='h3' sx={{fontSize: {xs:'15px',sm:'20px',md:'24px'},fontFamily:'inherit',color:"#230101"}}>View More</Typography> 
       </Box>  
    <Slider {...settings}>
     { filterData && filterData.map((item)=>(
      <SliderItem posterLinks={item} />
      ))}
    </Slider>
      </SliderInnerContainer>  
    </SliderContainer>

      
    </>
  )
}

export default MiniSlider