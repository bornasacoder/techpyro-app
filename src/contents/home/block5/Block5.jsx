import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block5() {
  const data = [
    {img:'https://img.freepik.com/free-photo/young-beautiful-smiling-female-trendy-summer-skirt-top-clothes-sexy-carefree-woman-posing-near-blue-wall-studio-positive-brunette-model-having-funcheerful-happy_158538-24924.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Skirts'},
    {img:'https://img.freepik.com/free-photo/tylish-dark-haired-woman-summer-shorts-top-smiles-shows-peace-sign-pink-wall_197531-16704.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Shorts'},
    {img:'https://img.freepik.com/free-photo/portrait-bearded-male-dressed-grey-jacket-hat-isolated-grey-background_613910-3150.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Jackets'},

    {img:'https://img.freepik.com/free-photo/young-woman-with-shopping-bags-beautiful-dress_1303-17549.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Lehenga Choli'},
    {img:'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4909.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Shirt'},

    {img:'https://img.freepik.com/free-photo/stack-clothes-white-background-closeup_93675-132644.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Jeans'},
  
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
