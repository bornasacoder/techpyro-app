import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Card5 = () => {
  return (
    <>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'750px'}}>
        <TextField variant='standard' label='Search...' sx={{width:'70%',fontSize:'30px'}}></TextField>
      </Box>
    </>
  )
}

export default Card5
