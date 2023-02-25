import { Box, Button, Card , Typography, useTheme} from '@mui/material'
import React from 'react'
import { East } from '@mui/icons-material';

export default function Card4() {
  return (
    <Card sx={{width:{md:'95%', sm:'44vw', xs:'90vw'}, height:{md:'100px',sm:'50px', xs:'40px'},position:'relative', margin:'20px 0 20px 2.5%',}}>
        <img style={{width:'100%', height:'100%'}} src={'/images/dividerPic.jpg'} alt="card"/> 
        <Box sx={{display:'flex', justifyContent:'space-between', position:'absolute', top:'30%' , paddingLeft:'26px', left: 0,right:0 ,width:'100%'}}>
            <Typography sx={{fontSize:'25px', fontWeight: 900, color:`${theme.colors.alpha.black[50]}` }}>TechPyro Trending</Typography>
            <Button endIcon={<East/>} sx={{marginRight:'8px', fontSize:'18px', fontWeight: 400,color:`${theme.colors.alpha.white[100]}`, background:`${theme.colors.gradients.orange1}`}}>View All</Button>
        </Box>   
    </Card>
  )
}
