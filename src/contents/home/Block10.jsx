import { Done } from '@mui/icons-material';
import { Button, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useTheme } from 'styled-components';
import Sliders from 'components/allcarousel/slider/slider1/Sliders';
import { fastfood } from 'constants/slider/fastfood';
const Box1 = styled(Box)((({theme}) =>({
 
//    backgroundColor:'black',
   height:'600px',
   width:'100%',
   display:'flex',
  //  flexDirection:'column',
  background:'#FFFFFF',
   gap:'80px',
  justifyContent:'center',
  alignItems:'center',
   [theme.breakpoints.down('md')]: {
    height:'auto',
   flexDirection:'column',
   padding:'50px 0px',
   margin:'0px',
  },
  [theme.breakpoints.down('sm')]: {
    margin:'0px',
   flexDirection:'column',
   height:'auto',
   padding:'50px 0px',
  },
})));

const Block10 = () => {
  const theme = useTheme();
  return (
    <>
      <Box1>
      <Box sx={{width:'300px',display:'flex',flexDirection:'column',gap:'10px',height:{xs:'auto',sm:'auto',md:'360px'}}}>
      <Typography sx={{color:'red',fontFamily:'cursive'}}>Pricing Plan</Typography>
      <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'30px'},fontWeight:'500',color:'black'}}>Our Pricing</Typography>
      <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'400',color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quis cupiditate fugit, voluptatibus ullam, non laboriosam alias veniam, ex inventore iure sed?</Typography>
      </Box>

      <Box sx={{width:'300px',display:'flex',flexDirection:'column',gap:'20px'}}>
        <Box sx={{background:'#16C3B0',height:'80px',width:'80px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'100px'}}>
          <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'30px'},fontWeight:'400',color:'black'}}>$30</Typography>
        </Box>
        <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'25px'},fontWeight:'400',color:'black'}}>Silver Pack</Typography>
        <Typography sx={{display:'flex',alignItems:'center',gap:'20px',fontSize:'17px'}}><Done sx={{color:'#16C3B0'}}/>Lorem ipsum dolor sit amet</Typography>
        <Typography sx={{display:'flex',alignItems:'center',gap:'20px',fontSize:'17px'}}><Done sx={{color:'#16C3B0'}}/>Consectetur adipisicing elit</Typography>
        <Typography sx={{display:'flex',alignItems:'center',gap:'20px',fontSize:'17px'}}><Done sx={{color:'#16C3B0'}}/>Nemo quis cupiditate</Typography>
        <Button variant='contained' sx={{width:'150px',marginTop:'30px',backgroundColor:'#16C3B0',fontSize:'13px',color:'black',borderRadius:'0px 50px 0px 50px',fontWeight:'400'}}>BUY NOW</Button>
      </Box>


      <Box sx={{width:'300px',display:'flex',flexDirection:'column',gap:'20px'}}>
        <Box sx={{background:'#FD4D40',height:'80px',width:'80px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'100px'}}>
          <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'30px'},fontWeight:'400',color:'black'}}>$70</Typography>
        </Box>
        <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'25px'},fontWeight:'400',color:'black'}}>Golden Pack</Typography>
        <Typography sx={{display:'flex',alignItems:'center',gap:'20px',fontSize:'17px'}}><Done sx={{color:'#FD4D40'}}/>Lorem ipsum dolor sit amet</Typography>
        <Typography sx={{display:'flex',alignItems:'center',gap:'20px',fontSize:'17px'}}><Done sx={{color:'#FD4D40'}}/>Consectetur adipisicing elit</Typography>
        <Typography sx={{display:'flex',alignItems:'center',gap:'20px',fontSize:'17px'}}><Done sx={{color:'#FD4D40'}}/>Nemo quis cupiditate</Typography>
        <Button variant='contained' sx={{width:'150px',marginTop:'30px',backgroundColor:'#FD4D40',fontSize:'13px',color:'black',borderRadius:'0px 50px 0px 50px',fontWeight:'400'}}>BUY NOW</Button>
      </Box>
      </Box1>

<Box sx={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'100px'}}>
<Typography sx={{color:'red',fontFamily:'cursive'}}>Testimonial</Typography>
      <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'30px'},fontWeight:'500',color:'black'}}>What Our Client Says About Us</Typography>
</Box>

      <Sliders sliderData={fastfood}/>
     
    </>
  )
}

export default Block10
