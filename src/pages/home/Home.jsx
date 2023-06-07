import React from 'react'

import Footer from '../../components/footer/Footer'
import { other } from '../../constants/slider/other';
import { adidas } from '../../constants/slider/adidas'
import { pizza } from '../../constants/slider/pizza';
import Block2 from '../../contents/home/Block2/Block2';
import Block5 from '../../contents/home/Block5/Block5';
import Block1 from '../../contents/home/Block1/Block1';
import Block3 from '../../contents/home/Block3/Block3';
import Block4 from '../../contents/home/Block4/block4';
import Navbar from 'layouts/Navbar/Navbar';

const Home = () => {
// console.log(mainCarousel);
  return (
    <div>
    
         {/* <Navbar />  */}
        <Navbar/>
         <Block1 sliderData={other}/>
         <Block2/>
         <Block3 sliderData={adidas}/>
         <Block4 sliderData={pizza}/>
        <Block5/>
         <Footer /> 
      
      
</div>
    
  )
}

export default Home