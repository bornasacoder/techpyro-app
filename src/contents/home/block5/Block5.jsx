import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block5() {
  const data = [
    {img:'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Burger'},
    {img:'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Coffee'},
    {img:'https://images.pexels.com/photos/4085278/pexels-photo-4085278.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Coke'},
    {img:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Chips'},
    {img:'https://images.pexels.com/photos/19642/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',name:'Mix Food'},
    {img:'https://images.pexels.com/photos/14000427/pexels-photo-14000427.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Marita'},

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
