import React from 'react'
import { styled } from '@mui/styles'
import { Box, Card, Typography } from '@mui/material';

const ImageContainer = styled(Card)(({ theme }) => ({
    width:'37vw',
    height:'330px',

    "@media (max-width: 1200px)": {
        width:"36vw",
        height:"300px",
    },
    [theme.breakpoints.down('md')]: {
        width:"25vw",
        height:"270px",
    },
    "@media (max-width: 800px)": {
        width:"26vw",
        height:"250px",
    },
    [theme.breakpoints.down('sm')]: {
        width:"40vw",
        height:"220px",
    },

}));

const Buttons1 = styled("a")(({theme})=>({
    // marginTop:"20px",
    width: "170px",
    height:"40px",
    color:"teal",
    fontSize:"15px",
    border:"1px solid #087096",
    background:"white",
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
      width:"150px",
      height:"40px",
      fontSize:"14px"
    },
    [theme.breakpoints.down('md')]: {
      width:"100px",
      height:"35px",
      fontSize:"13px"
    },
    [theme.breakpoints.down('sm')]: {
      width:"120px",
      height:"35px",
      fontSize:"14px"
    },
  }))

export default function Item({posterLinks}) {
  return (
    <ImageContainer sx={{position:'relative', margin:'5px 10px', borderRadius:'5px'}}>
        <img style={{width:'100%', height:'100%', objectFit:'cover'}} src={posterLinks.image} alt="card"/>
        <Box sx={{position:'absolute', top:{md:'83%',sm:'76%',xs:'73%'} , paddingLeft:'26px',background:'#fff',opacity:'0.7', left: 0,right:0 ,width:'100%',height:{md:'17%',sm:'24%',xs:'27%'}}}>
        </Box>   
        <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column'},justifyContent:'space-between',alignItems:'center',position:'absolute', top:{md:'83%',sm:'76%',xs:'73%'} , padding:{md:'0 26px',xs:'0 5px'}, left: 0,right:0 ,width:'100%',height:{md:'17%'}}}>
            {/* <Typography sx={{fontSize:{md:'16px',sm:'14px',xs:'13px'}, fontWeight: 500, }}>{posterLinks.category.type}</Typography> */}
            <Typography sx={{fontSize:{md:'16px',sm:'14px',xs:'13px'}, fontWeight: 500,}}>Rs {posterLinks.price.mrp}/-</Typography>
            <Buttons1 href={posterLinks.url} target="_blank"  variant="outlined" >
                    Live Preview
            </Buttons1>
        </Box>   
    </ImageContainer>
  )
}
