import { Box, Card, Typography } from '@mui/material'
import React from 'react'

export default function gridCard({CardLinks}) {
  return (
    <Card sx={{height:{md:'300px',xs:'250px',boxShadow:'none'}}}>
      <Box sx={{height:'75%'}}>
        <img style={{height:'100%',width:'100%'}} src={'/images/blog-1.jpg'} alt="card"/>
      </Box>
      <Box sx={{height:'25%', padding:'5px 0px 5px 15px',borderRight:"1px solid rgba(214,217,220,1)",borderBottom:"1px solid rgba(214,217,220,1)", borderLeft:"1px solid rgba(214,217,220,1)" , borderBottomRightRadius:'10px', borderBottomLeftRadius:'10px' }}>
          <Typography sx={{fontSize:'20px', fontWeight: 500, }}>{CardLinks.links1[0].name}</Typography>
          <Typography sx={{fontSize:'15px', fontWeight: 300,}}>{CardLinks.links1[0].para}</Typography>
      </Box>
    </Card>
  )
}
