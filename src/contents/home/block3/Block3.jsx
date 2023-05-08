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
      img:"https://img.freepik.com/free-photo/beautiful-young-woman-wearing-sari_23-2149502963.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph"
    },
    {
      id:"2",
      img:"https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400873.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph"
    },
    {
      id:"3",
      img:"https://img.freepik.com/free-photo/elegant-indian-macho-man-model-suit-pink-tie-walking-cross-pedestrian_627829-1674.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph"
    },
    {
      id:"4",
      img:"https://img.freepik.com/free-photo/fast-fashion-vs-slow-sustainable-fashion_23-2149133967.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph"
    },
    {
      id:"5",
      img:"https://img.freepik.com/free-photo/stack-clothes-white-background-closeup_93675-132644.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph"
    },
    {
      id:"6",
      img:"https://img.freepik.com/free-psd/mens-tri-blend-crew-tee-mockup_126278-130.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.1.833918949.1682592323&semt=ais"
    },
    {
      id:"7",
      img:"https://img.freepik.com/free-photo/groom-s-arms-with-red-bracelet-button-up-golden-wedding-suit_8353-767.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph"
    },
    {
      id:"8",
      img:"https://img.freepik.com/free-photo/young-woman-beautiful-dress_1303-17516.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph"
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