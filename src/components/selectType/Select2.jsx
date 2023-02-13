import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Select2() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{width:{xs:'150px',sm:'200px',md:'400px'} }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">---</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{"& fieldset": {borderRadius:'0px',height:'50px'},backgroundColor:'#F6F4F4',height:'50px'}}
        >
          <MenuItem value={10}>PG</MenuItem>
          <MenuItem value={20}>I</MenuItem>
          <MenuItem value={30}>II</MenuItem>
          <MenuItem value={40}>III</MenuItem>
          <MenuItem value={50}>IV</MenuItem>
          <MenuItem value={60}>V</MenuItem>
          <MenuItem value={70}>VI</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}