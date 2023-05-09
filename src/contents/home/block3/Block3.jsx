import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/material';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import "./block3.css";
import Block3Card from './Block3Card'

const SliderContainer = styled('div')({
width:"100%",
height:"auto",
padding:"0px 0px 100px",
overflow:"hidden",
background:'#fff',
// boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
// "@media (max-width: 1490px)": {
//  margin:"2% -1.5%"

// },
// "@media (max-width: 1200px)": {
//   width:"95%",
//   margin:"1% 1rem"
 
//  },

})
const SliderInnerContainer = styled('div')(({ theme }) => ({
  display: "flex",
  justifyContent:"space-between",
  flexDirection:"column",
  padding:"0 0px 0 20px",
  [theme.breakpoints.down('sm')]: {
    padding:"0 0 0 4px",
},
}));


const PreviousBtn = (props) =>{
  const {className,onClick} = props;
  
   return (
         <div className={className}   onClick={onClick}>
          <ChevronLeftOutlined style={{color:'black',zIndex:'10',fontSize:'2.5rem' }} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className}  onClick={onClick}>
       <ChevronRightOutlined style={{color:'black',  zIndex:'10',fontSize:'2.5rem'}} />
     </div>
   )
}


const Block3 = (props) => {
  
  const settings = {
    dots: false,
    arrows:true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide:0,
    prevArrow:<PreviousBtn />,
    nextArrow:<NextBtn />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4.5,
            slidesToScroll: 3,
            speed: 300,
            arrows:false,
          },
        },
         {
          breakpoint: 960,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 3,
            speed: 300,
            arrows:false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 2,
            speed: 300,
            arrows:false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3.7,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
          },
        },
        // {
        //   breakpoint: 500,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 2,
        //     speed: 300,
        //     arrows:false,
        //   },
        // },
        // {
        //   breakpoint: 365,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 2,
        //     speed: 300,
        //     arrows:false,
        //   },
        // },
    ]
  };

  let arr=[
    {
      id:"1",
      img:"https://img.freepik.com/free-photo/beautiful-face-young-woman-with-maroon-makeup-portrait-gorgeous-girl-with-vinous-lips_186202-7456.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais"
    },
    {
      id:"2",
      img:"https://img.freepik.com/free-psd/make-up-banner-template_23-2148663849.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais"
    },
    {
      id:"3",
      img:"https://img.freepik.com/premium-photo/women-holding-make-up-brushes_23-2148332535.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.1.833918949.1682592323&semt=ais"
    },
    {
      id:"4",
      img:"https://img.freepik.com/free-photo/top-view-assortment-make-up-beauty-products_23-2148620013.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais"
    },
    {
      id:"5",
      img:"https://img.freepik.com/free-photo/portrait-beautiful-woman-with-blue-nails-blue-makeup-long-red-hairs-black-wall_186202-7670.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais"
    },
    {
      id:"6",
      img:"https://img.freepik.com/free-photo/female-hairdresser-using-hairbrush-hair-dryer_329181-1929.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais"
    },
    {
      id:"7",
      img:"https://img.freepik.com/free-photo/attractive-young-woman-beauty-salon_197531-1288.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais"
    },
    {
      id:"8",
      img:"https://img.freepik.com/free-psd/make-up-concept-landing-page-template_23-2148608279.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais"
    },
  ]
  return (
    <>
    <SliderContainer>         
      <SliderInnerContainer>
        
        <Slider {...settings}>
        { arr.map((item)=>(
        <Block3Card item={item} />
        ))}
        </Slider>
      </SliderInnerContainer>  
    </SliderContainer>
    </>
  )
}

export default Block3