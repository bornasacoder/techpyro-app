import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block8() {
  const data = [
    {img:'https://img.freepik.com/free-psd/photography-workshop-banner-template_23-2148668972.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Washing Machine'},
    {img:'https://img.freepik.com/free-vector/cartoon-movie-producing-vertical-banners_52683-70705.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Headphone'},

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
