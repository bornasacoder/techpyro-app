import React from 'react'
// import Carousel from "react-material-ui-carousel"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {styled} from "@mui/styles"
import "./maincarousel.css"
import {Card } from '@mui/material';
// import { FaChevronRight,FaChevronLeft } from 'react-icons/fa';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// const CarouselCard = styled(Card)(({theme}) => ({
//   boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
//   margin:'35px 10px 20px 10px'
// }));

const Item = styled(Card)(({theme}) => ({
  width: '98%!important',
  height: '400px',
  boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  //margin:'35px 0px 20px 0px',
  margin:'35px 15px!important',
  textAlign:'center',
  [theme.breakpoints.down('sm')]: {
    width: '98%!important',
    height: '200px',
    margin:'16px 8px!important',
},
}));
const Img = styled("img")(({theme}) => ({
  objectFit: "cover",
  width:"100%",
  height: "400px",
  [theme.breakpoints.down('sm')]: {
    height: '250px',
  },
  
}));

const PreviousBtn = (props) =>{
    
  const {className,onClick} = props;
   return (
         <div className={className}  onClick={onClick}>
          <ChevronLeftIcon style={{color:'white',zIndex:'2',fontSize:'2rem'}}/>
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className}  onClick={onClick}>
       <ChevronRightIcon style={{color:'white',zIndex:'2',fontSize:'2rem'}} />
     </div>
   )
}


const MainCarousel = () => {

  const settings1 = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: false,
    arrows:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow:<PreviousBtn />,
    nextArrow:<NextBtn />,
    responsive: [
        {
          // eslint-disable-next-line
          breakpoint: 1200,
          // eslint-disable-next-line
          settings1: {
            arrows:false
          },
          // eslint-disable-next-line
          breakpoint: 600,
          // eslint-disable-next-line
          settings1: {
            arrows:false,
            centerPadding: "20px",
          },
        },

    ] 
    
  };

  return (
    // <CarouselCard>
    <>
    <Slider {...settings1}>
      <Item><Img src='/images/category/bg-1.jpg' /></Item>
    <Item><Img src='/images/category/bg-2.jpg' /></Item>
    <Item><Img src='/images/category/bg-3.jpg' /></Item>
    <Item><Img src='/images/category/bg-4.jpg' /></Item>
    <Item><Img src='/images/category/bg-5.jpg' /> </Item>
   <Item> <Img src='/images/category/bg-6.jpg' />  </Item>
     <Item><Img src='/images/category/bg-7.jpg' /> </Item>
  </Slider>
  </>
  // </CarouselCard>

  )
}

export default MainCarousel