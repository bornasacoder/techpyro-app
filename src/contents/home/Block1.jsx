import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled, Button} from '@mui/material';

export default function Card1() {
  const theme = useTheme();
  const CardBox = styled(Card)(({theme})=>({
  display:'flex',
  flexDirection:'column',
  width:'300px',
  height:'400px',
  
  [theme.breakpoints.down('lg')]: {
    width:'100vw',
    height:'400px',
   
  },
  [theme.breakpoints.down('md')]: {
    width:'100vw',
    height:'400px',
  },
  [theme.breakpoints.down('sm')]: {
    width:'300px',
    height:'300px',
    flexDirection:'column',
    padding:'0px'
  }
}))
  return ( 
    <>
    <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'40px'},display:'flex',justifyContent:'center',padding:{xs:'30px',sm:'50px',md:'80'}}}>Best Quality Jewelleries for You</Typography>
    <Box sx={{display:'flex',justifyContent:'center',gap:{xs:'0px',sm:'50px',md:'80px'},flexDirection:{xs:'column',sm:'column',md:'row'}}}>
   <Box sx={{padding:{xs:'30px',sm:'50px',md:'0'}}}>
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://images.pexels.com/photos/2053852/pexels-photo-2053852.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',flexDirection:'row',background:'#F6F7FB',justifyContent:'center'}}>
        <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'30px'},fontWeight:'700'}}>Bridal Looks</Typography>
        {/* <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Up To 25% off</Typography> */}
       </Box>
      </Box>
      <Box sx={{padding:{xs:'30px',sm:'50px',md:'0'}}}>
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://images.pexels.com/photos/1454168/pexels-photo-1454168.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',flexDirection:'row',background:'#F6F7FB',justifyContent:'center'}}>
        <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'30px'},fontWeight:'700'}}>Necklece</Typography>
        {/* <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Up To 25% off</Typography> */}
       </Box>
      </Box>
      <Box sx={{padding:{xs:'30px',sm:'50px',md:'0'}}}>
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',flexDirection:'row',background:'#F6F7FB',justifyContent:'center'}}>
        <Typography sx={{fontSize:{xs:'35px',sm:'30px',md:'30px'},fontWeight:'700'}}>Diamond Ring</Typography>
        {/* <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Up To 25% off</Typography> */}
       </Box>
      </Box>
      </Box>
      <Box sx={{display:'flex',justifyContent:'center',padding:{xs:'30px',sm:'50px',md:'100px'},zIndex:'-300'}}>
      <Button variant='contained' sx={{borderRadius:'0'}}>order online</Button>
      </Box>
      </>
  );
}