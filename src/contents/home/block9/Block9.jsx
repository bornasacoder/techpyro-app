import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
import Item from './Item';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import Header from './Header';
import "./block9.css";

const SliderContainer = styled('div')({
width:"99%",
height:"auto",
margin:"0 2px 10px 2px",
overflow:"hidden",
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
  boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  padding:"0 10px 0 20px",
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

export default function Block9(props) {

    const settings = {
        dots: false,
        arrows:true,
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
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
                slidesToShow: 2.5,
                slidesToScroll: 3,
                speed: 300,
                arrows:false,
              },
            },
             {
              breakpoint: 960,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 3,
                speed: 300,
                arrows:false,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 2,
                speed: 300,
                arrows:false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1.3,
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

      const data = [
        {img:'https://img.freepik.com/free-vector/household-appliances-realistic-composition_1284-65307.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'AC'},
        {img:'https://img.freepik.com/free-photo/full-shot-smiley-woman-holding-tablet_23-2149395840.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Cooler'},
        {img:'https://img.freepik.com/free-psd/realistic-computer-design_1310-689.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'PC'},
    
        {img:'https://img.freepik.com/free-photo/woman-sitting-washing-machine-with-basket-full-clothes_23-2149117084.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais',name:'Washing Machine'},
            {img:'https://img.freepik.com/free-photo/headphones-stereo-equipment-single-object-technology-generated-by-ai_188544-10146.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sphh',name:'Headphone'},
        
            {img:'https://img.freepik.com/premium-psd/smart-tv-mockup-isolated-3d-rendering_322208-226.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'LED TV'},
         
      ]

  return (
    <>
    <SliderContainer>         
      <SliderInnerContainer>
        <Header sliderH='Electronic'/>
        <Slider {...settings}>
        {data.map((item)=>(
        <Item data={item} />
        ))}
        </Slider>
      </SliderInnerContainer>  
    </SliderContainer>
    </>
  )
}
