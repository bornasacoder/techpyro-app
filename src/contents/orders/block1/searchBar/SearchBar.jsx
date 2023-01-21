import { Button, TextField, useTheme} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    const theme = useTheme();
  return (
    <Box sx={{display:'flex',margin:'0 30px'}}>
        <Box sx={{flex:'10',border:`1px solid ${theme.colors.alpha.black[50]}`,}}>
            <SearchIcon sx={{ marginTop:'6px',marginLeft:'10px', color: `${theme.colors.alpha.black[50]}`}}/>
            <TextField sx={{paddingLeft:'10px',borderRadius:'5px',"& fieldset": { border: 'none' }, '& .MuiInputBase-input': {
            padding: "8px"}}} placeholder='Search your orders here'></TextField>
        </Box>
        <Button sx={{flex:'2',borderRadius:'5px'}} variant='contained'>Search</Button>
    </Box>
  )
}
