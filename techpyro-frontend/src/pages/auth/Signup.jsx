import { Box } from '@mui/material'
import React from 'react'
import Block from '../../contents/auth/Block'
import Block1 from '../../contents/auth/signup/block1/Block1'

function Signup() {
  return (
    <>  
        <Box sx={{width:'100%',height:{sm:'100vh',xs:'92vh'},display:'flex',alignItems:{sm:'center',xs:'flex-start'},justifyContent:'center'}}>
            <Block/>
            <Block1/>
        </Box>
    </>
  )
}

export default Signup