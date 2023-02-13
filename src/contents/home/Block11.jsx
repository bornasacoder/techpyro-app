import { Button, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useTheme } from 'styled-components';

const Box1 = styled(Box)((({theme}) =>({
 
  //    backgroundColor:'black',
     height:'700px',
     width:'100%',
     display:'flex',
     flexDirection:'column',
     justifyContent:'space-evenly',
     alignItems:'center',
     background:'#D2D2D2',
     gap:'10px',
     padding:'0px 250px',
     [theme.breakpoints.down('md')]: {
    padding:'20px',
     
    },
    [theme.breakpoints.down('sm')]: {
      
     
    },
  })));

const Block11 = () => {
  const theme = useTheme();
  return (
    <>
      <Box1>
        <Box sx={{}}>
          <img src='https://dpsazaadnagar.com/wp-content/uploads/2021/09/Logo__.png' style={{height:'150px',width:'120px'}}/>
        </Box>

      <Typography sx={{fontSize:{xs:'20px',sm:'25px',md:'30px'},fontWeight:'700',color:'black',textAlign:'center',fontFamily:'Butler'}}>Synonymous with academic excellence, holistic development, social consciousness, and a global vision that brings about the growth of students, DPS Azaad Nagar prepares students with the transformative experience to be
well-rounded leaders who make a positive impact on the world.</Typography>


<Box sx={{width:'100%',height:{xs:'auto',sm:'auto',md:'auto'}, display:'flex',justifyContent:'center',alignItems:'center',flexDirection:{xs:'column',sm:'column',md:'row'},gap:{xs:'20px',sm:'20px',md:'0px'}}}>
        <Box sx={{display:'flex'}}>
          <Box sx={{display:'flex',color:'black',flexDirection:'column',justifyContent:'center',alignItems:'center',width:{xs:'130px',sm:'200px',md:'300px'}}}>
            
            <Typography sx={{fontSize:{xs:'35px',sm:'50px',md:'70px'},fontWeight:'700',color:'#B80924',fontFamily:'Butler'}}>25</Typography>
            <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'400'}}>Glorious Years</Typography>
          </Box>

          <Box sx={{display:'flex',color:'black',flexDirection:'column',justifyContent:'center',alignItems:'center',width:{xs:'130px',sm:'200px',md:'300px'},borderRight:{xs:'none',sm:'none',md:'none'},gap:{xs:'10px',sm:'10px',md:'10px'},textAlign:'center'}}>
            
            <Typography sx={{fontSize:{xs:'35px',sm:'50px',md:'70px'},fontWeight:'700',color:'#B80924',fontFamily:'Butler'}}>100%</Typography>
            <Typography sx={{fontSize:{xs:'15px',sm:'25px',md:'20px'},fontWeight:'400'}}>Academic Results</Typography>
          </Box>
          </Box>

          <Box sx={{display:'flex',}}>
          <Box sx={{display:'flex',color:'black',flexDirection:'column',justifyContent:'center',alignItems:'center',width:{xs:'130px',sm:'200px',md:'300px'},borderRight:'none',gap:{xs:'10px',sm:'10px',md:'10px'}}}>
            
            <Typography sx={{fontSize:{xs:'35px',sm:'50px',md:'70px'},fontWeight:'700',color:'#B80924',fontFamily:'Butler'}}>500+</Typography>
            <Typography sx={{fontSize:{xs:'15px',sm:'25px',md:'20px'},fontWeight:'400'}}>Workforce</Typography>
          </Box>

         
          </Box>
           </Box>
     
      </Box1>
    </>
  )
}

export default Block11
