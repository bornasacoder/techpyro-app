import React from 'react'
import {Card, CardMedia, Typography, Box,useTheme,styled, Button, TextField, Select, FormControl, OutlinedInput, MenuItem} from '@mui/material';
import { TaskAlt } from '@mui/icons-material';
import Card3 from '../../components/card/card2/Card3'
import DoupDown3  from 'components/card/card2/DroupDown3';

const Input = styled('input')({
  
})
const Image = styled('img')({
   width:'490px',
   height:'412px',
})

const Box1 = styled(Box)({
  width:'100%',
  height:'400px',
  display:'flex',
  justifyContent:'center',
  backgroundColor:'white',
 })
 const Box2 = styled(Box)({
   width:'70%',
   height:'300px',
   display:'flex',
 //  justifyContent:'center',

 })

const Block3 = () => {
  // console.log(props.cardLinks);
    const theme = useTheme();
    const CardBox = styled(Card)(({theme})=>({
    display:'flex',
    flexDirection:'row',
    width:'600px',
    height:'100px',
    borderRadius:'50px',
    backgroundColor:theme.header.textColor,
    
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
      height:'100px',
      flexDirection:'row',
      // paddingTop:'50px',
      gap:'50px',
    },
   
  }))
  const Box3= styled(Box)(({ theme }) => ({
    height:'auto',
    width:'100%',
    backgroundImage: `url(${"/images/category/bgdimg4.jpeg"})`,
    backgroundSize:'cover',
    // backgroundAttachment:'fixed'
    }
  ));
  const Box1= styled(Box)(({ theme }) => ({
    height:'400px',
    width:'400px',
    backgroundImage: `url(${"/images/category/ved1.webp"})`,
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
         <Box1>
           <Box2>
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'',gap:'20px'}}>
                    <h2>Book Your Free Demo Session</h2>
                    <Typography >Get a free academic counselling session</Typography>
                    <TextField variant='outlined' label="Enter your name" sx={{background:'#FFFFFF',borderRadius:'10px'}}></TextField>
                    {/* <input type="text" placeholder='Enter your name' /> */}
                    <TextField variant='outlined' label="Enter your mobile number" sx={{background:'#FFFFFF',borderRadius:'10px'}}></TextField>
                    {/* <input type="number" placeholder='Enter your mobile number (India only)'/> */}

                    <DoupDown3/>
                    <Button sx={{color:'white',backgroundColor:'#FF693D',width:'250px'}} variant='contained'>Book a free Demo</Button>

                 </Box> 
                <Box>
                  <Image src='https://www.vedantu.com/cdn/images/new-home-page/demo-open-form.webp' alt='image'  />
                </Box>
           </Box2>
         </Box1>
        
        
        
        )
 
  
}
export default Block3