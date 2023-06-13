import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-photo/young-female-product-photographer-studio_23-2148970230.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Photography'},
    {img:'https://img.freepik.com/free-photo/beautiful-woman-long-red-dress-walks-around-city-with-her-husband_1157-13373.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Wedding Photography    '},
    {img:'https://img.freepik.com/free-photo/model-getting-ready-photoshoot_23-2149305171.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Fashion'},


    {img:'https://img.freepik.com/free-photo/picture-charming-magnetic-young-female-with-curly-black-hair_176532-7422.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Portrait'},
    {img:'https://img.freepik.com/free-photo/young-pregnant-woman-relaxing-park-outdoors_1328-3362.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Baby and Maternity'},
    {img:'https://img.freepik.com/free-photo/decorated-banquet-hall-with-served-round-table-with-hydrangea-centerpiece-chiavari-chairs_8353-10059.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Event'},

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
