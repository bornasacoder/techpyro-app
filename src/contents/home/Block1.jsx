import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled, Button} from '@mui/material';
import { ChatBubbleOutlineRounded, Coffee, DinnerDining, EastOutlined, FavoriteBorder, Liquor, Mood, RiceBowlTwoTone, Star, StarHalf } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


export default function Card1() {
  const theme = useTheme();
  const CardBox = styled(Card)(({theme})=>({
  display:'flex',
  flexDirection:'column',
  width:'400px',
  height:'400px',
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
    width:'100%',
    height:'200px',
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
  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'80px 20px 0px 20px',sm:'100px 50px',md:'100px'},gap:'40px'}}>
       
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'35px'},fontWeight:'700',color:'black'}}>POPULAR RIGHT NOW</Typography>
       <Box sx={{display:{xs:'none',sm:'none',md:'flex'},gap:'20px',fontWeight:'400'}}>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black'}}> ARGENTINA </Button>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black'}}>SAMBA</Button>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black'}}>FOOTBALL</Button>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black'}}>FORUM</Button>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black'}}>SHOES</Button>
          </Box>
          <Box sx={{display:{xs:'block',sm:'block',md:'none'},gap:'20px',fontWeight:'300',width:'100%'}}>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black',margin:'10px'}}> SHOES </Button>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black',margin:'10px'}}>SAMBA</Button>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black',margin:'10px'}}>FOOTBALL</Button>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black',margin:'10px'}}>FORUM</Button>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black',margin:'10px'}}>ARGENTINA</Button>
          </Box>
       
       </Box>
       <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'45px'},fontWeight:'700',color:'black',paddingLeft:{xs:'30px',sm:'60px',md:'120px'}}}>WHO ARE U SHOPPING FOR?</Typography>
       <Box sx={{display:'flex',gap:'20px'}}></Box>
    <Box  data-aos-duration="3000" sx={{display:'flex',justifyContent:'center',gap:{xs:'0px',sm:'50px',md:'30px'},flexDirection:{xs:'column',sm:'column',md:'row'}}}>

      
   <Box sx={{padding:{xs:'0px',sm:'50px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="/images/category/adidas1.jpeg"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'400px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'20px'}}>
   <Box sx={{display:'flex',justifyContent:'center'}}>
          
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'20px'},fontWeight:'700'}}>MEN</Typography>
        </Box>
       
       
       </Box>
      </Box>
      <Box sx={{padding:{xs:'0px',sm:'50px',md:'0'}}}>
      {/* <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'350px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'20px'}}>
   <Box sx={{display:'flex',justifyContent:'space-between'}}>
          <Typography><Coffee sx={{fontSize:'45px'}}/></Typography>
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'40px'},fontWeight:'700'}}>02</Typography>
        </Box>
        <Typography></Typography>
        
        <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Skilled Chef</Typography>
        <Typography>inappropriate behavior ipsum dolor sit amet, consectetur.</Typography>
        
        
       
       </Box> */}
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="/images/category/adidas2.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'400px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'20px'}}>
   <Box sx={{display:'flex',justifyContent:'center'}}>
          
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'20px'},fontWeight:'700'}}>WOMEN</Typography>
        </Box>
       
       
       </Box>
      </Box>
      <Box sx={{padding:{xs:'0px',sm:'50px',md:'0'}}}>
      {/* <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'350px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'20px'}}>
   <Box sx={{display:'flex',justifyContent:'space-between'}}>
          <Typography><DinnerDining sx={{fontSize:'45px'}}/></Typography>
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'40px'},fontWeight:'700'}}>03</Typography>
        </Box>
        <Typography></Typography>
        
        <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'30px'},fontWeight:'700'}}>Fresh Product</Typography>
        <Typography>inappropriate behavior ipsum dolor sit amet, consectetur.</Typography>
        
        
       
       </Box> */}
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%'}}
          component="img"
          image="/images/category/adidas3.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'400px'},display:'flex',flexDirection:'column',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'20px'}}>
   <Box sx={{display:'flex',justifyContent:'center'}}>
          
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'20px'},fontWeight:'700'}}>KIDS</Typography>
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