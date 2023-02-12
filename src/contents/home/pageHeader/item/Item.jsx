import React from 'react'
import { styled } from '@mui/styles'
import { Box , useTheme} from '@mui/material'
import { Link } from 'react-router-dom'

const SliderContainer = styled(Box)({
width:"100%",
height:"auto",


})
const ImageContainer = styled(Box)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    "@media (min-width: 960px)": {
        cursor:'pointer',
        gap:'20px'
    },
})
const Image = styled("img")({
    width:"60px",
    height:"60px",
    display:"flex !important",
    justifyContent:"center",
    alignItems:"center",
    objectFit:"cover",
    borderRadius:'10px',
    margin:"10px 0px ",
    gap:"25px",
    '&:hover':{
        transform:[{scaleX:"5px"}],
        backgroundColor:"white"

    },
    '@media(maxWidth: 960px)':{
        width:"30px",
        height:"30px",
        margin:"7px"
    },
    '@media (maxWidth: 600px)':{
        width:"12px",
        height:"12px",
         margin:"5px"

    }
})
const Head = styled("h3")(({theme}) => ({
    // color: theme.colors.alpha.black[100],
    fontSize: "13px",
    fontWeight:"500",
    textAlign:"center",
    marginBottom:"5px",
    "@media (max-width: 600px)": {
        fontSize: "7px!important",
        },
     "@media (max-width: 960px)": {
        fontSize: "10px!important",
        },
     "@media (min-width: 960px)": {
        

     },
}))

export default function Item({posterLinks}) {
    const theme = useTheme();

  return (
    <SliderContainer>
        <ImageContainer>
            <Link to={`/${posterLinks.href}`} style={{textDecoration:'none', color:`${theme.colors.alpha.black[100]}` ,"&:hover": {color:`${theme.header.background}`}, display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"} }>
                <Image src={posterLinks.url} alt="Techpyro Logo"/>
                <Head>{posterLinks.text}</Head>
            </Link>
        </ImageContainer>
       </SliderContainer>
  )
}
