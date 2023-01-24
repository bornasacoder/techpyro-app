import { Box, Button, Typography,useTheme } from '@mui/material'
import React from 'react'
import {TbFileInvoice} from 'react-icons/tb'

export default function Block1() {
    const theme = useTheme();
  return (
    <Box sx={{margin:'20px 100px',padding:'20px 30px',background:`${theme.colors.alpha.white[100]}`,boxShadow:`${theme.colors.shadows.card}`}}>
        <Typography sx={{paddingBottom:'20px',fontSize:'20px',fontWeight:400}}>Order ID : OD154614</Typography>
        <Box sx={{display:'flex',}}>
            <Box sx={{display:'flex',flexDirection:'column',gap:'10px',width:'50%',borderRight:'1px solid black'}}>
                <Typography sx={{fontSize:'18px',fontWeight:400}}>Delivery Address</Typography>
                <Typography>Name: Lorem, ipsum.</Typography>
                <Typography>Address: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, dignissimos.</Typography>
                <Typography>Phone Number: 9999999999</Typography>
            </Box>
            
            <Box sx={{display:'flex',padding:'0 30px',justifyContent:'space-between',gap:'10px',width:'50%'}}>
                <Box sx={{display:'flex',gap:'20px'}}>
                    <TbFileInvoice style={{fontSize:'30px',fontWeight:'lighter'}}/>
                    <Typography>Download Invoice</Typography>
                </Box>
                <Button variant='outlined' sx={{width:'100px',height:'40px'}}>Download</Button>
            </Box>
        </Box>
    </Box>
  )
}
