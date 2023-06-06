import React from 'react'
import { Box, styled, Typography } from '@mui/material'

import Navbar from "../../components/navbar/Navbar";
import Card2 from '../../components/card/card2/Card2'
import Footer from '../../components/footer/Footer'
import Block1 from '../../contents/home/Block1'
import Block2 from '../../contents/Block2';
import Block3 from '../../contents/home/Block3'
import Block4 from '../../contents/home/Block4'
import { content } from '../../constants/content';
import Block5 from '../../contents/home/Block5';
import SwiggySlider from '../../components/allcarousel/carousel/carousel2/SwiggySlider';
import BigSlider from '../../components/allcarousel/slider/slider3/BigSlider';
import { other } from '../../constants/slider/other';
import { adidas } from '../../constants/slider/adidas'
import Block6 from '../../contents/home/Block6';
import MiniSlider from '../../components/allcarousel/slider/slider2/MiniSlider';
import { pizza } from '../../constants/slider/pizza';

const Home = () => {
// console.log(mainCarousel);
  return (
    <div>
    
         <Navbar /> 
         <SwiggySlider sliderData={other} />
         <Block1 />
         <BigSlider sliderData={adidas}/>
         <MiniSlider sliderData={pizza}/>
         <Block5 />
         <Footer /> 
      
      
</div>
    
  )
}

export default Home