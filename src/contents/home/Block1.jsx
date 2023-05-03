import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled, Button} from '@mui/material';
import { ChatBubbleOutlineRounded, Coffee, DinnerDining, FavoriteBorder, Liquor, Mood, RiceBowlTwoTone, Star, StarHalf } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export default function Card1() {
  const theme = useTheme();
  const CardBox = styled(Card)(({theme})=>({
  display:'flex',
  flexDirection:'column',
  width:'350px',
  height:'200px',
  borderRadius:'0px',
  gap:'20px',
  [theme.breakpoints.down('lg')]: {
    width:'100vw',
    height:'400px',
   
  },
  [theme.breakpoints.down('md')]: {
    width:'100vw',
    height:'400px',
  },
  [theme.breakpoints.down('sm')]: {
    width:'300px',
    height:'300px',
    flexDirection:'column',
    padding:'0px'
  }
}));
const Box1= styled(Box)(({ theme }) => ({
  height:'650px',
  width:'100%',
  backgroundImage: `url(${"https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg?size=626&ext=jpg&ga=GA1.2.681071774.1670583833&semt=sph"})`,
  backgroundSize:'cover',
  paddingTop:'10px'
  // backgroundAttachment:'fixed'
  }
));
  return ( 
    <>
  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'80px 0px 0px 30px',sm:'100px 50px',md:'100px'}}}>
       <Typography sx={{fontSize:{xs:'20px',sm:'25px',md:'25px'},fontWeight:'700'}}>Our Product</Typography>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'40px'},fontWeight:'700'}}>We Provide Best Quality Brands</Typography>

       
       </Box>
    <Box  data-aos-duration="3000" sx={{display:'flex',justifyContent:'center',gap:{xs:'0px',sm:'50px',md:'30px'},flexDirection:{xs:'column',sm:'column',md:'row'}}}>
      
   <Box sx={{padding:{xs:'30px',sm:'50px',md:'0'}}}>
   <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'350px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'20px'}}>
   <Box sx={{display:'flex',justifyContent:'space-between'}}>
          {/* <Typography><Liquor sx={{fontSize:'45px'}}/></Typography> */}
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'40px'},fontWeight:'700'}}>01</Typography>
        </Box>
        <Typography></Typography>
        
        <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Clothes</Typography>
        <Typography>inappropriate behavior ipsum dolor sit amet, consectetur.</Typography>
        
        
        {/* <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Up To 25% off</Typography> */}
       </Box>
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://img.freepik.com/free-photo/young-woman-with-black-hat-sunglasses-isolated-white-background_231208-2050.jpg?size=626&ext=jpg&ga=GA1.2.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    
      </Box>
      <Box sx={{padding:{xs:'30px',sm:'50px',md:'0'}}}>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'350px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'20px'}}>
   <Box sx={{display:'flex',justifyContent:'space-between'}}>
          {/* <Typography><Coffee sx={{fontSize:'45px'}}/></Typography> */}
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'40px'},fontWeight:'700'}}>02</Typography>
        </Box>
        <Typography></Typography>
        
        <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Clothes</Typography>
        <Typography>inappropriate behavior ipsum dolor sit amet, consectetur.</Typography>
        
        
        {/* <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Up To 25% off</Typography> */}
       </Box>
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://img.freepik.com/free-photo/woman-wearing-sundress_23-2150388778.jpg?size=626&ext=jpg&ga=GA1.2.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      
      </Box>
      <Box sx={{padding:{xs:'30px',sm:'50px',md:'0'}}}>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'350px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'20px'}}>
   <Box sx={{display:'flex',justifyContent:'space-between'}}>
          {/* <Typography><DinnerDining sx={{fontSize:'45px'}}/></Typography> */}
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'40px'},fontWeight:'700'}}>03</Typography>
        </Box>
        <Typography></Typography>
        
        <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Clothes</Typography>
        <Typography>inappropriate behavior ipsum dolor sit amet, consectetur.</Typography>
        
        
        {/* <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Up To 25% off</Typography> */}
       </Box>
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="https://img.freepik.com/free-photo/pink-sweater-front_125540-746.jpg?size=626&ext=jpg&ga=GA1.2.681071774.1670583833&semt=sph"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      
      </Box>
      
      
      </Box>
      <Box sx={{display:'flex',justifyContent:'space-evenly',padding:{xs:'100px 30px',sm:'100px 50px',md:'100px'},flexDirection:{xs:'column',sm:'column',md:'row'},alignItems:'center',gap:'20px'}}>
        <RiceBowlTwoTone sx={{fontSize:{xs:'60px',sm:'35px',md:'60px'}}}/>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
       <Typography sx={{fontSize:{xs:'20px',sm:'25px',md:'30px'},fontWeight:'400'}}>We Have 25+ Years of Experience, </Typography>
       <Typography sx={{fontSize:{xs:'20px',sm:'25px',md:'30px'},fontWeight:'400'}}> Give Better Quality Results</Typography>
       <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'20px'},fontWeight:'400'}}>Perspiciatis unde omnis iste natus error sit voluptatem laudantium, totam rem, eaque ipsa quae</Typography>

       
       </Box>
      <Box sx={{display:'flex',alignItems:'center'}}>
      <Button variant='contained' sx={{borderRadius:'0'}}>CONTACT US</Button>
      </Box>
      </Box>
      <Box1>
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
      </Box1>
      </>
  );
}