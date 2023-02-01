import React from 'react'
import { styled } from '@mui/styles'
import zIndex from '@mui/material/styles/zIndex'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import { Star, StarHalf } from '@mui/icons-material'

const SliderContainer = styled("div")({
  width:"100%",
  height:"auto",
  paddingRight:"0px",
  // background:'transparent',
  display:'flex',
  justifyContent:'center',
// zIndex:"1",
// border:'1px solid black'
"@media (max-width: 480px)": {
    
     },

})
const ImageContainer = styled("div")({
    display:"flex",
    width:'232px',
    height:'auto',
    alignItems:"center",
    borderRadius:'10px',
    justifyContent:"center",
    flexDirection:"column",
    // "&:hover":{backgroundColor:'rgba(0,0,0,0.3)'},
    // boxShadow:'1px 1px 1px 1px rgba(0,0,0,0.1)',
    // margin:"10px 20px",
    background:'#F2F2F2',
    border:'1px solid rgba(0,0,0,0.2)',
    "@media (max-width: 480px)": {
       gap:'0px',
        width:'302px',
        paddingLeft:'0px',
        // border:'none'
        },

})
const Image = styled("img")({
    width:"230px",
    height:"220px",
    objectFit:"cover",
    borderRadius:'10px',
    "&:hover":{backgroundColor:'rgba(0,0,0,0.3)'},
    // margin:"10px",
    // zIndex:"1",
    // border:'1px solid black',
    "@media (max-width: 960px)": {
       width:'200px',
       height:'230px',
       
       },
       "@media (max-width: 770px)": {
        width:'160px',
        height:'200px',
        
        },
        "@media (max-width: 600px)": {
            width:'120px',
            height:'170px',
            
            },
            "@media (max-width: 480px)": {
                width:'300px',
                height:'200px',
               
              
                
                },
})
const Head = styled("h6")({
    // fontSize: "10px",
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
 const SliderOtem = ({posterLinks}) => {
    console.log(posterLinks)
  return (
    <>
      
    <SliderContainer>
     <ImageContainer>
         <Image src={posterLinks.image} />
         
         
         <Box sx={{width:{xs:'280px',sm:'280px',md:'230px'},display:'flex',gap:{xs:'5px',sm:'10px',md:'20px'},flexDirection:'column'}}>
         <Head style={{fontWeight:{xs:'200',sm:'400',md:'400'},fontSize:'20px'}}>{posterLinks.price.mrp}</Head>
         <Head style={{fontSize:'15px'}}>{posterLinks.tagline}</Head>
         <Head style={{fontSize:'20px',textDecoration:'underline'}}>{posterLinks.rating}</Head>
         </Box>
         
          
     </ImageContainer>
    </SliderContainer>
    </>
  )
}

export default SliderOtem