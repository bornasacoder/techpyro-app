import { Button, Stack ,styled, Typography, useTheme} from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/userRedux";

const Img = styled("img")(({ theme }) => ({
    width:'40px',
    clipPath: "circle(39%)"
}));

export default function Header() {
    const theme = useTheme();
    const user = useSelector(selectUser);
  return (
    
    <Stack color="primary" sx={{flex:'1',width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}} >
        <PersonIcon/>
       {user.currentUser === null ? <Link to={'/login'} style={{textDecoration:'none'}}>
        <Button sx={{cursor:'none', color:`${theme.sidebar.textColor}`}}>
            Login & Signup
        </Button>
        </Link> : 
        <Typography>{user.currentUser.data.name
          ? user.currentUser.data.name
          : "TechPyro User"}</Typography>}
        <Img src="/images/mainLogo/logo.png" alt="logo"/>
    </Stack>
  )
}
