import React from 'react';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box} from '@mui/material';
// import { TaskAlt } from '@mui/icons-material';
// import CardItem from './CardItem';
// import Card1 from '../../../components/card/card2/Card1'
import Card2 from '../../../components/card/card2/Card2'
import styled from 'styled-components';

const Box1 = styled(Box)({
   width:'100%',

})
const Box2 = styled(Box)({
  width:'80%',
})

const Block2 = () => {
  return(
    <>
      <Box>
         {/* {props.cardLinks.map((item)=>(
           ))}  */}
           <Card2 />
      </Box>
    </>
  ) 
}
export default Block2
