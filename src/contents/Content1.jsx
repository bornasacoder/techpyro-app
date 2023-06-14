import { Button, Grid, styled, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
const Video = styled("video")(({theme})=>({
    height:"600px",
    objectFit:"cover",
    width:"100%",
[theme.breakpoints.down('sm')]:{
    height:"800px",
    width:"100%"
}
}));
const StyleToolbar = styled(Box)(({theme})=>({
position:"relative",
}))
const Content1 = () => {
  return (
    <StyleToolbar >
<Video src='/hotel.mp4' autoPlay muted loop/>
<Box sx={{position:"absolute",bottom:{md:"130px",sm:"215px",xs:'400px'},right:"30px",padding:"20px 20px",color:"#FFFFFF",backgroundColor:"#000",}}>
    <Typography sx={{fontSize:{md:"30px",sm:"24px",xs:"20px"}}}>Save Up to 40%</Typography>
    <Typography sx={{fontSize:{md:"14px",sm:"12px",xs:"10px"}}}>Enjoy more when you book direct</Typography>
</Box>
<Box sx={{position:"absolute",bottom:"0px",width:"100%",backgroundColor:"#000",color:"#FFFFFF",}}>
<Grid container columnSpacing={3} sx={{display:"flex",justifyContent:"center",alignItems:"center",padding:{md:"30px 0px",sm:"30px 30px",xs:"30px 20px"}}}>
<Grid md={2.5} sm={6} xs={12} item>
    <Typography sx={{fontWeight:"600"}} >Check In</Typography>
    <br/>
<TextField type="date"  fullWidth sx={{backgroundColor:"#FFFFFF",height:"45px",display:"flex",alignItems:"center",".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{
    height:"12px"
},}}/>
</Grid>
<Grid md={2.5} sm={6} xs={12} item>
    <Typography sx={{fontWeight:"600"}} >Check Out</Typography>
    <br/>
<TextField type="date"  fullWidth sx={{backgroundColor:"#FFFFFF",height:"45px",display:"flex",alignItems:"center",".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{
    height:"12px"
},}}/>
</Grid>
<Grid md={2} sm={6} xs={12} item>
    <Typography sx={{fontWeight:"600"}} >Rooms</Typography>
    <br/>
<TextField type="number"  fullWidth sx={{backgroundColor:"#FFFFFF",height:"45px",display:"flex",alignItems:"center",".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{
    height:"12px"
},}}/>
</Grid>
<Grid md={2.5} sm={6} xs={12} item>
   <Button sx={{color:"#FFFFFF",backgroundColor:"#00BFA5",marginTop:"40px",borderRadius:"0px",padding:"10px","&:hover":{
    backgroundColor:"#000"
   }}} fullWidth>BOOK A STAY</Button>
</Grid>

</Grid>
</Box>
    </StyleToolbar>
  )
}

export default Content1