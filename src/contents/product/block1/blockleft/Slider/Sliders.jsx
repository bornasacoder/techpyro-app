import { Box, styled } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "./sliders.css"
const Container = styled(Box)(({ theme }) => ({

  width: "520px",
  height: "400px",
  [theme.breakpoints.down('lg')]: {
    width:"440px",
    height:"330px",
    marginRight:"10px"

    },
    [theme.breakpoints.down('md')]: {
      width:"380px",
      height:"250px"
      },

}))

const ImageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  marginLeft: "100px",
  [theme.breakpoints.down('lg')]: {
     marginLeft:'80px',
     marginRight:"10px"
    },
}))
const Image = styled("img")(({ theme }) => ({
  width:"400px",
  height:"370px",
  "&:hover": {
    filter: "blur(2px)"
  },
  [theme.breakpoints.down('lg')]: {
    width:"350px",
    height:'320px'
    },
    [theme.breakpoints.down('md')]: {
      width:"299px",
      height:'280px'
      },

}))
const Image1 = styled("img")(({ theme }) => ({
width:'60px',
height:"60px",
[theme.breakpoints.down('lg')]: {
  width:"50px",
  height:'50px'
  },
}))

const Sliders = ({product}) => {
  console.log(product)
  const settings = {
    customPaging: function (i) {
      return (
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "10px" }} >
          {
  product.data.productImages.map((item)=>(
            <Link key={item.id} >
            <Image1 src={item.productImageUrls} alt="productImage" />
          </Link>
  ))}
        
        </Box>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoPlay:true,
    autoPlaySpeed:2000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Container>
      <Slider {...settings}>
        {product.data.productImages.map((element)=>(
          <ImageWrapper key={element.id} >
          <Image  src={element.productImageUrls} alt="productImage"/>
        </ImageWrapper>
          ))}
        {/* <ImageWrapper>
          <Image src={"/images/category/bg-2.jpg"}  />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={"/images/category/bg-3.jpg"}  />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={"/images/category/bg-4.jpg"}  />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={"/images/category/bg-5.jpg"} />
        </ImageWrapper>
        <ImageWrapper>
          <Image src={"/images/category/bg-6.jpg"}  />
        </ImageWrapper> */}
      </Slider>
    </Container>
  );
}

export default Sliders