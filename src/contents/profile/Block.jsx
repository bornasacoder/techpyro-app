import { Box, useTheme, } from '@mui/material'
import React from 'react'
import Block1 from './block1/Block1'
import Block2 from './block2/Block2'
import Block3 from './block3/Block3'

export default function Block() {
    const theme = useTheme();
  return (
    <Box sx={{fontSize:'18px',background:`${theme.colors.alpha.white[100]}`,width:'calc(60% - 80px)',display:'flex',flexDirection:'column',gap:'10px',boxShadow:`${theme.colors.shadows.card}`,padding:'20px 30px'}}>
        <Box sx={{fontSize:'20px',fontWeight:500,height:'50px',padding:'10px 0 0 10px',background:`${theme.colors.alpha.black[10]}`}}>General Information</Box>
        <Block1/>
        <Block2/>
        <Block3/>
    </Box>
  )
}
