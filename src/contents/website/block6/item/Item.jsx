import React from 'react'
import { styled } from '@mui/styles'
import { Box, Card, Typography } from '@mui/material';

const ImageContainer = styled(Card)(({ theme }) => ({
    width:'26vw',
    height:'200px',

    "@media (max-width: 1200px)": {
        width:"27vw",
        height:"190px",
    },
    [theme.breakpoints.down('md')]: {
        width:"37vw",
        height:"180px",
    },
    // "@media (max-width: 800px)": {
    //     width:"40vw",
    //     height:"180px",
    // },
    [theme.breakpoints.down('sm')]: {
        width:"72vw",
        height:"165px",
    },

}));

export default function Item({posterLinks}) {
  return (
    <ImageContainer sx={{position:'relative', margin:'5px 10px', borderRadius:'5px'}}>
        <img style={{width:'100%', height:'100%',objectFit:'cover'}} src={posterLinks.image} alt="card"/>
        <Box sx={{position:'absolute', top:{md:'78%',xs:'75%'} , paddingLeft:'26px',background:'#fff',opacity:'0.5', left: 0,right:0 ,width:'100%',height:{md:'22%',xs:'25%'}}}>
        </Box>   
        <Box sx={{position:'absolute', top:{md:'78%',xs:'75%'} , paddingLeft:'26px', left: 0,right:0 ,width:'100%'}}>
            <Typography sx={{fontSize:{md:'16px',sm:'14px',xs:'13px'}, fontWeight: 500, }}>{posterLinks.category.type}</Typography>
            <Typography sx={{fontSize:'14px', fontWeight: 500,}}>Rs {posterLinks.price.mrp}/-</Typography>
        </Box>   
    </ImageContainer>
  )
}
