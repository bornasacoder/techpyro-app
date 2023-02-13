import React from 'react'
import { styled } from '@mui/styles'
import zIndex from '@mui/material/styles/zIndex'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import { Star, StarHalf } from '@mui/icons-material'

const SliderContainer = styled("div")({
width:"330px",
height:"auto",
paddingLeft:"50px",
background:'transparent',
display:'flex',
justifyContent:'center',
flexDirection:"column",
alignItems:"center",
// zIndex:"1",
// border:'1px solid black'
"@media (max-width: 480px)": {
    width:'auto',
    paddingLeft:"140px",
    width:'310px'
     },

})
const ImageContainer = styled("div")({
    display:"flex",
    width:'auto',
    alignItems:"center",
    // borderRadius:'20px',
    justifyContent:"center",
    flexDirection:"row",
   
    margin:"0px",
    background:'transparent',
    // border:'1px solid rgba(0,0,0,0.2)',
    "@media (max-width: 480px)": {
       gap:'0px',
        width:'320px',
        paddingRight:'120px',
        border:'none',
        
        },

})
const Image = styled("img")({
    width:"350px",
    height:"250px",
    objectFit:"cover",
    // borderRadius:'100px',
    // margin:"40px",
    zIndex:"1",
    // border:'1px solid black',
    "@media (max-width: 960px)": {
        width:'320px',
        height:'350px',
       
       },
       "@media (max-width: 770px)": {
        width:'320px',
        height:'350px',
        
        },
        "@media (max-width: 600px)": {
            width:'320px',
            height:'350px',
            
            },
            "@media (max-width: 480px)": {
                width:'320px',
                height:'350px',
                boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
              
                
                },
})
const Head = styled("h3")({
    // fontSize: "15px",
    // fontWeight:"400",
    // textAlign:"center",
    marginBottom:"0px",
    "@media (max-width: 600px)": {
    //    fontSize: "23px",
       },
})
// const Para = styled("p")({
//     fontSize:"14px",
//     fontWeight:"600",
//     "@media (max-width: 600px)": {
//         fontSize: "12px",
//         },
// })
 const SliderAtem = ({posterLinks}) => {
    console.log(posterLinks)
  return (
    <>
      
    <SliderContainer>
     <ImageContainer>
         <Image src={posterLinks.image} />
       
         
       
       
          
     </ImageContainer>
     
    </SliderContainer>
    <Box sx={{width:{xs:'300px',sm:'320px',md:'300px'},display:'flex',gap:{xs:'5px',sm:'10px',md:'10px'},flexDirection:'column',justifyContent:'center',textAlign:'left'}}>
         
         <Head style={{fontWeight:{xs:'200',sm:'400',md:'400'}}}>{posterLinks.price.mrp}</Head>
         <Head style={{fontSize:'25px'}}>{posterLinks.rating}</Head>
         <Head style={{fontWeight:{xs:'300',sm:'400',md:'400'},fontSize:'13px'}}>{posterLinks.tagline}</Head>
         </Box>
    </>
  )
}

export default SliderAtem