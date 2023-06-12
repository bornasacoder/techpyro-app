import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Jewellery'},
    {img:'https://img.freepik.com/free-photo/multi-colored-school-supplies-shopping-cart-gray-background-with-copy-space-text-concept-returning-school-new-school-year-shopping_73683-2218.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Stationery'},


    {img:'https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1934.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Home and Furnishings'},
    {img:'https://img.freepik.com/free-psd/yellow-blue-toy-train-makeup_220664-3356.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Toys'},
    {img:'https://img.freepik.com/free-photo/close-up-collection-make-up-beauty-products_23-2148620012.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Cosmetics'},
    {img:'https://img.freepik.com/free-vector/household-appliances-gift-realistic_1284-65309.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Electronics and Appliances'},

  ]
  return (
      <Box sx={{margin:{md:'0px 0 40px',xs:'0px 0 20px'},display:'flex',flexDirection:'column'}}>
        <Typography sx={{margin:{xs:'0 0 10px 10px',md:'0 0 30px 30px'},fontSize:{xs:'16px',md:'20px'},fontWeight:'500'}}>Explore Menu</Typography>
        <Grid container spacing={2}>
            {data.map((item, index) => (
            <Grid item xs={4} sm={2} md={2} lg={2} key={index}>
                <Item data={item}/>
            </Grid>
         ))}
        </Grid>
      </Box>
  )
}
