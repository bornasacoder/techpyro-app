import React from 'react'
import Content from '../../../components/content/Content'
import MiniSlider from '../../../contents/products/pageheader/MiniSlider'
import { navData } from '../../../constants/Constant'
import Navbar from "../../../layout/mainLayout/navbar/Navbar"
import Products from "../../../contents/products/block1/Products"
const Product = () => {
  return (
    <>
    <Navbar menu={'none'} arrow={'block'} logo={'Products'} page={'products'}/>
    <MiniSlider navData={navData}/>
    <Products/>
    <Content/>

    </>
  )
}

export default Product