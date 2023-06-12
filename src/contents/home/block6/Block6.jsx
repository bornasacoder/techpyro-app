import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
import SliderItem from './Item';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import SliderHeader from './Header';
import "./block6.css";

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

export default function Block6(props) {
    const settings = {
        dots: false,
        arrows:true,
        infinite: false,
        speed: 500,
        slidesToShow: 5.5,
        slidesToScroll: 4,
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
                slidesToShow: 5,
                slidesToScroll: 4,
                speed: 300,
                arrows:false,
              },
            },
             {
              breakpoint: 960,
              settings: {
                slidesToShow: 4.5,
                slidesToScroll: 3,
                speed: 300,
                arrows:false,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                speed: 300,
                arrows:false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2.3,
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
        {img:'https://img.freepik.com/premium-psd/vegetables-recyclable-paper-bag_75891-1240.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:' Vegetables'},
        {img:'https://img.freepik.com/free-photo/soybean-oil-soybean-food-beverage-products-food-nutrition-concept_1150-26348.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Oil'},
    
        {img:'https://img.freepik.com/free-vector/milk-products-background_1284-15512.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Milk Products'},
        {img:'https://img.freepik.com/free-photo/still-life-with-appetizing-bakery-food_23-2149299431.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Bread'},
        {img:'https://img.freepik.com/free-photo/front-view-rotini-pasta-fork-dark-isolated-surface-free-space-food-photo_140725-62462.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Noodles'},
        {img:'https://img.freepik.com/free-photo/frozen-food-table-arrangement_23-2148969451.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Frozen Foods'},
    
      ]
  return (
    <>
    <SliderContainer>         
      <SliderInnerContainer>
        <SliderHeader sliderH='Grocery'/>
        <Slider {...settings}>
        { data.map((item)=>(
        <SliderItem data={item} />
        ))}
        </Slider>
      </SliderInnerContainer>  
    </SliderContainer>
    </>
  )
}