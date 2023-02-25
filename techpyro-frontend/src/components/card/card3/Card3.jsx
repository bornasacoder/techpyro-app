import { Box, Card, Typography } from '@mui/material'
import React from 'react'

export default function Card3({CardLinks}) {
  return (
    <Card sx={{ width:'250px', height:'300px',position:'relative', margin:'5px 10px'}}>
        <img style={{width:'100%', height:'100%'}} src={'/images/blog-1.jpg'} alt="card"/>
        <Box sx={{position:'absolute', top:'82%' , paddingLeft:'26px',background:'#fff',opacity:'0.7', left: 0,right:0 ,width:'100%',height:'18%'}}>
        </Box>   
        <Box sx={{position:'absolute', top:'82%' , paddingLeft:'26px', left: 0,right:0 ,width:'100%'}}>
            <Typography sx={{fontSize:'20px', fontWeight: 900, }}>{CardLinks.links1[0].name}</Typography>
            <Typography sx={{fontSize:'15px', fontWeight: 400,}}>{CardLinks.links1[0].para}</Typography>
        </Box>   
    </Card>
  )
}
