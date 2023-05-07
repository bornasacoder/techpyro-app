import { AutoStories, Language, School, WorkspacePremium } from '@mui/icons-material';
import { Button, Select, TextField, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react'


const Box2= styled(Box)(({ theme }) => ({
    height:'400px',
    width:'100%',
    backgroundImage: `url(${"/images/category/edu3.jpeg"})`,
    backgroundSize:'cover',
    margin:'100px 0px 0px 0px',
    // backgroundAttachment:'fixed',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // gap:'150px',
    // flexDirection:'column'
    
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      height:'auto',
      flexDirection:'column',
      padding:'0px',
      justifyContent:'center',
      gap:'50px'
    },
    }
  ));

  const Box1= styled(Box)(({ theme }) => ({
    height:'400px',
    width:'100%',
    backgroundImage: `url(${"/images/category/edu4.webp"})`,
    backgroundSize:'cover',
   
   
   
   
    }
  ));

const Block4 = () => {
    const theme = useTheme();
  return (
    <>
       
        {/* <Box2>
          <Box sx={{backgroundColor:'rgba(0,0,0,0.4)',width:'100%',height:{xs:'auto',sm:'auto',md:'400px'}, display:'flex',justifyContent:'center',alignItems:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:{xs:'20px',sm:'20px',md:'0px'}}}>
          <Box sx={{display:'flex',color:'white',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'300px',borderRight:'1px solid ',gap:{xs:'10px',sm:'10px',md:'20px'}}}>
            <AutoStories sx={{fontSize:{xs:'60px',sm:'65px',md:'65px'}}}/>
            <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'30px'},fontWeight:'900'}}>98655</Typography>
            <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'25px'},fontWeight:'500'}}>Learners</Typography>
          </Box>

          <Box sx={{display:'flex',color:'white',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'300px',borderRight:'1px solid ',gap:{xs:'10px',sm:'10px',md:'20px'}}}>
            <School sx={{fontSize:{xs:'60px',sm:'65px',md:'65px'}}}/>
            <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'30px'},fontWeight:'900'}}>68655</Typography>
            <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'25px'},fontWeight:'500'}}>Graduates</Typography>
          </Box>

          <Box sx={{display:'flex',color:'white',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'300px',borderRight:'1px solid ',gap:{xs:'10px',sm:'10px',md:'20px'}}}>
            <Language sx={{fontSize:{xs:'60px',sm:'65px',md:'65px'}}}/>
            <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'30px'},fontWeight:'900'}}>35</Typography>
            <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'25px'},fontWeight:'500'}}>Countries Reached</Typography>
          </Box>

          <Box sx={{display:'flex',color:'white',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'300px',gap:{xs:'10px',sm:'10px',md:'20px'}}}>
            <WorkspacePremium sx={{fontSize:{xs:'60px',sm:'65px',md:'65px'}}}/>
            <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'30px'},fontWeight:'900'}}>1560</Typography>
            <Typography sx={{fontSize:{xs:'25px',sm:'25px',md:'25px'},fontWeight:'500'}}>Course Published</Typography>
          </Box>
           </Box>
       </Box2>  */}

       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'50px 0px',sm:'100px 50px',md:'100px'},textAlign:'center'}}>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'35px'},fontWeight:'700'}}>Why Choose Us?</Typography>
       <Typography sx={{fontSize:{xs:'15px',sm:'15px',md:'20px'},fontWeight:'500'}}>A choice that makes the difference.</Typography>

       
       </Box>


       <Box1>
       <Box sx={{backgroundColor:'rgba(0,0,0,0.4)',width:'100%',height:'400px', display:'flex',justifyContent:'center',alignItems:'center',color:'white',flexDirection:'column',gap:'10px',textAlign:'center'}}>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'35px'},fontWeight:'700'}}>Trusted by over 6000+ students</Typography>
       <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'500'}}>Join our community of students around the world helping you succeed.</Typography>
       <Button variant='contained' sx={{backgroundColor:'#E6A303',color:'black'}}>GET STARTED</Button>
        </Box>
       </Box1>

       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'50px 0px',sm:'70px 0px',md:'100px'},textAlign:'center'}}>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'35px'},fontWeight:'700'}}>Outstanding Alumni</Typography>
       <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'20px'},fontWeight:'500'}}>Your experience does not stop when you graduate.</Typography>

       
       </Box>
       </>
  )
}

export default Block4
