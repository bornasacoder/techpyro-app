import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
import SliderItem from './Item';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import SliderHeader from './Header';
import "./block7.css";

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

export default function Block7(props) {
    const settings = {
        dots: false,
        arrows:true,
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
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
                slidesToShow: 2.5,
                slidesToScroll: 4,
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
                slidesToShow: 1.5,
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
        {img:'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Bedroom'},
        {img:'https://img.freepik.com/free-photo/3d-rendering-scandinavian-vintage-modern-kitchen-with-dining-area_105762-2192.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Dining Room '},
        {img:'https://img.freepik.com/free-vector/office-interior-colored-realistic-composition-room-fully-equipped-office-illustration_1284-61142.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Study and Office'},
    
    
        {img:'https://img.freepik.com/free-photo/kitchen-interior-design-with-wooden-table_23-2148848661.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Kitchen'},
        {img:'https://img.freepik.com/free-photo/retro-bathroom-authentic-interior-design_53876-111133.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Bathroom'},
        {img:'https://img.freepik.com/free-photo/green-child-living-room-interior-with-copy-space_43614-882.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Kids'},
    
      ]
  return (
    <>
    <SliderContainer>         
      <SliderInnerContainer>
        <SliderHeader sliderH='Furniture'/>
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