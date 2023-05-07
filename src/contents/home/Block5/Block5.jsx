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
    backgroundImage: `url(${"https://img.freepik.com/free-photo/shopping-cart-with-pill-foils-copy-space_23-2148533453.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=ais"})`,
    backgroundSize:'cover',
     margin:'0px 80px',
     [theme.breakpoints.down('md')]: {
      height:'300px',
      width:'auto',
      margin:'0px 10px'
    },
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
      backgroundImage: `url(${"https://img.freepik.com/premium-photo/doctor-holding-capsule-pill-research-diagnosis-effective-patient-icon-healthcare_34200-718.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"})`,
      backgroundSize:'cover',
       margin:'0px 80px',
   //    position:'absolute'
   [theme.breakpoints.down('md')]: {
    height:'300px',
    width:'auto',
    margin:'0px 10px'
  },
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
       <Typography sx={{fontSize:{xs:'25px',sm:'30px',md:'30px'},fontWeight:'400',color:'black'}}>Why Medicine</Typography>
       <Typography sx={{color:'black'}}>We are many. We are one. We are not part of the herd. We are not like the rest. Join the Wrogn Tribe. And stay mad. Stay Wrogn.</Typography>
      </Box>
      
      <Box sx={{marginLeft:{xs:' 10px',sm:'30px',md:'50px'},width:'',height:{xs:' 500px',sm:'350px',md:'500px'},marginRight:{xs:' 10px',sm:'30px',md:'80px'},zIndex:'-1'}}>
        <Box sx={{display:{xs:'block',sm:'none',md:'block'}}}>
      <video style={{height:'500px',zIndex:'-1',position:'absolute',objectFit:'cover',width:'93%',}}  src="https://v4.cdnpk.net/videvo_files/video/free/video0483/large_watermarked/_import_60e7da975bfbe0.15894446_FPpreview.mp4" autoPlay loop muted ></video>
        </Box>
      
        <Box sx={{display:{xs:'none',sm:'block',md:'none'}}}>
      <video style={{height:'350px',zIndex:'-1',position:'absolute',objectFit:'cover',width:'93%',}}  src="https://v4.cdnpk.net/videvo_files/video/free/video0483/large_watermarked/_import_60e7da975bfbe0.15894446_FPpreview.mp4" autoPlay loop muted ></video>
        </Box>
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
       <Typography sx={{fontSize:{xs:'20px',sm:'35px',md:'30px'},fontWeight:'400',color:''}}>Use It Like Virat</Typography>
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


