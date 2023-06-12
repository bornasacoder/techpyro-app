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
         <Typography sx={{fontSize:{md:'45px',sm:'30px',xs:'25px'},display:'flex',justifyContent:'center',margin:'16px 0px',padding:{xs:'0px 20px',sm:'0px 20px',md:'15px',lg:'0px'}}}>Max Super Speciality Hotel</Typography>
         
         <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:{xs:'0px 15px',sm:'0px 20px',md:'15px'}}}>
            <Typography sx={{fontSize:{md:'20px',xs:'16px'} }}>A Hotel is a health care institution providing patient treatment with specialized health science and auxiliary</Typography>
            <Typography sx={{fontSize:{md:'20px',xs:'16px'} }}>has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden</Typography>
            <Typography sx={{fontSize:{md:'20px',xs:'16px'} }}>A district Hotel typically is the major health care facility in its region, with many beds for intensive care</Typography>
            <Typography sx={{fontSize:{md:'20px',xs:'16px'} }}> medical needs such as psychiatric treatment (see psychiatric Hotel) and certain disease categories. </Typography>
         </Box>

         <Typography sx={{fontSize:{md:'45px',sm:'30px',xs:'25px'},display:'flex',justifyContent:'center',margin:'15px 0px',padding:{xs:'0px 15px',sm:'0px 20px',md:'15px'}}}>Where You want to book with our Specialities.</Typography>
         <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:{xs:'15px 15px',sm:'0px 20px',md:'15px',lg:'10px',xl:'10px'}}}>
            <Typography sx={{fontSize:{md:'20px',xs:'16px'} }}>Hoteles are typically funded by public funding, health organisations (for-profit or nonprofit), health insurance</Typography>
            <Typography sx={{fontSize:{md:'20px',xs:'16px'} }}>Currently, Hoteles are largely staffed by professional physicians, surgeons, nurses, and allied health practitioners, whereas in the past</Typography>
         </Box>
      </Box>
    </>
  ) 
}
export default Block2;
