import { Box, Grid, Typography,Button } from '@mui/material'
import React from 'react'


export default function Block1() {
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
    {img:'https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Marita'},
    {img:'https://images.pexels.com/photos/2287810/pexels-photo-2287810.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Marita'},
    {img:'https://images.pexels.com/photos/7192144/pexels-photo-7192144.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Marita'},
    {img:'https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Burger'},
    {img:'https://images.pexels.com/photos/2498440/pexels-photo-2498440.jpeg?auto=compress&cs=tinysrgb&w=600',name:'French Fries'},
    {img:'https://images.pexels.com/photos/4389660/pexels-photo-4389660.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Coka cola'},
    {img:'https://images.pexels.com/photos/2456434/pexels-photo-2456434.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Noodles'},
    {img:'https://images.pexels.com/photos/7890010/pexels-photo-7890010.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Vegetable'},
    {img:'https://images.pexels.com/photos/14000427/pexels-photo-14000427.jpeg?auto=compress&cs=tinysrgb&w=600',name:'Marita'},


  ]
  return (
      <Box sx={{display:'flex',alignItems:'center',boxShadow:{xs:'none',md:'0 1px 5px rgba(104,104,104,0.8)'},gap:{xs:'20px',md:'0'},flexDirection:{xs:'column',md:'row'},margin:{xs:'30px 20px 30px',md:'10px 20px 30px'}}}>
        <Box sx={{display:'flex',width:{xs:'100vw',md:'50vw'}}}>
        <img src={data[0].img} style={{width:'100%',height:'100%'}} />
        </Box >
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:'40px',justifyContent:'center',width:{xs:'100vw',md:'50vw'}}}>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
           <Typography sx={{fontSize:{xs:'30px',md:'40px'},fontWeight:{xs:'600',md:'700'},color:'#F66744'}}>End Of Offers</Typography>
           <Typography sx={{fontSize:{xs:'20px',md:'25px'},fontWeight:{xs:'400',md:'500'},color:'#F66744'}}>Festive Feels Delightful Deals</Typography>
           </Box>
          <Box sx={{display:'flex',gap:'10px'}}>
           <Button sx={{background:'#000',color:'#fff',borderRadius:'0'}}>Veg</Button>
           <Button sx={{background:'#000',color:'#fff',borderRadius:'0'}}>Non Veg</Button>
           <Button sx={{background:'#000',color:'#fff',borderRadius:'0'}}>Fast Food</Button>
          </Box>
        </Box>
      </Box>
  )
}
