import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Block9() {
  return (
    <Box >
        
        <Box sx={{backgroundColor:'white',display:"flex",justifyContent:"center",marginTop:'80px', gap:"20px" ,width:"100vw",}}>
            <Box sx={{display:"flex", justifyContent:"flex-start", width:"70%", flexDirection:"column", alignItems:"flex-start"}}>
                <img src='https://www.vedantu.com/cdn/images/new-home-page/icons/hand-with-mic.svg' alt=''/>
                <h1>Stories that inspired</h1>
            </Box>
        </Box>
      
        <Box sx={{backgroundColor:'white',display:"flex",justifyContent:"center", gap:"20px", marginTOp:'0px',width:"100vw", }}>
           <Box sx={{display:"flex", justifyContent:"", width:"70%", flexDirection:"row", }}>
                <video width='320px' height='auto' style={{borderRadius:'10px'}} controls>
                    <source src="/videos/video.mp4" type="video/mp4" />
                </video>
                <Box sx={{ display:'flex',justifyContent:'center',flexDirection:'column',width:'60vw'}}>
                    <Box sx={{width:'100%',display:'flex',flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}>
                       <img style={{height:'40px',width:'40px'}} src='https://www.vedantu.com/cdn/images/new-home-page/icons/icons.svg#quote' alt=''/>
                      <Box >
                          <Typography sx={{fontSize:'20px',color:'black'}}>After I joined the Eklavya batch at</Typography>
                          <Typography sx={{fontSize:'20px',color:'black'}}>Vedantu, I cracked KVPY and WBJEE</Typography>
                          <Typography sx={{fontSize:'20px',color:'black'}}>and discovered my true potential.</Typography>
                      </Box>
                      <Box sx={{margin:'30px 0px'}}>
                          <Typography sx={{fontWeight:'500'}}>Rhythm Sabharwal</Typography>
                          <Typography>AIR 2973| NEET 2021</Typography>
                      </Box>
                    </Box>
                </Box>
        

           </Box>
        </Box>
      </Box>
    
  )
}
