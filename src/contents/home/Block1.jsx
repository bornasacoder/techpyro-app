import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled, Button} from '@mui/material';
import { CalendarMonth, ChatBubbleOutlineRounded, Coffee, DinnerDining, EastOutlined, FavoriteBorder, Liquor, Mood, Person2Outlined, RiceBowlTwoTone, Star, StarHalf } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export default function Card1() {
  const theme = useTheme();
  const CardBox = styled(Card)(({theme})=>({
  display:'flex',
  flexDirection:'column',
  width:'200px',
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

       <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'30px'},fontWeight:'500',color:'black',paddingTop:{xs:'20px',sm:'40px',md:'80px'},display:'flex',justifyContent:'center'}}>Top Catogeries</Typography>
       
    <Box  data-aos-duration="3000" sx={{display:'flex',justifyContent:'center',gap:{xs:'0px',sm:'50px',md:'25px'},flexDirection:{xs:'column',sm:'column',md:'row'},paddingTop:{xs:'0px',sm:'20px',md:'30px'}}}>

      <Box sx={{display:'flex',gap:{xs:'0px',sm:'20px',md:'20px'}}}>
   <Box sx={{padding:{xs:'10px',sm:'0px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%', transition:'0.5s all', "&:hover":{
          transform:'scale(1.2)'
      },}}
          component="img"
          image="/images/category/wrogn1.jpeg"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
   <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>T Shirts</Typography>
          
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
          image="/images/category/wrogn2.jpeg"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Shirts</Typography>
         
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
          image="/images/category/wrogn3.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
      <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Jeans</Typography>
         
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
          image="/images/category/wrogn4.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
      <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Sweat Shirts</Typography>
         
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
          image="/images/category/wrogn5.jpeg"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Joggers</Typography>
          
         
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
          image="/images/category/wrogn6.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'200px'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'500'}}>Footwear</Typography>
          
          
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