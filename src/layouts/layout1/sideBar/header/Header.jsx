import { Button, Stack ,styled, Typography, useTheme} from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

const Img = styled("img")(({ theme }) => ({
    width:'40px',
    clipPath: "circle(39%)"
}));

export default function Header() {
    const theme = useTheme();

  return (
    
    <Stack color="primary" sx={{flex:'1',width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}} >
       
        <Typography sx={{color:'black',padding:'40px 0 20px', fontSize:'25px',fontWeight:'700'}}>
           Your Basket
        </Typography>
       
    </Stack>
  )
}
