import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block5() {
  const data = [
    {img:'https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Sport Shoes'},
    {img:'https://img.freepik.com/free-photo/shoes_1203-8153.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Casual Shoes   '},

    {img:'https://img.freepik.com/free-photo/travel-beach-vibrant-red-colorful_1203-6068.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Slipper'},
    {img:'https://img.freepik.com/free-photo/women-rsquo-s-white-high-heel-shoes-fashion_53876-106046.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Sandals'},
    {img:'https://img.freepik.com/free-photo/sneakers-shoes_1203-8036.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Loafers'},
    {img:'https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Sneakers'},

  ]
  return (
      <Box sx={{margin:'20px 20px 40px',display:'flex',flexDirection:'column'}}>
        <Typography sx={{margin:{xs:'0 0 10px 10px',md:'0 0 30px 30px'},fontSize:{xs:'16px',md:'20px'},fontWeight:'500'}}>Explore Menu</Typography>
        <Grid container spacing={2}>
            {data.map((item, index) => (
            <Grid item xs={12} sm={2} md={2} lg={4} key={index}>
                <Item data={item}/>
            </Grid>
         ))}
        </Grid>
      </Box>
  )
}
