import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import SwiggySlider from '../../components/allcarousel/carousel/carousel2/SwiggySlider'
import { mainCarousel } from '../../constants/carousel/carousel1'
import Navbar from "components/navbar/Navbar";
import Sliders from '../../components/allcarousel/slider/slider1/Sliders';
import MiniSlider from '../../components/allcarousel/slider/slider2/MiniSlider';
import Footer from 'components/footer/Footer';
import { pizza } from '../../constants/slider/pizza';
import { thali } from '../../constants/slider/thali';
import { fastFood } from '../../constants/slider/fastfood';
import {content} from '../../constants/content'
import BigSlider from '../../components/allcarousel/slider/slider3/BigSlider'
import Card1 from 'components/Card/Card1';
import Card2 from 'components/Card/Card2';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from 'redux/apiCalls';
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
        {/* <Card2/>
        <Card1/>
        <Card2/>
        <Card1/>
        <Card2/> */}
{/* <Typography variant='h5' sx={{alignItems:'center',fontSize:'40px' ,paddingLeft:'30px',fontSize: {xs:'15px',sm:'25px',md:'60px'}}}>You Can Taste!</Typography>
<Sliders border='50' sliderData={pizza}/>
<Sliders border='20' sliderData={thali}/>
<MiniSlider sliderData={fastFood} />
<Sliders border='50' sliderData={pizza}/>
<Sliders border='20' sliderData={thali}/>
<MiniSlider sliderData={fastFood} />
<Typography variant='h5' sx={{alignItems:'center',fontSize:'40px' ,paddingLeft:'30px',fontSize: {xs:'15px',sm:'25px',md:'40px'}}}>Our Chef</Typography> */}
{/* <BigSlider border='20' sliderData={content}/> */}
<Footer />

        </Box>
     </MySlider>
    
</div>
    
  )
}

export default Home