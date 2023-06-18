import { Box, Grid, Typography,Button } from '@mui/material'
import React from 'react'


export default function Item({data}) {
  
  return (
    <Box sx={{background:'#A19FAB',display:'flex',flexDirection:'column',gap:'10px'}}>
      <Box sx={{display:'flex',alignItems:'center',gap:{xs:'20px',md:'0'},flexDirection:{xs:'column',md:'row'},margin:{xs:'0px 0px 30px',md:'0px 0px 0px'}}}>
        <Box sx={{display:'flex',width:{xs:'100vw',md:'50vw'}}}>
        <img src={data.img} style={{width:'100%',height:'100%'}} />
        </Box >
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:'40px',justifyContent:'center',width:{xs:'100vw',md:'50vw'}}}>
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
           <Typography sx={{fontSize:{xs:'30px',md:'40px'},fontWeight:{xs:'600',md:'700'},color:'#000'}}>End Of Offers</Typography>
           <Typography sx={{fontSize:{xs:'20px',md:'25px'},fontWeight:{xs:'400',md:'500'},color:'#000'}}>Festive Feels Delightful Deals</Typography>
           </Box>
          <Box sx={{display:'flex',gap:'10px'}}>
           <Button sx={{background:'#000',color:'#fff',borderRadius:'0'}}>Veg</Button>
           <Button sx={{background:'#000',color:'#fff',borderRadius:'0'}}>Non Veg</Button>
           <Button sx={{background:'#000',color:'#fff',borderRadius:'0'}}>Fast Food</Button>
          </Box>
        </Box>
      </Box>
      </Box>
  )
}
