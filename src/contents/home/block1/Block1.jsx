import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-photo/pair-gold-earrings-with-green-stones-black-background_1340-42887.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/gold-necklace-with-necklace-earrings_1340-42825.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Coffee'},
    {img:'https://img.freepik.com/free-photo/shiny-gemstone-necklace-reflects-elegance-glamour-generated-by-ai_188544-10583.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Coke'},
    {img:'https://img.freepik.com/free-photo/gold-necklace-with-necklace-earrings_1340-42825.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Chips'},
    {img:'https://img.freepik.com/free-photo/shiny-gemstone-necklace-reflects-elegance-glamour-generated-by-ai_188544-10583.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Mix Food'},
    {img:'https://img.freepik.com/free-photo/shiny-gold-wedding-ring-with-diamond-gemstone-generated-by-ai_188544-37378.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/shiny-gold-jewelry-symbol-wealth-generated-by-ai_188544-10733.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-vector/horizontal-jewelry-realistic-banners-with-golden-rings-elegant-necklaces-mannequins_1284-16774.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-vector/horizontal-jewelry-realistic-banners-with-golden-rings-elegant-necklaces-mannequins_1284-16774.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/selective-focus-closeup-diamond-rings_181624-57691.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/shiny-gemstone-necklace-reflects-elegance-glamour-generated-by-ai_188544-13941.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/wedding-preparation-beautiful-happy-bride-dresses-earrings-before-wedding_8353-5813.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/beautiful-luxury-necklace-jewelry-stand-neck_1339-7947.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/closeup-diamond-ring_53876-17957.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Marita'},
    {img:'https://img.freepik.com/free-psd/elegant-wedding-banner-template_23-2148945298.jpg?size=626&ext=jpg&ga=GA1.2.833918949.1682592323&semt=sph',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/selective-focus-closeup-diamond-rings_181624-57691.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=sph',name:'French Fries'},
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
