import { Box, Button,Typography,useTheme } from '@mui/material'
import React from 'react'
import {CurrencyRupee} from '@mui/icons-material'

export default function Block3() {

    const theme = useTheme();

  return (
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Typography sx={{fontSize:'20px'}}>Total<CurrencyRupee sx={{fontSize:"14px"}}/>9999</Typography>
        <Button sx={{background:`${theme.colors.gradients.blue1}`,color:`${theme.colors.alpha.white[100]}`}}>Order</Button>
    </Box>
  )
}
