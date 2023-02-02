import { Box } from '@mui/material'
import React from 'react'
import Block from '../../contents/auth/login/Block'

export default function Login() {
  return (
    <>  
        <Box sx={{width:'100%',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Block />
        </Box>
    </>
  )
}
