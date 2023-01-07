import { Box } from '@mui/material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import styled from 'styled-components'
import PageHeaderItem from './pageHeaderItem/PageHeaderItem';

const Header = styled(Box)(({theme}) => ({
  width:"99vw",
  margin:"67px 0 8px 0px",
  overflow:'hidden',
  // background:"black",
  // height:'400px'
}));

const HeaderInner = styled(Box)(({theme}) => ({
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  padding:'0 40px',
  // "@media (max-width: 720px)": {
  //    display:'none'
  // },
}));
const SliderInnerContainer = styled(Box)(({theme}) => ({
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  // height:'400px',
  padding:'0 40px',
  // "@media (max-width: 720px)": {
  //   display:'flex',
  // },
}));

export default function PageHeader(props) {
  // console.log(props.navData)
  const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // initialSlide:0,
    
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            speed: 300,
            arrows:false,
          },
        },
         {
          breakpoint: 980,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            speed: 300,
            arrows:false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            speed: 300,
            arrows:false,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            speed: 300,
            arrows:false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            speed: 300,
            arrows:false,
          },
        },
    ]
  };
  return (
    <>
      <Header>
        {/* <HeaderInner>
          {props.navData.map((item)=>(
            <PageHeaderItem links={item}/>
          ))}
        </HeaderInner> */}
        <SliderInnerContainer>
          <Slider {...settings}>
            {props.navData.map((item)=>(
              <PageHeaderItem links={item}/>
            ))}
          </Slider>
        </SliderInnerContainer>
      </Header>
    </>
  )
}
