import React from 'react'
import { styled } from '@mui/styles'
import { Box , useTheme} from '@mui/material'

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
        cursor:'pointer'
    },
    "@media (max-width: 960px)": {
        cursor:'none'
    },
})
const Image = styled("img")({
    width:"50px",
    height:"50px",
    objectFit:"cover",
    borderRadius:'10px',
    margin:"10px",
    '&:hover':{
        transform:[{scaleX:"5px"}],
        backgroundColor:"white"

    },
    '@media(maxWidth: 960px)':{
        width:"30px",
        height:"30px",
        margin:"7px"
    },
    '@media(maxWidth: 600px)':{
        width:"15px",
        height:"15px",
        margin:"4px"
    }
})
const Head = styled("h3")({
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
})
// const Para = styled("p")({
//     fontSize:"14px",
//     fontWeight:"600",
//     "@media (max-width: 600px)": {
//         fontSize: "12px",
//         },
// })
 const SliderItem = ({posterLinks}) => {

    const theme = useTheme();

  return (
       <SliderContainer>
        <ImageContainer sx={{"&:hover": {color:`${theme.header.background}`}}}>
            <Image src={posterLinks.url} />
            <Head>{posterLinks.text}</Head>
        </ImageContainer>
       </SliderContainer>
  )
}

export default SliderItem