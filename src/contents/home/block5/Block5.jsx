import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block5() {
  const data = [
    
    {img:'https://img.freepik.com/free-photo/beautiful-shot-modern-house-kitchen-dining-room_181624-2870.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Kitchen'},
    {img:'https://img.freepik.com/free-vector/modern-realistic-bathroom-interior-design_1284-19013.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Bathroom'},
    {img:'https://img.freepik.com/free-photo/child-having-fun-during-playtime_23-2149382704.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Kids'},

    {img:'https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Bedroom'},
    {img:'https://img.freepik.com/free-photo/3d-rendering-dining-set-modern-scandinavian-kitchen_105762-2095.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Dining Room '},
    {img:'https://img.freepik.com/free-vector/office-interior-realistic-with-desk-armchair-winners-cups-cabinet-shelves_1284-62660.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Study and Office'},



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
