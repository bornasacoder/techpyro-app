import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block8() {
  const data = [
    {img:'https://img.freepik.com/free-psd/new-collection-sneakers-social-media-template_505751-3255.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Washing Machine'},
    {img:'https://img.freepik.com/premium-photo/unbranded-modern-sporty-shoes-sneakers-white-isolated_120794-337.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Headphone'},

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
