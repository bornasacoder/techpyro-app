import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Bedroom'},
    {img:'https://img.freepik.com/free-photo/3d-rendering-scandinavian-vintage-modern-kitchen-with-dining-area_105762-2192.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Dining Room '},
    {img:'https://img.freepik.com/free-vector/office-interior-colored-realistic-composition-room-fully-equipped-office-illustration_1284-61142.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Study and Office'},


    {img:'https://img.freepik.com/free-photo/kitchen-interior-design-with-wooden-table_23-2148848661.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Kitchen'},
    {img:'https://img.freepik.com/free-photo/retro-bathroom-authentic-interior-design_53876-111133.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Bathroom'},
    {img:'https://img.freepik.com/free-photo/green-child-living-room-interior-with-copy-space_43614-882.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Kids'},

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
