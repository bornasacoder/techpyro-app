import { Box, Button, Typography,useTheme } from '@mui/material'
import React from 'react'

export default function Block3() {
    const theme = useTheme();
  return (
    <Box>
    <Box sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography sx={{fontWeight:500,fontSize:'18px'}}>Personal Details</Typography>
        <Button sx={{"&:hover":{background:'none'}}} variant='text'>Add</Button>
    </Box>
    <Box sx={{display:'flex',flexDirection:'column',gap:'20px',padding:'20px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px'}}>
        <Box sx={{display:'flex',alignItems:'center'}} >
            <Typography sx={{width:'130px'}} variant='span'>Gender</Typography>
            <Box style={{width:'calc(100% - 130px)',height:'40px',padding:'5px 10px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px'}}></Box>
        </Box>
    </Box>
</Box>
  )
}
