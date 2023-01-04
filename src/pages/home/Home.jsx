import MainCarousel from 'components/mainCarousel/carousel/carousel1/MainCarousel'
import Sliders from 'components/mainCarousel/slider/slider1/Sliders'
import React from 'react'
import {  sliderData } from 'constants/Constant'
import Content from 'components/content/Content'

const Home = () => {

  return (
    <div>
    <MainCarousel/>
    <Sliders sliderData={sliderData[0].website}/>
    <Sliders sliderData={sliderData[0].app}   /> 
    <Sliders sliderData={sliderData[0].uiux}  />
    <Sliders sliderData={sliderData[0].digital} /> 
    <Sliders sliderData={sliderData[0].graphics}  />
    <Sliders sliderData={sliderData[0].logo} />
    <Sliders sliderData={sliderData[0].contentwriting} />
    <Sliders sliderData={sliderData[0].presentation} />
    <Sliders sliderData={sliderData[0].videoediting} />
    <Sliders sliderData={sliderData[0].others}/> 
    <Content/>


    </div>
  )
}

export default Home