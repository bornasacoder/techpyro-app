import { Box, Card, Typography } from '@mui/material'
import React from 'react'

export default function Item({data}) {
  return (
    <Card sx={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center',height:{xs:'220px'}}}>
      
        <img style={{width:'100%',height:'80%'}} src={data.img} alt="card"/>
     
     
          <Typography sx={{fontSize:{xs:'16px'}, fontWeight: 400, }}>{data.name}</Typography>
          
      
    </Card>
  )
}
