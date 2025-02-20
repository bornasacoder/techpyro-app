import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/styles";
// import SliderItem from './sliderItem/SliderItem';
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
// import SliderHeader from './sliderhead/SliderHeader';
import Card5 from "../card5/Card5";
import "./minislider.css";
import { Box, Typography } from "@mui/material";
const SliderContainer = styled("div")(({ theme }) =>({
  height: "auto",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems:"center",
  flexDirection: "column",
  backgroundColor:"#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0px",
    padding: "0px",
  },
  // maxWidth:"100vw",
}));
const SliderInnerContainer = styled("div")(({ theme }) => ({
  // display: "flex",
  // justifyContent: "center",
  maxWidth:"80vw",
  // margin: "20px 0px 0px 8px",
  // padding: "0px 80px ",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0px",
    padding: "0px",
    maxWidth:"100vw",
    width:"100vw",
  },
}));

const PreviousBtn = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ChevronLeftOutlined
        style={{ color: "black", zIndex: "10", fontSize: "2.5rem" }}
      />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronRightOutlined
        style={{ color: "black", zIndex: "10", fontSize: "2.5rem" }}
      />
    </div>
  );
};

const Sliders = (props) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 1,
    // prevArrow: <PreviousBtn />,
    // nextArrow: <NextBtn />,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 3.7,
    //       slidesToScroll: 1,
    //       speed: 300,
    //       arrows: false,
    //     },
    //   },
    //   {
    //     breakpoint: 980,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       autoplay: true,
    //       speed: 300,
    //       arrows: false,
    //     },
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       speed: 300,
    //       arrows: false,
    //     },
    //   },
    //   {
    //     breakpoint: 740,
    //     settings: {
    //       slidesToShow: 2.6,
    //       slidesToScroll: 1,

    //       speed: 300,
    //       arrows: false,
    //     },
    //   },
    //   {
    //     breakpoint: 680,
    //     settings: {
    //       slidesToShow: 2.6,
    //       slidesToScroll: 1,
    //       speed: 300,
    //       arrows: false,
    //     },
    //   },
    //   {
    //     breakpoint: 550,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       speed: 300,
    //       arrows: false,
    //     },
    //   },
    //   {
    //     breakpoint: 500,
    //     settings: {
    //       slidesToShow: 2.3,
    //       slidesToScroll: 1,
    //       speed: 300,
    //       arrows: false,
    //     },
    //   },
    // ],
  };
  return (
    <>
      <SliderContainer>
        <Typography
          variant="h1"
          sx={{
            // margin: "20px 0px 0px 8px",
            padding: "40px 0px ",
            letterSpacing: "2px",
            fontSize: { md: "38px", sm: "38px", xs: "20px" },
            fontFamily: "  Trirong",
            display: "flex",
            justifyContent: "center",
          }}
        >
         Exclusive on Pantaloons
        </Typography>
        <SliderInnerContainer>
          {/* <SliderHeader /> */}
          <Slider {...settings} >
            {props.sliderData.map((item) => (
              <Card5 sliderData={item} />
            ))}
          </Slider>
        </SliderInnerContainer>
      </SliderContainer>
    </>
  );
};

export default Sliders;
