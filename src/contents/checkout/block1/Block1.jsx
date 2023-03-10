import { Button, Typography,useTheme ,Box} from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/userRedux';

export default function Block1() {
    const theme = useTheme();
    const user = useSelector(selectUser);
  return (
    <Box sx={{height:'80px',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 20px',
        background:`${theme.colors.alpha.white[100]}`,border:`1px solid ${theme.colors.alpha.black[10]}`,
        boxShadow:`${theme.colors.shadows.cardSm}`}}>
        <Box>
            <Box sx={{display:'flex',gap:'20px',marginBottom:'10px',alignItems:'center'}}>
                <Box sx={{width:'20px',height:'20px', textAlign:'center',background:`${theme.colors.alpha.black[10]}`}}>1</Box>
                <Typography sx={{fontSize:'20px',fontWeight:500}}>Login</Typography>
                <DoneIcon sx={{color:`${theme.colors.success.dark}`}} fontSize='small'/>

            </Box>
            <Box sx={{display:'flex',gap:'10px',alignItems:'center'}}>
                <Typography variant='span' sx={{fontSize:'15px',fontWeight:500}}>{user.currentUser.data.name?user.currentUser.data.name:"TechPyro User"}</Typography>
                <Typography variant='span'>{user.currentUser.data.phone?"+91-"+user.currentUser.data.phone:user.currentUser.data.email}</Typography>
            </Box>
        </Box>
        <Box sx={{margin:'5px 0'}}>
            <Button variant='outlined' sx={{width:{sm:'100px',xs:'80px'},height:'35px',borderRadius:{sm:'18px',xs:'16px'}}}>Change</Button>
        </Box>
    </Box>
  )
}
