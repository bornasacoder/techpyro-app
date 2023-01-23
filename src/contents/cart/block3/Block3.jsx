import { Box, Button,Typography,useTheme } from '@mui/material'
import React from 'react'
import {CurrencyRupee} from '@mui/icons-material'
import { Link } from 'react-router-dom';

export default function Block3() {

    const theme = useTheme();

  return (
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',zIndex:1}}>
        <Typography sx={{marginTop:'13px',fontSize:'25px',color:{md:`${theme.colors.alpha.black[100]}`,xs:`${theme.header.textColor}`}}}>Total<CurrencyRupee sx={{fontSize:"20px",marginLeft:'10px'}}/>9999</Typography>
        <Link to={'/checkout'} style={{textDecoration:'none'}}>
          <Button sx={{marginTop:'13px',width:'150px',background:`${theme.colors.gradients.blue1}`,color:`${theme.colors.alpha.white[100]}`}}>Order</Button>
        </Link>
    </Box>
  )
}
