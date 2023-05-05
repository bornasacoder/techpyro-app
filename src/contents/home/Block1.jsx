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
  width:'300px',
  height:'250px',
  borderRadius:'10px',
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
    height:'250px',
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

       <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'35px'},fontWeight:'600',color:'black',paddingLeft:{xs:'30px',sm:'60px',md:'120px'},paddingTop:'80px'}}>In The Store</Typography>
       <Box sx={{display:'flex',gap:'30px'}}></Box>
    <Box  data-aos-duration="3000" sx={{display:'flex',justifyContent:'center',gap:{xs:'0px',sm:'50px',md:'20px'},flexDirection:{xs:'column',sm:'column',md:'row'},paddingBottom:'100px'}}>

      
   <Box sx={{padding:{xs:'10px',sm:'20px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%', transition:'0.5s all', "&:hover":{
          transform:'scale(1.5)'
      },}}
          component="img"
          image="https://img.freepik.com/free-photo/legumes-beans-assortment-healthy-vegan-protein-food_114579-57213.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
   <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'25px'},fontWeight:'700'}}>GROCERY</Typography>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, recusandae.</Typography>
          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Typography> <Person2Outlined /> By Admin</Typography>
            <Typography> <CalendarMonth />jan19,2023</Typography>
          </Box>
        </Box>
       
       
       </Box>
      </Box>


      <Box sx={{padding:{xs:'10px',sm:'20px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%',transition:'0.5s all', "&:hover":{
          transform:'scale(1.5)'
      }}}
          component="img"
          image="https://img.freepik.com/premium-photo/various-raw-groats-cereal-grains-pasta-transparent-plastic-bags-kitchen-table-ingredients-cooking_98936-79.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'25px'},fontWeight:'700'}}>GROCERY</Typography>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, recusandae.</Typography>
          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Typography> <Person2Outlined /> By Admin</Typography>
            <Typography> <CalendarMonth />jan19,2023</Typography>
          </Box>
        </Box>
       
       
       </Box>
      </Box>


      <Box sx={{padding:{xs:'10px',sm:'20px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%',transition:'0.5s all', "&:hover":{
          transform:'scale(1.5)'
      }}}
          component="img"
          image="https://img.freepik.com/premium-photo/fresh-fruits-vegetables-supermarket_392895-287786.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
      <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'25px'},fontWeight:'700'}}>GROCERY</Typography>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, recusandae.</Typography>
          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Typography> <Person2Outlined /> By Admin</Typography>
            <Typography> <CalendarMonth />jan19,2023</Typography>
          </Box>
        </Box>
       
       
       </Box>
      </Box>


      
      <Box sx={{padding:{xs:'10px',sm:'20px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%',transition:'0.5s all', "&:hover":{
          transform:'scale(1.5)'
      }}}
          component="img"
          image="https://img.freepik.com/free-photo/different-type-raw-dry-legumes-composition-marble-table-surface_114579-73133.jpg?size=626&ext=jpg&ga=GA1.1.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'300px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
      <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'25px'},fontWeight:'700'}}>GROCERY</Typography>
          <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, recusandae.</Typography>
          <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Typography> <Person2Outlined /> By Admin</Typography>
            <Typography> <CalendarMonth />jan19,2023</Typography>
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