import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-psd/photography-workshop-banner-template_23-2148668972.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/professional-camera-blurred_169016-10249.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Coffee'},
    {img:'https://img.freepik.com/free-photo/front-view-hands-holding-camera_23-2148775851.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Coke'},
    {img:'https://img.freepik.com/free-photo/young-asian-man-with-camera-isolated-white-background-photographer-concept_231208-3767.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Chips'},
    {img:'https://img.freepik.com/free-photo/set-up-studio-shoot_53876-144951.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Mix Food'},
    {img:'https://img.freepik.com/free-psd/landing-page-photo-studio-template_23-2148782162.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-vector/landing-page-template-photographer-career-hobby_23-2150306818.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Burger'},
    {img:'https://img.freepik.com/free-vector/photo-studio-with-white-panel-spotlights_107791-1163.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-psd/photography-classes-landing-page_23-2148968298.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-psd/banner-photography-workshop-template_23-2148668974.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/indian-photographer-with-camera-pastel-wall_496169-1588.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/professional-indian-young-photographer-taking-photos-studio-with-leight_231208-3780.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/young-female-product-photographer-studio_23-2148970230.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-psd/photography-workshop-landing-page-template_23-2148668969.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/arrangement-professional-photographer-equipment_23-2149033291.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Burger'},
    {img:'https://img.freepik.com/free-psd/photography-workshop-template-landing-page_23-2148668970.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'French Fries'},
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
