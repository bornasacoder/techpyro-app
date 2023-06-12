import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-vector/washing-machine-realistic-background-with-laundry-equipment-symbols-illustration_1284-29130.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais',name:'Washing Machine'},
    {img:'https://img.freepik.com/free-vector/vintage-tv_23-2147503075.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph',name:'TV'},

    {img:'https://as2.ftcdn.net/v2/jpg/03/27/62/49/1000_F_327624949_Vm1siGpY2k6WpDD0EowDwuULkZbsymAK.jpg',name:'Fan'},
    {img:'https://img.freepik.com/free-psd/laptop-blue-background-mock-up_1022-178.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Laptop'},
    {img:'https://img.freepik.com/free-psd/3d-rendering-hotel-icon_23-2150102380.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'AC'},
    {img:'https://img.freepik.com/free-photo/headphones-balancing-with-blue-background_23-2150271756.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Headphone'},

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
