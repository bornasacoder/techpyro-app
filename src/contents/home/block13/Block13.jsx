import { ArrowDropDown, Call, MailOutline } from '@mui/icons-material'
import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material'
import {React ,useState} from 'react'
import styled from 'styled-components'

const Box1 = styled('Box')({
    display:'flex',
    justifyContent:'center',
    width:'100%',
    height:'447px',
    marginTop:'100px',
    backgroundColor:'white',
    padding:'20px 0px',


})
const Typography1 = styled('Typography')({
    fontFamily:'cursive'
})
const top100Films = [
    { 
      label:'Austrilia (+61)',
      value:'+61',
  
     },
    
]

export default function Block13() {

  const [query , setQuery] = useState(null);

   const handleChange = (e,value)=>{

    console.log(e.target.value);
    console.log(value);
    setQuery(value.value)
   }
  return (
    <Box1 >
      <Box sx={{ width:'80%',display:'flex'}}>
        
            <Box sx={{display:'flex', width:'35%',flexDirection:'column'}}>
                <Typography sx={{color:'black',fontWeight:'700'}}> Get link in sms to download the app </Typography>
                <Box sx={{display:'flex',margin:'10px 0px'}}>
                  <Autocomplete
                   onChange={(e,value)=>{handleChange(e,value)}}
                    disablePortal
                    
                    id="combo-box-demo"
                    options={top100Films}
                    getOptionLabel={(Option) => Option.value}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField value={query} {...params} label="" />}
                    />
                    <TextField id="filled-basic" label="Enter your mobile number" variant="filled" />
                    <Button>Get the link</Button>
                 </Box>
                 <img style={{width:'184px',height:'55px',margin:'15px 0px'}} src='https://www.vedantu.com/cdn/images/new-home-page/google-play.svg' alt=''/>
                 <Box sx={{backgroundColor:'white',width:'391px',height:'141px',borderRadius:'8px',display:'flex',justifyContent:'space-around'}}>
                        <Box sx={{}}>   
                            <Typography>Know more about our courses. Book a</Typography>
                            <Typography>free counselling session.</Typography>
                            <Button sx={{backgroundColor:'#FF693D',color:'white',margin:'25px 0px'}}>Speak to an expert</Button>
                        </Box>
                        <Box sx={{margin:'25px 0px'}}>
                            <img src='https://www.vedantu.com/cdn/images/new-home-page/newsletter-icon.svg' alt='image'/>
                        </Box>
                 </Box>
                 <Box sx={{margin:'20px 0px',display:'flex',flexDirection:'column',gap:'8px'}}>
                    <Typography sx={{fontWeight:'bold'}}>TOLL FREE: 1800-120-456-456</Typography>
                    <Typography sx={{display:'flex',alignItems:'cneter'}}><Call sx={{fontSize:'18px'}}/> 91 988-660-2456 (Mon-Sun: 9am - 11pm IST)</Typography>
                    <Typography sx={{display:'flex',alignItems:'center'}}><MailOutline sx={{fontSize:'18px'}}/> bondwithus@vedantu.com</Typography>
                 </Box>
            </Box>
           <Box sx={{display:'flex' ,width:'60%', justifyContent:'space-around'}}>
                <Box sx={{display:'flex',flexDirection:'column', gap:'15px',fontFamily:'cursive'}}>
                  <h3>Company</h3>
                  <Typography1>About us</Typography1>
                  <Typography1>Contact us</Typography1>
                  <Typography1>Vedantu Blog</Typography1>
                  <Typography1>News</Typography1>
                  <Typography1>Child safety</Typography1>
                  <Typography1>Why Vedantu</Typography1>
                  <Typography1>Our results</Typography1>
                  <Typography1>Career</Typography1>
                  <Typography1>Help india learn</Typography1>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column', gap:'15px',fontFamily:'cursive'}}>
                  <h3>Other Links</h3>
                  <Typography1>Free live classes</Typography1>
                  <Typography1>Why teach with Vedantu</Typography1>
                  <Typography1>Try WAVE</Typography1>
                  <Typography1>Try Whiteboard</Typography1>
                  <Typography1>Vedantu improvement</Typography1>
                  <Typography1>promise</Typography1>
                  <Typography1>VOLT</Typography1>
                  <Typography1>Micro courses</Typography1>
                  <Typography1>Maharastra Board</Typography1>
                  <Typography1>Benefits</Typography1>
                  <Typography1>Engineering Blog</Typography1>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column', gap:'15px',fontFamily:'cursive'}}>
                  <h3>Courses</h3>
                  <Typography1>CBSE Tuitions</Typography1>
                  <Typography1>ICSE Tuitions</Typography1>
                  <Typography1>JEE (Main & Advanced)</Typography1>
                  <Typography1>NEET for Class 11</Typography1>
                  <Typography1>NEET for Class 12</Typography1>
                  <Typography1>Eklavya JEE</Typography1>
                  <Typography1>Eklavya NEET</Typography1>
                  <Typography1>Computer Science</Typography1>
                  <Typography sx={{fontWeight:'bold'}}>Vedantu Super Kids</Typography>
                  <Typography1>English Superstar for kids</Typography1>
                  <Typography1>Spoken English</Typography1>
                  
                </Box>
                
                
           </Box>
      </Box>
      
    </Box1>
  )
}
