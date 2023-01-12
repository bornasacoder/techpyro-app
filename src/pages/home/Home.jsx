import Sliders from '../../components/mainCarousel/slider/slider1/Sliders'
import React from 'react'
import {  navData, sliderData } from '../../constants/Constant'
import Content from '../../components/content/Content'
import Navbar from '../../layout/mainLayout/navbar/Navbar'
import Divider1 from '../../contents/home/divider1/Divider1'
import PageHeader from '../../contents/home/pageHeader/PageHeader' 
import Block1 from '../../contents/home/block1/Block1' 
import Block2 from '../../contents/home/block2/Block2' 
import Block3 from '../../contents/home/block3/Block3' 
import Block4 from '../../contents/home/block4/Block4' 
import Block5 from '../../contents/home/block5/Block5' 
import Block6 from '../../contents/home/block6/Block6' 
import Block7 from '../../contents/home/block7/Block7' 
import Block8 from '../../contents/home/block8/Block8' 
import Block9 from '../../contents/home/block9/Block9' 
import Block10 from '../../contents/home/block10/Block10' 

const Home = () => {

  return (
    <div>
      <Navbar/>
      <PageHeader navData={navData}/>
      <Block1/>
      <Block2 key={sliderData} sliderData={sliderData[0].website}/>
      <Block3 key={sliderData} sliderData={sliderData[0].website}/>
      <Block4 /> 
      <Divider1/>
      <Block5 key={sliderData} sliderData={sliderData[0].app}   /> 
      <Block6 key={sliderData} sliderData={sliderData[0].uiux}  />
      <Block7/>
      <Divider1/>
      <Block8 key={sliderData} sliderData={sliderData[0].digital} /> 
      <Block9 key={sliderData} sliderData={sliderData[0].graphics}  />
      <Block10/>
      <Divider1/>
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