import React from 'react'
import { styled } from '@mui/styles'

const SliderContainer = styled("div")({
width:"85%",
height:"auto",


})
const ImageContainer = styled("div")({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    margin:"10px 20px"

})
const Image = styled("img")(({ theme }) => ({
   
    width:"170px",
    height:"200px",
    objectFit:"cover",
    margin:"10px",
    [theme.breakpoints.down('md')]: {
        width:"140px",
        height:"150px",
    },
    [theme.breakpoints.down('sm')]: {
        width:"110px",
        height:"115px",
    },
    [theme.breakpoints.down('xs')]: {
        width:"80px",
        height:"85px",
    },
}));
const Head = styled("h3")({
    fontSize: "16px",
    fontWeight:"500",
    textAlign:"center",
    marginBottom:"5px",
    "@media (max-width: 600px)": {
       fontSize: "13px",
       },
})
const Para = styled("p")({
    fontSize:"14px",
    fontWeight:"600",
    "@media (max-width: 600px)": {
        fontSize: "12px",
        },
})
 const SliderItem = ({posterLinks}) => {
  return (
       <SliderContainer>
        <ImageContainer>
            <Image src={posterLinks.url} />
            <Head>{posterLinks.name}</Head>
            <Para>{posterLinks.Price}</Para>
        </ImageContainer>
       </SliderContainer>
  )
}

export default SliderItem