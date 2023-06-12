import React from 'react'
import { styled } from '@mui/material';
//import { Directions } from '@mui/icons-material';
// import zIndex from '@mui/material/styles/zIndex'

const SliderContainer = styled("div")({
width:"auto",
display:'flex',
flexDirection:"column",
height:"400px",
justifyContent:'start',
alignItems:'start',
// zIndex:"1"
// border:'1px solid black',
"@media (max-width: 900px)": {
    width:'100%',
            height:'330px',
           margin:'0px',
    
    },
   
        "@media (max-width: 600px)": {
            width:'100%',
            height:'330px',
           margin:'0px',
            
            },
})
const ImageContainer = styled("div")({
    marginTop:"20px",
    display:"flex",
    padding:"10px",
    width:"100%",
    height:"300px",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    // margin:"10px 20px"
    // border:'1px solid black',
    "@media (max-width: 900px)": {
        width:'100%',
                height:'250px',
                marginTop:"50px"
        
        },
       
            "@media (max-width: 600px)": {
                width:'100%',
                height:'300px',
                marginTop:"40px"
               
                
                },
})
const Image = styled("img")(({theme})=>({
    width:"220px",
    borderRadius:"15px",
    height:"250px",
    objectFit:"cover",
    // margin:"-80px",
    
    zIndex:"1",
    // transition:'linear all 0.5s ',
    // "&:hover":{
    //     cursor:'pointer',
       
    //     transform:'scale(1.1)'
    // },
    // [theme.breakpoints.down('1200')]:{

    // },

       "@media (max-width: 900px)": {
        width:'200px',
        height:'250px',
        borderRadius:'10px',
        
        },
       
            "@media (max-width: 600px)": {
                width:'150px',
                height:'200px',
                borderRadius:'15px',
               
                
                },
}))
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
    
  return (
       <SliderContainer>
        <ImageContainer>
            <Image src={posterLinks.img} />
        </ImageContainer>
        <div>
            <h4 className='text-lg font-semibold px-4'>{posterLinks.heading}</h4>
            <p className='text-gray-500 px-4'>188,288 properties</p>
        </div>
       </SliderContainer>
  )
}

export default SliderItem