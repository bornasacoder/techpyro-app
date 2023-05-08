import * as React from 'react';
import {Card, CardMedia, Typography, Box,useTheme,styled} from '@mui/material';

export default function Block2() {
    const theme = useTheme();
    const CardBox = styled(Box)(({theme})=>({
    background:'#FFFFFF',
    display:'flex',
    gap:'100px',
    fontFamily:' "Fakt Pro" "Helvetica Neue" Arial sans-serif',
    flexDirection:'row',
    padding:'100px',
    [theme.breakpoints.down('lg')]: {
     
    },
    [theme.breakpoints.down('md')]: {
     flexDirection:'column',
     flexDirection:'column-reverse',
     padding:'100px 20px',
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
  
          <Box sx={{ display:'flex',flex:'1',flexDirection:'column',gap:'20px',justifyContent:'center',alignItems:{xs:'flex-start',sm:'center',md:'flex-end'}}}>
             <Box sx={{display:'flex',flexDirection:'column',alignItems:{xs:'flex-start',sm:'center',md:'flex-end'}}}>
            <Typography sx={{color:'#3DCAD4',fontSize:'42px',fontWeight:'600'}}>150,000,000+</Typography>
            <Typography sx={{color:'#3DCAD4',fontSize:'20px',fontWeight:'600'}}>deliveries power</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:{xs:'flex-start',sm:'center',md:'flex-end'}}}>
            <Typography sx={{color:'#3DCAD4',fontSize:'42px',fontWeight:'600'}}>50,000,00+</Typography>
            <Typography sx={{color:'#3DCAD4',fontSize:'20px',fontWeight:'600'}}>deliveries power</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:{xs:'flex-start',sm:'center',md:'flex-end'}}}>
            <Typography sx={{color:'#3DCAD4',fontSize:'42px',fontWeight:'600'}}>150,000,+</Typography>
            <Typography sx={{color:'#3DCAD4',fontSize:'20px',fontWeight:'600'}}>deliveries power</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:{xs:'flex-start',sm:'center',md:'flex-end'}}}>
            <Typography sx={{color:'#3DCAD4',fontSize:'42px',fontWeight:'600'}}>150,0+</Typography>
            <Typography sx={{color:'#3DCAD4',fontSize:'20px',fontWeight:'600'}}>deliveries power</Typography>
            </Box>
         
         </Box>
     
         <Box sx={{height:'100%',display:'flex',flex:'3',gap:'30px',flexDirection:'column',alignItems:{xs:'flex-start',sm:'flex-start',md:'center'}}}>
          <Typography sx={{color:'rgba(0,0,0,0.7)',fontSize:{xs:'22px',md:'42px'},fontWeight:'600'}}>our moments, our expertise</Typography>
          <Typography sx={{fontSize:{sm:'16px',md:'22px'},opacity:'0.8'}}>Whether you need family portraits, professional headshots, or wedding photos, our team is here to help. We use state-of-the-art equipment and the latest techniques to ensure that your photographs are of the highest quality. We take the time to get to know you and your needs, and we work closely with you throughout the entire process to ensure that you are completely satisfied with the end result.</Typography>
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px',flexWrap:'wrap'}}>
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-vector/spotlights-realistic-composition-with-cyclorama-studio-spot-lights-hanging-reel-mounted-stands_1284-31591.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais" />
          <img style={{height:'50px',width:'50px'}} src="https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <img style={{height:'50px',width:'50px'}} src="https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <img style={{height:'50px',width:'50px'}} src="https://images.pexels.com/photos/106011/pexels-photo-106011.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-photo/side-view-woman-holding-camera_23-2149893853.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.1.833918949.1682592323&semt=sph" />
          <img style={{height:'50px',width:'50px'}} src="https://img.freepik.com/free-vector/spotlights-realistic-composition-with-cyclorama-studio-spot-lights-hanging-reel-mounted-stands_1284-31591.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais" />
          <img style={{height:'50px',width:'50px'}} src="https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <img style={{height:'50px',width:'50px'}} src="https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg?auto=compress&cs=tinysrgb&w=600" />
          
          </Box>
          <Typography sx={{fontSize:{sm:'18px',md:'22px'},color:'#3DCAD4',fontWeight:'500',}}>Discover to build our buisness on techpyro</Typography>
         </Box>
  
        </CardBox>
     
    );
}
