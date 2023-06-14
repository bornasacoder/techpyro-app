import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled,Button} from '@mui/material';

export default function Footer() {
    const theme = useTheme();
    const CardBox = styled(Box)(({theme})=>({
    background:'#5C6D82',
    display:'flex',
    gap:'40px',
    width:'70vw',
    fontFamily:' "Fakt Pro" "Helvetica Neue" Arial sans-serif',
    flexDirection:'row',
   padding:'100px 100px',
    
    [theme.breakpoints.down('lg')]: {
        
    },
    [theme.breakpoints.down('md')]: {
     flexDirection:'column',
     width:'100vw',
     padding:'50px 20px',
     gap:'50px'
    },
    [theme.breakpoints.down('sm')]: {
       
    }
  }));

  const Image = styled(Card)(({img})=>({
      height:'50px',
      width:'50px',
      objectFit:'cover'
  }));

    return (
     
        <CardBox >
  
          <Box sx={{ display:'flex',flex:'1',flexDirection:'column',gap:'30px',justifyContent:'center',alignItems:{xs:'flex-start'}}}>
             <Typography  sx={{color:'#fff',fontSize:{xs:'25px'},fontWeight:{xs:'600'}}}>Bakery</Typography>
             <Typography sx={{color:'#fff',fontSize:{xs:'15px',opacity:'0.6'},fontWeight:{xs:'600'}}}>Built with ♥ in San Francisco and around the world.Onfleet, Inc. © 2023</Typography>
             <Typography  sx={{color:'#fff',fontSize:{xs:'15px'},fontWeight:{xs:'600'}}}>Sign up to receive news and announcements</Typography>
             <Box>
                <input type='email' style={{height:'36px'}} />
                <Button varient='outlined' sx={{color:'#fff',padding:'4px 25px',border:'1px solid #fff',borderRadius:'0'}}>Submit</Button>
             </Box>
         </Box>
     
         <Box sx={{height:'100%',display:'flex',flex:'3',gap:'30px',alignItems:{xs:'flex-start'},flexDirection:{xs:'column',lg:'row'}}}>
           
           <Box sx={{width:{xs:'100%'},display:'flex',flex:'1',gap:'30px',justifyContent:'space-between',flexDirection:{xs:'row'}}}>
           <Box sx={{display:'flex',flexDirection:'column',gap:'5px',flex:'1',color:'#fff'}}>
             <Typography sx={{fontSize:{xs:'18px'},fontWeight:'600',marginBottom:'7px'}}>Products</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Products</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Featuress</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Parteners</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Solutions</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Api</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Pricing</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Sign up</Typography>
           </Box>
           <Box sx={{display:'flex',flexDirection:'column',gap:'5px',flex:'1',color:'#fff'}}>
             <Typography sx={{fontSize:{xs:'18px'},fontWeight:'600',marginBottom:'7px'}}>Products</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Products</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Featuress</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Parteners</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Solutions</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Api</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Pricing</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Sign up</Typography>
           </Box>
           </Box>
           <Box sx={{height:'100%',width:{xs:'100%'},display:'flex',flex:'1',gap:'30px',justifyContent:'space-between',flexDirection:{xs:'row'}}}>
           <Box sx={{display:'flex',flexDirection:'column',gap:'5px',flex:'1',color:'#fff'}}>
             <Typography sx={{fontSize:{xs:'18px'},fontWeight:'600',marginBottom:'7px'}}>Products</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Products</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Featuress</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Parteners</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Solutions</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Api</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Pricing</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Sign up</Typography>
           </Box>
           <Box sx={{display:'flex',flexDirection:'column',gap:'5px',flex:'1',color:'#fff'}}>
             <Typography sx={{fontSize:{xs:'18px'},fontWeight:'600',marginBottom:'7px'}}>Products</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Products</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Featuress</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Parteners</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Solutions</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Api</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Pricing</Typography>
             <Typography sx={{fontSize:{xs:'16px'},fontWeight:'400',opacity:'0.7'}}>Sign up</Typography>
           </Box>
           </Box>
          
         </Box>
  
        </CardBox>
     
    );
}
