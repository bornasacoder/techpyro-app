import React from 'react'
import { styled } from '@mui/styles'
import { Card } from '@mui/material';

const SliderContainer = styled("div")({
    width:"85%",
    // height:"auto",
})
const ImageContainer = styled(Card)(({ theme }) => ({
    width:'15.5vw',
    height:'320px',
    display:"flex",
    // alignItems:"center",
    justifyContent:'center',
    flexDirection:"column",
    margin:"10px 10px",
    "@media (max-width: 1200px)": {
        width:"18vw",
        height:"290px",
    },
    [theme.breakpoints.down('md')]: {
        width:"20vw",
        height:"270px",
    },
    "@media (max-width: 800px)": {
        width:"23vw",
        height:"250px",
    },
    [theme.breakpoints.down('sm')]: {
        width:"40vw",
        height:"220px",
    },

}));
const Image = styled("img")(({ theme }) => ({
   
    width:"100%",
    height:"87%",
    objectFit:"cover",
    [theme.breakpoints.down('md')]: {
        width:"100%",
        height:"90%",
    },
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        height:"95%",
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
       paddingTop:'0px',
        marginBottom:"2px",
    },
    "@media (max-width: 980px)": {
       fontSize: "13px",
        paddingTop:'2px',
        marginBottom:"3px",
    },
})
const Para = styled("p")({
    fontSize:"14px",
    fontWeight:"600",
    paddingLeft:'15px',
    paddingBottom:'10px',
    "@media (max-width: 600px)": {
        fontSize: "10px",
        paddingBottom:'2px',
        },
    "@media (max-width: 980px)": {
        fontSize: "13px",
        paddingBottom:'5px',
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
