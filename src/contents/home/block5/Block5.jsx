import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block5() {
  const data = [
    
    {img:'https://img.freepik.com/free-photo/picture-charming-magnetic-young-female-with-curly-black-hair_176532-7422.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Portrait'},
    {img:'https://img.freepik.com/free-photo/full-shot-couple-announcing-pregnancy-with-smartphone_23-2150296845.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Baby and Maternity'},
    {img:'https://img.freepik.com/free-photo/couple-dancing-ther-wedding_1157-93.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Event'},

    {img:'https://img.freepik.com/free-photo/white-drone-hovering-bright-blue-sky_158595-3344.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Drone Camera'},
    {img:'https://img.freepik.com/free-photo/young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-taking-pictures-vintage-camera_285396-2949.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Wedding Photography    '},
    {img:'https://img.freepik.com/free-photo/indian-photographer-with-camera-pastel-wall_496169-1588.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Fashion'},


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
