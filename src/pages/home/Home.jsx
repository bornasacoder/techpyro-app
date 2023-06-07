import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import SwiggySlider from '../../components/allcarousel/carousel/carousel2/SwiggySlider'
import { mainCarousel } from '../../constants/carousel/carousel1'
import Navbar from "../../components/navbar/Navbar";

import Footer from '../../components/footer/Footer';

import Card1 from '../../components/card/Card1';
// import Card2 from 'components/Card/Card2';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/apiCalls';
const MySlider = styled(Box)(({theme}) => ({
    
  }
));
const Home = () => {
  const products = useSelector((state) => state.product.products)
  
// console.log(mainCarousel);
const dispatch = useDispatch();
useEffect(()=>{
   getProducts(dispatch)
}, [dispatch])

  return (
    <div>
    <MySlider>
        <Box>
        <Navbar />
<SwiggySlider sliderData={mainCarousel} />
        <Card1/>
      
<Footer />

        </Box>
     </MySlider>
    
</div>
    
  )
}

export default Home