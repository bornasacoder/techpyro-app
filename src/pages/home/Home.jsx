import React from 'react'

import Navbar from "../../components/navbar/Navbar";

import Footer from '../../components/footer/Footer'
import Block1 from '../../contents/home/Block1'
import Block2 from '../../contents/Block2';
import BigSlider from "../../components/allcarousel/slider/slider3/BigSlider"
import { adidas } from '../../constants/slider/adidas'
import MiniSlider from '../../components/allcarousel/slider/slider2/MiniSlider';
import { pizza } from '../../constants/slider/pizza';
import Block8 from '../../contents/home/Block8';
import Block9 from '../../contents/home/Block9';
const Home = () => {
// console.log(mainCarousel);
  return (
    <div>
    
         <Navbar /> 
         <Block2 />
         <Block8 />
         <Block9 />
         <Block1 />
         <BigSlider sliderData={adidas}/>
         <MiniSlider sliderData={pizza} />
         <Footer /> 
      
      
</div>
    
  )
}

export default Home