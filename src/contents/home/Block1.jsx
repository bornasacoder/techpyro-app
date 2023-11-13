import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, FormControl, InputLabel, Select} from '@mui/material';
import { AccessTime, AvTimer, CalendarMonth, ChatBubbleOutlineRounded, Coffee, DinnerDining, EastOutlined, FavoriteBorder, GetApp, Liquor, Mood, Person2Outlined, PinDrop, RiceBowlTwoTone, Star, StarHalf } from '@mui/icons-material';



export default function Block1() {
  const theme = useTheme();
  const CardBox = styled(Card)(({theme})=>({
  display:'flex',
  flexDirection:'row',
  width:'70%',
  height:'450px',
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

       
       
    <Box  data-aos-duration="3000" sx={{display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},margin:{xs:'0px',sm:'0px 50px',md:'80px 0px'},gap:'20px'}}>

      
 
   
      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'},display:{xs:'block',sm:'block',md:'block'}}}>
        <CardMedia
        sx={{height:'100%',width:'100%'}}
          component="img"
          image="/images/category/kid2.webp"
          alt="green iguana"
        />
       </Box>
      <Box sx={{height:{xs:'20%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'50%'},display:'flex',justifyContent:'center',gap:'10px',padding:'0px'}}>
   <Box sx={{display:'flex',flexDirection:'column',margin:{xs:'10px',sm:'20px',md:'30px'},gap:'10px'}}>
          <Typography sx={{color:'red',fontFamily:'cursive'}}>About Us</Typography>
          <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'30px'},fontWeight:'600'}}>Bring Fun Life To Your Kids</Typography>
         
<Typography sx={{fontSize:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et harum, magni sequi nostrum maxime enim.Magnam id atque dicta deleniti, ipsam ipsum distinctio. Facilis praesentium voluptatem accusamus, earum veritatis, laudantium.</Typography>
         
          <Button variant='contained' sx={{width:'200px',marginTop:'10px',backgroundColor:'#FFC107',fontSize:'15px',color:'black',borderRadius:'0px 50px 0px 50px'}}>MORE ABOUT US</Button>
        </Box>
       
       </Box>
       
   
    

      </CardBox>
   
      

  



      </Box>



      
      </>
  );
}