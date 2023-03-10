import React from 'react'
// import Carousel from "react-material-ui-carousel"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {styled} from "@mui/styles"
import "./block1.css"
import {Card } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Item = styled(Card)(({theme}) => ({
  width: '98%!important',
  height: '320px',
  boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  //margin:'35px 0px 20px 0px',
  margin:'35px 15px!important',
  // textAlign:'center',
  [theme.breakpoints.down('sm')]: {
    height: '200px!important',
    margin:'16px 8px!important',
},
  [theme.breakpoints.down('md')]: {
    height: '350px',
    margin:'24px 12px!important',
},
}));
const Img = styled("img")(({theme}) => ({
  // objectFit: "cover",
  width:"100%",
  height: "400px",
  [theme.breakpoints.down('sm')]: {
    height: '150px!important',
  },
  [theme.breakpoints.down('md')]: {
    height: '300px',
  },
  
}));
const Head = styled("h3")({
  display:'none',
  fontSize: "16px",
  fontWeight:"500",
  paddingLeft:'15px',
  paddingTop:'10px',
  // textAlign:"center",
  marginBottom:"5px",
  "@media (max-width: 600px)": {
     fontSize: "17px!important",
     display:'block',
     },
  "@media (max-width: 980px)": {
     fontSize: "20px",
     display:'block',
    },
})

const PreviousBtn = (props) =>{
    
  const {onClick} = props;
   return (
         <div className='carousel2-Slick-prev'  onClick={onClick}>
          <ChevronLeftIcon className='iconLeft' style={{color:'white',zIndex:'2',fontSize:'2rem'}}/>
         </div>  
   )
}

const NextBtn = (props) =>{
   const {onClick} = props;
   return (
     <div  className='carousel2-Slick-next'  onClick={onClick}>
       <ChevronRightIcon className='iconRight' style={{color:'white',zIndex:'2',fontSize:'2rem'}} />
     </div>
   )
}

export default function Block1() {

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
              breakpoint: 960,
              settings: {
                arrows:false
              }
            },
            {
              breakpoint: 600,
              settings: {
                arrows:false,
                centerPadding: "20px",
              },
            },
        ] 
        
      };

  return (
    <>
    <Slider {...settings1}>
      <Item>
        <Img src='/images/category/website/bg-1.png
        ' />
        <Head>upto 40% off</Head>
      </Item>
    <Item>
      <Img src='/images/category/website/bg-2.png' />
      <Head>upto 40% off</Head>
    </Item>
    <Item>
      <Img src='/images/category/website/bg-3.png' />
      <Head>upto 40% off</Head>
    </Item>
    <Item>
      <Img src='/images/category/carousel/bg-4.png' />
      <Head>upto 40% off</Head>
    </Item>
    <Item>
      <Img src='/images/category/carousel/bg-5.png' />
      <Head>upto 40% off</Head>
     </Item>
    <Item> 
      <Img src='/images/category/carousel/bg-6.png' />
      <Head>upto 40% off</Head>
    </Item>
     <Item>
      <Img src='/images/category/carousel/bg-7.png' />
      <Head>upto 40% off</Head>
    </Item>
  </Slider>
  </>
  )
}
