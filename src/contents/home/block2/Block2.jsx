import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17813.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'General Physician'},
    {img:'https://img.freepik.com/free-photo/young-doctor-is-using-stethoscope-listen-heartbeat-patient-shot-female-doctor-giving-male-patient-check-up_657921-875.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Cardiologist    '},
    {img:'https://img.freepik.com/free-photo/this-pain-stomach-is-unbearable_329181-2191.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Gastroenterologist'},
    {img:'https://img.freepik.com/free-photo/cosmetology-doctor-patien_624325-1648.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Dermatologist    '},
    {img:'https://img.freepik.com/free-photo/little-girl-checking-up-her-sight-ophthalmology-center_1303-27493.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Ophthalmologist'},
    {img:'https://img.freepik.com/free-photo/focused-doctor-working-his-desk_23-2147646746.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Ayurvedic Practitioner    '},

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
