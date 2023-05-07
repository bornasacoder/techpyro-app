import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled, Button} from '@mui/material';
import { AvTimer, CalendarMonth, ChatBubbleOutlineRounded, Coffee, DinnerDining, EastOutlined, FavoriteBorder, GetApp, Liquor, Mood, Person2Outlined, PinDrop, RiceBowlTwoTone, Star, StarHalf } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export default function Block1() {
  const theme = useTheme();
  const CardBox = styled(Card)(({theme})=>({
  display:'flex',
  flexDirection:'column',
  width:'300px',
  height:'300px',
  borderRadius:'0px',
  gap:'30px',
backgroundColor:'#F2F5F9',
boxShadow:'none',
  [theme.breakpoints.down('lg')]: {
    width:'100vw',
    height:'400px',
   
  },
  [theme.breakpoints.down('md')]: {
    width:'auto',
    height:'400px',
  },
  [theme.breakpoints.down('sm')]: {
    width:'auto',
    height:'200px',
    flexDirection:'column',
    padding:'20px'
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
  return ( 
    <>
<Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'35px'},fontWeight:'700',color:'black',padding:{xs:'20px',sm:'40px',md:'30px'},display:'flex'}}>Get the  Advantages</Typography>
</Box>
       
       
    <Box  data-aos-duration="3000" sx={{display:'flex',justifyContent:'space-evenly',flexDirection:{xs:'column',sm:'column',md:'row'},paddingTop:{xs:'0px',sm:'20px',md:'10px'},margin:{xs:'0px',sm:'0px 50px',md:'0px 100px'}}}>

   
      <Box sx={{display:'flex',gap:{xs:'0px',sm:'20px',md:'100px'},flexDirection:{xs:'column',sm:'column',md:'row'}}}>

      
   <Box sx={{padding:{xs:'10px',sm:'0px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%', transition:'0.5s all', "&:hover":{
          transform:'scale(1.2)'
      },}}
          component="img"
          image="https://img.freepik.com/free-photo/cafe-frankfurt-germany_1268-20912.jpg?size=626&ext=jpg&ga=GA1.2.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'20%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
   <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'25px'},fontWeight:'500'}}>Liabrary</Typography>
          
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
          image="https://img.freepik.com/free-photo/close-up-researcher-holding-glassware_23-2148794430.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'20%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'25px'},fontWeight:'500'}}>Lab</Typography>
         
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
          image="https://img.freepik.com/premium-photo/chef-standing-full-lunch-service-station_293953-195.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'20%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
      <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'25px'},fontWeight:'500'}}>Canteen</Typography>
         
        </Box>
       
       
       </Box>
      </Box>
   

      </Box>

      </Box>


      <Box sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
<Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'35px'},fontWeight:'700',color:'black',padding:{xs:'20px',sm:'40px',md:'100px 0px 50px 0px'},display:'flex'}}>Our students and parents love us</Typography>
</Box>
<Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:{xs:'column',sm:'column',md:'row'}}}>

<Box sx={{display:'flex',justifyContent:'space-evenly',width:'100%'}}>
  <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <GetApp sx={{fontSize:'45px',color:'#FF9A7F'}}/>
    <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'35px'},fontWeight:'700',color:'#8B4591'}}>150+ Million</Typography>
    <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'20px'}}}>downloads</Typography>
  </Box>

  <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <Star sx={{fontSize:'45px',color:'#FF9A7F'}}/>
    <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'35px'},fontWeight:'700',color:'#8B4591'}}>4.7+ Star</Typography>
    <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'20px'}}}>app rating</Typography>
  </Box>
  </Box>

<Box sx={{display:'flex',justifyContent:'space-evenly',width:'100%'}}>
  <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <PinDrop sx={{fontSize:'45px',color:'#FF9A7F'}}/>
    <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'35px'},fontWeight:'700',color:'#8B4591'}}>1701+ Cities</Typography>
    <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'20px'}}}>worldwide</Typography>
  </Box>

  <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <AvTimer sx={{fontSize:'45px',color:'#FF9A7F'}}/>
    <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'35px'},fontWeight:'700',color:'#8B4591'}}>71 mins avg.</Typography>
    <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'20px'}}}>time spends daily</Typography>
  </Box>
  </Box>
</Box>
      
      </>
  );
}