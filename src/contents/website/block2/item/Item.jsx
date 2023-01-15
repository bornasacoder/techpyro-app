import React from 'react'
import { styled } from '@mui/styles'
import { Card } from '@mui/material';

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
    height:"85%",
    objectFit:"cover",
    [theme.breakpoints.down('md')]: {
        width:"100%",
        height:"85%",
    },
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        height:"80%",
    },
    // [theme.breakpoints.down('xs')]: {
    //     width:"70px",
    //     height:"75px",
    // },
}));
const Head = styled("h3")({
    fontSize: "16px",
    fontWeight:"500",
    paddingLeft:'20px',
    paddingTop:'5px',
    // textAlign:"center",
    marginBottom:"5px",
    "@media (max-width: 980px)": {
       fontSize: "14px",
       paddingTop:'2px',
       },
    "@media (max-width: 600px)": {
       fontSize: "13px",
       paddingTop:'2px',
       },
})
const Para = styled("p")({
    fontSize:"14px",
    fontWeight:"600",
    paddingLeft:'20px',
    paddingBottom:'10px',
    "@media (max-width: 600px)": {
        fontSize: "10px",
        },
    "@media (max-width: 980px)": {
        fontSize: "13px",
        },
})

export default function Item({posterLinks}) {
  return (
    <SliderContainer>
        <ImageContainer sx={{borderRadius:'8px'}}>
            <Image src={posterLinks.image} />
            <Head>{posterLinks.category.type}</Head>
            <Para>Rs {posterLinks.price.mrp}/-</Para>
        </ImageContainer>
    </SliderContainer>
  )
}
