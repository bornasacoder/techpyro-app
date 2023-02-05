import { Box } from '@mui/material'
import React from 'react'
import Block1 from '../../contents/auth/login/block1/Block1'

export default function Login() {
  return (
    <>  
        <Box sx={{width:'100%',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Block1/>
        </Box>
    </>
  )
}
