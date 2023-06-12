import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/premium-photo/indian-traditional-jewellery_136354-6544.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Kundan Jewellery'},
    {img:'https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=ais',name:'Jewellery'},
    {img:'https://img.freepik.com/free-vector/realistic-pair-golden-wedding-rings_52683-13736.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Gold'},


    {img:'https://img.freepik.com/free-photo/beautiful-luxury-necklace-jewelry-stand-neck_1339-7947.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Silver'},
    {img:'https://img.freepik.com/free-photo/jewels-sparkle-golden-wedding-rings-lying-leather_8353-763.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Diamond'},
    {img:'https://img.freepik.com/free-photo/collection-colorful-bracelets-with-word-maharani-side_188544-39288.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Traditional Ethnic Jewellery    '},

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
