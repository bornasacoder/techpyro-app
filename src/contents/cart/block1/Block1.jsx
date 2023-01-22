import { Box } from '@mui/material'
import React from 'react'
import Item from './item/Item'

export default function Block1(props) {
  return (
    <Box sx={{width:{md:'65%',xs:'100%'},}}>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </Box>
  )
}
