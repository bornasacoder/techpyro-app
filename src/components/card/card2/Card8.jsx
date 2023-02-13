import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const image1='data:image/png;base64,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'
const Card8 = () => {
  return (
    <>
    
    
      <Box sx={{padding:{xs:'15px',sm:'70px',md:'0'}}}>
        <Card sx={{height:'250px', backgroundColor:'#FEF0CC', width: {lg:"13vw",md:"20vw", sm:"20vw"}, marginBottom:{lg:"0px", md:"30px"}}}>
            <Box>
                <h2 style={{paddingLeft:'10px'}}>Revision </h2>
                <Typography sx={{fontSize:'20px',paddingLeft:'10px'}}>notes</Typography>
            </Box>
            <Box sx={{width:'100%',height:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Box sx={{height:{md:'145px'},width:'145px', marginTop:'25px',backgroundColor:'lightblue',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',zIndex:'1'}}>
                <img  style={{height:'90px',width:'80px',borderRadius:'15px 15px 0px 10px'}}src={image1} alt=' '/>
              </Box>
            </Box>

         </Card>
      </Box>
      <Box sx={{padding:{xs:'15px',sm:'70px',md:'0'}}}>
        <Card sx={{height:'250px', backgroundColor:'#E9DFFF', width: {lg:"13vw",md:"20vw", sm:"20vw", },  marginBottom:{lg:"0px", md:"30px"}}}>
         <Box>
            <h2 style={{paddingLeft:'10px'}}>Important</h2>
            <Typography sx={{fontSize:'20px',paddingLeft:'10px'}}>question papers</Typography>
         </Box>
          <Box sx={{width:'100%',height:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Box sx={{height:'145px',width:'145px', marginTop:'25px',backgroundColor:'lightblue',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',zIndex:'1'}}>
                <img  style={{height:'90px',width:'80px',borderRadius:'15px 15px 0px 10px'}}src={image1} alt=' '/>
              </Box>
          </Box>
         </Card>
      </Box>
      <Box sx={{padding:{xs:'15px',sm:'70px',md:'0'}}}>
        <Card sx={{height:'250px', backgroundColor:'#CDDFFF',width: {lg:"13vw",md:"20vw", sm:"20vw"},  marginBottom:{lg:"0px", md:"30px"}}}>
          <Box>
            <h2 style={{paddingLeft:'10px'}}>Previous year </h2>
            <Typography sx={{fontSize:'20px',paddingLeft:'10px'}}>question Papers</Typography>
          </Box>
           <Box sx={{width:'100%',height:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Box sx={{height:'145px',width:'145px', marginTop:'25px',backgroundColor:'lightblue',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',zIndex:'1'}}>
                <img  style={{height:'90px',width:'80px',borderRadius:'15px 15px 0px 10px'}}src={image1} alt=' '/>
              </Box>
           </Box>
         </Card>
   
      
      </Box>
      <Box sx={{padding:{xs:'15px',sm:'70px',md:'0'}}}>
        <Card sx={{height:'250px', backgroundColor:'#FFD9D8',width: {lg:"13vw",md:"20vw", sm:"20vw"},  marginBottom:{lg:"0px", md:"30px"}}}>
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
      </Box>
      <Box sx={{padding:{xs:'15px',sm:'70px',md:'0'}}}>
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
      </Box>
      
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

export default Card8
