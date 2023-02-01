import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField} from '@mui/material';
import { AccessTime, AvTimer, CalendarMonth, ChatBubbleOutlineRounded, Coffee, DinnerDining, EastOutlined, FavoriteBorder, GetApp, Liquor, Mood, Person2Outlined, PinDrop, RiceBowlTwoTone, Star, StarHalf } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export default function Block1() {
  const theme = useTheme();
  const CardBox = styled(Card)(({theme})=>({
  display:'flex',
  flexDirection:'column',
  width:'400px',
  height:'250px',
  borderRadius:'10px',
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
  height:'200px',
  width:'auto',
  backgroundImage: `url(${"/images/category/bgdimg4.jpeg"})`,
  backgroundSize:'cover',
 margin:'80px 150px',
 display:'flex',
 justifyContent:'space-between',
 alignItems:'center',
 [theme.breakpoints.down('sm')]: {
margin:'10px',
flexDirection:'column',
height:'300px',
padding:'50px 0px'
},
  }
));
  return ( 
    <>

       
       
    <Box  data-aos-duration="3000" sx={{display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},paddingTop:{xs:'0px',sm:'0px',md:'0px'},margin:{xs:'0px',sm:'0px 50px',md:'0px 0px'},gap:'20px'}}>

      
   <Box sx={{padding:{xs:'10px',sm:'10px',md:'0px'}}}>
   <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'30px'},fontWeight:'500',color:'black',padding:{xs:'20px',sm:'40px',md:'0px 0px 20px 0px'},display:'flex'}}>Welcome</Typography>
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%', transition:'0.5s all', "&:hover":{
          transform:'scale(1.2)'
      },}}
          component="img"
          image="/images/category/edu2.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'20%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'400px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
   <Box sx={{display:'flex',flexDirection:'column',textAlign:'center'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'500'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</Typography>
          <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'20px'},fontWeight:'500',textDecoration:'underline'}}>LEARN MORE</Typography>
        </Box>
       
       </Box>
      </Box>

  

<Box sx={{margin:{xs:'10px',sm:'15px',md:'0px'}}}>
<Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'30px'},fontWeight:'600',color:'black',padding:{xs:'20px',sm:'40px',md:'0px 0px 20px 0px'},display:'flex'}}>Events</Typography>


<Box sx={{display:'flex',gap:'20px',borderBottom:'1px solid rgba(0,0,0,0.1)',padding:'20px'}}>
  <Box sx={{border:'1px solid orange',display:'flex',flexDirection:'column',alignItems:'center',gap:'-10px',width:'50px',height:'60px'}}>
    <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'30px'},fontWeight:'600',color:'#E6A303',height:'35px'}}>23</Typography>
    <Typography>oct</Typography>
  </Box>
  <Box>
  <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'500',color:'black'}}>Building Assignment Writing Skills</Typography>
  <Box sx={{display:'flex',gap:'20px'}}>
     <Typography sx={{display:'flex',alignItems:'center',gap:'5px'}}><AccessTime />12:00am - 05:00pm</Typography>
     <Typography sx={{display:'flex',alignItems:'center',gap:'5px'}}><PinDrop />Haridwar,UK</Typography>
  </Box>
  </Box>
</Box>

<Box sx={{display:'flex',gap:'20px',borderBottom:'1px solid rgba(0,0,0,0.1)',padding:'20px'}}>
  <Box sx={{border:'1px solid orange',display:'flex',flexDirection:'column',alignItems:'center',gap:'-10px',width:'50px',height:'60px'}}>
    <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'30px'},fontWeight:'600',color:'#E6A303',height:'35px'}}>15</Typography>
    <Typography>oct</Typography>
  </Box>
  <Box>
  <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'500',color:'black'}}>Eduma Autumn 2022</Typography>
  <Box sx={{display:'flex',gap:'30px'}}>
     <Typography sx={{display:'flex',alignItems:'center',gap:'10px'}}><AccessTime />12:00am - 05:00pm</Typography>
     <Typography sx={{display:'flex',alignItems:'center',gap:'10px'}}><PinDrop />Haridwar,UK</Typography>
  </Box>
  </Box>
</Box>

<Box sx={{display:'flex',gap:'20px',borderBottom:'1px solid rgba(0,0,0,0.1)',padding:'20px'}}>
  <Box sx={{border:'1px solid orange',display:'flex',flexDirection:'column',alignItems:'center',gap:'-10px',width:'50px',height:'60px'}}>
    <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'30px'},fontWeight:'600',color:'#E6A303',height:'35px'}}>23</Typography>
    <Typography>oct</Typography>
  </Box>
  <Box>
  <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'500',color:'black'}}>Summer School 2022</Typography>
  <Box sx={{display:'flex',gap:'30px'}}>
     <Typography sx={{display:'flex',alignItems:'center',gap:'10px'}}><AccessTime />12:00am - 05:00pm</Typography>
     <Typography sx={{display:'flex',alignItems:'center',gap:'10px'}}><PinDrop />Haridwar,UK</Typography>
  </Box>
  </Box>
</Box>
<Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'20px'},fontWeight:'500',textDecoration:'underline'}}>LEARN MORE</Typography>

</Box>


     <Box sx={{backgroundColor:'rgba(0,0,0,0.1)',width:{xs:'auto',sm:'100%',md:'350px'},height:'450px',display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:{xs:'30px',sm:'70px',md:'0px'},borderRadius:'0px',flexDirection:'column',gap:'10px',margin:{xs:'10px',sm:'15px',md:'0px'}}}>

        
        <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',color:'black',textAlign:'center',margin:'0px 60px'}}>Create your free account now and immediately get access to 100s of online courses.</Typography>

          <Box sx={{backgroundColor:'transparent',display:'flex',flexDirection:'column',width:{xs:'320px',sm:'350px',md:'300px'},gap:'10px'}}>
            <TextField variant='outlined' label='Enter Nmae  '></TextField>
            
            <TextField variant='outlined' label=' mobile no'></TextField>
           
           
            <TextField variant='outlined' label='Email Address'></TextField>
            
            
    
    
            <Button variant='contained' sx={{borderRadius:'0px',fontSize:'20px',backgroundColor:'#E6A303'}}>GET IT NOW</Button>
          
          </Box>
        </Box>

      </Box>

<Box1>
  <Box sx={{margin:{xs:' 0px',sm:'15px',md:'0px 50px'}}}>
  <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'25px'},fontWeight:'500',color:'white'}}>New Students Join Every Week</Typography>
  <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'},fontWeight:'500',color:'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
  </Box>
  <Button variant='contained' sx={{borderRadius:'10px',fontSize:'15px',backgroundColor:'white',color:'black',margin:'0px 50px'}}>APPLY NOW</Button>
</Box1>
      
      </>
  );
}