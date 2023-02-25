import { Box, Grid } from '@mui/material'
import React from 'react'
import { CardLinks } from '../../../constants/Constant'
import Item from './card/Item'

export default function Block10() {
  return (
    <Box sx={{margin:{sm:'20px',xs:'20px'},}}>
        <Grid container spacing={2}>
            {Array.from(Array(1)).map((item, index) => (
            <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
                <Item CardLinks={CardLinks}/>
            </Grid>
         ))}
        </Grid>
      </Box>
  )
}
