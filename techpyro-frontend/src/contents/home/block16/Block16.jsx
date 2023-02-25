import { Box, Grid } from '@mui/material'
import React from 'react'
import { CardLinks } from '../../../constants/Constant'
import Item from './card/Item'

export default function Block16() {
  return (
    <Box sx={{margin:'20px'}}>
        <Grid container spacing={2}>
            {Array.from(Array(2)).map((item, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                <Item CardLinks={CardLinks}/>
            </Grid>
         ))}
        </Grid>
      </Box>
  )
}
