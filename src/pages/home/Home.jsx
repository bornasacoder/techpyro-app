import React from 'react'
import { Box, styled, Typography } from '@mui/material'

import Navbar from "../../components/navbar/Navbar";

import Footer from '../../components/footer/Footer'
import Block1 from '../../contents/home/Block1'
import Block2 from '../../contents/Block2';
import Block3 from '../../contents/home/Block3'


import BigSlider from '../../components/allcarousel/slider/slider3/BigSlider';

import { adidas } from '../../constants/slider/adidas'

import MiniSlider from '../../components/allcarousel/slider/slider2/MiniSlider';
import Sliders from '../../components/allcarousel/slider/slider1/Sliders';
import { pizza } from '../../constants/slider/pizza';

import { fastfood } from '../../constants/slider/fastfood';
import Block8 from '../../contents/home/Block8';

import Block10 from '../../contents/home/Block10';
import Block11 from '../../contents/home/Block11';
const Home = () => {
// console.log(mainCarousel);
  return (
    <div>
    
         <Navbar /> 
         <Sliders sliderData={fastfood}/>
         <Block8 />
         <Box sx={{display:'flex',gap:'100px',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
         <Block10 />
         <MiniSlider sliderData={pizza} />
         </Box>
         <Box sx={{display:'flex',gap:'100px',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
         <BigSlider sliderData={adidas}/>
         <Block11 />
         </Box>
         <Box sx={{display:'flex',gap:'100px',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
         <Block10 />
         <MiniSlider sliderData={pizza} />
         </Box>
         <Block2 />
         <Block3 />
         <Block1 />
         <Footer /> 
         
        
       
      
      
      
      
</div>
    
  )
}

export default Home