import { Box, Grid } from '@mui/material'
import React from 'react'
import { CardLinks } from '../../../constants/Constant'
import GridCard from './GridCard'


export default function Grid1() {
  return (
      <Box sx={{margin:'20px'}}>
        <Grid container spacing={2}>
            {Array.from(Array(6)).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <GridCard CardLinks={CardLinks}/>
            </Grid>
         ))}
        </Grid>
      </Box>
  )
}
