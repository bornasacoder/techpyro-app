import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block5() {
  const data = [
    {img:'https://img.freepik.com/free-photo/side-view-two-cups-coffee-cookies-cinnamon-limes-old-newspaper-dark-surface_140725-142669.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.1.833918949.1682592323&semt=sph',name:'Masala Tea'},
    {img:'https://img.freepik.com/premium-photo/hot-masala-tea-is-poured-into-glass-glass-steam-comes-out-mug-gray-background_163994-236.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph',name:'Darjeeling Tea'},

    {img:'https://img.freepik.com/premium-photo/tea-with-tea-glass-white-wood_44074-1444.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais',name:'Green Tea'},
    {img:'https://img.freepik.com/free-photo/glasses-with-lemonade-table_23-2148482456.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais',name:'Lemon Tea'},
    {img:'https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=sph',name:'Hot Coffee'},
    {img:'https://img.freepik.com/free-photo/glass-foamy-cold-coffee-with-whipped-cream-chocolate-wooden-plate_114579-90914.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais',name:'Cold Coffee'},
  
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
