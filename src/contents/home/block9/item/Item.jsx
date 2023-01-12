import React from 'react'
import { styled } from '@mui/styles'
import { Box, Card, Typography } from '@mui/material';

const ImageContainer = styled(Card)(({ theme }) => ({
    width:'15.5vw',
    height:'320px',

    "@media (max-width: 1200px)": {
        width:"18vw",
        height:"290px",
    },
    [theme.breakpoints.down('md')]: {
        width:"20vw",
        height:"270px",
    },
    "@media (max-width: 800px)": {
        width:"23vw",
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
        <img style={{width:'100%', height:'100%', objectFit:'cover'}} src={'/images/pic3.jpg'} alt="card"/>
        <Box sx={{position:'absolute', top:{xs:'83%'} , paddingLeft:'26px',background:'#fff',opacity:'0.5', left: 0,right:0 ,width:'100%',height:{xs:'17%'}}}>
        </Box>   
        <Box sx={{position:'absolute', top:{xs:'83%'} , paddingLeft:{md:'26px',sm:'20px',xs:'18px'}, left: 0,right:0 ,width:'100%'}}>
            <Typography sx={{fontSize:{md:'15px',sm:'13px',xs:'11px'}, fontWeight: 500, }}>{posterLinks.name}</Typography>
            <Typography sx={{fontSize:{md:'15px',sm:'13px',xs:'11px'}, fontWeight: 500,}}>{posterLinks.Price}</Typography>
        </Box>   
    </ImageContainer>
  )
}
