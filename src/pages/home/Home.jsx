
import React from 'react';
import {Card,Box } from '@mui/material';
import Navbar from '../../layouts/layout1/navbar/Navbar';
import Siderbar from '../../layouts/layout1/sideBar/Siderbar';
import Footer from '../../components/footer/Footer'; 
import Block1 from '../../contents/home/block1/Block1'; 


const Home = () => {
  const divider = {
    img1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8EUVLlWMsQBXOBjiKFuNJBXCX2lmOMvr_g&usqp=CAU',
    img2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLpauYReVo1FK1K9_NaIJUwC0DhSN9SBw4-o4iVvMrsKF3t4bcWSb5cTpkQUQEuDcRwU&usqp=CAU'
  }
  return (
    <Box sx={{display:'flex'}}>
   <Box sx={{width:{xs:'100vw',md:'70vw'},display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
    <Navbar />
    <Block1 />
    <Footer />
   </Box>
   <Box sx={{width:'29vw',display:{xs:'none',md:'flex'},flexDirection:'column',height:'100vh',position:'fixed',right:'0'}}>
   <Siderbar />
   </Box>
    
   

    </Box>
  )
}

export default Home