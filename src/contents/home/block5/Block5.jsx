import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block5() {
  const data = [
    {img:'https://img.freepik.com/free-vector/household-appliances-realistic-composition_1284-65307.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'AC'},
    {img:'https://img.freepik.com/free-photo/full-shot-smiley-woman-holding-tablet_23-2149395840.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Cooler'},
    {img:'https://img.freepik.com/free-psd/realistic-computer-design_1310-689.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'PC'},

    {img:'https://img.freepik.com/free-photo/woman-sitting-washing-machine-with-basket-full-clothes_23-2149117084.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais',name:'Washing Machine'},
        {img:'https://img.freepik.com/free-photo/headphones-stereo-equipment-single-object-technology-generated-by-ai_188544-10146.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sphh',name:'Headphone'},
    
        {img:'https://img.freepik.com/premium-psd/smart-tv-mockup-isolated-3d-rendering_322208-226.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'LED TV'},
     
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
