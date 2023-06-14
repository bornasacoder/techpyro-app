
import { Box, Divider, Stack, styled, useTheme ,Typography} from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:'10px'}}>
      <Typography sx={{fontWeight:'600',fontSize:'14px'}}>Minimum cart value for delivery is Rs. 200</Typography>
      <Box sx={{background:'#DD3739',color:'#fff',width:'80%',textAlign:'center',padding:'10px 0',borderRadius:'10px',fontSize:'18px',fontWeight:'600'}}>Checkout</Box>
    </Box>
  )
}
