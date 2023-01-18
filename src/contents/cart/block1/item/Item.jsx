import { Card, Checkbox, styled, Typography , useTheme} from '@mui/material'
import {CurrencyRupee} from '@mui/icons-material'
import { FaShippingFast } from 'react-icons/fa';
import { Box } from '@mui/system'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const Image = styled("img")(({theme})=>({
      width:'20%',
      height:'90%',
      objectFit:'cover',
      "@media (max-width: 980px)": {
        width:'100%',
        height:'50%',
       },
}))

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Item() {

  const theme = useTheme();

  const [qty, setQty] = React.useState('1');

  const handleChange = (event) => {
    setQty(event.target.value);
  };

  return (
    <Card sx={{display:'flex',flexDirection:{md:'row',xs:'column'} ,height:{md:'250px',xs:'350px'},marginBottom:'20px'}}>
      <Image src='/images/pic3.jpg' alt='item'/>
      <Box sx={{marginTop:{md:'10px',xs:'5px'},width:{md:'80%',xs:'100%'},height:{md:'100%',xs:'50%'},display:'flex',flexDirection:'column',justifyContent:'space-between', padding:'0 20px'}}>
        <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
          <Box sx={{display:'flex', flexDirection:'column',justifyContent:'space-between',}}>
            <Typography sx={{fontSize:'18px'}}>Restaurant Website template</Typography>
            <Box>
              <Typography variant="h3" sx={{fontSize:{lg:"25px",md:"20px",sm:"16px", xs:"18px"},display:"flex", alignItems:"center",   }}><CurrencyRupee sx={{fontSize:"14px"}}/> 1999/- </Typography>
              <Typography variant="subtitle1" sx={{fontSize:"14px",textDecoration:"line-through" }}> <CurrencyRupee sx={{fontSize:"14px"}}/> 5000/-</Typography>
            </Box>
            <Box sx={{width:{sm:'200px',xs:'180px'},display:{md:'none',xs:'flex'},justifyContent:'space-between',alignItems:'center'}}>
              <FaShippingFast/> 
              <Typography>Delivery by</Typography>
              <Typography sx={{fontWeight:500}}>21st jan |</Typography>
              <Typography sx={{color:`${theme.colors.success.dark}`, fontWeight:500}}>FREE</Typography>
          </Box>
          </Box>
          <Box sx={{width:{sm:'200px',xs:'180px'},display:{md:'flex',xs:'none'},justifyContent:'space-between',alignItems:'center'}}>
              <FaShippingFast/> 
              <Typography>Delivery by</Typography>
              <Typography sx={{fontWeight:500}}>21st jan |</Typography>
              <Typography sx={{color:`${theme.colors.success.dark}`, fontWeight:500}}>FREE</Typography>
          </Box>
        </Box>
        <Box sx={{borderTop:'1px solid black',height:'80px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Box sx={{display:'flex',}}>
          <Typography sx={{marginRight:'5px',display:{md:'block',xs:'none'}}}>Quantity:</Typography>
            <FormControl sx={{width:'70px',}}>
              <InputLabel id="demo-simple-select-label">Qty</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={qty}
                label="Qty"
                onChange={handleChange}
                sx={{height:'45px'}}
                >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{display:'flex',alignItems:'center'}}>
            <Box sx={{display:'flex',alignItems:'center',marginRight:'30px'}}>
              <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              <Typography sx={{display:{md:'block',xs:'none'}}}>Save to Wishlist</Typography>
              <Typography sx={{display:{md:'none',xs:'block'}}}>Wishlist</Typography>
            </Box>
            <Typography>Remove</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}
