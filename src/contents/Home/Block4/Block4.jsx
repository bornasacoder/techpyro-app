import { Box, Button } from '@mui/material'
import React from 'react'
import Slider from "react-slick";
import {styled } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "./slick-theme.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
// import SliderItem from './SliderItem';

const SliderContainer = styled('div')({
    width: '100%',
    height: '900px',
    display: 'flex',
    flex:"wrap",
    "@media (max-width: 600px)": {
      height: '100%',
      },
})

const buttonBlock4 = {
    marginLeft:"40px",
    color:"gray",
    padding:"10px 30px",
    borderRadius:"25px",
    "&:hover": {
      color:"black",
      backgroundColor:"gray",
      fontWeight:"600",
    },
    // "@media (max-width: 900px)": {
    //   width:'100%',
    //           height:'250px',
    //           marginTop:"50px"
      
    //   },
     
          "@media (max-width: 600px)": {
              marginLeft:"2px",
              padding:"5px 10px",
              minWidth:"40px"
             
              
              },
  }


function Block4(props) {
     
    console.log(props.Block4_images)
    //const[style,setStyle]=useState(buttonBlock4)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
     
  return (
    <div className='mt-[90px] md:mt-44'>
      <h1 className='text-4xl font-semibold md:font-bold md:ml-5 ml-1'>Featured places to stay</h1>
      <p className='text-gray-300 text-xl md:ml-5 ml-1 mt-1'>Popular places to stay that Chisfis recommends for you</p>
      <Box sx={{display:"flex",width:{md:"100%",xs:"100%"}}}>
        <Button varient="text"   sx={buttonBlock4}>New York</Button>
        <Button varient="text"  sx={buttonBlock4}>Tokyo</Button>
        <Button varient="text"  sx={buttonBlock4}>Paris</Button>
        <Button varient="text"   sx={buttonBlock4}>London</Button>
      </Box>
      <SliderContainer>
            <div className='flex flex-wrap '>
                    { 
                        props.Block4_images.map((item)=>(
                            <div className='w-[280px] h-[300px] mt-5 ml-6 rounded-lg md:mb-0 mb-36'>
                                <Slider {...settings} >
                                    <div><img src={item.img1} alt="" className='h-[300px] w-[280px] rounded-lg'/></div>
                                    <div><img src={item.img2} alt="" className='h-[300px] w-[280px] rounded-lg' /></div>
                                    <div><img src={item.img3} alt="" className='h-[300px] w-[280px] rounded-lg' /></div>
                                    <div><img src={item.img4} alt="" className='h-[300px] w-[280px] rounded-lg' /></div>
                                </Slider>
                                <div><p className='text-gray-400 p-1 text-base '>Entire cabin {item.number}</p></div>
                                <div><h3 className='text-black-600 text-lg font-bold p-1'>{item.heading.length>25 ? (item.heading.substring(0,25)+".."):(item.heading)}</h3></div>
                                <div><p className='text-gray-400 p-1 text-sm'><LocationOnOutlinedIcon/> {item.place}</p></div>
                                <div className='flex justify-between p-1'>
                                    <p className='text-black font-bold'>{item.price}<span className='text-gray-400 font-normal'>/night</span></p>
                                    <p className='text-black font-bold'><StarOutlinedIcon className='text-orange-600'/>{item.rating}</p>
                                </div>
                            </div>
                        ))
                    }
            </div>

      </SliderContainer>
      <div className='flex justify-center items-center mt-16'>
            <Button variant="contained" sx={{borderRadius:"20px",width:"170px",height:"50px",fontSize:"15px"}}>Show me more</Button>
      </div>

    </div>
    
  )
}

export default Block4
