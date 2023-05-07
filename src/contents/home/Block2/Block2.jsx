import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled, Button} from '@mui/material';
import { CalendarMonth, ChatBubbleOutlineRounded, Coffee, DinnerDining, EastOutlined, FavoriteBorder, Liquor, Mood, Person2Outlined, RiceBowlTwoTone, Star, StarHalf } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    width:'200px',
    height:'300px',
    borderRadius:'0px',
    gap:'30px',
  
  
    [theme.breakpoints.down('md')]: {
      width:'200px',
      height:'300px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'150px',
      flexDirection:'column',
      padding:'0px'
    }
  }));
  const Box1= styled(Box)(({ theme }) => ({
    height:'650px',
    width:'100%',
    backgroundImage: `url(${"/images/category/bgdimg4.jpeg"})`,
    backgroundSize:'cover',
    paddingTop:'10px'
    // backgroundAttachment:'fixed'
    }
  ));
export default function Block2() {
  const theme = useTheme();
 
  return ( 
    <>

       <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'30px'},fontWeight:'500',color:'black',paddingTop:{xs:'20px',sm:'40px',md:'80px'},display:'flex',justifyContent:'center'}}>Top Catogeries</Typography>
       
    <Box  data-aos-duration="3000" sx={{display:'flex',justifyContent:'center',gap:{xs:'0px',sm:'20px',md:'25px'},flexDirection:{xs:'column',sm:'column',md:'row'},paddingTop:{xs:'0px',sm:'20px',md:'30px'},alignItems:'center'}}>

      <Box sx={{display:'flex',gap:{xs:'0px',sm:'20px',md:'20px'}}}>
   <Box sx={{padding:{xs:'10px',sm:'20px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%', transition:'0.5s all', "&:hover":{
          transform:'scale(1.2)'
      },}}
          component="img"
          image="https://img.freepik.com/free-photo/view-photo-frame-with-interior-home-decor_23-2149513974.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
   <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Furniture</Typography>
          
        </Box>
       
       </Box>
      </Box>


      <Box sx={{padding:{xs:'10px',sm:'20px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%',transition:'0.5s all', "&:hover":{
          transform:'scale(1.2)'
      }}}
          component="img"
          image="https://img.freepik.com/free-photo/vase-wooden-sideboard-table_53876-105830.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Furniture</Typography>
         
        </Box>
       
       
       </Box>
      </Box>


      <Box sx={{padding:{xs:'10px',sm:'20px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%',transition:'0.5s all', "&:hover":{
          transform:'scale(1.2)'
      }}}
          component="img"
          image="https://img.freepik.com/free-photo/vertical-shot-wooden-chair-white_181624-33157.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
      <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Furniture</Typography>
         
        </Box>
       
       
       </Box>
      </Box>
      </Box>

      <Box sx={{display:'flex',gap:{xs:'0px',sm:'20px',md:'20px'}}}>
      <Box sx={{padding:{xs:'10px',sm:'20px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%',transition:'0.5s all', "&:hover":{
          transform:'scale(1.2)'
      }}}
          component="img"
          image="https://img.freepik.com/free-photo/grey-comfortable-armchair-isolated-white-background_181624-25295.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
      <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Furniture</Typography>
         
        </Box>
       
       
       </Box>
      </Box>
      
      
      <Box sx={{padding:{xs:'10px',sm:'20px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%',transition:'0.5s all', "&:hover":{
          transform:'scale(1.2)'
      }}}
          component="img"
          image="https://img.freepik.com/premium-photo/modern-interior-living-room-blueprint-home-decor-concept-blue-sofa-black-lamp-white-flooring-dark-blueprint-wall-3d-rendering_33739-484.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Furniture</Typography>
          
         
        </Box>
       
       
       </Box>
      </Box>

      
      <Box sx={{padding:{xs:'10px',sm:'20px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%',transition:'0.5s all', "&:hover":{
          transform:'scale(1.2)'
      }}}
          component="img"
          image="https://img.freepik.com/premium-photo/turquoise-blue-wall-with-furnituregenerative-ai_391052-11468.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Furniture</Typography>
          
          
        </Box>
       
       
       </Box>
      </Box>
      </Box>
      </Box>
   
      
      </>
  );
}