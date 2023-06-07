
import { SearchOff, SearchOffRounded } from '@mui/icons-material'
import { FormControl, InputLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import MiniSlider from '../../components/allcarousel/slider/slider2/MiniSlider'
import Navbar from '../../components/navbar/Navbar'

import { fastFood } from '../../constants/slider/fastfood'
import React from 'react'

const Search = () => {
  return (
    <>
      <Navbar />
     
      <Box sx={{width:'100%',display:'flex',justifyContent:'center',paddingTop:'50px'}}>
       <TextField variant='outlined' label='Search for restaurents and food...' sx={{width:{xs:'90%',sm:'80%',md:'60%'}}}><SearchOffRounded sx={{color:'black'}}/></TextField>
       
      </Box>
      <MiniSlider sliderData={fastFood} />
    </>
  )
}

export default Search
