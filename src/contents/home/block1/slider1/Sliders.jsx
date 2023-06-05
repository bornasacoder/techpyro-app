import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/styles";
// import SliderItem from './sliderItem/SliderItem';
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
// import SliderHeader from './sliderhead/SliderHeader';
import Card1 from "../card1/Card1";
import "./minislider.css";
import { Typography } from "@mui/material";
const SliderContainer = styled("div")({
  width: "100%",
  height: "auto",
  overflow: "hidden",
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
    dots: false,
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
          slidesToShow: 3.7,
          slidesToScroll: 1,
          speed: 300,
          arrows: false,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // autoplay: true,
          speed: 300,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 300,
          arrows: false,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 1,

          speed: 300,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
          speed: 300,
          arrows: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2.7,
          slidesToScroll: 1,
          speed: 300,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          speed: 300,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <SliderContainer>
        <Typography
          variant="h1"
          sx={{
            margin: "20px 0px 0px 8px",
            padding: "0px 40px ",
            letterSpacing: "2px",
            fontSize: { md: "38px", sm: "38px", xs: "28px" },
            fontFamily: "  sans-serif",
          }}
        >
          {/* NEW ARRIVALS */}
          New Pictures
        </Typography>
        <SliderInnerContainer>
          {/* <SliderHeader /> */}
          <Slider {...settings}>
            {props.sliderData.map((item) => (
              <Card1 sliderData={item} />
            ))}
          </Slider>
        </SliderInnerContainer>
      </SliderContainer>
    </>
  );
};

export default Sliders;
