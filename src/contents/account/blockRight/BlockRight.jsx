import { Avatar, Card, Typography,useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function BlockRight() {
    const theme = useTheme();
  return (
    <Card sx={{width:'20%',height:'300px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Box sx={{height:'120px',display:'flex',gap:'10px',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <Avatar>N</Avatar>
            <Typography>Nitish Kumar</Typography>
            <Typography>nitidjbwjbjbcnb@gmail.com</Typography>
        </Box>
        <Box sx={{width:'100%',fontSize:'17px',marginTop:'10px',paddingLeft:'20px',paddingTop:'5px',fontWeight:500,height:'40px',background:`${theme.colors.alpha.black[10]}`}}>Default Address</Box>
        <Box sx={{height:'140px',padding:'10px 20px'}}>
            <Typography sx={{fontSize:'15px',fontWeight:500,marginBottom:'5px'}}>Home</Typography>
            <Typography>Address: Lorem ipsum dolor sit amet.</Typography>
            <Typography>Ph: 9999999999</Typography>
        </Box>
    </Card>
  )
}
