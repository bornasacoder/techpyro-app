import MainCarousel from 'components/carousel/MainCarousel'
import Sliders from 'components/slider/Sliders'
import React from 'react'
import {  sliderData } from 'constants/Constant'
import Content from 'components/content/Content'

const Home = () => {

  return (
    <div>
    <MainCarousel/>
    <Sliders sliderData={sliderData[0].type[0].website}   />
    <Sliders sliderData={sliderData[0].type[0].app}   /> 
    <Sliders sliderData={sliderData[0].type[0].uiux}  />
    <Sliders sliderData={sliderData[0].type[0].digital} /> 
    <Sliders sliderData={sliderData[0].type[0].graphics}  />
    <Sliders sliderData={sliderData[0].type[0].logo} />
    <Sliders sliderData={sliderData[0].type[0].contentwriting} />
    <Sliders sliderData={sliderData[0].type[0].presentation} />
    <Sliders sliderData={sliderData[0].type[0].videoediting} />
    <Sliders sliderData={sliderData[0].type[0].others}/> 
    <Content/>


    </div>
  )
}

export default Home