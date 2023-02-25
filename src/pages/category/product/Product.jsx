import React, { useEffect, useState } from 'react'
import Navbar from '../../../layout/mainLayout/navbar/Navbar'
import MiniSlider from '../../../contents/product/pageheader/MiniSlider'
import { navData } from '../../../constants/Constant'
import ProductIndex from '../../../contents/product/block1/ProductIndex'
// import Block2 from '../../../contents/product/block2/Block2'
import Block3 from '../../../contents/product/block3/Block3'
import Block4 from '../../../contents/product/block4/Block4'
import Block5 from '../../../contents/product/block5/Block5'
import Block6 from '../../../contents/product/block6/Block6'
import Content from "../../../components/content/Content"
import {publicRequest} from "../../../requestMethods"
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import Block7 from '../../../contents/product/block7/Block7'
// import { Helmet } from 'react-helmet'

const Product = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(4)

  useEffect(() => {
    const getProduct = async()=>{
      try{
        const res = await publicRequest.get(`/userapp/product/get/${id}`)
        const data =  await res.data;
                  setProduct(data);
                }catch(err){
                  console.log("some error occured")
                }
              }
              console.log(product)
              getProduct();
              // eslint-disable-next-line
  }, [id]);
  



  return (
    <>
    {/* <Helmet>
      <title>Explore website | website development | website maintenance | </title>
    </Helmet> */}
  <Navbar menu={'block'} arrow={'none'} logo={'TechPyro'}/>
  <MiniSlider navData={navData} />

  {  product &&
  <Box>
   <ProductIndex product = {product} rating={rating} setRating={setRating}  />
  {/* <Block2 product = {product} rating={rating}  /> */}
  <Block7 product={product}/>
  <Block3  product = {product} rating={rating} />
  <Block4 product = {product} rating={rating} />
  <Block5 product = {product} rating={rating} />
  <Block6 product = {product} rating={rating} />
  
  <Content product = {product} rating={rating} />
  </Box>
}
    </>
  )
}

export default Product