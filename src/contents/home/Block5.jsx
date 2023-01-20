import { EastOutlined } from '@mui/icons-material';
import { Button, styled, Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'


const Video= styled(Box)(({ theme }) => ({
   height:'auto',
   width:'auto',
   display:'flex',
   gap:'10px',
   paddingBottom:'10px'
//    position:'absolute'
    
        
    }
  ));
  const Video2= styled(Box)(({ theme }) => ({
      height:'auto',
      width:'auto',
     display:'flex',
     flexDirection:'column',
// gap:'10px'
       
           
       }
     ));
  const Box1= styled(Box)(({ theme }) => ({
    height:'200px',
    width:'200px',
    border:'1px solid gray',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'10px'
 //    position:'absolute'
     
         
     }
   ));
   const Box2= styled(Box)(({ theme }) => ({
      height:'160px',
      width:'160px',
      border:'1px solid rgba(0,0,0,0.1)',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      margin:'5px'
   //    position:'absolute'
       
           
       }
     ));
const Block5 = () => {
  return (
    <Box>
       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:'80px'}}>
       <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'40px'},fontWeight:'500',color:'black',paddingLeft:{xs:'10px',sm:'60px',md:'140px'}}}>Featured Brands</Typography>
       
       </Box>
       <Box sx={{display:{xs:'none',sm:'none',md:'flex'},flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
    <Video >
     



        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-1.png'/>
        </Box1>
        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-2.png'/>
        </Box1>
        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-3.png'/>
        </Box1>
        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-5.png'/>
        </Box1>
        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-1.png'/>
        </Box1>
        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-6.png'/>
        </Box1>
    </Video>

    <Video >
     



        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-7.png'/>
        </Box1>
        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-8.png'/>
        </Box1>
        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-9.png'/>
        </Box1>
        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-10.png'/>
        </Box1>
        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-11.png'/>
        </Box1>
        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-12.png'/>
        </Box1>
    </Video>

    <Video >
     



        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-13.png'/>
        </Box1>
        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-14.png'/>
        </Box1>
        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-15.png'/>
        </Box1>
        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-1.png'/>
        </Box1>
        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-2.png'/>
        </Box1>
        <Box1>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-3.png'/>
        </Box1>
        
    </Video>
    </Box>



    <Box sx={{display:{xs:'flex',sm:'flex',md:'none'},padding:'10px'}}>
      <Video2>
      <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-1.png'/>
        </Box2>
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-2.png'/>
        </Box2>
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-3.png'/>
        </Box2>
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-5.png'/>
        </Box2>
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-1.png'/>
        </Box2>
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-6.png'/>
        </Box2>
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-7.png'/>
        </Box2>
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-8.png'/>
        </Box2>
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-9.png'/>
        </Box2>

      </Video2>

      <Video2>
      <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-10.png'/>
        </Box2>
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-11.png'/>
        </Box2>
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-12.png'/>
        </Box2>
        
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-13.png'/>
        </Box2>
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-14.png'/>
        </Box2>
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-15.png'/>
        </Box2>
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-1.png'/>
        </Box2>
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-2.png'/>
        </Box2>
        <Box2>
              <img src='https://brator.smartdemowp.com/brator-html/assets/images/brand/brand-item-3.png'/>
        </Box2>
      </Video2>
    </Box>
     </Box>
  )
}

export default Block5


 {/* <video style={{height:'650px',width:'100%',zIndex:'-1',position:'absolute',objectFit:'cover'}}  src="https://player.vimeo.com/external/562968417.sd.mp4?s=77ce3afc9a1d0833085c362649322add86c0842d&profile_id=164&oauth2_token_id=57447761" autoPlay loop muted ></video>
      <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItem:'center',width:'100%',height:'650px',gap:'20px'}}>
      <Box sx={{height:'auto',width:{xs:'240px',sm:'300px',md:'320px'},color:'white',marginLeft:{xs:'10px',sm:'50px',md:'160px'}}}>
      <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'35px'},fontWeight:'700',color:''}}>BE SUPPORTED. BE .YOU</Typography>
      <Typography sx={{fontSize:{xs:'30px',sm:'35px',md:'15px'},fontWeight:'600',color:''}}>Free your body to free your movement.</Typography>
      <Box sx={{display:'flex',gap:'20px',fontWeight:'400',flexDirection:'column',width:'180px',paddingTop:'20px'}}>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black'}}> SHOP LEGGINS<EastOutlined /> </Button>
          <Button variant='contained' sx={{borderRadius:'0px',backgroundColor:'white',color:'black'}}>SHOP BRAS<EastOutlined /> </Button>
          
          </Box>
      </Box>
      </Box> */}