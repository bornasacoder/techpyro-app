// import MainCarousel from 'components/carousel/MainCarousel'
import Sliders from 'components/slider/slider1/Sliders'
import React from 'react'
import MiniSlider from 'components/slider/slider2/MiniSlider';
import {shoes} from "../../constants/slider/earbud";
import {thali} from "../../constants/slider/thali";
import {fastFood} from "../../constants/slider/jogger";
import {other} from "../../constants/slider/other";
import Navbar from 'components/navbar/Navbar';
import MiddleContent from 'components/middlecontent/MiddleContent';
import Footer from 'components/footer/Footer';
import Content from 'components/content/Content';
import Navbar2 from 'components/navbar/Navbar2';
import Content1 from 'components/content/Content1';
import Content2 from 'components/content/Content2';
import Content3 from 'components/content/Content3';
import Content4 from 'components/content/Content4';
import Content5 from 'components/content/Content5';
import Content6 from 'components/content/Content6';
import Content7 from 'components/content/Content7';
import Block1 from 'contents/home/block1/Block1';
import Block2 from 'contents/home/block2/Block2';
import Block3 from 'contents/home/block3/Block3';
import Content8 from 'components/content/Content8';
import Content9 from 'components/content/Content9';
import Content10 from 'components/content/Content10';


const Home = () => {
  return (
    <div>
    <Navbar />
     <Content4/>
     <Content10/>
     <Content1/>
   <Content7/>
   <Block1/>
   <Content8/>
   <Block3/>
   <Content9/>
  <Footer/>  
     {/*
  <Block2/>
    {/* <Content7/> */}
    {/* <Content6/>
    */}
    {/* <Content/> */}
    {/* <MiddleContent/>
     <Content2/>
    
    <Content5/>
    <Content6/>
    <Content7/>
    <Footer/> */}
    {/* <Content3/> */}
    {/*
    <Content/> */}
    {/* <Navbar2/> */}
    {/* <MainCarousel/> */}
     {/* <Sliders sliderData={pizza}   />
     <MiniSlider sliderData = {fastFood}/>
     <Sliders sliderData={thali}   />
     <Sliders sliderData={other}   /> */}


    </div>
  )
}

export default Home