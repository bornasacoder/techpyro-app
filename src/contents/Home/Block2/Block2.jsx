import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./swiggyslider.css"
import SliderItem from '../Block2/slider/SliderItem';
import {  ArrowBack,  ArrowForward } from '@mui/icons-material';
import {styled } from '@mui/material';
const SliderContainer = styled('div')({
width:"91%",
marginTop:"10px" ,

justifyContent:"center",
  //backgroundColor:'transparent',
  flexDirection:"column",
  
 
  height:'350px',
    //width:'100%',
  backgroundColor:"white",
// boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
"@media (max-width: 900px)": {
//  margin:"2% -1.5%"
backgroundColor:'transparent',
flexDirection:'column',

},
"@media (max-width: 480px)": {
    backgroundColor:'transparent',
    flexDirection:'column',
 },


})
const SliderInnerContainer = styled('div')({
  display: "flex",

  justifyContent:"center",
  backgroundColor:'transparent',
  flexDirection:"column",
  
 
  height:'350px',
  width:'100%',
  // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
//   padding:"20px 40px",
  
  "@media (max-width: 900px)": {
    backgroundColor:'transparent',
   height:'220px',
 width:'100%'
  
  },
  "@media (max-width: 600px)": {
   backgroundColor:'transparent',
   height:'220px',
 width:'100%'
 },
})





const Block2 = (props) => {
  
    const PreviousBtn = (props) =>{
        const {className,onClick} = props;
        
         return (
               <div className={className}   onClick={onClick}>
                <ArrowBack sx={{color:'black',zIndex:'100',background:'white',borderRadius:'50px',fontSize:'40px' }} />
               </div>  
         )
      }
      
      const NextBtn = (props) =>{
         const {className,onClick} = props;
         return (
           <div  className={className}  onClick={onClick}>
             <ArrowForward sx={{color:'black',zIndex:'200' ,background:'white',borderRadius:'50px',fontSize:'40px' }} />
           </div>
         )
      }

  const settings = {
    dots: false,
    arrows:true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 300,
            arrows:true,
          },
        },
         {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 300,
            arrows:true,
            autoplay:false,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 300,
            arrows:true,
            autoplay:false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 300,
            arrows:true,
            autoplay:false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 300,
            arrows:true,
            autoplay:false,
            dots: false,
          },
        },
    ]
  };

  return (
    <>
    <div className='flex flex-col justify-start w-[100%] items-start gap-4 mt-[100px] md:mt-0'>
            <h1 className=' text-3xl font-bold md:text-5xl md:font-semibold '>Suggestions for discovery</h1>
            <p className='text-xl font-normal text-gray-400'>Popular places to stay that Chisfis recommends for you</p>
        </div>
    <SliderContainer sx={{width:"99%",overflowX:"none"}}>  
    {/* <Box sx={{display:{xs:'block',sm:'block',md:'none'},padding:'10px'}}>
       <Typography variant='h3' sx={{fontSize: {xs:'25px',sm:'20px',md:'30px'},fontFamily:'inherit'}}>hello jii</Typography> 
      
       </Box>         */}
            <SliderInnerContainer>
                <Slider {...settings}>
                { props.sliderData.map((item)=>(
                <SliderItem posterLinks={item} />
                ))}
                </Slider>
            </SliderInnerContainer>  
    </SliderContainer>

      
    </>
  )
}

export default Block2