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
          image="https://img.freepik.com/free-photo/woman-s-hand-pours-medicine-pills-out-bottle_1150-14201.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=ais"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
   <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Medicine</Typography>
          
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
          image="https://img.freepik.com/free-photo/top-view-pills-inside-shopping-cart_23-2148021434.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=ais"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Medicine</Typography>
         
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
          image="https://img.freepik.com/free-photo/front-view-container-with-pills-copy-space_23-2148530997.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=ais"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
      <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Medicine</Typography>
         
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
          image="https://img.freepik.com/free-photo/pills-package_23-2147983074.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=ais"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
      <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Medicine</Typography>
         
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
          image="https://img.freepik.com/free-photo/high-angle-pills-plastic-container_23-2148533458.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=ais"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Medicine</Typography>
          
         
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
          image="https://img.freepik.com/free-photo/medicine-bottles-tablets-wooden-desk_1387-320.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=ais"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Medicine</Typography>
          
          
        </Box>
       
       
       </Box>
      </Box>
      </Box>
      </Box>
   
      
      </>
  );
}