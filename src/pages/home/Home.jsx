import React from 'react'
import { Box, styled, Typography } from '@mui/material'

import Navbar from "../../components/navbar/Navbar";

import Card2 from '../../components/card/card2/Card2'
import Footer from '../../components/footer/Footer'
import Block1 from '../../contents/home/Block1'
import Block2 from 'contents/Block2';
const Home = () => {
// console.log(mainCarousel);
  return (
    <div>
    
        <Navbar />
       <Block2 />
      <Block1 />
      <Footer />
    
</div>
    
  )
}

export default Home