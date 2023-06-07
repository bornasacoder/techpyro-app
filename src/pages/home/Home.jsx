
import Sliders from '../../components/slider/slider1/Sliders../../'
import React from 'react'
import MiniSlider from '../../components/slider/slider2/MiniSlider';
import MiddleContent from '../../components/middlecontent/MiddleContent';
import Footer from '../../components/footer/Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getProducts,  } from '../../redux/apiCalls';
import Navbar from '../../layouts/navbar/Navbar';



const Home = () => {
  const products = useSelector((state)=> state.product.products)
 console.log(products);
  const dispatch  = useDispatch()
  
  useEffect(()=>{
  getProducts(dispatch)
  },[dispatch])
 
  return (
    <div>
    <Navbar/>
    <MiddleContent/>
    {/* <MainCarousel/> */}
     <Sliders sliderData={products}  category='cofiee' />
     <MiniSlider sliderData = {products}  category="cofieetype"  />
     <Sliders sliderData={products}   category='tea'  />
     <Sliders sliderData={products}  category="thali"  />
    <Footer/>
    </div>
  )
}

export default Home