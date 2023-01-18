import { EastOutlined } from '@mui/icons-material';
import { Button, styled, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'


const Video= styled(Box)(({ theme }) => ({
   height:'650px',
   width:'100%',
//    position:'absolute'
    
        
    }
  ));
const Block5 = () => {
  return (
    <Box>
    <Video >
      <video style={{height:'650px',width:'100%',zIndex:'-1',position:'absolute',objectFit:'cover'}}  src="https://player.vimeo.com/external/562968417.sd.mp4?s=77ce3afc9a1d0833085c362649322add86c0842d&profile_id=164&oauth2_token_id=57447761" autoPlay loop muted ></video>
      <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItem:'center',width:'100%',height:'650px',gap:'20px'}}>
      <Box sx={{height:'auto',width:{xs:'240px',sm:'300px',md:'320px'},color:'white',marginLeft:{xs:'10px',sm:'50px',md:'160px'}}}>
      <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'35px'},fontWeight:'700',color:''}}>BE SUPPORTED. BE .YOU</Typography>
      <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'15px'},fontWeight:'600',color:''}}>Free your body to free your movement.</Typography>
      <Box sx={{display:'flex',gap:'20px',fontWeight:'400',flexDirection:'column',width:'180px',paddingTop:'20px'}}>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black'}}> SHOP LEGGINS<EastOutlined /> </Button>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black'}}>SHOP BRAS<EastOutlined /> </Button>
          
          </Box>
      </Box>
      </Box>
    </Video>
    
     </Box>
  )
}

export default Block5
