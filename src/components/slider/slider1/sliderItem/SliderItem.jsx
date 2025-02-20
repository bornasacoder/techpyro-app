import React from 'react'
import { styled } from '@mui/styles'

const SliderContainer = styled("div")({
width:"100%",
display:"flex",
justifyContent:"center",
height:"auto",
// gap:"30px"

})
const ImageContainer = styled("div")({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    // margin:"10px 20px"

})
const Image = styled("img")({
    width:"80px",
    height:"80px",
    objectFit:"cover",
    // margin:"10px",
    borderRadius:"50%",
    '@media(maxWidth: 768px)':{
        width:"150px",
        height:"150px"
    }
})
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
            {/* <Head>{posterLinks.name}</Head>
             <Para>Age: {posterLinks.age}</Para> */}
        </ImageContainer>
       </SliderContainer>
  )
}

export default SliderItem