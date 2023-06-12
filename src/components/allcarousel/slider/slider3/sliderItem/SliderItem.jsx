import React from 'react'
import { styled } from '@mui/styles'
import zIndex from '@mui/material/styles/zIndex'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'



const Image = styled("img")({
    width:"379px",
    height:"300px",
    // objectFit:"cover",
    // margin:"40px",
    // zIndex:"1",
    // border:'1px solid black',
    "@media (max-width: 960px)": {
       width:'300px',
       height:'300px',
       
       },
       "@media (max-width: 919px)": {
        width:'295px',
        height:'300px',
        
        },
        "@media (max-width: 900px)": {
            width:'275px',
            height:'260px',
            
            },
            "@media (max-width: 830px)": {
                width:'300px',
                height:'260px',
                },
                "@media (max-width: 600px)":{
                  width:'290px',
                  height:'260px'
                },
                "@media (max-width:650px)":{
                   width:'379px',
                   height:'300px',
                },
                "@media (max-width:480px)":{
                  width:'100%',
                  height:'300px',
                  // paddingLeft:'20px'
                }
})

const Head = styled("h3")({
    fontSize: "15px",
    fontWeight:"400",
    // textAlign:"center",
    marginBottom:"0px",
    "@media (max-width: 600px)": {
    //    fontSize: "23px",
       },
})

 const SliderItem = ({posterLinks}) => {
  return (
    <>
         <Image src={posterLinks.image} />
    </>
  )
}

export default SliderItem;