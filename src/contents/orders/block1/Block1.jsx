import { Box, } from '@mui/material'
import React from 'react'
import LeftBar from './blockLeft/LeftBar'
import Item from './item/Item'
import SearchBar from './searchBar/SearchBar'

export default function Block1() {
  return (
    <Box sx={{display:'flex',gap:'20px',margin:'20px 100px'}}>
        <LeftBar/>
        <Box sx={{flex:'3'}}>
            <SearchBar/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </Box>
    </Box>
  )
}
