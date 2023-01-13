import React from 'react'
import { styled } from '@mui/styles'
import { Box, Card, Typography } from '@mui/material';

const ImageContainer = styled(Card)(({ theme }) => ({
    width:'20vw',
    height:'400px',

    "@media (max-width: 1200px)": {
        width:"20vw",
        height:"330px",
    },
    [theme.breakpoints.down('md')]: {
        width:"25vw",
        height:"310px",
    },
    "@media (max-width: 800px)": {
        width:"26vw",
        height:"250px",
    },
    [theme.breakpoints.down('sm')]: {
        width:"40vw",
        height:"220px",
    },

}));

export default function Item({posterLinks}) {
  return (
    <ImageContainer sx={{position:'relative', margin:'5px 10px', borderRadius:'5px'}}>
        <img style={{width:'100%', height:'100%', objectFit:'cover'}} src={posterLinks.image} alt="card"/>
        <Box sx={{position:'absolute', top:{md:'85%',xs:'80%'} , paddingLeft:'26px',background:'#fff',opacity:'0.5', left: 0,right:0 ,width:'100%',height:{md:'15%',xs:'20%'}}}>
        </Box>   
        <Box sx={{position:'absolute', top:{md:'86%',sm:'83%',xs:'81%'} , paddingLeft:'26px', left: 0,right:0 ,width:'100%'}}>
            <Typography sx={{fontSize:{md:'16px',sm:'14px',xs:'13px'}, fontWeight: 500, }}>{posterLinks.category.type}</Typography>
            <Typography sx={{fontSize:{md:'16px',sm:'14px',xs:'13px'}, fontWeight: 500,}}>Rs {posterLinks.price.mrp}/-</Typography>
        </Box>   
    </ImageContainer>
  )
}
