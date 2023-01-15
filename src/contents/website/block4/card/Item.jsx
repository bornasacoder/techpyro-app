import { Box, Card, Typography,useTheme } from '@mui/material'
import React from 'react'

export default function Item({CardLinks}) {
  const theme = useTheme();

  return (
    <Card sx={{height:{sm:'400px',xs:'200px',boxShadow:'none',position:'relative'}}}>
      <Box sx={{height:'100%'}}>
        <img style={{height:'100%',width:'100%'}} src={'/images/12.png'} alt="card"/>
      </Box>
      <Box sx={{position:'absolute' ,left:'10%',right:0,top:'70%',color:`${theme.colors.alpha.white[100]}`}}>
          <Typography sx={{fontSize:{md:'40px',sm:'35px',xs:'20px'}, fontWeight: 500, }}>{CardLinks.title}</Typography>
          <Typography sx={{fontSize:{md:'30px',sm:'25px',xs:'18px'}, fontWeight: 300,}}>{CardLinks.offer}</Typography>
      </Box>
    </Card>
  )
}
