import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-vector/healthcare-background-with-medical-symbols-hexagonal-frame_1017-26363.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Coffee'},
    {img:'https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Coke'},
    {img:'https://img.freepik.com/free-vector/gradient-medical-landing-page-template_23-2149149349.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Chips'},
    {img:'https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Mix Food'},
    {img:'https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-66963.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/successful-medical-team_329181-9252.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/doctor-helping-patient-during-rehabilitation_23-2150321624.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/female-physician-showing-cardiology-diagnosis-digital-tablet-holding-gadget-with-cardiovascular-system-illustration-retired-man-heart-condition-disease-checkup-visit_482257-49291.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-equipment_23-2149611213.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/indian-doctor-receives-patient-tells-him-about-results-tests-medicine-health_496169-2765.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/male-doctor-doing-vaccination-little-boy-who-sitting-mother-s-lap_1157-51984.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-psd/alternative-medicine-background_23-2150408389.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-psd/medical-healthcare-poster-template_23-2148940481.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/handsome-male-dentist-with-female-assistant-standing-dentist-office_613910-21262.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'French Fries'},
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
