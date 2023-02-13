import React from 'react'
import { Typography } from '@mui/material';

import Navbar from "../../components/navbar/Navbar";
// import Card2 from '../../components/card/card2/Card1';
// import Card3 from '../../components/card/card2/Card2';
import Footer1 from '../../components/footer/footer1/Footer1';
import Footer2 from '../../components/footer/footer2/Footer2';
import Block1 from '../../contents/home/block1/Block1';
import Block0 from '../../contents/home/block0/Block0'
import Block2 from 'contents/home/block2/Block2';
import Block3 from '../../contents/home/Block3'
import Block4 from '../../contents/home/Block4';
// import { content } from 'constants/content';
import Block5 from 'contents/home/Block5';
import Block6 from 'contents/home/Block6';
import SwiggySlider from 'components/allcarousel/carousel/carousel2/SwiggySlider';
// import BigSlider from 'components/allcarousel/slider/slider3/BigSlider';
import { other } from 'constants/slider/other';
// import { adidas } from '../../constants/slider/adidas';
// import Block6 from 'contents/home/Block6';
import MiniSlider from 'components/allcarousel/slider/slider2/MiniSlider';
import MiniSlider2 from 'components/allcarousel/slider/slider6/MiniSlider2';
import { mobiles } from 'constants/slider/mobile';
import {courses} from 'constants/slider/courses'
import {courses2} from '../../constants/slider/courses2'
import { block2_Images } from 'constants/Images/block2_Images';
import block3_Images from 'constants/Images/block3_Images';
import {block0_Images} from '../../constants/Images/block0_Images';
import Block7 from 'contents/home/Block7';
import Block8 from 'contents/home/Block8';
import Card1 from 'components/card/card2/Card1';
import BigSlider from 'components/allcarousel/slider/slider3/BigSlider';
import BigSlider2 from 'components/allcarousel/slider/slider4/BigSlider2';
import { BigSlider2Data } from 'constants/slider/BigSlider2Data';
import CardSlider from 'components/allcarousel/slider/slider5/CardSlider';
import { CardSliderData } from 'constants/slider/CardSliderData';
import {CardSliderData10} from '../../contents/home/block10/item/CardSliderData10'
import Block9 from 'contents/home/Block9';
import Block10 from 'contents/home/block10/Block10';
import Block11 from 'contents/home/block11/Block11';
import Block12 from 'contents/home/block12/Block12';
import Block13 from 'contents/home/block13/Block13';
import Block14 from 'contents/home/block14/Block14';


const Home = () => {
  return (
    <div style={{backgroundColor:'#FFFFFF'}}>
         <Navbar /> 
         
         <Block0 imagelink={block0_Images}/>
         {/* <Block1 sliderData={other} /> */}
         <Block2 />
         <Block3 />
          {/* <BigSlider sliderData={adidas}/> */}
         <MiniSlider sliderData={courses}/> 
         {/* <Block4/> */}
         {/* <Block5 /> */}
         {/* <Block6/> */}
         <Block7/>
         <MiniSlider2 sliderData={courses2}/> 
         <Block8 />
         <BigSlider2  sliderData = {BigSlider2Data}/>
         <CardSlider cardData = {CardSliderData}/>
         <Block9 />
         <Block10 cardLinks ={CardSliderData10}/>
         <Block11 />
         <Block12 />
         <Block13 />
         <Block14 />
         <Footer2 />
         {/* <Footer1 /> */}
      
      
</div>
    
  )
}

export default Home