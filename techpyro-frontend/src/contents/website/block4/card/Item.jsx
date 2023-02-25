import { Box, Card, styled, Typography,useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Buttons1 = styled(Link)(({theme})=>({
  marginTop:"10px",
  width: "120px",
  height:"40px",
  color:"white",
  fontSize:"15px",
  border:"1px solid #087096",
  background:'#181717',
  borderRadius:"2px",
  textDecoration:"none",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",

  "&:hover":{
    transition:"all 0.2s linear",
    color:"white",
    background:"#087096"
  },
  [theme.breakpoints.down('lg')]: {
    width:"100px",
    height:"40px",
    fontSize:"14px"
  },
  [theme.breakpoints.down('md')]: {
    width:"80px",
    height:"35px",
    fontSize:"13px"
  },
  [theme.breakpoints.down('sm')]: {
    width:"80px",
    height:"35px",
    fontSize:"14px",
    marginTop:'5px',
  },
})) 

export default function Item({CardLinks}) {
  const theme = useTheme();

  return (
    <Card sx={{height:{sm:'400px',xs:'200px',boxShadow:'none',position:'relative'}}}>
      <Box sx={{height:'100%'}}>
        <img style={{height:'100%',width:'100%',objectFit:'cover'}} src={CardLinks.image} alt="card"/>
      </Box>
      <Box sx={{position:'absolute' ,left:'7%',right:0,top:'35%',color:`${theme.colors.alpha.white[100]}`}}>
          <Typography sx={{fontSize:{md:'40px',sm:'35px',xs:'23px'}, fontWeight: 500,fontFamily:'cursive'}}>{CardLinks.title}</Typography>
          <Typography sx={{fontSize:{md:'30px',sm:'25px',xs:'18px'}, fontWeight: 400,}}>{CardLinks.offer}</Typography>
          <Buttons1 to={`/${CardLinks.url}`} variant="outlined" >
                    Shop Now
          </Buttons1>
      </Box>
    </Card>
  )
}
