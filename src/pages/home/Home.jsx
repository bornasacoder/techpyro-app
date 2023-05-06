// import MainCarousel from 'components/carousel/MainCarousel'
import Sliders from 'components/slider/slider1/Sliders'
import React from 'react'
import Navbar from 'components/navbar/Navbar';
import MiddleContent from 'components/middlecontent/MiddleContent';
import Footer from 'components/footer/Footer';
import Content1 from 'components/content/Content1';
import Content2 from 'components/content/Content2';
import Content4 from 'components/content/Content4';
import Content5 from 'components/content/Content5';
import Content6 from 'components/content/Content6';
import Content7 from 'components/content/Content7';


const Home = () => {
  return (
    <div>
    <Navbar />
    <MiddleContent/>
     <Content1/>
    <Content2/>
    <Content4/>
    <Content5/>
    <Content6/>
    <Content7/>
    <Footer/>
   


    </div>
  )
}

export default Home