import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block5() {
  const data = [
    {img:'https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:' Vegetables'},
    {img:'https://img.freepik.com/free-vector/realistic-sesame-poster_1284-69965.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Oil'},

    {img:'https://img.freepik.com/free-vector/milk-products-template_1284-14600.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Milk Products'},
    {img:'https://img.freepik.com/free-photo/various-homemade-bread-burlap-with-wheat-high-quality-photo_114579-38042.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Bread'},
    {img:'https://img.freepik.com/free-photo/side-view-macaronis-as-bucatini-spaghetti-jars-with-salt-garlic-garlic-crusher-cloth-note-pad-wooden-surface-black-background-with-copy-space_141793-10913.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Noodles'},
    {img:'https://img.freepik.com/free-photo/composition-with-frozen-fish-table_23-2148969396.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Frozen Foods'},

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
