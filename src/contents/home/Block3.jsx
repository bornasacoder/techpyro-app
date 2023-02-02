import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select} from '@mui/material';
import { TaskAlt } from '@mui/icons-material';
import Card3 from '../../components/card/card2/Card3'

const Block3 = (props) => {
  // console.log(props.cardLinks);
  //   const theme = useTheme();
  //   const CardBox = styled(Card)(({theme})=>({
  //   display:'flex',
  //   flexDirection:'row',
  //   width:'600px',
  //   height:'100px',
  //   borderRadius:'50px',
  //   backgroundColor:theme.header.textColor,
    
  //   [theme.breakpoints.down('lg')]: {
  //     width:'100vw',
  //     height:'400px',
     
  //   },
  //   [theme.breakpoints.down('md')]: {
  //     width:'100vw',
  //     height:'400px',
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     width:'100%',
  //     height:'100px',
  //     flexDirection:'row',
  //     // paddingTop:'50px',
  //     gap:'50px',
  //   },
   
  // }))
  // const Box3= styled(Box)(({ theme }) => ({
  //   height:'auto',
  //   width:'100%',
  //   backgroundImage: `url(${"/images/category/bgdimg4.jpeg"})`,
  //   backgroundSize:'cover',
  //   // backgroundAttachment:'fixed'
  //   }
  // ));

 
  return (
       <>
         <Box sx={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap', margin:'5px 50px '}}>
          {props.cardLinks.map((item)=>(
             <Card3 posterLink={item}/>
          ))}
         </Box>
       </>
       )
}
export default Block3