import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';const Categories = () => {
  return (
    <div style={{margin:"8vw"}}>
       <Typography variant="h2"  style={{fontWeight:"bold"}} component="h1" gutterBottom>
     Categories
      </Typography>
      <Grid container  spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={1.5}>
        <Paper>
        <ElectricBikeIcon style={{fontSize:"75px", color:"grey"}} />
       <Typography variant="h6"    component="h6" gutterBottom>
         Cycling</Typography>
        </Paper>
      </Grid>
      <Grid item   xs={12} sm={6} md={4} lg={1.5}>
         <Paper>
        <ElectricBikeIcon style={{fontSize:"75px", color:"grey"}} />
       <Typography variant="h6"    component="h6" gutterBottom>
         Cycling</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={1.5}>
         <Paper>
        <ElectricBikeIcon style={{fontSize:"75px", color:"grey"}} />
       <Typography variant="h6"    component="h6" gutterBottom>
         Cycling</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={1.5}>
         <Paper>
        <ElectricBikeIcon style={{fontSize:"75px", color:"grey"}} />
       <Typography variant="h6"    component="h6" gutterBottom>
         Cycling</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={1.5}>
         <Paper>
        <ElectricBikeIcon style={{fontSize:"75px", color:"grey"}} />
       <Typography variant="h6"    component="h6" gutterBottom>
         Cycling</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={1.5}>
         <Paper>
        <ElectricBikeIcon style={{fontSize:"75px", color:"grey"}} />
       <Typography variant="h6"    component="h6" gutterBottom>
         Cycling</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={1.5}>
         <Paper>
        <ElectricBikeIcon style={{fontSize:"75px", color:"grey"}} />
       <Typography variant="h6"    component="h6" gutterBottom>
         Cycling</Typography>
        </Paper>
      </Grid>
    </Grid>
    </div>
  )
}

export default Categories
