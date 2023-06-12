import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography} from '@mui/material';

// import Slider from "react-slick";
// import { TaskAlt } from '@mui/icons-material';
// import CardItem from './CardItem';
// import Card1 from '../../../components/card/card2/Card1'
// import Card2 from '../../../components/card/card2/Card2'
// import styled from 'styled-components';



const Block2 = () => {
  return(
    <>
      <Box sx={{background:'#fff',marginBottom:'0px'}}>
         <Typography sx={{fontSize:{md:'45px',sm:'30px',xs:'25px'},display:'flex',justifyContent:'center',margin:'16px 0px',padding:{xs:'0px 20px',sm:'0px 20px',md:'15px',lg:'0px'}}}>Private Tours & Vacations of a Lifetime with Website Name</Typography>
         
         <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:{xs:'0px 15px',sm:'0px 20px',md:'15px'}}}>
            <Typography sx={{fontSize:{md:'20px',xs:'16px'} }}>As an award-winning tour operator, Odynovo has taken clients to 70+ destinations in Asia, the Middle East, Africa, Europe, and South America. Every year, tens of</Typography>
            <Typography sx={{fontSize:{md:'20px',xs:'16px'} }}>thousands of discerning travelers work with our travel specialists to customize their dream trips to some of the most fascinating destinations in the world. Over</Typography>
            <Typography sx={{fontSize:{md:'20px',xs:'16px'} }}>98% of them rate their tours as excellent. It's easy to see why: they get the experience created uniquely based on their personal needs; they travel without hassle</Typography>
            <Typography sx={{fontSize:{md:'20px',xs:'16px'} }}> as everTyy detail is well looked after; and they return with memories they'll treasure for a lifetime.</Typography>
         </Box>

         <Typography sx={{fontSize:{md:'45px',sm:'30px',xs:'25px'},display:'flex',justifyContent:'center',margin:'15px 0px',padding:{xs:'0px 15px',sm:'0px 20px',md:'15px'}}}>Where You Can Travel with Us in 2022 & 2023</Typography>
         <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:{xs:'15px 15px',sm:'0px 20px',md:'15px',lg:'10px',xl:'10px'}}}>
            <Typography sx={{fontSize:{md:'20px',xs:'16px'} }}>Browse these popular destinations that have reopened or will reopen their borders soon for international travelers and find inspiration for your next dreamy trip.</Typography>
            <Typography sx={{fontSize:{md:'20px',xs:'16px'} }}>You can also contact one of our travel specialists to create a new itinerary uniquely for you and your travel companions. It's easy, quick, and totally hassle-free!</Typography>
         </Box>
      </Box>
    </>
  ) 
}
export default Block2;
