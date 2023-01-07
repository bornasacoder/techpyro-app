import MainCarousel from '../../components/mainCarousel/carousel/carousel1/MainCarousel'
import Sliders from '../../components/mainCarousel/slider/slider1/Sliders'
import React from 'react'
import {  navData, sliderData } from '../../constants/Constant'
import Content from '../../components/content/Content'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import MiniSlider from '../../components/mainCarousel/slider/slider2/MiniSlider'

const Home = () => {

  return (
    <div>
      <Navbar/>
      <MiniSlider navData={navData}/>
      <MainCarousel/>
      <Sliders key={sliderData} sliderData={sliderData[0].website}/>
      <Sliders key={sliderData} sliderData={sliderData[0].app}   /> 
      <Sliders key={sliderData} sliderData={sliderData[0].uiux}  />
      <Sliders key={sliderData} sliderData={sliderData[0].digital} /> 
      <Sliders key={sliderData} sliderData={sliderData[0].graphics}  />
      <Sliders key={sliderData} sliderData={sliderData[0].logo} />
      <Sliders key={sliderData} sliderData={sliderData[0].contentwriting} />
      <Sliders key={sliderData} sliderData={sliderData[0].presentation} />
      <Sliders key={sliderData} sliderData={sliderData[0].videoediting} />
      <Sliders key={sliderData} sliderData={sliderData[0].others}/> 
      <Content/>
    </div>
  )
}

export default Home