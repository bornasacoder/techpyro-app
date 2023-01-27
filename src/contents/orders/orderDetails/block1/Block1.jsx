import { Box, Button, styled, Typography,useTheme } from '@mui/material'
import React from 'react'
import {TbFileInvoice} from 'react-icons/tb'

const Container = styled(Box)(({ theme }) => ({
    margin:'20px 100px',
    "@media (max-width: 960px)": {
        margin:'20px 70px'
    },
    "@media (max-width: 800px)": {
        margin:'20px 20px'
    },
  }));

export default function Block1() {
    const theme = useTheme();
  return (
    <Container sx={{padding:'20px 30px',background:`${theme.colors.alpha.white[100]}`,boxShadow:`${theme.colors.shadows.card}`}}>
        <Typography sx={{paddingBottom:'20px',fontSize:'20px',fontWeight:400}}>Order ID : OD154614</Typography>
        <Box sx={{display:'flex',}}>
            <Box sx={{display:'flex',flexDirection:'column',gap:'10px',width:'50%',borderRight:'1px solid black'}}>
                <Typography sx={{fontSize:'18px',fontWeight:400}}>Delivery Address</Typography>
                <Typography>Name: Lorem, ipsum.</Typography>
                <Typography>Address: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, dignissimos.</Typography>
                <Typography>Phone Number: 9999999999</Typography>
            </Box>
            
            <Box sx={{display:{sm:'flex',xs:'block'},padding:{md:'0 30px',xs:'0 20px'},justifyContent:'space-between',gap:'10px',width:'50%'}}>
                <Box sx={{display:'flex',gap:'20px',alignItems:'cemnter'}}>
                    <TbFileInvoice style={{fontSize:'30px',fontWeight:'lighter',}}/>
                    <Typography>Download Invoice</Typography>
                </Box>
                <Button variant='outlined' sx={{width:'100px',height:'40px',marginTop:{sm:'0',xs:'15px'},marginLeft:{sm:'0',xs:'50px'}}}>Download</Button>
            </Box>
        </Box>
    </Container>
  )
}
