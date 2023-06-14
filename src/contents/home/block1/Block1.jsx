import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-photo/freshly-baked-naan-bread-rustic-wood-bowl-generated-by-ai_188544-11765.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/gourmet-bowl-with-healthy-rice-meat-vegetables-generated-by-ai_188544-14076.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Coffee'},
    {img:'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Coke'},
    {img:'https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Chips'},
    {img:'https://img.freepik.com/free-psd/food-menu-delicious-pizza-web-banner-template_106176-419.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Mix Food'},
    {img:'https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/front-view-yummy-meat-cheeseburger-with-french-fries-dark-background-dinner-burgers-snack-fast-food-sandwich-salad-dish-toast_140725-159215.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine_2829-4415.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/high-angle-chicken-meal_23-2148825122.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/massaman-curry-frying-pan-with-spices-cement-floor_1150-20779.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/top-view-delicious-fish-meal-tray_23-2148734692.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/indian-butter-chicken-black-bowl-black-background_123827-20757.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18712.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/top-view-delicious-food-arrangement_23-2148723477.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/top-view-indian-food-bowl_23-2148723475.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'French Fries'},
    {img:'https://img.freepik.com/free-photo/lentil-salad-with-peppersonion-carrot-bowl_123827-21635.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Coka cola'},
    {img:'https://img.freepik.com/free-photo/organic-berry-granola-bowl-with-almond-milk-generated-by-ai_188544-10905.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Noodles'},



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
