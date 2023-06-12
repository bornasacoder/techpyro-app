import { Box, Card, Typography } from '@mui/material'
import { styled } from '@mui/styles'
import React from 'react'


const Box1 = styled(Box)({
  width:'100%',
  display:'flex',
  justifyContent:'center'
})
const Box2 = styled(Box)(({ theme }) =>({
    width:'75%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    boxSizing:'border-box',
    [theme.breakpoints.down('md')]: {
      width:'90%',
      justifyContent:'center',
      gap:'10px',
      padding:'0px',
    },
    

    [theme.breakpoints.down("sm")]:{
     
      width:"90%"
    }
  }))
const Card1 = styled(Card)(({theme})=>({

  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  width:'100%',
  flexWrap:'wrap',
  [theme.breakpoints.down("sm")]:{
    flexDirection:"column",
    width:"100%",
    display:"block"
  }
}))


const Image = styled('img')(({theme})=>({

  width:'24vw',
  height:'auto',
  padding:"10px 0px",
  [theme.breakpoints.down("md")]:{
    width:"28vw"
  },
  [theme.breakpoints.down("sm")]:{
    width:"100%",
    height:"100%"
  }
}))

export default function Block2({block2Data}) {

  return (
    <>
      <Box1>
        <Box2>
            <Typography sx={{fontFamily:'Dancing Script',color:'black',fontSize:{md:'55px',sm:'35px',xs:'35px'}}}>Most Read Post</Typography>
            <Card1 >
              {block2Data.data.map((item ,id)=>(
                <Box key={id} sx={{display:"flex", justifyContent:"center", flexDirection:{sm:"row", xs:"column"} }} >
                   <Image src={item.image}  alt="product of tour" />
                </Box>
                
              ))}

            </Card1>
        </Box2>
      </Box1>
    </>
  )
}
