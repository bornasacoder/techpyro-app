import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled, Button} from '@mui/material';
import { CalendarMonth, ChatBubbleOutlineRounded, Coffee, DinnerDining, EastOutlined, FavoriteBorder, Liquor, Mood, Person2Outlined, RiceBowlTwoTone, Star, StarHalf } from '@mui/icons-material';
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
  return ( 
    <>
<Box sx={{backgroundColor:'#FFFFFF',margin:{xs:'0px',sm:'0px 50px',md:'0px 100px'}}}>
<Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'20px'},fontWeight:'500',color:'black',padding:{xs:'20px',sm:'40px',md:'30px'},display:'flex'}}>Ready,set,game on</Typography>
</Box>
       
       
    <Box  data-aos-duration="3000" sx={{display:'flex',justifyContent:'space-evenly',flexDirection:{xs:'column',sm:'column',md:'row'},paddingTop:{xs:'0px',sm:'20px',md:'10px'},backgroundColor:'#FFFFFF',margin:{xs:'0px',sm:'0px 50px',md:'0px 100px'}}}>

   
      <Box sx={{display:'flex',gap:{xs:'0px',sm:'20px',md:'20px'},flexDirection:{xs:'column',sm:'column',md:'row'}}}>

      <Box sx={{display:'flex',gap:'20px'}}>
   <Box sx={{padding:{xs:'10px',sm:'0px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%', transition:'0.5s all', "&:hover":{
          transform:'scale(1.2)'
      },}}
          component="img"
          image="/images/category/mart5.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'20%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
   <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>40% off select game time finds</Typography>
          
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
          image="/images/category/mart6.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'20%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>Home theater under $30</Typography>
         
        </Box>
       
       
       </Box>
      </Box>
      </Box>


<Box sx={{display:'flex',gap:'20px'}}>
      <Box sx={{padding:{xs:'10px',sm:'20px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%',transition:'0.5s all', "&:hover":{
          transform:'scale(1.2)'
      }}}
          component="img"
          image="/images/category/mart7.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'20%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
      <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>Party supplies under $12</Typography>
         
        </Box>
       
       
       </Box>
      </Box>
   

      
    
      
      
     

      
      <Box sx={{padding:{xs:'10px',sm:'20px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="/images/category/mart8.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'20%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500'}}>Shop all game time</Typography>
          
          
        </Box>
       </Box>
      </Box>
      </Box>


      </Box>
      
      </Box>
      {/* <Box sx={{display:'flex',justifyContent:'space-evenly',padding:{xs:'100px 30px',sm:'100px 50px',md:'100px'},flexDirection:{xs:'column',sm:'column',md:'row'},alignItems:'center',gap:'20px'}}>
        <RiceBowlTwoTone sx={{fontSize:{xs:'60px',sm:'35px',md:'60px'}}}/>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
       <Typography sx={{fontSize:{xs:'20px',sm:'25px',md:'30px'},fontWeight:'400'}}>We Have 25+ Years of Experience, </Typography>
       <Typography sx={{fontSize:{xs:'20px',sm:'25px',md:'30px'},fontWeight:'400'}}> Give Better Quality Results</Typography>
       <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'20px'},fontWeight:'400'}}>Perspiciatis unde omnis iste natus error sit voluptatem laudantium, totam rem, eaque ipsa quae</Typography>

       
       </Box>
      <Box sx={{display:'flex',alignItems:'center'}}>
      <Button variant='contained' sx={{borderRadius:'0'}}>CONTACT US</Button>
      </Box>
      </Box> */}
      {/* <Box1>
         <Box sx={{height:{xs:'300px',sm:'400px',md:'500px'},width:{xs:'300px',sm:'400px',md:'500px'},backgroundColor:`${theme.header.textColor2}`,margin:{xs:'50px',sm:'50px',md:'100px 0px 0px 200px '},display:'flex',justifyContent:'space-evenly',alignItems:'center',paddingLeft:'50px'}}>
          <Box sx={{display:'flex',flexDirection:'column',gap:'30px'}}>
          <Typography sx={{color:`${theme.header.background}`}}>Get in Touch</Typography>
          <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'35px'},fontWeight:'700',color:`${theme.header.background}`}}>Find Us Here.Make Real Results Happen.</Typography>
          <Box>
          <Star sx={{color:`${theme.header.background}`}} />
          <Star sx={{color:`${theme.header.background}`}}/>
          <Star sx={{color:`${theme.header.background}`}} />
          <Star sx={{color:`${theme.header.background}`}}/>
          <StarHalf sx={{color:`${theme.header.background}`}}/>
          </Box>
          <Typography sx={{color:`${theme.header.background}`}}>Trust Score 4.5 (Based on 1,200 reviews)</Typography>
          <Typography sx={{color:`${theme.header.background}`}}> <Mood />READ FEEDBACK</Typography>
          </Box>
         </Box>
      </Box1> */}
      </>
  );
}