import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled, Button} from '@mui/material';
import { ChatBubbleOutlineRounded, FavoriteBorder } from '@mui/icons-material';

export default function Card1() {
  const theme = useTheme();
  const CardBox = styled(Card)(({theme})=>({
  display:'flex',
  flexDirection:'column',
  width:'300px',
  height:'200px',
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
    width:'300px',
    height:'300px',
    flexDirection:'column',
    padding:'0px'
  }
}))
  return ( 
    <>
  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'100px 30px',sm:'100px 50px',md:'100px'}}}>
       
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'35px'},fontWeight:'700'}}>Latest From our Blog</Typography>

       <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</Typography>
       <Typography>dolore magna aliqua.</Typography>
       </Box>
    <Box sx={{display:'flex',justifyContent:'center',gap:{xs:'0px',sm:'50px',md:'30px'},flexDirection:{xs:'column',sm:'column',md:'row'}}}>
   <Box sx={{padding:{xs:'30px',sm:'50px',md:'0'}}}>
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px'}}>
        <Typography></Typography>
        <Typography>12-01-2023</Typography>
        <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'20px'},fontWeight:'700'}}>Cooking of perfect chicken Burger in minutes</Typography>
        <Typography>inappropriate behavior ipsum dolor sit amet, consectetur.</Typography>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
          <Typography><FavoriteBorder sx={{fontSize:'15px'}}/>10 likes</Typography>
          <Typography><ChatBubbleOutlineRounded sx={{fontSize:'15px'}}/>comments</Typography>
        </Box>
        
        {/* <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Up To 25% off</Typography> */}
       </Box>
      </Box>
      <Box sx={{padding:{xs:'30px',sm:'50px',md:'0'}}}>
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://images.pexels.com/photos/1199958/pexels-photo-1199958.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px'}}>
        <Typography></Typography>
      <Typography>12-01-2023</Typography>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700'}}>Secret of making yummy Coffee.</Typography>
        <Typography>inappropriate behavior ipsum dolor sit amet, consectetur.</Typography>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
          <Typography><FavoriteBorder sx={{fontSize:'15px'}}/>10 likes</Typography>
          <Typography><ChatBubbleOutlineRounded sx={{fontSize:'15px'}}/>comments</Typography>
        </Box>
        {/* <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Up To 25% off</Typography> */}
       </Box>
      </Box>
      <Box sx={{padding:{xs:'30px',sm:'50px',md:'0'}}}>
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px'}}>
        <Typography></Typography>
      <Typography>12-01-2023</Typography>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700'}}>Best desert avaialble here for you.</Typography>
        <Typography>inappropriate behavior ipsum dolor sit amet, consectetur.</Typography>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
          <Typography><FavoriteBorder sx={{fontSize:'15px'}}/>10 likes</Typography>
          <Typography><ChatBubbleOutlineRounded sx={{fontSize:'15px'}}/>comments</Typography>
        </Box>
        {/* <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Up To 25% off</Typography> */}
       </Box>
      </Box>
      
      <Box sx={{padding:{xs:'30px',sm:'50px',md:'0'}}}>
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://images.pexels.com/photos/1239347/pexels-photo-1239347.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px'}}>
        <Typography></Typography>
      <Typography>12-01-2023</Typography>
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'700'}}>Secret of making yummy Coffee.</Typography>
        <Typography>inappropriate behavior ipsum dolor sit amet, consectetur.</Typography>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
          <Typography><FavoriteBorder sx={{fontSize:'15px'}}/>10 likes</Typography>
          <Typography><ChatBubbleOutlineRounded sx={{fontSize:'15px'}}/>comments</Typography>
        </Box>
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