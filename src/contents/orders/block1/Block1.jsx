import { Box, styled, } from '@mui/material'
import React from 'react'
import LeftBar from './blockLeft/LeftBar'
import Item from './item/Item'
import SearchBar from './searchBar/SearchBar'

const OrderContainer = styled(Box)(({theme})=>({
    margin:'20px 100px',
    "@media (max-width: 810px)": {
        margin:'20px 20px',
      },
    "@media (max-width: 600px)": {
        margin:'0px 0px',
      },
}))

export default function Block1() {
  return (
    <OrderContainer sx={{display:'flex',gap:'20px',marginTop:{sm:'0',xs:'100px'}}}>
        <Box sx={{flex:"1",display:{md:'block',xs:'none'}}}>
            <LeftBar/>
        </Box>
        <Box sx={{flex:'3',marginTop:'60px'}}>
            <SearchBar/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </Box>
    </OrderContainer>
  )
}
