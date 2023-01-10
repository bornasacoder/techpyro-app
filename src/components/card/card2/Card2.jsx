import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Card2 = () => {
  return (
    <Box sx={{paddingTop:'80px',display:'flex',justifyContent:'space-evenly',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
      <Box sx={{padding:{xs:'15px',sm:'70px',md:'0'}}}>
        <Card sx={{ width: {xs:'325px',sm:'600px',md:'450px'}}}>
      
        <CardMedia sx={{height:{xs:'180px',sm:'200px',md:'240px'}}}
          component="img"
          
          image="/images/category/cardimg1.jpeg"
          alt="green iguana"
        />
         </Card>
   
      <Typography sx={{fontSize:{xs:'25px',sm:'30px',md:'30px'},fontWeight:'700'}}>Feed Your Employes</Typography>
      <Typography sx={{fontWeight:'700'}}>Create your business account</Typography>
      </Box>
      <Box sx={{padding:{xs:'15px',sm:'70px',md:'0'}}}>
        <Card sx={{ width: {xs:'325px',sm:'600px',md:'450px'}}}>
      
        <CardMedia sx={{height:{xs:'180px',sm:'200px',md:'240px'}}}
          component="img"
          
          image="/images/category/cardimg2.jpeg"
          alt="green iguana"
        />
         </Card>
   
      <Typography sx={{fontSize:{xs:'25px',sm:'30px',md:'30px'},fontWeight:'700'}}>Your Restaurent,Delivered</Typography>
      <Typography sx={{fontWeight:'700'}}>Add your Restaurent</Typography>
      </Box>
      <Box sx={{padding:{xs:'15px',sm:'70px',md:'0'}}}>
        <Card sx={{ width: {xs:'325px',sm:'600px',md:'450px'}}}>
      
        <CardMedia sx={{height:{xs:'180px',sm:'200px',md:'240px'}}}
          component="img"
          
          image="/images/category/cardimg3.jpeg"
          alt="green iguana"
        />
         </Card>
   
      <Typography sx={{fontSize:{xs:'25px',sm:'30px',md:'30px'},fontWeight:'700'}}>Deliever with Uber Eats</Typography>
      <Typography sx={{fontWeight:'700'}}>Sign up to deliever</Typography>
      </Box>
    </Box>
  )
}

export default Card2
