import { Button, Select, TextField, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react'


const Box2= styled(Box)(({ theme }) => ({
    height:'680px',
    width:'100%',
    backgroundImage: `url(${"https://img.freepik.com/premium-photo/top-view-indoor-shopping-center_23-2148225020.jpg?size=626&ext=jpg&ga=GA1.2.681071774.1670583833&semt=ais"})`,
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

const Block4 = () => {
    const theme = useTheme();
  return (
    <>
         <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:{xs:'100px 30px',sm:'100px 50px',md:'100px'}}}>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'25px'},fontWeight:'700'}}>Make an Account</Typography>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'40px'},fontWeight:'700'}}>Online Shopping</Typography>

       
       </Box>
        <Box2>
            
           <Box sx={{width:{xs:'300px',sm:'400px',md:'450px'}}}>
         
          <Typography sx={{fontSize:{xs:'20px',sm:'30px',md:'35px'},color:`${theme.header.background}`,fontWeight:'700'}}>Reserve your seats to confirm if you come with your famoly</Typography>
          <Typography sx={{color:`${theme.header.background}`}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          </Typography>
          <Typography sx={{color:`${theme.header.background}`}}>
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </Typography>
          <Typography sx={{color:`${theme.header.background}`}}>
          veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
          </Typography>
          </Box>
          <Box sx={{backgroundColor:`${theme.header.background}`,width:{xs:'300px',sm:'400px',md:'480px'},height:'500px',display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:{xs:'50px',sm:'70px',md:'0px'}}}>
          <Box sx={{backgroundColor:`${theme.header.background}`,display:'flex',flexDirection:'column',width:'400px',gap:'10px'}}>
            <TextField variant='outlined' label='Name'></TextField>
            <TextField variant='outlined' label='Email id' sx={{borderRadius:'0px'}}></TextField>
            <TextField variant='outlined' label='Phone no'></TextField>
            <TextField variant='outlined' label='Date & Time'></TextField>
            <Select label="Select Event"></Select>
            <Button variant='contained' sx={{borderRadius:'0',marginTop:'0px',width:'200px'}}>Sign up</Button>
          </Box>
          </Box>
       </Box2> 
       </>
  )
}

export default Block4
