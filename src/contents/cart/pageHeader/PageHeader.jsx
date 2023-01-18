import { Box, Button, Card, Typography,useTheme } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function PageHeader() {
    const theme = useTheme();
  return (
    <Card sx={{zIndex:100,position:'fixed',background:`${theme.colors.alpha.white[100]}`,width:'100vw',height:'70px',borderRadius:'0',marginTop:'64px',display:'flex',justifyContent:'space-between',alignItems:'center',padding:{md:'0 10vw',sm:'0 8vw',xs:'0 5vw'}}}>
        <Typography sx={{display:{sm:'block',xs:'none'},fontSize:{md:'30px',sm:'25px',xs:'20px'},fontWeight:600}}>My Cart</Typography>
        <Typography sx={{display:{sm:'none',xs:'block'},fontSize:'16px',fontWeight:600}}>Ship to:</Typography>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <LocationOnIcon/>
            <Typography sx={{marginRight:{md:'15px',xs:'5px'}, fontSize:{md:'18px',xs:'14px'},fontWeight:500}}>Delhi, 110001</Typography>
            <Button sx={{"&:hover":{background:`${theme.colors.alpha.white[100]}`} ,color:`${theme.colors.alpha.black[50]}` ,borderBottom:`1px solid ${theme.colors.alpha.black[50]}`,cursor:{md:'pointer',xs:'none'}}}>Change PIN Code</Button>
        </Box>
    </Card>
  )
}
