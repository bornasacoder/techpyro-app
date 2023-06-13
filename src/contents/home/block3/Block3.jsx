import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/styles';
import Item from './Item';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import Header from './Header';
import "./block3.css";

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
        {img:'https://img.freepik.com/free-photo/successful-medical-team_329181-9252.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'General Physician'},
    {img:'https://img.freepik.com/free-vector/doctor-examining-patient-clinic-illustrated_23-2148856559.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Cardiologist    '},
    {img:'https://img.freepik.com/free-photo/asian-doctor-visit-examines-young-adult-woman-hospital-with-stomach-ache-doctor-checking-up-consulting-health-care-wearing-mask-protect-covid19-pandemic_640221-118.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Gastroenterologist'},


    {img:'https://img.freepik.com/free-photo/healthcare-workers-prevent-virus-insurance-medicine-concept-smiling-attractive-female-doctor-nurse-blue-scrubs-pointing-fingers-left-show-patients-advertisement-important-info_1258-57267.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Dermatologist    '},
    {img:'https://img.freepik.com/free-photo/little-girl-checking-up-her-sight-ophthalmology-center_1303-27493.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Ophthalmologist'},
    {img:'https://img.freepik.com/free-photo/smiling-young-female-doctor-wearing-medical-robe-looking-putting-hand-arm-keeping-another-one-air_141793-58150.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Ayurvedic Practitioner    '},

      ]

  return (
    <>
    <SliderContainer>         
      <SliderInnerContainer>
        <Header sliderH='Medical'/>
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
