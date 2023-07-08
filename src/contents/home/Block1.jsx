import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled, Button} from '@mui/material';






export default function Card1() {
  const theme = useTheme();
  const CardBox = styled(Card)(({theme})=>({
  display:'flex',
  flexDirection:'column',
  width:'400px',
  height:'400px',
  borderRadius:'0px',
  gap:'20px',
  [theme.breakpoints.down('lg')]: {
    width:'100vw',
    height:'400px',
   
  },
  [theme.breakpoints.down('md')]: {
    width:'100vw',
    height:'400px',
  },
  [theme.breakpoints.down('sm')]: {
    width:'100%',
    height:'200px',
    flexDirection:'column',
    padding:'0px'
  }
}));

  return ( 
    <>

       <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'45px'},fontWeight:'700',color:'black',paddingLeft:{xs:'30px',sm:'60px',md:'120px'}}}>WHO ARE U SHOPPING FOR?</Typography>
       <Box sx={{display:'flex',gap:'20px'}}></Box>
    <Box  data-aos-duration="3000" sx={{display:'flex',justifyContent:'center',gap:{xs:'0px',sm:'50px',md:'30px'},flexDirection:{xs:'column',sm:'column',md:'row'}}}>

      
   <Box sx={{padding:{xs:'0px',sm:'50px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="/images/category/adidas1.jpeg"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'400px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'20px'}}>
   <Box sx={{display:'flex',justifyContent:'center'}}>
          
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'20px'},fontWeight:'700'}}>MEN</Typography>
        </Box>
       
       
       </Box>
      </Box>
      <Box sx={{padding:{xs:'0px',sm:'50px',md:'0'}}}>
    
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="/images/category/adidas2.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'400px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'20px'}}>
   <Box sx={{display:'flex',justifyContent:'center'}}>
          
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'20px'},fontWeight:'700'}}>WOMEN</Typography>
        </Box>
       
       
       </Box>
      </Box>
      <Box sx={{padding:{xs:'0px',sm:'50px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="/images/category/adidas3.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'400px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'20px'}}>
   <Box sx={{display:'flex',justifyContent:'center'}}>
          
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'20px'},fontWeight:'700'}}>KIDS</Typography>
        </Box>
       
       
       </Box>
      </Box>
      
      
      </Box>
   
      </>
  );
}