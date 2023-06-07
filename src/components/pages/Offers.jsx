import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Card1 from '../Card/Card1'
import Card2 from '../Card/Card2'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import React from 'react'

const Offers = () => {
  return (
    <>
      <Navbar />
      <Box sx={{height:'300px',width:'100%',background:'#005062',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
        <Box>
            <Typography sx={{fontSize:'50px',fontWeight:'700',color:'white'}}>Offers for You</Typography>
            <Typography sx={{fontSize:'20px',fontWeight:'700',color:'white'}}>Explore top deals and offers exclusively for you!</Typography>
        </Box>
        <Box>
            <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep' style={{height:'250px',width:'250px'}}/>
        </Box>

      </Box>

      <Card1/>
      <Card2/>
      <Footer/>
    </>
  )
}

export default Offers
