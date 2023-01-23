import { Typography,useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import Item from './item/Item';

export default function Block3() {
    const theme = useTheme();

  return (
    <Box>
        <Box sx={{height:'50px',display:'flex',gap:'20px',alignItems:'center',padding:'0 20px',
        background:`${theme.colors.alpha.white[100]}`,border:`1px solid ${theme.colors.alpha.black[10]}`,
        boxShadow:`${theme.colors.shadows.cardSm}`}}>
                <Box sx={{width:'20px',height:'20px', textAlign:'center',background:`${theme.colors.alpha.black[10]}`}}>3</Box>
                <Typography sx={{fontSize:'20px',fontWeight:500}}>Order Summary</Typography>
                <DoneIcon sx={{color:`${theme.colors.success.dark}`}} fontSize='small'/>
        </Box>
        <Box sx={{width:'100%',}}>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </Box>
    </Box>
  )
}
