import { Button, Stack ,styled, useTheme} from '@mui/material'
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
        <PersonIcon/>
        <Button sx={{cursor:'none', color:`${theme.sidebar.textColor}`}}>
            Login & Signup
        </Button>
        <Img src="/images/mainLogo/logo.png" alt="logo"/>
    </Stack>
  )
}
