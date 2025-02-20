import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/styles";
// import SliderItem from './sliderItem/SliderItem';
import { ChevronLeftOutlined, ChevronRightOutlined, Forward } from "@mui/icons-material";
// import SliderHeader from './sliderhead/SliderHeader';
import Card2 from "../card2/Card2";
import "./minislider.css";
import { Box, Typography } from "@mui/material";
const SliderContainer = styled("div")({
  width: "100%",
  height: "auto",
  overflow: "hidden",
  backgroundColor:"#FFFFFF",
  padding:"40px 0px"

});
const SliderInnerContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  margin: "20px 0px 0px 8px",
  padding: "0px 80px ",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "20px",
    padding: "40px",
  },
}));

const PreviousBtn = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ChevronLeftOutlined
        style={{ color: "black", zIndex: "10", fontSize: "2.8rem",fontWeight:"200" }}
      />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronRightOutlined
        style={{ color: "black", zIndex: "10", fontSize: "2.8rem", }}
      />
    </div>
  );
};

const Sliders = (props) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          speed: 300,
          arrows: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 300,
          arrows: true,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,

          speed: 300,
          arrows: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          speed: 300,
          arrows: true,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          arrows: true,
        },
      },
      
      
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          arrows: true,
        },
      },
    ],
  };
  return (
    <>
      <SliderContainer>
        <Typography variant="h5" sx={{ padding: {md:"20px 50px 0px",sm:"20px 20px",xs:"20px 20px"}}}>Master's and Bachelor's Degrees</Typography>
        <Typography
          variant="h1"
          sx={{
            // margin: "20px 0px 0px 8px",
            padding: {md:"10px 50px 0px",sm:"10px 20px",xs:"10px 20px"},
            letterSpacing: "2px",
            fontSize: { md: "30px", sm: "38px", xs: "30px" },
            fontFamily: "  Trirong",
            display: "flex",
            // textAlign:"center"
          }}
        >
          Find a top degree that fits your life
        </Typography>
        <Typography  sx={{ padding: {md:"20px 50px 0px",sm:"20px 20px",xs:"20px 20px"},fontSize:"20px"}}>Breakthrough pricing on 100% online degrees from top universities.</Typography>
        <SliderInnerContainer>
          {/* <SliderHeader /> */}
          <Slider {...settings}>
            {props.sliderData.map((item) => (
              <Card2 sliderData={item} />
            ))}
          </Slider>
        </SliderInnerContainer>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",color:"#00419E",padding:"40px 0px"}}>
          <Typography variant="h5" sx={{"&:hover":{
            textDecoration:"underline"
          }}}>Explore Degrees </Typography>
          <Forward sx={{fontSize:"18px"}}/>
        </Box>
      </SliderContainer>
    </>
  );
};

export default Sliders;
