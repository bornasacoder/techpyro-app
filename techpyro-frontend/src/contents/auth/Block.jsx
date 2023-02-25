import { Box, styled, Typography, useTheme } from '@mui/material'
import React from 'react';

const Image = styled('img')(({theme})=>({
    width: '100%',
    backgroundColor: theme.colors.alpha.white[100],

}))
export default function Block() {
    const theme = useTheme();
  return (
    <Box>
        <Box sx={{display:{sm:'flex',xs:'none'},justifyContent:'space-between',flexDirection:'column',gap:'10px',width:'400px',height:'600px',border:`1px solid ${theme.colors.alpha.black[30]}`,background:'#f4f1f1'}}>
            <Image src='/images/mainLogo/TP LOGO-01.png'/>
            <Typography sx={{fontSize:'25px',fontWeight:500,padding:'0 50px',marginBottom:'50px',color:'#4c669a'}}>Best Place to Buy Products</Typography>
        </Box>
    </Box>
  )
}
