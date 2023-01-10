// import MainCarousel from 'components/carousel/MainCarousel'
import Sliders from 'components/slider/slider1/Sliders'
import React from 'react'
import MiniSlider from 'components/slider/slider2/MiniSlider';
import {pizza} from "../../constants/slider/pizza";
import {thali} from "../../constants/slider/thali";
import {fastFood} from "../../constants/slider/fastfood";
import {other} from "../../constants/slider/other";
import Navbar from 'components/navbar/Navbar';
import MiddleContent from 'components/middlecontent/MiddleContent';
import Footer from 'components/footer/Footer';


const Home = () => {
  return (
    <div>
    <Navbar />
    <MiddleContent/>
    {/* <MainCarousel/> */}
     {/* <Sliders sliderData={pizza}   />
     <MiniSlider sliderData = {fastFood}/>
     <Sliders sliderData={thali}   />
     <Sliders sliderData={other}   /> */}
    {/* <Footer/> */}


    </div>
  )
}

export default Home