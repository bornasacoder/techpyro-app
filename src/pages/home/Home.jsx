import React from 'react'
import { Box, styled, Typography } from '@mui/material'

import Navbar from "../../components/navbar/Navbar";
import Card2 from '../../components/card/card2/Card2'
import Footer from '../../components/footer/Footer'
import Block1 from '../../contents/home/Block1'
import Block2 from 'contents/Block2';
import Block3 from '../../contents/home/Block3'
import Block4 from '../../contents/home/Block4'
import { content } from 'constants/content';
import Block5 from 'contents/home/Block5';
import SwiggySlider from 'components/allcarousel/carousel/carousel2/SwiggySlider';
import BigSlider from 'components/allcarousel/slider/slider3/BigSlider';
import { other } from 'constants/slider/other';
import { adidas } from '../../constants/slider/adidas'
import Block6 from 'contents/home/Block6';
import MiniSlider from 'components/allcarousel/slider/slider2/MiniSlider';
import Sliders from 'components/allcarousel/slider/slider1/Sliders';
import { pizza } from 'constants/slider/pizza';
import Block7 from 'contents/home/Block7';
import { fastfood } from 'constants/slider/fastfood';
import Block8 from 'contents/home/Block8';
import Block9 from 'contents/home/Block9';
import Block10 from 'contents/home/Block10';
import Block11 from 'contents/home/Block11';
const Home = () => {
// console.log(mainCarousel);
  return (
    <div>
    
         <Navbar /> 
         {/* <Sliders sliderData={fastfood}/> */}
         <Block8 />
         {/* <Box sx={{display:'flex',gap:'100px',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
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
         </Box> */}
         <Block2 />
         <Block3 />
         <Block1 />
         <Footer /> 
         
        
       
      
      
      
      
</div>
    
  )
}

export default Home