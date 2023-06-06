
import React from 'react'
import {pizza} from "../../constants/slider/pizza";
import {thali} from "../../constants/slider/thali";
import {fastFood} from "../../constants/slider/fastfood";
import {other} from "../../constants/slider/other";
import Block2 from '../../contents/home/block2/Block2';
import Block3 from '../../contents/home/block3/Block3';
import Block4 from '../../contents/home/block4/Block4';
import Block5 from '../../contents/home/block5/Block5';
import Block6 from '../../contents/home/block6/Block6';
import Block7 from '../../contents/home/block7/Block7';
import Block8 from '../../contents/home/block8/Block8';
import Block9 from '../../contents/home/block9/Block9';
import Block10 from '../../contents/home/block10/Block10';
import Block11 from '../../contents/home/block11/Block11';
import Block12 from '../../contents/home/block12/Block12';
import Block1 from '../../contents/home/block1/Block1';
import Divider1 from '../../contents/home/divider1/Divider1';


const Home = () => {
  const divider = {
    img1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8EUVLlWMsQBXOBjiKFuNJBXCX2lmOMvr_g&usqp=CAU',
    img2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLpauYReVo1FK1K9_NaIJUwC0DhSN9SBw4-o4iVvMrsKF3t4bcWSb5cTpkQUQEuDcRwU&usqp=CAU'
  }
  return (
    <div>
   
   <Block1 />
     <Block2 />
     <Divider1 image={divider.img1}/>
    <Block3 />
  <Block4 />
  <Divider1 image={divider.img2}/>

     <Block5 />
     <Divider1 image={divider.img1}/>

 <Block6 />
     <Block7 />
  <Divider1 image={divider.img2}/>

   <Block8 />
       <Block9 />
    <Block10 />
   {/* <Block11 />
    <Block12 />
  */}
    {/* <MainCarousel/> */}
     {/* <Sliders sliderData={pizza}   />
     <MiniSlider sliderData = {fastFood}/>
     <Sliders sliderData={thali}   />
     <Sliders sliderData={other}   /> */}
    {/* <Footer/> */}


    </div>
  )
}

export default Home