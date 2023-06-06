import { Box } from '@mui/material'
import Footer from '../../components/footer/Footer';
import Block1 from '../../contents/product/Block1';
import Block2 from '../../contents/product/Block2';
import Block3 from '../../contents/product/Block3';
import Navbar2 from '../../layouts/Navbar2/Navbar2';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/apiCalls';


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
    <Navbar2/>
    <Block1 productDetail={productDetail}/>
    <Block2 productDetail={productDetail}/>
    <Block3 />
    <Footer/>
    </>
  )
}

export default Product