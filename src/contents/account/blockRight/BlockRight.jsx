import { Avatar, Typography,useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/userRedux';

export default function BlockRight() {
    const theme = useTheme();
    const user = useSelector(selectUser)
  return (
    <Box sx={{minWidth:'200px',width:{md:'20%',xs:'100%'},height:{md:'300px',sm:'170px',xs:'260px'},display:'flex',flexDirection:{md:'column',sm:'row',xs:'column'},alignItems:'center',justifyContent:{md:'center',xs:'space-between'},background:`${theme.colors.alpha.white[100]}`,boxShadow:`${theme.colors.shadows.card}`,borderRadius:'5px',marginBottom:{md:'0',xs:'20px'}}}>
        <Box sx={{height:'120px',display:'flex',gap:'10px',flexDirection:'column',alignItems:'center',justifyContent:'center',marginLeft:{md:'0',xs:'20px'}}}>
            <Avatar alt={user.currentUser.data.name?user.currentUser.data.name:"TechPyro User"} src='/' sx={{width:'50px',height:'50px',fontSize:'20px', background:`${theme.colors.gradients.orange1}`}}/>
            <Typography>{user.currentUser.data.name?user.currentUser.data.name:"TechPyro User"}</Typography>
            <Typography>{user.currentUser.data.email?user.currentUser.data.email:"+91-"+user.currentUser.data.phone}</Typography>
        </Box>
        <Box sx={{display:{md:'block',xs:'none'},width:'100%',fontSize:'17px',marginTop:'10px',paddingLeft:'20px',paddingTop:'5px',fontWeight:500,height:'40px',background:`${theme.colors.alpha.black[10]}`}}>Default Address</Box>
        <Box sx={{height:'140px',padding:'10px 20px'}}>
        <Box sx={{display:{md:'none',xs:'block'},width:'100%',fontSize:'17px',marginBottom:'10px',paddingLeft:'20px',paddingTop:'5px',fontWeight:500,height:'40px',background:`${theme.colors.alpha.black[10]}`}}>Default Address</Box>
            <Typography sx={{fontSize:'15px',fontWeight:500,marginBottom:'5px'}}>Home</Typography>
            <Typography>Address: Lorem ipsum dolor sit amet.</Typography>
            <Typography>Ph: 9999999999</Typography>
        </Box>
    </Box>
  )
}
