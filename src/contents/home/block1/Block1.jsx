import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-vector/white-cup-hot-coffee-with-cinnamon-saucer-beans-wooden-table-realistic_1284-56783.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/tool-used-coffee-machine-during-coffee-making-process_23-2150187533.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Coffee'},
    {img:'https://img.freepik.com/free-vector/espresso-coffee-cup-coffee-beans_79603-1038.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Coke'},
    {img:'https://img.freepik.com/free-photo/tool-used-coffee-machine-during-coffee-making-process_23-2150187534.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Chips'},
    {img:'https://img.freepik.com/free-vector/realistic-coffee-time-background-with-coffee-cup_79603-1559.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Mix Food'},
    {img:'https://img.freepik.com/free-photo/person-drinking-coffee-spacious-cafeteria_23-2150424046.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/side-view-two-cups-coffee-cookies-cinnamon-limes-old-newspaper-dark-surface_140725-142669.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/brown-splashes-out-drink-from-cup-tea-brown-wall_155003-2058.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/heart-shaped-coffee-beans-cup-latte-wooden-table-generative-ai_191095-1859.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/cup-aromatic-coffee-outdoors_1112-448.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/top-view-milk-coffee-with-waffles-light-desk-sweet-sugar-waffle-milk-color_140725-30817.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/glass-foamy-cold-coffee-with-whipped-cream-chocolate-wooden-plate_114579-90914.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/front-view-mokachino-with-whipped-cream-chocolate-table_141793-4644.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/cold-coffee-with-ice-cream_1220-4091.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/iced-coffee-table_1339-5938.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/iced-coffee-glasses_1220-3571.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'French Fries'},
    {img:'https://img.freepik.com/free-photo/coffee-drink-with-hot-chocolate_140725-1745.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Coka cola'},
    {img:'https://img.freepik.com/free-photo/iced-coffee-glasses_1220-3572.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Noodles'},
    {img:'https://img.freepik.com/free-photo/cold-coffee-with-ice-cream_1220-4092.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Vegetable'},
    {img:'https://img.freepik.com/free-photo/ice-coffee-with-whipped-cream_144627-1070.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
  ]
  return (
      <Box sx={{margin:{xs:'140px 20px 40px',md:'120px 20px 40px'},display:'flex',flexDirection:'column'}}>
        <Typography sx={{margin:{xs:'0 0 10px 10px',md:'0 0 30px 30px'},fontSize:{xs:'16px',md:'20px'},fontWeight:'500'}}>Explore Menu</Typography>
        <Grid container spacing={2}>
            {data.map((item, index) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
                <Item data={item}/>
            </Grid>
         ))}
        </Grid>
      </Box>
  )
}
