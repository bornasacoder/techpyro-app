import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled, Button} from '@mui/material';
import { CalendarMonth, ChatBubbleOutlineRounded, Coffee, DinnerDining, EastOutlined, FavoriteBorder, Liquor, Mood, Person2Outlined, RiceBowlTwoTone, Star, StarHalf } from '@mui/icons-material';



export default function Block7() {
  const theme = useTheme();
  const CardBox = styled(Card)(({theme})=>({
  display:'flex',
  flexDirection:'column',
  width:'130px',
  height:'130px',
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
    <Box sx={{display:'flex',margin:{xs:'0px',sm:'0px 50px',md:'0px 100px'},gap:'30px',justifyContent:'center',backgroundColor:'#FFFFFF',flexDirection:{xs:'column',sm:'column',md:'row'}}}>

       
    <Box   sx={{display:'flex',gap:{xs:'0px',sm:'50px',md:'20px'},flexDirection:{xs:'column',sm:'column',md:'column'},paddingTop:{xs:'0px',sm:'20px',md:'0px'},width:{xs:'100%',sm:'100%',md:'400px'},alignItems:'center',backgroundColor:'#FFFFFF',borderRadius:'10px',boxShadow:'unset',border:'1px solid rgba(0,0,0,0.3)'}}>

    <Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'20px'},fontWeight:'400',color:'black',paddingTop:{xs:'0px',sm:'0px',md:'0px'}}}>Reset in the new year!</Typography>

      <Box sx={{display:'flex',gap:{xs:'0px',sm:'20px',md:'50px'}}}>
   <Box sx={{padding:{xs:'10px',sm:'0px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
        <CardMedia
        sx={{height:'100%', transition:'0.5s all', "&:hover":{
          transform:'scale(1.2)'
      },}}
          component="img"
          image="/images/category/mart1.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',background:'#FFFFF',justifyContent:'center',gap:'10px',padding:'0px'}}>
   <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'300'}}>Storage starting at $10</Typography>
          
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
          image="/images/category/mart2.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
    <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',background:'#FFFFF',justifyContent:'center',gap:'10px',padding:'0px'}}>
    <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'300'}}>Fit tech at $10</Typography>
         
        </Box>
       
       
       </Box>
      </Box>
      </Box>


<Box sx={{display:'flex',gap:{xs:'0px',sm:'20px',md:'50px'}}}>
      <Box sx={{padding:{xs:'10px',sm:'20px',md:'0'}}}>
   
      <CardBox >

        <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
        <CardMedia
        sx={{height:'100%',transition:'0.5s all', "&:hover":{
          transform:'scale(1.2)'
      }}}
          component="img"
          image="/images/category/mart3.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'auto',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
      <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'300'}}>Kitchen appliances</Typography>
         
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
          image="/images/category/mart4.webp"
          alt="green iguana"
        />
       </Box>
   
      

      </CardBox>
      <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',background:'#FFFFF',justifyContent:'center',gap:'10px',padding:'0px'}}>
      <Box sx={{display:'flex',flexDirection:'column'}}>
          
          <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'300'}}>Self care at $20</Typography>
         
        </Box>
       
       
       </Box>
      </Box>
      </Box>
      
      
     
      </Box>



      <Box   sx={{display:'flex',gap:{xs:'0px',sm:'50px',md:'20px'},flexDirection:{xs:'column',sm:'column',md:'column'},paddingTop:{xs:'0px',sm:'20px',md:'0px'},width:{xs:'100%',sm:'100%',md:'400px'},alignItems:'center',backgroundColor:'#FFFFFF',borderRadius:'10px',boxShadow:'unset',border:'1px solid rgba(0,0,0,0.3)'}}>

<Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'20px'},fontWeight:'400',color:'black',paddingTop:{xs:'0px',sm:'0px',md:'0px'}}}>Reset in the new year!</Typography>

  <Box sx={{display:'flex',gap:{xs:'0px',sm:'20px',md:'50px'}}}>
<Box sx={{padding:{xs:'10px',sm:'0px',md:'0'}}}>

  <CardBox >

    <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
    <CardMedia
    sx={{height:'100%', transition:'0.5s all', "&:hover":{
      transform:'scale(1.2)'
  },}}
      component="img"
      image="/images/category/mart19.webp"
      alt="green iguana"
    />
   </Box>

  

  </CardBox>
<Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',background:'#FFFFF',justifyContent:'center',gap:'10px',padding:'0px'}}>
<Box sx={{display:'flex',flexDirection:'column'}}>
      
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'300'}}>Storage starting at $10</Typography>
      
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
      image="/images/category/mart20.webp"
      alt="green iguana"
    />
   </Box>

  

  </CardBox>
<Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',background:'#FFFFF',justifyContent:'center',gap:'10px',padding:'0px'}}>
<Box sx={{display:'flex',flexDirection:'column'}}>
      
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'300'}}>Fit tech at $10</Typography>
     
    </Box>
   
   
   </Box>
  </Box>
  </Box>


<Box sx={{display:'flex',gap:{xs:'0px',sm:'20px',md:'50px'}}}>
  <Box sx={{padding:{xs:'10px',sm:'20px',md:'0'}}}>

  <CardBox >

    <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
    <CardMedia
    sx={{height:'100%',transition:'0.5s all', "&:hover":{
      transform:'scale(1.2)'
  }}}
      component="img"
      image="/images/category/mart21.webp"
      alt="green iguana"
    />
   </Box>

  

  </CardBox>
  <Box sx={{height:{xs:'20%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
  <Box sx={{display:'flex',flexDirection:'column'}}>
      
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'300'}}>Kitchen appliances</Typography>
     
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
      image="/images/category/mart22.webp"
      alt="green iguana"
    />
   </Box>

  

  </CardBox>
  <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',background:'#FFFFF',justifyContent:'center',gap:'10px',padding:'0px'}}>
  <Box sx={{display:'flex',flexDirection:'column'}}>
      
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'300'}}>Self care at $20</Typography>
     
    </Box>
   
   
   </Box>
  </Box>
  </Box>
  
  
 
  </Box>




  <Box   sx={{display:{xs:'none',sm:'none',md:'flex'},gap:{xs:'0px',sm:'50px',md:'20px'},flexDirection:{xs:'column',sm:'column',md:'column'},paddingTop:{xs:'0px',sm:'20px',md:'0px'},width:'400px',alignItems:'center',backgroundColor:'#FFFFFF',borderRadius:'10px',boxShadow:'unset',border:'1px solid rgba(0,0,0,0.3)'}}>

<Typography sx={{fontSize:{xs:'25px',sm:'35px',md:'20px'},fontWeight:'400',color:'black',paddingTop:{xs:'0px',sm:'0px',md:'0px'}}}>Reset in the new year!</Typography>

  <Box sx={{display:'flex',gap:{xs:'0px',sm:'20px',md:'50px'}}}>
<Box sx={{padding:{xs:'10px',sm:'0px',md:'0'}}}>

  <CardBox >

    <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},}}>
    <CardMedia
    sx={{height:'100%', transition:'0.5s all', "&:hover":{
      transform:'scale(1.2)'
  },}}
      component="img"
      image="/images/category/mart1.webp"
      alt="green iguana"
    />
   </Box>

  

  </CardBox>
<Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',background:'#FFFFF',justifyContent:'center',gap:'10px',padding:'0px'}}>
<Box sx={{display:'flex',flexDirection:'column'}}>
      
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'300'}}>Storage starting at $10</Typography>
      
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
      image="/images/category/mart2.webp"
      alt="green iguana"
    />
   </Box>

  

  </CardBox>
<Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',background:'#FFFFF',justifyContent:'center',gap:'10px',padding:'0px'}}>
<Box sx={{display:'flex',flexDirection:'column'}}>
      
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'300'}}>Fit tech at $10</Typography>
     
    </Box>
   
   
   </Box>
  </Box>
  </Box>


<Box sx={{display:'flex',gap:{xs:'0px',sm:'20px',md:'50px'}}}>
  <Box sx={{padding:{xs:'10px',sm:'20px',md:'0'}}}>

  <CardBox >

    <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'}}}>
    <CardMedia
    sx={{height:'100%',transition:'0.5s all', "&:hover":{
      transform:'scale(1.2)'
  }}}
      component="img"
      image="/images/category/mart3.webp"
      alt="green iguana"
    />
   </Box>

  

  </CardBox>
  <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',background:'#F6F7FB',justifyContent:'center',gap:'10px',padding:'0px'}}>
  <Box sx={{display:'flex',flexDirection:'column'}}>
      
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'300'}}>Kitchen appliances</Typography>
     
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
      image="/images/category/mart4.webp"
      alt="green iguana"
    />
   </Box>

  

  </CardBox>
  <Box sx={{height:{xs:'40%',sm:'50%',md:'auto'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',background:'#FFFFF',justifyContent:'center',gap:'10px',padding:'0px'}}>
  <Box sx={{display:'flex',flexDirection:'column'}}>
      
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'300'}}>Self care at $20</Typography>
     
    </Box>
   
   
   </Box>
  </Box>
  </Box>
  
  
 
  </Box>

      </Box>
      <Box sx={{margin:{xs:'0px',sm:'0px 50px',md:'0px 100px'},backgroundColor:'#FFFFFF',paddingTop:'10px'}}>
      <Box sx={{height:'50px',display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'#0071DC',margin:{xs:'0px 10px',sm:'0px 20px',md:'0px 30px'},borderRadius:'10px',}}>
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'700',color:'white'}}>Member get free shipping with no minimum orders! Terms apply</Typography>
      </Box>
      </Box>
      </>
  );
}