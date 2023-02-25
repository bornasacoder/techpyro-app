import React from 'react'
import { styled } from '@mui/styles'
import { Box, Card, Typography } from '@mui/material';
import { CurrencyRupee, Star } from '@mui/icons-material';

const SliderContainer = styled("div")({
    width:"85%",
    // height:"auto",
})
const ImageContainer = styled(Card)(({ theme }) => ({
    width:'19vw',
    height:'300px',
    display:"flex",
    // alignItems:"center",
    justifyContent:'center',
    flexDirection:"column",
    margin:"10px 10px",
    "@media (max-width: 1200px)": {
        width:"20vw",
        height:"330px",
    },
    [theme.breakpoints.down('md')]: {
        width:"25vw",
        height:"310px",
    },
    "@media (max-width: 780px)": {
        width:"26vw",
        height:"250px",
    },
    [theme.breakpoints.down('sm')]: {
        width:"40vw",
        height:"220px",
    },

}));
const Image = styled("img")(({ theme }) => ({
   
    width:"100%",
   height:"60%",
    objectFit:"cover",
    [theme.breakpoints.down('md')]: {
        width:"100%",
        height:"90%",
    },
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        height:"120px",
    },
    // [theme.breakpoints.down('xs')]: {
    //     width:"70px",
    //     height:"75px",
    // },
}));
const Head = styled("h3")({
    fontSize: "16px",
    fontWeight:"500",
    paddingLeft:'15px',
    paddingTop:'10px',
    // textAlign:"center",
    marginBottom:"5px",
    "@media (max-width: 600px)": {
       fontSize: "10px",
       },
    "@media (max-width: 980px)": {
       fontSize: "13px",
       },
})
const Para = styled("p")({
    fontSize:"14px",
    fontWeight:"600",
    display:"flex",
    alignItems:"center",

    paddingLeft:'15px',
    paddingBottom:'10px',
    "@media (max-width: 600px)": {
        fontSize: "16px",
        },
    "@media (max-width: 980px)": {
        fontSize: "16px",
        },
})

export default function Item({posterLinks}) {
  return (
    <SliderContainer>
        <ImageContainer sx={{borderRadius:'8px'}}>
            <Image src={posterLinks.url} />
            <Head>{posterLinks.name}</Head>
            <Box sx={{display:"flex", alignItems:"center", gap:"5px", marginBottom:"5px", paddingLeft:"15px"}} >
                <Typography sx={{ display: "flex", justifyContent: 'center', alignItems: "center", background: "green", color: "white", width: { lg: "40px", xs: "45px" }, height: "25px", borderRadius: "5px", fontSize: { md: "14px", sm: "12px" } }} >4.2 <Star sx={{ fontSize: { md: "13px", xs: "1rem" }, color: "white", paddingLeft: "3px" }} /> </Typography>
                <Typography>(15)</Typography>
                </Box>
            <Para> <CurrencyRupee sx={{fontSize:"16px", }} /> {posterLinks.Price}/-</Para>
        </ImageContainer>
    </SliderContainer>
  )
}