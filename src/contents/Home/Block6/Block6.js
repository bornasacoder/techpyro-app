import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider-theme.css";
import {  ArrowBack,  ArrowForward } from '@mui/icons-material';

function Block6(props) {
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
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide:0,
        prevArrow:<PreviousBtn />,
        nextArrow:<NextBtn />,
    };
  return (
    <div className='bg-[#FFF7ED]'>
        <div className='flex flex-col justify-center w-[100%] items-center py-14'>
            <h1 className='text-5xl font-semibold'>Suggestions for discovery</h1>
            <p className='text-2xl text-gray-400'>Popular places to stay that Chisfis recommends for you</p>
        </div>
        <div className='h-[870px]'>
            <div className=' flex '>
            {
                props.Block6_data.map((item) => (
                    <Slider  {...settings} className='w-[100%] h-[400px] flex' >
                        <div>
                        <img src={item.img} alt={item.heading} className='w-full h-[300px] rounded-3xl' /></div>
                        {/* <div className='w-full flex flex-col justify-evenly items-center h-14 mt-1'>
                            <h1 className='text-xl font-semibold'>{item.heading}</h1>
                            <p className='text-lg text-gray-400'>{item.para}</p>
                        </div> */}
                    </Slider>
                ))

            }
            </div>
        </div>
    
    </div>
  )
}

export default Block6
