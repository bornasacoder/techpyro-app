import { Box, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Typography1 = styled('p')({
  fontSize:'35px',
  fontWeight:'500',
  color:'black',
  fontFamily:'cursive',
})

export default function Block11() {
  return (
    <Box sx={{width:'100%',display:'flex',justifyContent:'',margin:'50px 0px',position:'relative',paddingLeft:{md:'16vw'}}}>
      <Box sx={{display:'flex',flexDirection:'row'}}>
        <Box sx={{display:'flex',justifyContent:'flex-start', flexDirection:'column',width:'35vw',}}>
          <img style={{width:'100px',height:'100px'}} src='https://www.vedantu.com/cdn/images/new-home-page/icons/graph-chart-icon.svg' alt='' />
          
              <Typography sx={{fontSize:'35px',fontWeight:'500',color:'black',fontFamily:'cursive'}}>Impact. At scale</Typography>
              <Typography sx={{fontWeight:'400',color:'black',fontFamily:'cursive',margin:'23px 0px'}}> Making education affordable and accessible across the globe </Typography>
              <Box sx={{display:'flex',gap:'100px'}}>
                <Box>
                   <Typography sx={{fontSize:'35px',fontWeight:'500',color:'black',fontFamily:'cursive'}}>2.1+</Typography>
                   <Typography sx={{fontSize:'35px',fontWeight:'500',color:'black',fontFamily:'cursive',marginTop:'-18px'}}>crore</Typography>
                   <Typography sx={{fontWeight:'400',color:'black',fontFamily:'cursive'}}>hours of LIVE learning</Typography>
                </Box>
                <Box>
                   <Typography sx={{fontSize:'35px',fontWeight:'500',color:'black',fontFamily:'cursive'}}>10+</Typography>
                   <Typography sx={{fontSize:'35px',fontWeight:'500',color:'black',fontFamily:'cursive',marginTop:'-18px'}}>lakh</Typography>
                   <Typography sx={{fontWeight:'400',color:'black',fontFamily:'cursive'}}>monthly youtube views</Typography>
                </Box>
              </Box>
              <Box sx={{display:'flex',gap:'70px',margin:'30px 0px'}}>
                <Box>
                   <Typography sx={{fontSize:'35px',fontWeight:'500',color:'black',fontFamily:'cursive'}}>25+</Typography>
                   <Typography sx={{fontSize:'35px',fontWeight:'500',color:'black',fontFamily:'cursive',marginTop:'-18px'}}>lakh</Typography>
                   <Typography sx={{fontWeight:'400',color:'black',fontFamily:'cursive'}}>doughts resolved on the app </Typography>
                </Box>
                <Box>
                   <Typography sx={{fontSize:'35px',fontWeight:'500',color:'black',fontFamily:'cursive'}}>57+</Typography>
                   <Typography sx={{fontSize:'35px',fontWeight:'500',color:'black',fontFamily:'cursive',marginTop:'-18px'}}>countries</Typography>
                   <Typography sx={{fontWeight:'400',color:'black',fontFamily:'cursive'}}>where students take LIVE classes</Typography>
                </Box>
              </Box>
        </Box>
        <Box sx={{width:'35vw',position:'absolute',right:'25%',top:'10%'}}>
           <img style={{width:'704px',height:'440px'}} src='https://www.vedantu.com/cdn/images/new-home-page/B2/stats-map.webp' alt=''/>
        </Box>
      </Box>
      
    </Box>
  )
}
