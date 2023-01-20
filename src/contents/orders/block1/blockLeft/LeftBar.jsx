
import { Box, Checkbox, FormControlLabel, FormGroup,  styled,Typography, } from '@mui/material'
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
    height:'500px',
    position:'sticky',
    top:'70px',
    paddingLeft:"30px",
     paddingTop:"10px",
     [theme.breakpoints.down('md')]: {
      display:"none"
     },
     
    }))
    const LeftItems = styled(Box)((theme)=>({
       width:"100%",
       marginBottom:"5px"
        }))

        // function valuetext(value) {
        //     return `Rs${value}`;
        //   }
          
const LeftBar = () => {
  // const theme = useTheme();
    // const [value, setValue] = React.useState([1000, 5000]);

    // const handleChange = (event, newValue) => {
    //   setValue(newValue);
    // };
    // const [age, setAge] = React.useState('');
    // const [open, setOpen] = React.useState(false);
  
 
  
    // const handleClose = () => {
    //   setOpen(false);
    // };
  
    // const handleOpen = () => {
    //   setOpen(true);
    // };
      
  return (
    <LeftContainer>

    <LeftItems>
    <Typography sx={{fontSize:"20px", marginBottom:"5px"}} variant="h6">Filters</Typography>
    <Typography variant="body2" sx={{fontSize:"16px",letterSpacing:"0.8px", marginBottom:"5px", fontWeight:"500"}}>ORDER STATUS</Typography>
    <Box sx={{display:"flex", alignItems:"center"}} >
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label= {`On the way`} />
      <FormControlLabel control={<Checkbox />} label={`Delivered`} />
      <FormControlLabel control={<Checkbox />} label= {`Cancelled`} />
      <FormControlLabel control={<Checkbox />} label={`Returned`} />
    </FormGroup>
    </Box>
    </LeftItems>

    <LeftItems>
    <Box width="100%" height="1px" sx={{background:"#EEEEEE", marginBottom:"5px"}}></Box>
    <Typography variant="body2" sx={{fontSize:"16px",letterSpacing:"0.8px", marginBottom:"5px", fontWeight:"500"}}>ORDER TIME</Typography>
    <Box sx={{display:"flex", alignItems:"center"}} >
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label= {`Last 30 days`} />
      <FormControlLabel control={<Checkbox />} label={`2022`} />
      <FormControlLabel control={<Checkbox />} label= {`2021`} />
      <FormControlLabel control={<Checkbox />} label={`2020`} />
      <FormControlLabel control={<Checkbox />} label={`older`} />
    </FormGroup>
    </Box>
    </LeftItems>
</LeftContainer>
  )
}

export default LeftBar