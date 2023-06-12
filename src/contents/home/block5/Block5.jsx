import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block5() {
  const data = [
    {img:'https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2053.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Home and Furnishings'},
    {img:'https://img.freepik.com/free-photo/different-cosmetics-types-scattered-pink-table_23-2148046897.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Cosmetics'},
    {img:'https://img.freepik.com/free-vector/household-appliances-realistic-composition_1284-65307.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Electronics and Appliances'},

    {img:'https://img.freepik.com/free-photo/model-demonstrating-earrings-ring_7502-7042.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Jewellery'},
    {img:'https://img.freepik.com/free-photo/stack-books-black-wooden-table_93675-135345.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Stationery'},


    {img:'https://img.freepik.com/free-vector/christmas-toys-background-flat-design_23-2148350472.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Toys'},
  
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
