import React from 'react'
import {
      Divider,
      List,
      ListItem,
      ListItemText,
      Box,
      Typography
    } from "@mui/material";
    import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
    import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
    import PercentIcon from '@mui/icons-material/Percent';
    import CategoryIcon from '@mui/icons-material/Category';
    import MoreIcon from '@mui/icons-material/More';
    import LanguageIcon from '@mui/icons-material/Language';
    import FilterFramesIcon from '@mui/icons-material/FilterFrames';
    import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
    import FavoriteIcon from '@mui/icons-material/Favorite';
    import PersonIcon from '@mui/icons-material/Person';
    import NotificationsIcon from '@mui/icons-material/Notifications';
    import PhoneIcon from '@mui/icons-material/Phone';
    import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function MenuSidebar() {
  return (
    <Box sx={{width:'100%',flex:'9',gap:'50px',display:'flex',flexDirection:'column'}}>
       
       <Box sx={{display:'flex',alignItems:'center',gap:'10px',justifyContent:'center',padding:'10px 0px 20px',borderBottom:'.5px solid rgba(0,0,0,0.1)'}}>
        < PercentIcon sx={{color:'#898820'}} />
        <Typography sx={{fontSize:'16px',fontWeight:'700',color:'#898820'}}>Apply Voucher for Gift Card</Typography>
        <NavigateNextIcon sx={{color:'#898820'}} />
       </Box>
       <Box sx={{padding:'0 10px 0 20px'}}>
        <Typography>Your basket looks a little empty. Why not check out some of our unbeatable deals?</Typography>
       </Box>
     </Box>
  )
}
