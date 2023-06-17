import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-photo/elegant-woolen-jacket-men-winter-fashion-generated-by-ai_188544-34301.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448749.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Coffee'},
    {img:'https://img.freepik.com/free-photo/clothing-rack-with-floral-hawaiian-shirts-hangers-hat_23-2149366018.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Coke'},
    {img:'https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Chips'},
    {img:'https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448751.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Mix Food'},
    {img:'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4909.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/young-woman-with-black-hat-sunglasses-isolated-white-background_231208-2050.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/online-fashion-shopping-with-tablet_23-2150400622.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/green-front-sweater_125540-736.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-vector/sale-banner-with-product-description_1361-1333.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/woman-posing-with-stylish-footwear-summer-fashion-bag-long-legs-shopping_285396-489.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/boots-wooden-floor_1205-70.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/brown-woman-shoe-with-female-male-hands_155003-33390.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/young-woman-shopping-with-high-heels-shopping-center_1149-1969.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-vector/various-color-checkered-cotton-shirts-folded-stack_1441-3074.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/pink-sweater-front_125540-746.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'French Fries'},
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
