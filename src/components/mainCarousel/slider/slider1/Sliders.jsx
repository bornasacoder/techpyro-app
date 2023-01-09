import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
import SliderItem from './sliderItem/SliderItem';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import SliderHeader from './sliderhead/SliderHeader';
import "./slider.css";

const SliderContainer = styled('div')({
width:"99%",
height:"auto",
margin:"0 2px 10px 2px",
overflow:"hidden",
// boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
// "@media (max-width: 1490px)": {
//  margin:"2% -1.5%"

// },
// "@media (max-width: 1200px)": {
//   width:"95%",
//   margin:"1% 1rem"
 
//  },

})
const SliderInnerContainer = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent:"space-between",
  flexDirection:"column",
  boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  padding:"0 10px 0 20px",
  [theme.breakpoints.down('sm')]: {
    padding:"0 0 0 4px",
},
}));


const PreviousBtn = (props) =>{
  const {className,onClick} = props;
  
   return (
         <div className={className}   onClick={onClick}>
          <ChevronLeftOutlined style={{color:'black',zIndex:'10',fontSize:'2.5rem' }} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className}  onClick={onClick}>
       <ChevronRightOutlined style={{color:'black',  zIndex:'10',fontSize:'2.5rem'}} />
     </div>
   )
}


const Sliders = (props) => {
  
  const settings = {
    dots: false,
    arrows:true,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 3,
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
            slidesToShow: 4.5,
            slidesToScroll: 3,
            speed: 300,
            arrows:false,
          },
        },
         {
          breakpoint: 960,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 3,
            speed: 300,
            arrows:false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 2,
            speed: 300,
            arrows:false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2.3,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
          },
        },
        // {
        //   breakpoint: 500,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 2,
        //     speed: 300,
        //     arrows:false,
        //   },
        // },
        // {
        //   breakpoint: 365,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 2,
        //     speed: 300,
        //     arrows:false,
        //   },
        // },
    ]
  };
  return (
    <>
    <SliderContainer>         
      <SliderInnerContainer>
        <SliderHeader sliderH={props.sliderData.category}/>
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

export default Sliders