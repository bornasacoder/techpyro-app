import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Item from './Item';


export default function Block1() {
  const data = [
    {img:'https://img.freepik.com/free-photo/beautiful-face-young-woman-with-maroon-makeup-portrait-gorgeous-girl-with-vinous-lips_186202-7456.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Burger'},
    {img:'https://img.freepik.com/free-psd/make-up-banner-template_23-2148663849.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Coffee'},
    {img:'https://img.freepik.com/free-psd/make-up-concept-banner-template_23-2148608281.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Coke'},
    {img:'https://img.freepik.com/free-psd/make-up-concept-banner-template_23-2148608281.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Chips'},
    {img:'https://img.freepik.com/free-photo/two-attractive-joyful-models-with-stylish-look-having-fun-beauty-salon_197531-1286.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Mix Food'},
    {img:'https://img.freepik.com/free-photo/beautician-with-brush-applies-white-moisturizing-mask-face-young-girl-client-spa-beauty-salon_343596-4247.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-psd/beauty-natural-cosmetics-social-media-post_23-2148894949.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/very-sexy-woman-show-her-natural-look_144627-4624.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/makeup-artist-applying-makeup-by-brush_329181-1926.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/woman-washing-head-hairsalon_1157-27179.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/portrait-smiling-owner-hairdresser-salon_329181-1953.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-vector/gradient-make-up-artist-social-media-post-template_23-2149355509.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-psd/make-up-concept-banner-template-style_23-2148608284.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/woman-with-makeup-artist-choosing-color-eyeshadow_329181-1925.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Marita'},
    {img:'https://img.freepik.com/free-photo/attractive-young-woman-beauty-salon_197531-1288.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'Burger'},
    {img:'https://img.freepik.com/free-photo/portrait-beautiful-blond-woman-with-long-hair-makeup-brushes-near-attractive-face_158538-2243.jpg?size=626&ext=jpg&ga=GA1.1.833918949.1682592323&semt=ais',name:'French Fries'},
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
