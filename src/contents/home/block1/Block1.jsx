import React from 'react'
import {Pantaloons, shoes} from "../../../constants/slider/Pantaloons"
import Sliders from './slider1/Sliders'

const Block1 = () => {
  return (
    <div>
        <Sliders sliderData={Pantaloons}/>
    </div>
  )
}

export default Block1
