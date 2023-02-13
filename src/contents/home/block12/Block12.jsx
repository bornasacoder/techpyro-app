import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Block12() {
  return (
    <Box sx={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',backgroundColor:'white'}}>
      <Box sx={{width:'68vw',display:'flex',justifyContent:'space-between', alignItems:"center", position:'relative', marginTop:'100px'}}>
        <Box sx={{marginLeft:'20px',fontFamily:'cursive',marginTop:'-200px', display:'flex',flexDirection:'column',justifyContent:'center'}}>
           <h1 style={{fontStyle:'italic'}}>Learn from anywhere</h1>
           <Typography sx={{marginTop:'20px',fontStyle:'italic'}}>We’re available on Android devices and platforms.</Typography>
           <Typography sx={{fontStyle:'italic'}}>Study from anywhere at your convenience.</Typography>
           <img  style={{width:'156px',height:'47px',marginTop:'23px'}}src='https://www.vedantu.com/cdn/images/new-home-page/google-play.svg' alt='image'/>
        </Box>
        <Box sx={{position:'absolute',right:'0',top:'-20%'}}>
         <img  src='https://www.vedantu.com/cdn/images/new-home-page/B2/Download-app.webp' alt='image'/>
        </Box>
      <Box sx={{width:'100%',height:'auto',border:'1px solid red',backgroundColor:'#FF693D',borderRadius:'18px',display:'flex',justifyContent:'space-around',position:'absolute',top:'57%'}}>
         <Box sx={{color:'white',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <h1>Happy to help you!</h1>
            <Typography sx={{marginTop:'10px'}}>Need more details? Our expert academic counsellors will be happy to</Typography>
            <Typography>patiently explain everything that you want to know.</Typography>
            <Button variant='outlined' sx={{color:'white',backgroundColor:'black',width:'200px',marginTop:'15px'}}>Speak to an expert</Button>
         </Box>
         <Box>
           <img  style={{width:'405px',height:'329px'}}src='https://www.vedantu.com/cdn/images/new-home-page/master-teacher.webp' alt='image'/>
         </Box>
      </Box>
      </Box>
    </Box>
  )
}
