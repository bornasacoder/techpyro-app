import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-carrying-package-box-grocery-food-drink-from-store-isolated-grey-studio-background-copy-space_1258-1232.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:' Vegetables'},
    {img:'https://img.freepik.com/premium-photo/pan-with-bottle-oil-isolated-white_392895-344420.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Oil'},

    {img:'https://img.freepik.com/free-photo/common-food-that-can-cause-allergic-reactions-people_23-2149870586.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Milk Products'},
    {img:'https://img.freepik.com/free-photo/set-various-bread-stone-surface_114579-40612.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Bread'},
    {img:'https://img.freepik.com/free-photo/instant-noodles-table_1150-27247.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Noodles'},
    {img:'https://img.freepik.com/free-photo/frozen-food-table-arrangement_23-2148969451.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Frozen Foods'},

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
