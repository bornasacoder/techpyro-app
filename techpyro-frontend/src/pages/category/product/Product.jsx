import React from 'react'
import Navbar from '../../../layout/mainLayout/navbar/Navbar'
import MiniSlider from '../../../contents/product/pageheader/MiniSlider'
import { navData } from '../../../constants/Constant'
import ProductIndex from '../../../contents/product/block1/ProductIndex'
import Block2 from '../../../contents/product/block2/Block2'
import Block3 from '../../../contents/product/block3/Block3'
import Block4 from '../../../contents/product/block4/Block4'
import Block5 from '../../../contents/product/block5/Block5'
import Block6 from '../../../contents/product/block6/Block6'
import Content from "../../../components/content/Content"
// import { Helmet } from 'react-helmet'

const Product = () => {
  return (
    <>
    {/* <Helmet>
      <title>Explore website | website development | website maintenance | </title>
    </Helmet> */}
  <Navbar menu={'block'} arrow={'none'} logo={'TechPyro'}/>
  <MiniSlider navData={navData} />
  <ProductIndex/>
  <Block2/>
  <Block3 />
  <Block4/>
  <Block5/>
  <Block6/>
  <Content/>
    </>
  )
}

export default Product