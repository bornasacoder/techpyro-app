import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block5() {
  const data = [
    {img:'https://img.freepik.com/free-photo/rejuvenating-facial-treatment_158595-4601.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Skin Clinic    '},
    {img:'https://img.freepik.com/free-photo/young-woman-having-face-massage-relaxing-spa-salon_176420-7546.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Spa Center'},
    {img:'https://img.freepik.com/free-photo/makeup-process-wedding-day_144627-37780.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Bridal Salon'},

    {img:'https://img.freepik.com/free-photo/woman-washing-head-hairsalon_1157-27179.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Hair Saloon'},
    {img:'https://img.freepik.com/free-photo/professional-masseur-applying-massage-oil-female-back-beauty-salon_186202-709.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Ayurvedic Spa'},
    {img:'https://img.freepik.com/free-photo/medium-shot-nutritionist-measuring-patient_23-2148302085.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Weight Loss Center'},


   

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
