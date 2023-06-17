import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/meat-burger-with-fries-glass-ayran_140725-6711.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Coffee'},
    {img:'https://img.freepik.com/free-photo/fast-food-french-fries-with-sandwich-cafe_169016-2100.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Coke'},
    {img:'https://img.freepik.com/free-photo/mini-burgers-french-fries-spices-cocktails-side-view_141793-1814.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Chips'},
    {img:'https://img.freepik.com/free-photo/front-view-milkshake-with-whipped-cream-chocolate-icing-with-appetizers-salad-table_141793-2836.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Mix Food'},
    {img:'https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/brown-splashes-out-drink-from-cup-tea-brown-wall_155003-2058.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/heart-shaped-coffee-beans-cup-latte-wooden-table-generative-ai_191095-1859.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/cup-aromatic-coffee-outdoors_1112-448.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/top-view-milk-coffee-with-waffles-light-desk-sweet-sugar-waffle-milk-color_140725-30817.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/glass-foamy-cold-coffee-with-whipped-cream-chocolate-wooden-plate_114579-90914.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/front-view-mokachino-with-whipped-cream-chocolate-table_141793-4644.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/cold-coffee-with-ice-cream_1220-4091.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/iced-coffee-table_1339-5938.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/iced-coffee-glasses_1220-3571.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'French Fries'},
    {img:'https://img.freepik.com/free-photo/coffee-drink-with-hot-chocolate_140725-1745.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Coka cola'},
    {img:'https://img.freepik.com/free-photo/iced-coffee-glasses_1220-3572.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Noodles'},
    {img:'https://img.freepik.com/free-photo/cold-coffee-with-ice-cream_1220-4092.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Vegetable'},
    {img:'https://img.freepik.com/free-photo/ice-coffee-with-whipped-cream_144627-1070.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
  ]
  return (
      <Box sx={{margin:{xs:'140px 20px 40px',md:'120px 20px 40px'},display:'flex',flexDirection:'column'}}>
        <Typography sx={{margin:{xs:'0 0 10px 10px',md:'0 0 30px 30px'},fontSize:{xs:'16px',md:'20px'},fontWeight:'500'}}>Explore Menu</Typography>
        <Grid container spacing={2}>
            {data.map((item, index) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                <Item data={item}/>
            </Grid>
         ))}
        </Grid>
      </Box>
  )
}
