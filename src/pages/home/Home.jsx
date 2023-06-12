import React from 'react'
import Block0 from '../../contents/home/block0/Block0'
import Block2 from 'contents/home/block2/Block2';
import BigSlider from 'components/allcarousel/slider/slider3/BigSlider';
import { adidas } from '../../constants/slider/adidas';
import Block4 from '../../contents/home/Block4';
import Block8 from 'contents/home/block8/Block8';
import {block8Data} from  'constants/block8Data'
import Block7 from 'contents/home/Block7';
import Block9 from 'contents/home/Block9';
import Block11 from 'contents/home/block11/Block11';
import Footer1 from '../../components/footer/footer1/Footer1';


const Home = () => {
  return (
      <>
         <Block0 />
         <Block2 />
         <BigSlider sliderData={adidas}/>
         <Block4/>
         <Block8 block8Data={block8Data}/>
         <Block7/>
         <Block9 />
         <Block11 />
         <Footer1 />  
      </> 
  )
}

export default Home;