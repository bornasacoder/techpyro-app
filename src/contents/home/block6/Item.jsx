import React from 'react'
import { styled } from '@mui/styles'
import { Box, Card, Typography } from '@mui/material';

const ImageContainer = styled(Card)(({ theme }) => ({
    width:'15.5vw',
    height:'300px',

    "@media (max-width: 1200px)": {
        width:"17vw",
        height:"300px",
    },
    [theme.breakpoints.down('md')]: {
        width:"20vw",
        height:"270px",
    },
    "@media (max-width: 800px)": {
        width:"22vw",
        height:"250px",
    },
    [theme.breakpoints.down('sm')]: {
        width:"40vw",
        height:"200px",
    },

}));

export default function Item({data}) {
  return (
    <ImageContainer sx={{position:'relative', margin:'5px 10px', borderRadius:'5px'}}>
        <img style={{width:'100%', height:'100%'}} src={data.img} alt="card"/>
        <Box sx={{position:'absolute', top:'82%' , paddingLeft:'26px',background:'#fff',opacity:'0.5', left: 0,right:0 ,width:'100%',height:'18%'}}>
        </Box>   
        <Box sx={{position:'absolute', top:{xs:'80%',lg:'82%'} , paddingLeft:'26px',paddingTop:'10px', left: 0,right:0 ,width:'100%'}}>
            <Typography sx={{fontSize:'16px', fontWeight: 500, }}>{data.name}</Typography>
            
        </Box>   
    </ImageContainer>
  )
}