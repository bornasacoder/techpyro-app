import React from 'react'
import { styled } from '@mui/styles'
import zIndex from '@mui/material/styles/zIndex'

const SliderContainer = styled("div")({
width:"100%",
display:'flex',
width:"260px",
height:"auto",
marginLeft:'40px',
justifyContent:'center',
alignItems:'center',
// zIndex:"1"
// border:'1px solid black',
"@media (max-width: 900px)": {
    width:'100%',
            height:'170px',
           margin:'0px',
    
    },
   
        "@media (max-width: 600px)": {
            width:'100%',
            height:'170px',
           margin:'0px',
            
            },
})
const ImageContainer = styled("div")({
    display:"flex",
    width:"260px",
    height:"250px",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    // margin:"10px 20px"
    // border:'1px solid black',
    "@media (max-width: 900px)": {
        width:'100%',
                height:'170px',
        
        },
       
            "@media (max-width: 600px)": {
                width:'100%',
                height:'170px',
               
                
                },
})
const Image = styled("img")({
    width:"260px",
    height:"250px",
    objectFit:"cover",
    // margin:"40px",
    zIndex:"1",
    transition:'linear all 0.5s ',
    "&:hover":{
        cursor:'pointer',
       
        transform:'scale(1.1)'
    },
   
       "@media (max-width: 900px)": {
        width:'95%',
        height:'170px',
        borderRadius:'10px',
        
        },
       
            "@media (max-width: 600px)": {
                width:'95%',
                height:'170px',
                borderRadius:'10px',
               
                
                },
})
// const Head = styled("h3")({
//     fontSize: "16px",
//     fontWeight:"500",
//     textAlign:"center",
//     marginBottom:"5px",
//     "@media (max-width: 600px)": {
//        fontSize: "13px",
//        },
// })
// const Para = styled("p")({
//     fontSize:"14px",
//     fontWeight:"600",
//     "@media (max-width: 600px)": {
//         fontSize: "12px",
//         },
// })
 const SliderItem = ({posterLinks}) => {
    console.log(posterLinks)
  return (
       <SliderContainer>
        <ImageContainer>
            <Image src={posterLinks.image} />

          

            
        </ImageContainer>
       </SliderContainer>
  )
}

export default SliderItem