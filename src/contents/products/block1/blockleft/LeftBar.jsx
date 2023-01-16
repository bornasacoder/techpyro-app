import { CurrencyRupee, NavigateBefore} from '@mui/icons-material'
import { Box, Checkbox, FormControlLabel, FormGroup, MenuItem, Slider, styled, TextField, Typography, } from '@mui/material'
import React from 'react'
import "./leftbar.css"
const LeftContainer = styled(Box)(({theme})=>({
    flex:"1",
    width:"100%",
    display:"flex",
    flexDirection:"column",
    background:"#fff",
    justifyContent:"space-between",
    alignItems:"flex-start",
    paddingLeft:"16px",
    height:"100vh",
     paddingTop:"10px",
     overflowY:"scroll",
     overflowX:"hidden",
     position:"sticky",
     top:"70px",
     [theme.breakpoints.down('md')]: {
      display:"none"
     },
     
    }))
    const Wrapper = styled(Box)((theme)=>({
      maxHeight:"100vh",
      marginBottom:"20px"
    
     

    }))
    const LeftItems = styled(Box)((theme)=>({
       width:"100%",
       marginBottom:"20px"
        }))

        function valuetext(value) {
            return `Rs${value}`;
          }
          
const LeftBar = () => {
  // const theme = useTheme();
    const [value, setValue] = React.useState([1000, 5000]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    // const [age, setAge] = React.useState('');
    // const [open, setOpen] = React.useState(false);
  
 
  
    // const handleClose = () => {
    //   setOpen(false);
    // };
  
    // const handleOpen = () => {
    //   setOpen(true);
    // };
    const MinPrice = [
        {
          value: 1000,
          label: 1000,
        },
        {
          value: 2000,
          label: 2000,
        },
        {
          value: 3000,
          label: 3000,
        },
        {
          value: 5000,
          label: 5000,
        },
      ];
      const MaxPrice = [
        {
          value: 2000,
          label: 2000,
        },
        {
          value: 3000,
          label: 3000,
        },
        {
          value: 5000,
          label: 5000,
        },
        {
          value: "10000+",
          label: "10000+",
        },
      ];
    const marks = [
        {
          value: 0,
          label: '1000',
        },
        {
          value: 20,
          label: '2000',
        },
        {
          value: 37,
          label: '3000',
        },
        {
          value: 100,
          label: '5000',
        },
      ];
      
  return (
    <LeftContainer>
      <Wrapper>

    <LeftItems>
    <Typography sx={{fontSize:"20px", marginBottom:"40px"}} variant="h6">Filters</Typography>
      <Box width="100%" height="1px" sx={{background:"#EEEEEE", marginBottom:"20px"}}></Box>
    <Typography variant="body2" sx={{fontSize:"16px",letterSpacing:"0.8px", marginBottom:"10px"}}>CATEGORIES</Typography>
    <Box  mb={1} sx={{display:"flex", justifyContent:'flex-start', alignItems:"center", padding:"0px"}}>
        <NavigateBefore sx={{fontSize:"24px"}}/>
        <Typography variant="body2">Website</Typography>
    </Box>
    <Typography variant="h6">Website</Typography>
    </LeftItems>
    <LeftItems>
      <Box width="100%" height="1px" sx={{background:"#EEEEEE", marginBottom:"20px"}}></Box>
    <Typography variant="body2" sx={{fontSize:"16px",letterSpacing:"0.8px", marginBottom:"10px", fontWeight:"500"}}>Price</Typography>
     <Box>
     <Slider
        getAriaLabel={() => 'Temperature range'}
        defaultValue={3000}
        valueLabelDisplay="auto"
        onChange={handleChange}
        marks={marks}
        value={value}
        step={2000}
        min={1000}
        bgColor="white"
        max={10000}
        getAriaValueText={valuetext}
        sx={{
          color: 'primary',
          '& .MuiSlider-track': {
            border: 'none',
          },
          '& .MuiSlider-thumb': {
            width: 20,
            height: 20,
            backgroundColor: '#fff',
            '&:before': {
              boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
            },
            '&:hover, &.Mui-focusVisible, &.Mui-active': {
              boxShadow: 'none',
            },
          },
        }}
        />
        <Box sx={{display:"flex", gap:"10px", justifyContent:"space-between",alignItems:'center'}}>
        <TextField
          id="outlined-select-currency"
          select
          label="Min"
          sx={{backdropFilter:"none!important"}}
          size="small"
          fullWidth="true"
          >
          {MinPrice.map((option) => (
            <MenuItem key= {option.value} sx={{fontSize:"12px"}} value={option.value}>
               <CurrencyRupee sx={{fontSize:"15px"}}/> {option.label} 
            </MenuItem>
          ))}
        </TextField>
        To
        <TextField
          id="outlined-select-currency"
          select
          label="Max"
          sx={{backdropFilter:"none!important"}}
          size="small"
          fullWidth="true"
          >
          {MaxPrice.map((option) => (
            <MenuItem sx={{fontSize:"12px"}} key= {option.value} value={option.value}>
               <CurrencyRupee sx={{fontSize:"15px"}}/> {option.label} 
            </MenuItem>
          ))}
        </TextField>
        </Box>
     </Box>
    </LeftItems>
    <LeftItems>
    <Box width="100%" height="1px" sx={{background:"#EEEEEE", marginBottom:"20px"}}></Box>
    <Typography variant="body2" sx={{fontSize:"16px",letterSpacing:"0.8px", marginBottom:"10px", fontWeight:"500"}}>Customer Ratings</Typography>
    <Box sx={{display:"flex", alignItems:"center"}} >
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label= {`4 star Rating and above`} />
      <FormControlLabel control={<Checkbox />} label={`3 star Rating and above`} />
    </FormGroup>
    </Box>
    </LeftItems>

    <LeftItems>
    <Box width="100%" height="1px" sx={{background:"#EEEEEE", marginBottom:"20px"}}></Box>
    <Typography variant="body2" sx={{fontSize:"16px",letterSpacing:"0.8px", marginBottom:"10px", fontWeight:"500"}}>Customer Ratings</Typography>
    <Box sx={{display:"flex", alignItems:"center"}} >
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label= {`4 star Rating and above`} />
      <FormControlLabel control={<Checkbox />} label={`3 star Rating and above`} />
    </FormGroup>
    </Box>
    </LeftItems>

     </Wrapper>
</LeftContainer>
  )
}

export default LeftBar