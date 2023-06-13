import React from 'react'
// import Carousel from "react-material-ui-carousel"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {styled} from "@mui/styles"
import "./block1.css";
import {Card,Box } from '@mui/material';
// import { FaChevronRight,FaChevronLeft } from 'react-icons/fa';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Item = styled(Card)(({theme}) => ({
  width: '98%!important',
  height: '400px',
  boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  //margin:'35px 0px 20px 0px',
  margin:'35px 15px 0!important' ,
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
  objectFit: "cover",
  width:"100%",
  height: "500px",
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
         <div className='carousel1-Slick-prev'  onClick={onClick}>
          <ChevronLeftIcon className='iconLeft' style={{color:'white',zIndex:'2',fontSize:'2rem'}}/>
         </div>  
   )
}

const NextBtn = (props) =>{
   const {onClick} = props;
   return (
     <div  className='carousel1-Slick-next'  onClick={onClick}>
       <ChevronRightIcon className='iconRight' style={{color:'white',zIndex:'2',fontSize:'2rem'}} />
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
    // <CarouselCard>
    <Box sx={{marginTop:{xs:'120px',md:'65px',lg:'50px'}}}>
    <Slider {...settings1}>
   
    <Item>
      <Img src='https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152155.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph' />
      <Head>upto 40% off</Head>
    </Item>
    <Item>
        <Img src='https://img.freepik.com/free-photo/living-room-with-couch-lamp-wall_1340-26675.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph' />
        <Head>upto 40% off</Head>
      </Item>
   
      <Item>
      <Img src='https://img.freepik.com/free-photo/luxury-modern-style-bedroom-interior-hotel-bedroom-generative-ai-illustration_1258-151610.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph' />
      <Head>upto 40% off</Head>
    </Item>
  
    <Item>
      <Img src='https://img.freepik.com/free-photo/chic-modern-luxury-aesthetics-style-living-room-blue-tone_53876-125839.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph' />
      <Head>upto 40% off</Head>
    </Item>
    
  </Slider>
  </Box>
  // </CarouselCard>

  )
}

export default MainCarousel