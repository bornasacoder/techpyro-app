import React from 'react'
import { styled } from '@mui/styles'
import { useNavigate } from 'react-router-dom'

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
const Image = styled("img")({
    width:"170px",
    height:"200px",
    objectFit:"cover",
    margin:"10px",
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
    const nevigate = useNavigate()
  const handleClick =(id)=>{
    nevigate(`/Product/${id}`)
  }
  return (
       <SliderContainer>
        <ImageContainer >
            <Image src={posterLinks} onClick={()=>handleClick(posterLinks.id)}/>
      
        </ImageContainer>
       </SliderContainer>
  )
}

export default SliderItem