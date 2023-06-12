import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "./slick-theme.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


function Block13() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide:0,
        
      };
  return (
    <div className='bg-[#F3F4F6] mt-20 w-[100%] h-[500px]'>
      <div className='flex flex-col justify-between items-center h-[25px] gap-2 py-[50px]'>
                <h1 className='text-4xl md:font-bold font-semibold text-center ml-5'>Good news from far away</h1>
                <p className='text-gray-300 font-normal md:text-xl text-lg ml-5'>Let's see what people think of Chisfis</p>
        </div>
        <div className='mt-[100px]  flex flex-col items-center justify-center w-[100%] h-[200px]'>
                
                  <div className='flex flex-col justify-center w-[700px]   h-[300px]'>
                            <Slider {...settings} >
                            
                                 <div className='flex w-[700px] h-[250px] flex-col items-center text-[24px]'>
                                    <div className='w-[350px] md:w-[700px] flex justify-center items-center mx-auto text-center'>This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!</div>
                                    <h4 className='flex justify-center items-center font-bold'>Tiana Abie</h4>
                                    <p className='flex justify-center items-center text-gray-400 py-1'><LocationOnOutlinedIcon />London</p>
                                 </div>

                                 <div className='flex w-[700px] h-[250px] flex-col items-center text-[24px]'>
                                    <div className='w-[350px] md:w-[700px] flex justify-center items-center mx-auto text-center'>This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!</div>
                                    <h4 className='flex justify-center items-center font-bold'>Tiana Abie</h4>
                                    <p className='flex justify-center items-center text-gray-400 py-1'><LocationOnOutlinedIcon />London</p>
                                 </div>
                              
                                 <div className='flex w-[700px] h-[250px] flex-col items-center text-[24px]'>
                                    <div className='w-[350px] md:w-[700px] flex justify-center items-center mx-auto text-center'>This place is exactly like the picture posted on Chisfis. Great service, we had a great stay!</div>
                                    <h4 className='flex justify-center items-center font-bold'>Tiana Abie</h4>
                                    <p className='flex justify-center items-center text-gray-400 py-1'><LocationOnOutlinedIcon />London</p>
                                 </div>
                              
                            
                            </Slider>
                            </div>
        </div> 
    </div>
  )
}

export default Block13
