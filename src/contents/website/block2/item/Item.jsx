import React from 'react'
import { styled } from '@mui/styles'
import {Box, Card } from '@mui/material';

const SliderContainer = styled("div")({
    width:"85%",
    // height:"auto",
})
const ImageContainer = styled(Card)(({ theme }) => ({
    width:'37vw',
    height:'350px',
    display:"flex",
    // alignItems:"center",
    justifyContent:'center',
    flexDirection:"column",
    margin:"10px 10px",
    "@media (max-width: 1200px)": {
        width:"36vw",
        height:"300px",
    },
    [theme.breakpoints.down('md')]: {
        width:"60vw",
        height:"300px",
    },
    "@media (max-width: 800px)": {
        width:"60vw",
        height:"280px",
    },
    [theme.breakpoints.down('sm')]: {
        width:"70vw",
        height:"200px",
    },

}));
const Image = styled("img")(({ theme }) => ({
   
    width:"100%",
    height:"80%",
    objectFit:"cover",
    [theme.breakpoints.down('md')]: {
        width:"100%",
        height:"75%",
    },
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        height:"70%",
    },
    // [theme.breakpoints.down('xs')]: {
    //     width:"70px",
    //     height:"75px",
    // },
}));
const Head = styled("h3")({
    fontSize: "16px",
    fontWeight:"500",
    // textAlign:"center",
    marginBottom:"5px",
    "@media (max-width: 980px)": {
       fontSize: "14px",
       },
    "@media (max-width: 600px)": {
       fontSize: "13px",
       },
})
const Para = styled("p")({
    fontSize:"14px",
    fontWeight:"600",
    "@media (max-width: 600px)": {
        fontSize: "10px",
        },
    "@media (max-width: 980px)": {
        fontSize: "13px",
        },
})

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
    <SliderContainer>
        <ImageContainer sx={{borderRadius:'8px'}}>
            <Image src={posterLinks.image} />
            <Box sx={{width:'100%',height:{md:'20%',sm:'25%',xs:'30%'},display:'flex', justifyContent:'space-between', alignItems:'center',padding:{md:'0 25px',sm:'0 25px',xs:'0 15px'}}}>
                <Box>
                    <Head>{posterLinks.category.type}</Head>
                    <Para>Rs {posterLinks.price.mrp}/-</Para>
                </Box>
                <Buttons1 href={posterLinks.url} target="_blank"  variant="outlined" >
                    Live Preview
                </Buttons1>
            </Box>
        </ImageContainer>
    </SliderContainer>
  )
}
