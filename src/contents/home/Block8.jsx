import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select} from '@mui/material';
import { Home, Person, Settings, TaskAlt } from '@mui/icons-material';

const Block8 = () => {
    const theme = useTheme();
    const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    width:'100%',
    height:'350px',
    // backgroundColor:'#FFFFFF',
    borderRadius:'20px',
    // boxShadow:'none',
    // border:'1px solid rgba(0,0,0,0.3)',
   
    [theme.breakpoints.down('md')]: {
      width:'auto',
      height:'300px',
      flexDirection:'column',
      paddingTop:'0px', 
      alignItems:'center',
      // gap:'50px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'auto',
      height:'300px',
      flexDirection:'column',
      paddingTop:'0px',
     alignItems:'center',
     margin:'20px',
    },
   
  }))
  const Box1= styled(Box)(({ theme }) => ({
    height:'600px',
    width:'100%',
    backgroundImage: `url(${"/images/category/bgdimg4.jpeg"})`,
    backgroundSize:'cover',
    // backgroundAttachment:'fixed'
    }
  ));
  const Box2= styled(Box)(({ theme }) => ({
    height:'680px',
    width:'100%',
    backgroundImage: `url(${"/images/category/bgdimg5.webp"})`,
    backgroundSize:'cover',
    // backgroundAttachment:'fixed',
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
    gap:'150px',
    // flexDirection:'column'
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'900px',
      flexDirection:'column',
      padding:'0px',
      justifyContent:'center',
      gap:'50px'
    },
    }
  ));
  return (
    <>
     {/* <Box1>

     </Box1> */}




 

      <Box sx={{width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'column'},padding:{xs:'0px',sm:'0px 0px',md:'80px 150px'},gap:'40px',alignItems:'center',backgroundColor:'#FFFFFF'}}>
        <Box sx={{display:'flex',gap:'40px',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'30px',md:'40px'},gap:'0px',alignItems:'center',justifyContent:'center',textAlign:'center',backgroundColor:'#16C3B0'}}>
       <Home sx={{color:'white',marginBottom:'60px',fontSize:'50px'}}/>
       <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'25px'},fontWeight:'600',color:'white'}}>Indoor Games</Typography>
      <Typography sx={{color:'white',fontSize:'20px',fontFamily:'cursive'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.</Typography>

      </Box>
      <Box sx={{height:{xs:'0%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'},padding:{xs:'0px',sm:'0px',md:'40px'},display:{xs:'none',sm:'none',md:'none'},justifyContent:'center',alignItems:'center',backgroundColor:'#FFFAEB'}}>
      
        <CardMedia
        sx={{height:'100%',width:'100%'}}
          component="img"
          image="/images/category/teach2.webp"
          alt="green iguana"
        />
     </Box>
      
      
      
      </CardBox>



      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'30px',md:'40px'},gap:'0px',alignItems:'center',justifyContent:'center',textAlign:'center',backgroundColor:'#FDB62F'}}>
      <Person sx={{color:'white',marginBottom:'60px',fontSize:'50px'}}/>
       <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'25px'},fontWeight:'600',color:'White'}}>Outdoor Game And Event</Typography>
      <Typography sx={{color:'white',fontSize:'20px',fontFamily:'cursive'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.</Typography>

      </Box>
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'},padding:{xs:'0px',sm:'0px',md:'40px'},justifyContent:'center',alignItems:'center',backgroundColor:'#EEFDFF',display:{xs:'none',sm:'none',md:'none'}}}>
      
        <CardMedia
        sx={{height:'100%',width:'100%'}}
          component="img"
          image="/images/category/teach3.webp"
          alt="green iguana"
        />
     </Box>
      
      
      
      </CardBox>

     



      
      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'100%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'30px',md:'40px'},gap:'0px',alignItems:'center',justifyContent:'center',textAlign:'center',backgroundColor:'#FD4D40'}}>
      <Settings sx={{color:'white',marginBottom:'60px',fontSize:'50px'}}/>
       <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'25px'},fontWeight:'600',color:'white'}}>Camping for Kids</Typography>
      <Typography sx={{color:'white',fontSize:'20px',fontFamily:'cursive'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.</Typography>

      </Box>
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'},padding:{xs:'0px',sm:'0px',md:'40px'},justifyContent:'center',alignItems:'center',backgroundColor:'#F5EEFE',display:{xs:'none',sm:'none',md:'none'}}}>
      
        <CardMedia
        sx={{height:'100%',width:'100%'}}
          component="img"
          image="/images/category/teach4.webp"
          alt="green iguana"
        />
     </Box>
      
      
      
      </CardBox>


      </Box>
      

     

     
       </Box>
       
    
    
       
       
       </>
       
  )
    }
export default Block8
