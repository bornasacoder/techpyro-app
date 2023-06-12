import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import '../../../contents/home/block8/block8.css'


// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );



const Card8 = () => {
  return (
    <>
    <Box sx={{display:{xs:'block'},height:'270px'}}>
      
    </Box>
    
      {/* <Box sx={{padding:{xs:'15px',sm:'70px',md:'0'}}}>
        <Card sx={{height:'250px', backgroundColor:'#B7FFE5',width: {lg:"13vw",md:"20vw", sm:"20vw"},  marginBottom:{lg:"0px", md:"30px"}}}>
           <Box>
            <h2 style={{paddingLeft:'10px'}}>Sample</h2>
            <Typography sx={{fontSize:'20px',paddingLeft:'10px'}}>question Papers</Typography>
           </Box>
            <Box sx={{width:'100%',height:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Box sx={{height:'145px',width:'145px', marginTop:'25px',backgroundColor:'lightblue',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',zIndex:'1'}}>
                <img  style={{height:'90px',width:'80px',borderRadius:'15px 15px 0px 10px'}}src={image1} alt=' '/>
              </Box>
            </Box>
        
         </Card>
      </Box> */}
      
      {/* <Box sx={{padding:{xs:'15px',sm:'70px',md:'0'}}}>
        <Card sx={{ width: {xs:'325px',sm:'600px',md:'200px'}}}>
        
        <CardMedia sx={{height:{xs:'180px',sm:'200px',md:'240px'}}}
        component="img"
        
        image="https://images.samsung.com/is/image/samsung/in-side-by-side-rs74r5101sl-rs74r5101sl-tl-frontsilver-155205068?$2052_1641_PNG$"
        alt="green iguana"
        />
        </Card>
      </Box> */} 
    </>
  )
}

export default Card8;
