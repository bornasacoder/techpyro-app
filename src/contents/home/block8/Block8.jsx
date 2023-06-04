import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block8() {
  const data = [
    {img:'https://img.freepik.com/free-psd/coffee-bags-mockup-gravity-psd_15879-598.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais',name:'Assam Coffee'},
    {img:'https://img.freepik.com/free-photo/package-near-cup-sack-with-coffee-beans_23-2148180220.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais',name:'Hot Coffee'},

  ]
  return (
      <Box sx={{margin:'20px 20px 40px',display:'flex',flexDirection:'column'}}>
        <Typography sx={{margin:{xs:'0 0 10px 10px',md:'0 0 30px 30px'},fontSize:{xs:'16px',md:'20px'},fontWeight:'500'}}>Explore Menu</Typography>
        <Grid container spacing={2}>
            {data.map((item, index) => (
            <Grid item xs={12} sm={2} md={2} lg={6} key={index}>
                <Item data={item}/>
            </Grid>
         ))}
        </Grid>
      </Box>
  )
}
