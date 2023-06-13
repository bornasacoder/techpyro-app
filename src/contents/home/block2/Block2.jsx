import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-photo/very-sexy-woman-show-her-natural-look_144627-4624.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Hair Saloon'},
    {img:'https://img.freepik.com/free-photo/woman-getting-massage-from-another-person_1286-20.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Ayurvedic Spa'},
    {img:'https://img.freepik.com/free-photo/medium-shot-nutritionist-measuring-patient_23-2148302085.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Weight Loss Center'},


    {img:'https://img.freepik.com/free-photo/rejuvenating-facial-treatment_158595-4602.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Skin Clinic    '},
    {img:'https://img.freepik.com/free-photo/picture-happy-beautiful-woman-massage-salon_155003-2712.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Spa Center'},
    {img:'https://img.freepik.com/free-photo/beautiful-face-young-woman-with-maroon-makeup-portrait-gorgeous-girl-with-vinous-lips_186202-7456.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Bridal Salon'},

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
