import { Box, Card, Typography } from '@mui/material'
import React from 'react'

export default function Item({data}) {
  return (
    <Card sx={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center',height:{xs:'220px',lg:'320px'}}}>
      
        <img style={{width:'100%',height:'100%'}} src={data.img} alt="card"/>
     
     
          
      
    </Card>
  )
}
