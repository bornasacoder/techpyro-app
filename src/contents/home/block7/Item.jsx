import React from 'react'
import { styled } from '@mui/styles'
import { Box, Card, Typography } from '@mui/material';

const ImageContainer = styled(Card)(({ theme }) => ({
    width:'35vw',
    height:'250px',

    "@media (max-width: 1200px)": {
        width:"35vw",
        height:"230px",
    },
    [theme.breakpoints.down('md')]: {
        width:"35vw",
        height:"200px",
    },
    "@media (max-width: 800px)": {
        width:"35vw",
        height:"180px",
    },
    [theme.breakpoints.down('sm')]: {
        width:"63vw",
        height:"150px",
    },

}));

export default function Item({data}) {
  return (
    <ImageContainer sx={{position:'relative', margin:'5px 10px', borderRadius:'5px'}}>
        <img style={{width:'100%', height:'100%'}} src={data.img} alt="card"/>
        <Box sx={{position:'absolute', top:'82%' , paddingLeft:'26px',background:'#fff',opacity:'0.5', left: 0,right:0 ,width:'100%',height:'18%'}}>
        </Box>   
        <Box sx={{position:'absolute', top:{xs:'78%',lg:'82%'} , paddingLeft:'26px',paddingTop:'10px', left: 0,right:0 ,width:'100%'}}>
            <Typography sx={{fontSize:'16px', fontWeight: 500, }}>{data.name}</Typography>
            
        </Box>   
    </ImageContainer>
  )
}