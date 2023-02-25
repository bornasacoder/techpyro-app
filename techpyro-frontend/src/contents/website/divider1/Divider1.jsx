import { Box, Button, Card , Typography, useTheme} from '@mui/material'
import React from 'react'
import { East } from '@mui/icons-material';
import { styled } from '@mui/styles';

const Container = styled(Card)(({theme}) => ({
    width:' 95%',
    height: '100px',
    position: 'relative',
    margin: '20px 0 20px 2.5%',
    [theme.breakpoints.down('md')]:{
        height:'80px',
    },
    [theme.breakpoints.down('sm')]:{
        height:'70px',
    },
}))
    

const ContainerInner = styled(Box)(({theme})=>({
    width:'100%',
    height:'100%',
    display:'flex',
    justifyContent:"space-between",
    alignItems:'center',
    position:'absolute',
    left: 0,
    right: 0,
    top:0,
    padding:'0 26px',
    [theme.breakpoints.down('sm')]:{
        padding:'0 20px'
    },

}))


export default function Divider1() {
    const theme = useTheme();

  return (
    <Container>
        <img style={{width:'100%', height:'100%'}} src={'/images/dividerPic.jpg'} alt="card"/> 
        <ContainerInner >
            <Typography sx={{textAlign:'center', fontSize:{md:'25px',sm:'20px',xs:'18px'}, fontWeight: 900, color:`${theme.colors.alpha.black[50]}` }}>TechPyro Trending</Typography>
            <Button endIcon={<East/>} sx={{ fontSize:{sm:'18px',}, fontWeight: 400,color:`${theme.colors.alpha.white[100]}`, background:`${theme.colors.gradients.orange1}`}}>View All</Button>
        </ContainerInner>   
    </Container>
  )
}
