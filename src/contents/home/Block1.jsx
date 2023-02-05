import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, FormControl, InputLabel, Select} from '@mui/material';
import { AccessTime, AvTimer, CalendarMonth, ChatBubbleOutlineRounded, Coffee, DinnerDining, EastOutlined, FavoriteBorder, GetApp, Liquor, Mood, Person2Outlined, PinDrop, RiceBowlTwoTone, Star, StarHalf } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export default function Block1() {
  const theme = useTheme();
  const CardBox = styled(Card)(({theme})=>({
  display:'flex',
  flexDirection:'row',
  width:'70%',
  height:'450px',
  borderRadius:'10px',
  gap:'30px',
backgroundColor:'#EAF7FF',
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

       
       
    <Box  data-aos-duration="3000" sx={{display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'row'},paddingTop:{xs:'0px',sm:'0px',md:'80px'},margin:{xs:'0px',sm:'0px 50px',md:'0px 0px'},gap:'20px'}}>

      
 
   
      <CardBox >
      <Box sx={{height:{xs:'20%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'80%'},display:'flex',justifyContent:'center',gap:'10px',padding:'0px'}}>
   <Box sx={{display:'flex',flexDirection:'column',margin:'30px',gap:'30px'}}>
          
          <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'30px'},fontWeight:'700'}}>Digitize your school in minutes
with Teachmint’s integrated platform</Typography>
          <Box sx={{display:'flex',gap:'30px',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
            <Box>
               <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'}}}>Your name</Typography>
<TextField variant='outlined' label='Enter Your name' sx={{background:'#FFFFFF',borderRadius:'10px',width:{xs:'320px',sm:'320px',md:'280px'}}}></TextField>
            </Box>
            <Box>
<Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'}}}>Your School name</Typography>
<TextField variant='outlined' label='eg. D A V' sx={{background:'#FFFFFF',borderRadius:'10px',width:{xs:'320px',sm:'320px',md:'280px'}}}></TextField>
            </Box>
          </Box>

          <Box sx={{display:'flex',gap:'30px',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
            <Box>
               <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'}}}>Your Phone Number</Typography>
<TextField variant='outlined' label='Your Number' sx={{background:'#FFFFFF',borderRadius:'10px',width:{xs:'320px',sm:'320px',md:'280px'}}}></TextField>
            </Box>
            <Box>
<Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'15px'}}}>Your role in the School </Typography>
<Box sx={{width:{xs:'320px',sm:'320px',md:'280px'} }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Year"
        sx={{borderRadius:'10px',background:'#FFFFFF'}}
        >
        </Select>
      </FormControl>
    </Box>
            </Box>
          </Box>
          <Button variant='contained' sx={{width:'200px',marginTop:'10px',backgroundColor:'#1DA1F2',fontSize:'20px'}}>Get Started</Button>
        </Box>
       
       </Box>
        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'},display:{xs:'none',sm:'none',md:'block'}}}>
        <CardMedia
        sx={{height:'100%',width:'80%'}}
          component="img"
          image="/images/category/teach12.webp"
          alt="green iguana"
        />
       </Box>
   
    

      </CardBox>
   
      

  



      </Box>



      
      </>
  );
}