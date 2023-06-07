import React from 'react'
import { Box, styled, Typography } from '@mui/material'

import Navbar from "../../components/navbar/Navbar";
import BigSlider from '../../components/allcarousel/slider/slider3/BigSlider'
import Card2 from '../../components/card/card2/Card2'
import Footer from '../../components/footer/Footer'
import Block1 from '../../contents/home/Block1'
import Block2 from '../../contents/Block2';
import Block3 from '../../contents/home/Block3'
import Block4 from '../../contents/home/Block4'
import { content } from '../../constants/content';
const Home = () => {
// console.log(mainCarousel);
  return (
    <div>
    
        <Navbar />
        <Block2 />
        <Block1 />
        <Block3 />
        <Block4 />
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'100px 30px',sm:'100px 50px',md:'60px'}}}>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'25px'},fontWeight:'700'}}>Amazing Team</Typography>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'40px'},fontWeight:'700'}}>Meet Our Chefs</Typography>

       
       </Box>
        <BigSlider sliderData={content} />
        <Footer />
       {/* <Block2 />
      <Block1 />
      <Footer /> */}
    
</div>
    
  )
}

export default Home