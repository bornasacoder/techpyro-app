import React from 'react'


import Navbar from "../../components/navbar/Navbar";

import Footer from '../../components/footer/Footer'
import Block1 from '../../contents/home/Block1'
import Block2 from 'contents/Block2';

import Block4 from '../../contents/home/Block4'

import SwiggySlider from '../../components/allcarousel/carousel/carousel2/SwiggySlider';
import BigSlider from '../../components/allcarousel/slider/slider3/BigSlider';
import { other } from '../../constants/slider/other';
import { adidas } from '../../constants/slider/adidas'

import MiniSlider from '../../components/allcarousel/slider/slider2/MiniSlider';

import { pizza } from '../../constants/slider/pizza';


import Block8 from '../../contents/home/Block8';

const Home = () => {
// console.log(mainCarousel);
  return (
    <div>
    
         <Navbar /> 
         <SwiggySlider sliderData={other}/>
         <Block8 />
         <Block1 />
         <MiniSlider sliderData={pizza} />
         <Block4 />
         <BigSlider sliderData={adidas}/>
         <Block2 />
         <MiniSlider sliderData={pizza} />
         <Footer /> 
       
      
      
      
      
</div>
    
  )
}

export default Home