import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block5() {
  const data = [
    
    {img:'https://img.freepik.com/free-photo/healthcare-workers-prevent-virus-insurance-medicine-concept-smiling-attractive-female-doctor-nurse-blue-scrubs-pointing-fingers-left-show-patients-advertisement-important-info_1258-57267.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Dermatologist    '},
    {img:'https://img.freepik.com/free-photo/little-girl-checking-up-her-sight-ophthalmology-center_1303-27493.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Ophthalmologist'},
    {img:'https://img.freepik.com/free-photo/smiling-young-female-doctor-wearing-medical-robe-looking-putting-hand-arm-keeping-another-one-air_141793-58150.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Ayurvedic Practitioner    '},
    {img:'https://img.freepik.com/free-photo/successful-medical-team_329181-9252.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'General Physician'},
    {img:'https://img.freepik.com/free-vector/doctor-examining-patient-clinic-illustrated_23-2148856559.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Cardiologist    '},
    {img:'https://img.freepik.com/free-photo/asian-doctor-visit-examines-young-adult-woman-hospital-with-stomach-ache-doctor-checking-up-consulting-health-care-wearing-mask-protect-covid19-pandemic_640221-118.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Gastroenterologist'},



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
