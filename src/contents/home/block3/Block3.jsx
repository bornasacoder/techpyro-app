import { Box, Grid, Typography,Button } from '@mui/material'
import React from 'react';
import Item from './Item';


export default function Block3() {
  const data = [
    {img:'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Burger'},
    {img:'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Coffee'},
    {img:'https://images.pexels.com/photos/4085278/pexels-photo-4085278.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Coke'},
    {img:'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Chips'},
    {img:'https://images.pexels.com/photos/19642/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',name:'Mix Food'},
    {img:'https://images.pexels.com/photos/14000427/pexels-photo-14000427.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Marita'},
    {img:'https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Burger'},
    {img:'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Marita'},
    {img:'https://images.pexels.com/photos/372959/pexels-photo-372959.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Marita'},
    {img:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Marita'},
    {img:'https://images.pexels.com/photos/404178/pexels-photo-404178.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Marita'},
    {img:'https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Burger'},
    {img:'https://images.pexels.com/photos/2498440/pexels-photo-2498440.jpeg?auto=compress&cs=tinysrgb&w=600',name:'French Fries'},
    {img:'https://images.pexels.com/photos/4389660/pexels-photo-4389660.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Coka cola'},
    {img:'https://images.pexels.com/photos/2456434/pexels-photo-2456434.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Noodles'},
    {img:'https://images.pexels.com/photos/7890010/pexels-photo-7890010.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Vegetable'},
    {img:'https://images.pexels.com/photos/14000427/pexels-photo-14000427.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Marita'},


  ]
  return (
    <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
      {data.map((item) =>(
     <Item data={item}/>
     ))}
      </Box>
  )
}
