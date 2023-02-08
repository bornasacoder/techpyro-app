import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/styles";
// import SliderItem from './sliderItem/SliderItem';
import { ChevronLeftOutlined, ChevronRightOutlined, Forward } from "@mui/icons-material";
// import SliderHeader from './sliderhead/SliderHeader';
import Card3 from "../card3/Card3";
import "./minislider.css";
import { Box, Typography } from "@mui/material";
const SliderContainer = styled("div")({
  width: "100%",
  height: "auto",
  overflow: "hidden",
  backgroundColor:"#FFFFFF"
});
const SliderInnerContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  margin: "20px 0px 0px 8px",
  padding: "0px 40px ",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0px",
    padding: "0px",
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
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          slidesToShow: 2.8,
          slidesToScroll: 1,
          // autoplay: true,
          speed: 300,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          speed: 300,
          arrows: false,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,

          speed: 300,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
          speed: 300,
          arrows: false,
        },
      },
     
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.2,
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
        <Box sx={{padding: {md:"30px 40px",sm:"30px 20px",xs:"30px 20px"},}}>
        <Typography
          variant="h4"
          sx={{
            color:"#382D8B",
            fontSize:{md:"18px",sm:"16px",xs:"16px"}
          }}
        >
        Courses and Specializations
        </Typography>
        <br/>
        <Typography sx={{fontSize:"20px",color:"black"}}>Courses you can complete in a day</Typography>
        <br/>
        <Typography sx={{fontSize:"18px"}}>Choose from over 5,400 courses in topics like business analytics, graphic design, Python, and more.</Typography>
        </Box>
        <SliderInnerContainer>
          {/* <SliderHeader /> */}
          <Slider {...settings}>
            {props.sliderData.map((item) => (
              <Card3 sliderData={item} />
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
