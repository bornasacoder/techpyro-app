import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import { styled } from '@mui/system'
// import { Slider } from 'infinite-react-carousel/lib';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { Box } from '@mui/material';
import SliderItem from './item/SliderItem';
// import SliderItem from './item/Slideritem';


const SliderContainer = styled('div')({
  width:"100%",
  height:"auto",
  // border:'1px solid red',
  // margin:"2% 0.3%",
  overflow:"hidden",
  display:'flex',
  justifyContent:'center',
  margin:'20px 0px',
  backgroundColor:'#FFFFFF',
  // gap:'10px',
  // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  // paddingTop:'80px',
  
  "@media (max-width: 1490px)": {
   margin:"2% -1.5%"
  
  },
  "@media (max-width: 1200px)": {
    width:"100%",
    margin:"0px",
    padding:'10px',
   
   },
  
  
  })
  const SliderInnerContainer = styled('div')({
    display: "flex",
    justifyContent:"center",
    flexDirection:"column",
    width:'84%',
    // gap:'10px',
    
    // alignItems:'center',
    // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
    padding:"0px 100px",
    "@media (max-width: 500px)": {
      width:"100%",
      margin:"0px",
      padding:'0px',
     
     },
  
  })
const PreviousBtn = (props) =>{
  const {className,onClick} = props;
  
   return (
         <div className={className} onClick={onClick}>
          <ChevronLeftOutlined sx={{color:'black',zIndex:'10',fontSize:'2.5rem' }} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className} onClick={onClick}>
       <ChevronRightOutlined sx={{color:'black',  zIndex:'10',fontSize:'2.5rem'}} />
     </div>
   )
}
export default function Block10(props) {
  // console.log( props.cardLinks);
    const settings = {
        prevArrow:<PreviousBtn />,
        nextArrow:<NextBtn />,
        dots: true,
        arrows:true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide:0,
        
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
                speed: 300,
                arrows:true,
              },
            },
             {
              breakpoint: 960,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                speed: 300,
                arrows:false,
                autoplay:true,
              },
            },
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                speed: 300,
                arrows:false,
                autoplay:true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                speed: 300,
                arrows:false,
                autoplay:true,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
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
    
      <SliderContainer> 
                
                <SliderInnerContainer>
                    
                    <Slider {...settings}>
                    { props.cardLinks.map((item)=>(
                     <SliderItem posterLinks={item} />
                    ))}
                    </Slider>
                </SliderInnerContainer>  
            </SliderContainer>
    
  )
}
