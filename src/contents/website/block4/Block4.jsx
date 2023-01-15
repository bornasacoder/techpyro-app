import { Box, Grid } from '@mui/material'
import React from 'react'
import Item from './card/Item'

export default function Block4(props) {
  return (
    <Box sx={{margin:'20px'}}>
        <Grid container spacing={2}>
            {props.websitesData.Educationads.map((item, index) => (
            <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
                <Item CardLinks={item}/>
            </Grid>
         ))}
        </Grid>
      </Box>
  )
}
