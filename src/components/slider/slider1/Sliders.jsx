import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
// import SliderItem from './sliderItem/SliderItem';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
// import SliderHeader from './sliderhead/SliderHeader';
import Card1 from 'components/card/card1/Card1';
import "./minislider.css"
import { useEffect } from 'react';
const SliderContainer = styled('div')({
width:"100%",
height:"auto",
overflow:"hidden",
})
const SliderInnerContainer = styled('div')(({ theme })=>({
  display: "flex",
  justifyContent:"space-between",
  flexDirection:"column",
  margin:"20px 0px 0px 20px",
  padding:"0px 40px ",
  [theme.breakpoints.down("sm")]: {
    marginLeft:'0px',
    padding:"0px",
    
    
  },
}));


const PreviousBtn = (props) =>{
  const {className,onClick} = props;
  
   return (
         <div className={className}   onClick={onClick} style={{height:"40px",width:"40px",background:"gray",borderRadius:"50%",marginLeft:"-5px"}}>
          <ChevronLeftOutlined style={{color:'black',zIndex:'10',fontSize:'2.5rem' }} />
         </div>  
   )
}

const NextBtn = (props) =>{

   const {className,onClick} = props;
   return (
     <div  className={className}  onClick={onClick} style={{height:"40px",width:"40px",background:"gray",borderRadius:"50%",marginRight:"-35px"}}>
       <ChevronRightOutlined style={{color:'black',  zIndex:'10',fontSize:'2.5rem',}} sx={{marginRight:"-40px"}}/>
     </div>
   )
}


const Sliders = ({sliderData,category}) => {
  console.log(sliderData)
  // console.log(category)

  // console.log(props.sliderData);
 const [filterData, setFilterData] =  useState([])
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
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
          },
        },
         {
          breakpoint: 980,
          settings: {
            slidesToShow: 3.2,
            slidesToScroll: 1,
            // autoplay: true,
            speed: 300,
            arrows:false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
          },
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 2.8,
            slidesToScroll: 1,
          
            speed: 300,
            arrows:false,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 2.4,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1,
            infinite:true,
            speed: 300,
            arrows:false,
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
      {/* <SliderHeader /> */}
    <Slider {...settings}>
     { filterData && filterData.map((item)=>(
      <Card1 sliderData={item} />
      ))}
    </Slider>
      </SliderInnerContainer>  
    </SliderContainer>

      
    </>
  )
}

export default Sliders