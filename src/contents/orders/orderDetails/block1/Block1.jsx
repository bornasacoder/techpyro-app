import { Box, Button, styled, Typography,useTheme } from '@mui/material'
import React from 'react'
import {TbFileInvoice} from 'react-icons/tb'

const Container = styled(Box)(({ theme }) => ({
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    margin:'20px 100px',
    "@media (max-width: 960px)": {
        margin:'20px 70px'
    },
    "@media (max-width: 800px)": {
        margin:'20px 20px'
    },
    "@media (max-width: 600px)": {
        flexDirection:'column',
    },
  }));

export default function Block1() {
    const theme = useTheme();
  return (
    <Container sx={{padding:{sm:'20px 30px',xs:'20px'},background:`${theme.colors.alpha.white[100]}`,boxShadow:`${theme.colors.shadows.card}`}}>
            <Box sx={{paddingBottom:'20px',display:'flex',flexDirection:'column',gap:'10px',width:{sm:'50%',xs:'100%'},borderRight:{sm:'1px solid black',xs:'none'},borderBottom:{sm:'none',xs:'1px solid black'}}}>
                <Typography sx={{fontSize:'20px',fontWeight:400}}>Order ID : OD154614</Typography>
                <Typography sx={{fontSize:'18px',fontWeight:400}}>Delivery Address</Typography>
                <Typography>Name: Lorem, ipsum.</Typography>
                <Typography>Address: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, dignissimos.</Typography>
                <Typography>Phone Number: 9999999999</Typography>
            </Box>
            
            <Box sx={{display:'flex',alignItems:'center',padding:{md:'0 30px',sm:'0 20px',xs:'20px 0 0 0'},justifyContent:'space-between',gap:{sm:'10px',xs:'0'},width:{sm:'50%',xs:'100%'}}}>
                <Box sx={{display:'flex',gap:'20px',alignItems:'center'}}>
                    <TbFileInvoice style={{fontSize:'30px',fontWeight:'lighter',}}/>
                    <Typography>Download Invoice</Typography>
                </Box>
                <Button variant='outlined' sx={{width:'100px',height:'40px'}}>Download</Button>
            </Box>
    </Container>
  )
}
