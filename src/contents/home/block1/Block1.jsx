import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-vector/tv-screen-wall-with-neon-light_134830-819.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Coffee'},
    {img:'https://img.freepik.com/free-photo/young-woman-wearing-headphones-sitting-sofa-coffee-table-living-room_141793-122743.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Coke'},
    {img:'https://img.freepik.com/free-vector/air-conditioner-with-flows-cold-air-wall-realistic-vector-illustration_1284-76980.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Chips'},
    {img:'https://img.freepik.com/free-vector/modern-washing-machine-empty-laundry-room_1284-33056.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Mix Food'},
    {img:'https://img.freepik.com/free-vector/washing-machine-realistic-set_1284-29777.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-vector/3d-realistic-mock-up-with-gray-two-chambered-refrigerator-isolated-tile-wall_1441-2146.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-vector/refrigerator-organization-set_1284-23312.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-psd/tablet-mock-up-isolated_1310-1643.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/businessman-relaxing-office_1098-21722.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/full-shot-smiley-woman-sitting-chair_23-2149410594.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-vector/different-heaters-interior-realistic-illustration_1284-59763.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/full-shot-blurry-couple-sitting-couch_23-2149308945.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-vector/modern-desktop-computer-concept-illustration_114360-16235.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-psd/laptop-black-background-mock-up-design_1135-80.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'French Fries'},
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
