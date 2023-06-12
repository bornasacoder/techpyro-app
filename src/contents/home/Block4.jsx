import { Button, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react'


const Box2 = styled(Box)(({ theme }) => ({
    width:'100%',
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
    gap:'10px',
    background:'#fff',
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      flexDirection:'column',
      justifyContent:'center',
      gap:'30px',
      padding:'0px',
    },
    
    }));

const Block4 = () => {
    
  return (
    <Box sx={{background:'#fff',marginTop:{xs:'-70px',sm:'-60px',md:''}}}>  
         <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',background:'#fff',padding:{xs:'90px 15px',sm:'100px 40px',md:'100px'}}}>
            <Typography sx={{fontSize:{md:'45px',sm:'35px',xs:'25px'},fontWeight:'500',}}>Find Travel Perfection, with the Wisdom of Experts</Typography>
            <Typography sx={{marginTop:'10px',fontSize:{md:'20px',xs:'16px'}}}>
              Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl</Typography>
            <Typography sx={{fontSize:{md:'20px',xs:'16px'}}}>Nulleget urna mattis consectetur purus sit amet fermentum</Typography>
         </Box>

        <Box2>
           <Box sx={{display:'flex', flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}>
              <img style={{height:'250px',width:'250px',margin:'20px 0px'}}src="https://makejourneys.com/assets/images/web-image3.jpg" alt="" />
              <Typography sx={{fontSize:{md:'20px',xs:'16px'}}}>We will give you a recommadations</Typography>
              <Typography sx={{opacity:'0.5',fontSize:{md:'20px',xs:'16px'}}}>Once your are happy with our final plan</Typography>
              <Typography sx={{opacity:'0.5',fontSize:{md:'20px',xs:'16px'}}}>We handle everything for you</Typography>
            </Box>

            <Box sx={{display:'flex', flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}>
              <img style={{height:'250px',width:'250px',margin:'20px 0px'}}src="https://makejourneys.com/assets/images/web-image3.jpg" alt="" />
              <Typography sx={{fontSize:{md:'20px',xs:'16px'}}}>We will give you a recommadations</Typography>
              <Typography sx={{opacity:'0.5',fontSize:{md:'20px',xs:'16px'}}}>Once your are happy with our final plan</Typography>
              <Typography sx={{opacity:'0.5',fontSize:{md:'20px',xs:'16px'}}}>We handle everything for you</Typography>
            </Box>

            <Box sx={{display:'flex', flexDirection:'column' ,justifyContent:'center',alignItems:'center'}}>
              <img style={{height:'250px',width:'250px',margin:'20px 0px'}}src="https://makejourneys.com/assets/images/web-image3.jpg" alt="" />
              <Typography sx={{fontSize:{md:'20px',xs:'16px'}}}>We will give you a recommadations</Typography>
              <Typography sx={{opacity:'0.5',fontSize:{md:'20px',xs:'16px'}}}>Once your are happy with our final plan</Typography>
              <Typography sx={{opacity:'0.5',fontSize:{md:'20px',xs:'16px'}}}>We handle everything for you</Typography>
            </Box>
       </Box2 > 
            <Box sx={{display:'flex',justifyContent:'center',marginTop:{md:'50px',sm:'30px',xs:'20px'}}}>
              <Button sx={{color:'#fff',backgroundColor:'#FC5B62'}} variant="contained">Let's plan your trip</Button>
            </Box>
              <Box sx={{display:'flex',justifyContent:'center',margin:'50px 0px'}}>
                <Typography sx={{fontSize:{md:'55px',sm:'30px',xs:'26px'},color:'#000000',fontFamily: 'Dancing Script',padding:{xs:' 0px 10px',sm:' 0px 10px'} }}>Book and Travel with Confidence</Typography>
              </Box> 
              <Box sx={{display:'flex', flexDirection:'column' ,justifyContent:'center',alignItems:'center',padding:{xs:'10px',sm:'10px'},marginTop:{xs:'-40px',sm:'20px',md:'5px'}}}>
                  <Typography sx={{fontSize:{md:'20px',xs:'16px'}}}>We’re a travel operator in the industry, meanwhile, we are independent travelers like you too. We deeply know and care about your concerns regarding travel</Typography>
                  <Typography sx={{fontSize:{md:'20px',xs:'16px'}}}>l abroad as there still some uncertainty outside the world. To provide you with updated news and professional advice, our travel specialists monitor and collect first-</Typography>
                  <Typography sx={{fontSize:{md:'20px',xs:'16px'}}}>hand information about all of our destinations every day. And, we are now releasing our Book with Confidence and Travel with Confidence programs that we</Typography>
                  <Typography sx={{fontSize:{md:'20px',xs:'16px'}}}>promise your trip will be in safe hands.</Typography>
              </Box>
      </Box>
  )
}

export default Block4
