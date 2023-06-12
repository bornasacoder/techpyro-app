import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Card1 = () => {
  return (
    <>
    <Box sx={{paddingTop:'40px',display:'flex',justifyContent:'center',width:'100%', flexDirection:{xs:'column',sm:'column',md:'row'}}}>
      <Box sx={{padding:{xs:'15px',sm:'70px',md:'0'}}}>
        <Card sx={{ width: {xs:'325px',sm:'600px',md:'200px'}}}>
      
        <CardMedia sx={{height:{xs:'180px',sm:'200px',md:'240px'}}}
          component="img"
          
          image="https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-s22-s901-412948-sm-s901ezgdinu-530964621?$2052_1641_PNG$"
          alt="green iguana"
        />
         </Card>
   
    
      </Box>
      <Box sx={{padding:{xs:'15px',sm:'70px',md:'0'}}}>
        <Card sx={{ width: {xs:'325px',sm:'600px',md:'200px'}}}>
      
        <CardMedia sx={{height:{xs:'180px',sm:'200px',md:'240px'}}}
          component="img"
          
          image="https://images.samsung.com/is/image/samsung/p6pim/in/sm-g781bzggins/gallery/in-galaxy-s20-fe-5g-g781-sm-g781bzggins-405304988?$2052_1641_PNG$"
          alt="green iguana"
        />
         </Card>
   
      
      </Box>
      <Box sx={{padding:{xs:'15px',sm:'70px',md:'0'}}}>
        <Card sx={{ width: {xs:'325px',sm:'600px',md:'200px'}}}>
      
        <CardMedia sx={{height:{xs:'180px',sm:'200px',md:'240px'}}}
          component="img"
          
          image="https://images.samsung.com/is/image/samsung/assets/in/dpa/sm-f721blva.png?$2052_1641_PNG$"
          alt="green iguana"
        />
         </Card>
   
      
      </Box>
      <Box sx={{padding:{xs:'15px',sm:'70px',md:'0'}}}>
        <Card sx={{ width: {xs:'325px',sm:'600px',md:'200px'}}}>
      
        <CardMedia sx={{height:{xs:'180px',sm:'200px',md:'240px'}}}
          component="img"
          
          image="https://images.samsung.com/is/image/samsung/in-side-by-side-rs74r5101sl-rs74r5101sl-tl-frontsilver-155205068?$2052_1641_PNG$"
          alt="green iguana"
        />
         </Card>
   
     
      </Box>
    </Box>
    </>
  )
}

export default Card1
