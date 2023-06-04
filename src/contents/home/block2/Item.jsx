import { Box, Card, Typography } from '@mui/material'
import React from 'react'

export default function Item({data}) {
  return (
    <Box sx={{display:'flex',flexDirection:'column',gap:'10px',alignItems:'center'}}>
      <Box sx={{width:{lg:'150px',xs:'100px'},height:{lg:'150px',xs:'100px'}}}>
        <img style={{width:'100%',height:'100%',borderRadius:"50%"}} src={data.img} alt="card"/>
      </Box>
      <Box >
          <Typography sx={{fontSize:{xs:'16px'}, fontWeight: 400, }}>{data.name}</Typography>
          
      </Box>
    </Box>
  )
}
