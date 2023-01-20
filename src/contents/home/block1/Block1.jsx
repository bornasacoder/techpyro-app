import React from 'react'
import {earbud, shoes} from "../../../constants/slider/earbud"
import Sliders from './slider1/Sliders'

const Block1 = () => {
  return (
    <div>
        <Sliders sliderData={earbud}/>
    </div>
  )
}

export default Block1
