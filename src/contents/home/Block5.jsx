import { EastOutlined } from '@mui/icons-material';
import { Button, styled, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'


const Video= styled(Box)(({ theme }) => ({
   height:'auto',
   width:'100%',
   display:'flex',
   gap:'10px',
   paddingBottom:'10px',
//    position:'absolute'
    padding:'0px 80px 0px 80px'
        
    }
  ));
  const Video2= styled(Box)(({ theme }) => ({
      height:'auto',
      width:'auto',
     display:'flex',
     flexDirection:'column',
// gap:'10px'
       
           
       }
     ));
  const Box1= styled(Box)(({ theme }) => ({
    height:'600px',
    width:'auto',
    backgroundImage: `url(${"/images/category/wrognbgd1.webp"})`,
    backgroundSize:'cover',
     margin:'0px 80px',
     [theme.breakpoints.down('sm')]: {
      height:'200px',
      width:'auto',
      margin:'0px 10px'
    },
     }
  
   ));
   const Box2= styled(Box)(({ theme }) => ({
      height:'600px',
      width:'auto',
      backgroundImage: `url(${"/images/category/wrognbgd2.webp"})`,
      backgroundSize:'cover',
       margin:'0px 80px',
   //    position:'absolute'
   [theme.breakpoints.down('sm')]: {
    height:'200px',
    width:'auto',
    margin:'0px 10px',
    objectFit:'cover',
  },
           
       }
     ));
const Block5 = () => {
  return (
    <>
       <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'40px',flexDirection:'column'}}>
       <Typography sx={{fontSize:{xs:'25px',sm:'30px',md:'30px'},fontWeight:'400',color:'black'}}>Why Wrogn</Typography>
       <Typography sx={{color:'black'}}>We are many. We are one. We are not part of the herd. We are not like the rest. Join the Wrogn Tribe. And stay mad. Stay Wrogn.</Typography>
      </Box>
      
      <Box sx={{marginLeft:{xs:' 10px',sm:'30px',md:'50px'},width:'',height:'500px',marginRight:{xs:' 10px',sm:'30px',md:'80px'},zIndex:'-1'}}>
      <video style={{height:'500px',zIndex:'-1',position:'absolute',objectFit:'cover',width:'93%',}}  src="https://player.vimeo.com/external/451464846.sd.mp4?s=f17fd0cf4fabbbe198a3e66cf1ed7a6fb0585836&profile_id=164&oauth2_token_id=57447761" autoPlay loop muted ></video>
      
      <Box sx={{display:'flex',flexDirection:'column',alignItem:'center',width:'auto',height:{xs:'500px',sm:'500px',md:'500px'},gap:'20px'}}>
      <Box sx={{height:'auto',width:{xs:'240px',sm:'300px',md:'320px'},color:'white',marginLeft:{xs:'10px',sm:'50px',md:'160px'}}}>
      <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'65px'},fontWeight:'700',color:''}}>THIS...</Typography>
      </Box>
      </Box>
      </Box>
       <Box sx={{display:'flex',justifyContent:'center',margin:'10px'}}>
       <Typography sx={{fontSize:{xs:'20px',sm:'35px',md:'30px'},fontWeight:'400',color:''}}>Work From Home</Typography>
       </Box>
      <Box1>

      </Box1>
      <Box sx={{display:'flex',justifyContent:'center',margin:'20px'}}>
       <Typography sx={{fontSize:{xs:'20px',sm:'35px',md:'30px'},fontWeight:'400',color:''}}>Wear It Like Virat</Typography>
       </Box>
      <Box2>

      </Box2>
      <Box sx={{display:'flex',justifyContent:'center',margin:'20px'}}>
            <Button variant='contained' sx={{color:'black',backgroundColor:'white',border:'1px solid black',borderRadius:'0px'}}>SHOP COLLECTION</Button>
      </Box>
     </>
  )
}

export default Block5


