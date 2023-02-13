import SwiggySlider from 'components/allcarousel/carousel/carousel2/SwiggySlider'
import BigSlider from 'components/allcarousel/slider/slider3/BigSlider'
import Footer from 'components/footer/Footer'
import Navbar from 'components/navbar/Navbar'
import { adidas } from 'constants/slider/adidas'
import { other } from 'constants/slider/other'
import Block1 from 'contents/home/Block1'
import React from 'react'

const Card4 = () => {
  return (
    <>
      <Navbar />
     <BigSlider sliderData={adidas}/>
      <Block1 />
      <Footer />
    </>
  )
}

export default Card4
