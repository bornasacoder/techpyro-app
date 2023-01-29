import { Box, Button, Typography,useTheme } from '@mui/material'
import React from 'react'

export default function Block2() {
    const theme = useTheme();
  return (
    <Box>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Typography sx={{fontWeight:500,fontSize:'18px'}}>Contact Details</Typography>
                <Button sx={{"&:hover":{background:'none'}}} variant='text'>Edit</Button>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:'20px',padding:'20px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px'}}>
                <Box sx={{display:'flex',alignItems:'center'}} >
                    <Typography sx={{width:'130px'}} variant='span'>Mobile Number</Typography>
                    <Box style={{width:'calc(100% - 130px)',height:'40px',padding:'5px 10px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px'}}>+91-999999999</Box>
                </Box>
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <Typography sx={{width:'130px'}} variant='span'>Email</Typography>
                    <Box style={{width:'calc(100% - 130px)',height:'40px',padding:'5px 10px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px'}}>ecvhvshfvwvbfbwfu@gamil.com</Box>
                </Box>
            </Box>
        </Box>
  )
}
