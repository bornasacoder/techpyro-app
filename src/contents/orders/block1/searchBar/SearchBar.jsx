import { Button, useTheme} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function SearchBar() {
    const theme = useTheme();
  return (
    <Box sx={{display:'flex',margin:'0 30px'}}>
        <input style={{flex:'10',paddingLeft:'20px',borderRadius:'5px',border:`1px solid ${theme.colors.alpha.black[50]}`}} placeholder='Search your orders here' />
        <Button sx={{flex:'2',borderRadius:'5px'}} variant='contained'>Search</Button>
    </Box>
  )
}
