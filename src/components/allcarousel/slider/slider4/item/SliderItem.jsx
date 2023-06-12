import React from 'react'
import {styled} from '@mui/styles'
import { Button } from '@mui/material'


const SliderContainer = styled("div")({
    width:"100%",
    height:"auto",
    // zIndex:"1",
    // border:'1px solid black'
    
    })
    const ImageContainer = styled("div")({
        display:"flex",
        alignItems:"center",
        // justifyContent:"center",
        flexDirection:"column",
        // margin:"10px 20px"
        // border:'1px solid black'
    
    })
    const Image = styled("img")({
        width:"97%",
        height:"400px",
        objectFit:"cover",
        // margin:"40px",
        zIndex:"1",
        // border:'1px solid black',
        "@media (max-width: 960px)": {
           width:'100%',
           height:'500px',
           
           },
           "@media (max-width: 770px)": {
            width:'100%',
            height:'400px',
            
            },
            "@media (max-width: 600px)": {
                width:'100%',
                height:'400px',
                
                },
                "@media (max-width: 480px)": {
                    width:'100%',
                    height:'200px',
                    margin:'0',
                    padding:'0',
                    // gap:'20px'
                    
                    },
    })
    // const Box1 = styled('btn')({
    //     display:'flex',
    //     gap:'7px',
    //     marginTop:'10px'
    // })
    // const Box2 = styled('btn')({
    //     display:'flex',
    //     gap:'7px',
    //     marginTop:'20px',
    //     padding:'40px 0px 24px'
        
    // })
    // const Img = styled('img')({
    //     height:'290px',
    //     width:'350px',
    //     marginTop:'-150px'
    // })
    
export default function SliderItem({posterLinks}) {
  return (
    <>
    
       {/* <SliderContainer> */}
        <ImageContainer>
            <Image src={posterLinks.image} />
        </ImageContainer>
       {/* </SliderContainer> */}
    </>
  )
}
