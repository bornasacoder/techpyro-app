import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
import Item from './Item';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import Header from './Header';
import "./block4.css";

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

export default function Block3(props) {

    const settings = {
        dots: false,
        arrows:true,
        infinite: false,
        speed: 500,
        slidesToShow: 4.5,
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
                slidesToShow: 2.5,
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
        {img:'https://img.freepik.com/free-psd/front-view-room-with-bed-modern-wooden-night-tables-mockup_176382-1965.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Bedroom'},
        {img:'https://img.freepik.com/free-photo/restaurant-table-with-wooden-chairs-placed-hall-decorated-classical-style_140725-8460.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Dining Room '},
        {img:'https://img.freepik.com/free-vector/teenager-workplace-interior-realistic_1284-25148.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Study and Office'},
    
    
        {img:'https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178334.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Kitchen'},
        {img:'https://img.freepik.com/free-psd/modern-bath-room-furniture_176382-976.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Bathroom'},
        {img:'https://img.freepik.com/free-photo/childrens-bed-nursery-cot-velvet-childrens-room_181624-43167.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Kids'},
    
      ]

  return (
    <>
    <SliderContainer>         
      <SliderInnerContainer>
        <Header sliderH='Furniture'/>
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
