import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-photo/couple-looking-shop-window_1098-758.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/young-couple-protection-mask-holding-multiple-paper-shopping-bag-walking-corridor-large-shopping-mall_1150-47177.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Coffee'},
    {img:'https://img.freepik.com/free-photo/this-is-same-shoes_329181-1769.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Coke'},
    {img:'https://img.freepik.com/free-photo/market_1205-448.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Chips'},
    {img:'https://img.freepik.com/free-photo/shoppers-talking-center_1098-12640.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Mix Food'},
    {img:'https://img.freepik.com/free-photo/weekend-shopping-center_1098-12634.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/two-beautiful-women-shopping-town_1303-16426.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Burger'},
    {img:'https://img.freepik.com/free-vector/customers-fashion-shop-women-choosing-clothes-store-flat-vector-illustration-shopping-sale-retail-concept_74855-9836.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/mother-daughter-with-shopping-bag_1157-21280.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/couple-lover-activity-happiness-lifestyle_53876-13941.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/family-mall_1098-15029.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-vector/advertising-flyer-two-mothers-with-prams-cartoon_81522-4317.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-vector/people-returning-malls-new-normal-scenes_52683-41108.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/mother-daughter-posing-near-boutique-with-shopping-bags_7502-4268.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/cheery-little-girl-sitting-shopping-cart_171337-2374.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'French Fries'},
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
