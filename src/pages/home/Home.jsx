// import MainCarousel from 'components/carousel/MainCarousel'
// import Sliders from 'components/slider/Sliders'
import React from 'react'
import { pizza } from 'constants/slider'
// import { mainCarousel } from 'constants/mainCarousel'
import Content from 'components/content/Content'
// import MiniSlider from 'components/slider/minislider/MiniSlider'
// import BigSlider from "components/slider/bigslider/BigSlider"
import SwiggySlider from 'components/allcarousel/carousel/carousel2/SwiggySlider'
const Home = () => {

  return (
    <div>
    {/* <MainCarousel/> */}
    {/* <Sliders sliderData={sliderData[0].type[0].website}   />
    <Sliders sliderData={sliderData[0].type[0].app}   /> 
    <Sliders sliderData={sliderData[0].type[0].uiux}  />
    <Sliders sliderData={sliderData[0].type[0].digital} /> 
    <Sliders sliderData={sliderData[0].type[0].graphics}  />
    <Sliders sliderData={sliderData[0].type[0].logo} />
    <Sliders sliderData={sliderData[0].type[0].contentwriting} />
    <Sliders sliderData={sliderData[0].type[0].presentation} />
    <Sliders sliderData={sliderData[0].type[0].videoediting} />
    <Sliders sliderData={sliderData[0].type[0].others}/> 
    <Content/> */}
    {/* <MiniSlider sliderData={pizza} /> */}
    {/* <BigSlider sliderData= {mainCarousel}/> */}
    <SwiggySlider sliderData = {pizza}/>


    </div>
  )
}

export default Home