
import React from 'react'
import Navbar from 'components/navbar/Navbar';
import MiddleContent from 'components/middlecontent/MiddleContent';
import Footer from 'components/footer/Footer';
import Content from 'components/content/Content';
import Content1 from 'components/content/Content1';
import Content2 from 'components/content/Content2';
import Content3 from 'components/content/Content3';


const Home = () => {
  return (
    <div>
    <Navbar />
    <MiddleContent/>
    <Content1/>
    <Content2/>
    <Content3/>
    <Footer/>
    <Content/>
    </div>
  )
}

export default Home