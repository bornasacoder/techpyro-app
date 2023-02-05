import { Button, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useTheme } from 'styled-components';

const Box1 = styled(Box)((({theme}) =>({
 
//    backgroundColor:'black',
   height:'auto',
   width:'500px',
   display:'flex',
   flexDirection:'column',
   gap:'10px',
   margin:'0px 0px 120px 200px',
   [theme.breakpoints.down('md')]: {
   margin:'20px',
  },
  [theme.breakpoints.down('sm')]: {
    margin:'20px',
    width:'300px'
  },
})));

const Block10 = () => {
  const theme = useTheme();
  return (
    <>
      <Box1>
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'600',color:'red'}}>Fee Management</Typography>
      <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'30px'},fontWeight:'600',color:'black'}}>Keep track, reduce costs and
eliminate administrative hassle</Typography>
<Box sx={{padding:'30px 0px 30px 0px',borderBottom:'1px solid rgba(0,0,0,0.3)'}}>
<Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'600',color:'rgba(0,0,0,0.3)'}}>Simplified Fee Mnagement</Typography>
</Box>
<Box sx={{padding:'30px 0px 30px 0px',borderBottom:'1px solid rgba(0,0,0,0.3)'}}>
<Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'600',color:'rgba(0,0,0,0.3)'}}>Enable Dynamic Fee Structure</Typography>
</Box>
<Box sx={{padding:'30px 0px 30px 0px',borderBottom:'1px solid rgba(0,0,0,0.3)'}}>
<Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'20px'},fontWeight:'600',color:'rgba(0,0,0,0.3)'}}>Access Intelligent Report</Typography>
</Box>

<Button variant='contained' sx={{width:'180px',marginTop:'10px',backgroundColor:'#1DA1F2',fontSize:'20px'}}>Learn More</Button>
      </Box1>
    </>
  )
}

export default Block10
