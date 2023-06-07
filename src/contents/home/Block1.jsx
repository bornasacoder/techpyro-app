import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, FormControl, InputLabel, Select} from '@mui/material';
import { AccessTime, AvTimer, CalendarMonth, ChatBubbleOutlineRounded, Coffee, DinnerDining, EastOutlined, FavoriteBorder, GetApp, Liquor, Mood, Person2Outlined, PinDrop, RiceBowlTwoTone, Star, StarHalf } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();


export default function Block1() {
  const theme = useTheme();
  const CardBox = styled(Card)(({theme})=>({
  display:'flex',
  flexDirection:'row',
  width:'90%',
  height:'500px',
  borderRadius:'0px',
  gap:'30px',
backgroundColor:'#F6F5F5',
// boxShadow:'none',
 
  [theme.breakpoints.down('md')]: {
    width:'auto',
    height:'auto',
  },
  [theme.breakpoints.down('sm')]: {
    width:'auto',
    height:'auto',
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

       <Box sx={{textAlign:'center',marginTop:{xs:'20px',sm:'40px',md:'80px'},color:'#0D2D62'}}>
       <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'50px'},fontWeight:'700',fontFamily:'Butler'}}>Welcome to our University </Typography>
       <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'50px'},fontWeight:'700',fontFamily:'Butler'}}>Azaad Nagar</Typography>
       <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'40px'},fontWeight:'500',color:'black',fontFamily:"Satisfy"}}>Giving wings to thoughts </Typography>
       </Box>
       
    <Box  data-aos-duration="3000" sx={{display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},margin:{xs:'0px',sm:'0px 50px',md:'80px 0px'},gap:'20px'}}>

      
 
   
      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'},display:{xs:'block',sm:'block',md:'block'}}}>
        <CardMedia
        sx={{height:'100%',width:'100%'}}
          component="img"
          image="https://img.freepik.com/free-psd/realistic-banner-graduation-template_23-2149237586.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=ais"
          alt="green iguana"
        />
       </Box>
      <Box sx={{height:{xs:'20%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'50%'},display:'flex',justifyContent:'center',gap:'10px',padding:'0px'}}>
   <Box sx={{display:'flex',flexDirection:'column',margin:{xs:'10px',sm:'20px',md:'30px'},gap:'10px'}}>
          <Typography sx={{color:'red',fontFamily:'cursive'}}>About Us</Typography>
          <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'30px'},fontWeight:'600'}}>Legacy Since 1997</Typography>
         
<Typography sx={{fontSize:'15px'}}>Delhi Public School Kanpur, established in the year 1997 at Serrvodaya Nagar, is a premier school under the aegis of the Delhi Public School Society, New Delhi.
The DPS Kanpur family – DPS Azaad Nagar, DPS Serrvodaya Nagar, DPS Barra and DPS Kidwai Nagar – is not merely a list of institutions but a network of values, systems, people and relationships.
Spanning over 25 glorious years and having achieved many milestones, DPS Kanpur nurtures students with strength, courage, resilience and confidence to face the world, armed with a sound academic base. It aims to groom students and give them wings to fly so that they dream and work towards achieving limitless possibilities in life.</Typography>
         
          <Button variant='contained' sx={{width:'200px',marginTop:'10px',backgroundColor:'#FFC107',fontSize:'15px',color:'black',borderRadius:'0px 50px 0px 50px'}}>MORE ABOUT US</Button>
        </Box>
       
       </Box>
       
   
    

      </CardBox>
   
      

  



      </Box>



      
      </>
  );
}