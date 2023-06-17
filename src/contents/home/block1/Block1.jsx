import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176679.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/women-heeled-shoes_1303-5875.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Coffee'},
    {img:'https://img.freepik.com/free-psd/white-shoes-mockup_1310-647.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Coke'},
    {img:'https://img.freepik.com/free-vector/pair-leather-sports-shoes-wood-background_1284-17526.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Chips'},
    {img:'https://img.freepik.com/free-photo/high-heel-shoes_1203-8674.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Mix Food'},
    {img:'https://img.freepik.com/free-photo/still-life-say-no-fast-fashion_23-2149669605.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/fashion-shoes_1203-7555.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/brown-flip-flops-summer-footwear-fashion_53876-106037.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/leather-shoes-wooden-background_1203-7618.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-vector/sale-banner-with-product-description_1361-1333.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/woman-posing-with-stylish-footwear-summer-fashion-bag-long-legs-shopping_285396-489.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/boots-wooden-floor_1205-70.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/brown-woman-shoe-with-female-male-hands_155003-33390.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/young-woman-shopping-with-high-heels-shopping-center_1149-1969.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/woman-shoes-isolated_1203-8368.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-psd/new-collection-fashion-sale-web-banner-template_120329-1507.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'French Fries'},
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
