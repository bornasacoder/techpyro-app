import { Box } from '@mui/material'
import Footer from 'components/footer/Footer';
import Product1 from 'contents/Product1'
import Product2 from 'contents/Product2';
import Product3 from 'contents/Product3';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'redux/apiCalls';
// import { getProducts } from 'redux/apiCalls';


const Product = () => {
  const fastfood = useSelector((state)=>state.product.products)
  const [productDetail, setproductDetail] = useState([])
  const dispatch  = useDispatch()
  console.log(fastfood);
    useEffect(() => {
        getProducts(dispatch)
      let _id = window.location.pathname.slice(-3);
      let arr =  fastfood.filter((item) => {
        console.log(item.id,_id);
       return  String(item.id)===_id
     })
    setproductDetail([...arr])
    }, [dispatch])
  return (
    <>
    <Product1 productDetail={productDetail}/>
    <Product2 productDetail={productDetail}/>
    <Product3 />
    <Footer/>
    </>
  )
}

export default Product