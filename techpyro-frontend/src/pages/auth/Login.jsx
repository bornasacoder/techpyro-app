import { Box } from '@mui/material'
import React from 'react'
import Block from '../../contents/auth/Block'
import Block1 from '../../contents/auth/login/block1/Block1'

export default function Login() {
  return (
    <Box sx={{width:'100%',height:{sm:'100vh',xs:'92vh'},}}>  
        {/* <Typography sx={{textAlign:'center',fontSize:'30px',margin:'10px 0'}}>Login</Typography> */}
        <Box sx={{width:'100%',height:{sm:'100vh',xs:'92vh'},display:'flex',alignItems:{sm:'center',xs:'flex-start'},justifyContent:'center'}}>
            <Block/>
            <Block1/>
        </Box>
    </Box>
  )
}
