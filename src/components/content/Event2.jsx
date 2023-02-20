import { ArrowForward, ArrowForwardIos } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Event2 = () => {
    const navigate = useNavigate()
    const handlebutton = ()=> {
        navigate("/")
    }
  return (
    <>
      
      <Box sx={{display:"flex",gap:"20px",backgroundColor:"#F3F3F3",padding:"10px 58px"}}>
        <Typography sx={{cursor:"pointer",display:"flex",alignItems:"center",gap:"10px","&:hover":{
            color:"#FAC74B",
        }}} onClick={handlebutton}>Home <ArrowForwardIos sx={{fontSize:"14px"}}/> </Typography>
        <Typography> Events</Typography>
      </Box>
    </>
  )
}

export default Event2
