import React from 'react'
import {shoes} from "../../../constants/slider/shoes"
import Sliders from './slider1/Sliders'

const Block1 = () => {
  return (
    <div>
        <Sliders sliderData={shoes}/>
    </div>
  )
}

export default Block1
