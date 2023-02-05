import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select} from '@mui/material';
import { TaskAlt } from '@mui/icons-material';

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
      height:'250px',
      flexDirection:'column',
      paddingTop:'0px', 
      alignItems:'center',
      // gap:'50px',
    },
    [theme.breakpoints.down('sm')]: {
      width:'auto',
      height:'250px',
      flexDirection:'column',
      paddingTop:'0px',
     alignItems:'center',
     margin:'30px',
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

<Box sx={{display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'column'},alignItems:'center',backgroundColor:'#FFFFFF'}}>
<Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'40px'},fontWeight:'700',color:'black'}}>Enable better outcomes</Typography>
<Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'40px'},fontWeight:'700',color:'#56CCDF'}}>for everyone</Typography>
</Box>


 

      <Box sx={{width:'auto',display:'flex',justifyContent:'center',flexDirection:{xs:'column',sm:'column',md:'column'},padding:{xs:'0px',sm:'0px 0px',md:'80px 150px'},gap:'40px',alignItems:'center',backgroundColor:'#FFFFFF'}}>
        <Box sx={{display:'flex',gap:'40px',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'60%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'30px',md:'40px'},gap:'0px',alignItems:'center',justifyContent:'center',textAlign:'center',backgroundColor:'#FFFAEB'}}>
       
       <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'30px'},fontWeight:'600',color:'black'}}>School's</Typography>
      <Typography >Automate operations, boost efficiency and reduce overheads with the most powerful school management platform by your side.</Typography>

      </Box>
      <Box sx={{height:{xs:'0%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'},padding:{xs:'0px',sm:'0px',md:'40px'},display:{xs:'none',sm:'none',md:'flex'},justifyContent:'center',alignItems:'center',backgroundColor:'#FFFAEB'}}>
      
        <CardMedia
        sx={{height:'100%',width:'100%'}}
          component="img"
          image="/images/category/teach2.webp"
          alt="green iguana"
        />
     </Box>
      
      
      
      </CardBox>



      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'60%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'30px',md:'40px'},gap:'0px',alignItems:'center',justifyContent:'center',textAlign:'center',backgroundColor:'#EEFDFF'}}>
       
       <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'30px'},fontWeight:'600',color:'black'}}>Teacher's</Typography>
      <Typography>Create an enriching learning environment through world- class learning content along with digital tools that simplify every classroom operation.</Typography>

      </Box>
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'},padding:{xs:'0px',sm:'0px',md:'40px'},display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#EEFDFF',display:{xs:'none',sm:'none',md:'flex'}}}>
      
        <CardMedia
        sx={{height:'100%',width:'100%'}}
          component="img"
          image="/images/category/teach3.webp"
          alt="green iguana"
        />
     </Box>
      
      
      
      </CardBox>

      </Box>



      <Box sx={{display:'flex',gap:'40px',flexDirection:{xs:'column',sm:'column',md:'row'}}}>
      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'60%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'30px',md:'40px'},gap:'0px',alignItems:'center',justifyContent:'center',textAlign:'center',backgroundColor:'#F5EEFE'}}>
       
       <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'30px'},fontWeight:'600',color:'black'}}>Student's</Typography>
      <Typography>Never miss a lesson with continuous learning at your fingertips through classroom recordings, unlimited practice questions and much more.</Typography>

      </Box>
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'},padding:{xs:'0px',sm:'0px',md:'40px'},display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#F5EEFE',display:{xs:'none',sm:'none',md:'flex'}}}>
      
        <CardMedia
        sx={{height:'100%',width:'100%'}}
          component="img"
          image="/images/category/teach4.webp"
          alt="green iguana"
        />
     </Box>
      
      
      
      </CardBox>



      <CardBox >
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'60%'},display:'flex',flexDirection:'column',padding:{xs:'20px',sm:'30px',md:'40px'},gap:'0px',alignItems:'center',justifyContent:'center',textAlign:'center',backgroundColor:'#FFF3F7'}}>
       
       <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'30px'},fontWeight:'600',color:'black'}}>Parents</Typography>
      <Typography>Monitor & track your children’s progress with complete transparency and stay on top of all the school updates with
ease.</Typography>

      </Box>
      <Box sx={{height:{xs:'100%',sm:'100%',md:'100%'},width:{xs:'100%',sm:'100%',md:'50%'},padding:{xs:'0px',sm:'0px',md:'40px'},display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#FFF3F7',display:{xs:'none',sm:'none',md:'flex'}}}>
      
        <CardMedia
        sx={{height:'100%',width:'100%'}}
          component="img"
          image="/images/category/teach5.webp"
          alt="green iguana"
        />
     </Box>
      
      
      
      </CardBox>

      </Box >

      <Button variant='contained' sx={{width:'150px',margin:{xs:'0px 0px 50px 0px',sm:'0px 0px 50px 0px',md:'0px 0px 0px 0px'},backgroundColor:'#1DA1F2',fontSize:'20px'}}>Get Started</Button>
       </Box>
       
      <Box sx={{margin:{xs:'0px',sm:'0px',md:'0px 0px 0px 200px'},height:'200px',display:'flex',flexDirection:'column',justifyContent:'center',textAlign:{xs:'center',sm:'center',md:'left'}}}>
      <Typography sx={{fontSize:{xs:'35px',sm:'20px',md:'40px'},fontWeight:'700',color:'black'}}>Simplify processes and</Typography>
      <Typography sx={{fontSize:{xs:'35px',sm:'20px',md:'40px'},fontWeight:'700',color:'black'}}>intelligently manage your institute</Typography>
      </Box>
    
       
       
       </>
       
  )
    }
export default Block8
