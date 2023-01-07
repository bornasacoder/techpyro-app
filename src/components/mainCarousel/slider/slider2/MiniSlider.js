import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
import "../slider2/minislider.css"
import SliderItem from '../slider2/sliderItem/SliderItem';

const SliderContainer = styled('div')({
width:"100%",
// height:"auto",
margin:"67px 0 8px 0px",
overflow:"hidden",
boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
// "@media (max-width: 1490px)": {
//  margin:"2% -1.5%"
// },

"@media (max-width: 600px)": {
  // width:"95%",
  margin:"100px 0 8px 0px",
 
 },

})
const SliderInnerContainer = styled('div')({
  display: "flex",
  justifyContent:"space-between",
  flexDirection:"column",
  boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  padding:"0px 40px",
  "@media (max-width: 600px)": {
    // width:"95%",
    padding:"0px 5px",
   
   },
})


const MiniSlider = (props) => {
  
  const settings = {
    dots: false,
    arrows:false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    // slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide:0,
    // prevArrow:<PreviousBtn />,
    // nextArrow:<NextBtn />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 2,
            speed: 300,
            arrows:true,
          },
        },
         {
          breakpoint: 980,
          settings: {
            slidesToShow: 6,
            swipeToSlide: true,
            // slidesToScroll: 1,
            speed: 300,
            arrows:false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 6,
            swipeToSlide: true,
            // slidesToScroll: 1,
            speed: 300,
            arrows:false,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 5,
            swipeToSlide: true,
            // slidesToScroll: 1,
            speed: 300,
            arrows:false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 5,
            swipeToSlide: true,
            // slidesToScroll: 1,
            speed: 300,
            arrows:false,
          },
        },
    ]
  };
  return (
    <>
    <SliderContainer>       
       <SliderInnerContainer>
    <Slider {...settings}>
     { props.navData.map((item)=>(
      <SliderItem posterLinks={item} />
      ))}
    </Slider>
      </SliderInnerContainer>  
    </SliderContainer>

      
    </>
  )
}

export default MiniSlider