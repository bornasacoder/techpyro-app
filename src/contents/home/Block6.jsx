import { AddIcCall, AssignmentReturn, Inventory, LocalShipping } from '@mui/icons-material'
import { Autocomplete, Box, Button, FormControl, InputLabel, OutlinedInput, Select, Typography } from '@mui/material'
import React from 'react'

const Block6 = () => {
  return (
    <>
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:{xs:'30px',sm:'70px',md:'120px'},height:{xs:'580px',sm:'600px',md:'150px'},flexDirection:{xs:'column',sm:'column',md:'row'}}}>
      <Box sx={{display:'flex',alignItems:'center',gap:{xs:'10px',sm:'20px',md:'30px'},flexDirection:{xs:'column',sm:'column',md:'row'}}}>
        <Inventory sx={{color:'red',fontSize:'40px'}}/>
        <Box >
        <Typography sx={{fontSize:'20px',fontWeight:'600'}}>Original Produts</Typography>
        <Typography>Only Parts from Trusted Brands</Typography>
        </Box>
      </Box>
   
      <Box sx={{display:'flex',alignItems:'center',gap:{xs:'10px',sm:'20px',md:'30px'},flexDirection:{xs:'column',sm:'column',md:'row'}}}>
        <LocalShipping sx={{color:'red',fontSize:'40px'}}/>
        <Box>
        <Typography sx={{fontSize:'20px',fontWeight:'600'}}>Fast Shipping</Typography>
        <Typography>Free shipping over $499.00</Typography>
        </Box>
      </Box>
      
      <Box sx={{display:'flex',alignItems:'center',gap:{xs:'10px',sm:'20px',md:'30px'},flexDirection:{xs:'column',sm:'column',md:'row'}}}>
        <AssignmentReturn sx={{color:'red',fontSize:'40px'}}/>
        <Box>
        <Typography sx={{fontSize:'20px',fontWeight:'600'}}>30 Days Return</Typography>
        <Typography>30 days open purchase</Typography>
        </Box>
      </Box>
      
      <Box sx={{display:'flex',alignItems:'center',gap:{xs:'10px',sm:'20px',md:'30px'},flexDirection:{xs:'column',sm:'column',md:'row'}}}>
        <AddIcCall sx={{color:'red',fontSize:'40px'}}/>
        <Box>
        <Typography sx={{fontSize:'20px',fontWeight:'600'}}>Dedicated Support</Typography>
        <Typography>We support both sat & sun</Typography>
        </Box>
      </Box>
    </Box>


    <Box sx={{padding:{xs:'10px',sm:'30px',md:'50px 100px 0px 100px'}}}>
        <Typography sx={{fontSize:{xs:'40px',sm:'30px',md:'30px'},fontWeight:'700'}}>Search by Vehicle</Typography>
        <Typography>Filter your results by entering your Vehicle to ensure you find the parts that fit.</Typography>

        <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row'},gap:{xs:'40px',sm:'40px',md:'20px'},border:'1px solid red',height:{xs:'580px',sm:'600px',md:'120px'},alignItems:'center',marginTop:'30px',backgroundColor:'#FFF5F3'}}>

        <Box sx={{width:{xs:'320px',sm:'320px',md:'120px'},paddingLeft:{xs:'0px',sm:'0px',md:'20px'} ,paddingTop:{xs:'40px',sm:'40px',md:'0px'}}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Year"
        sx={{borderRadius:'0px'}}
        >
        </Select>
      </FormControl>
    </Box>

    <Box sx={{width:{xs:'320px',sm:'320px',md:'150px'} }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Make</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Year"
        sx={{borderRadius:'0px'}}
        >
        </Select>
      </FormControl>
    </Box>

    <Box sx={{width:{xs:'320px',sm:'320px',md:'180px'} }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Model</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Year"
        sx={{borderRadius:'0px'}}
        >
        </Select>
      </FormControl>
    </Box>

    <Box sx={{width:{xs:'320px',sm:'320px',md:'220px'} }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sub model</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Year"
        sx={{borderRadius:'0px'}}
        >
        </Select>
      </FormControl>
    </Box>

    <Box sx={{width:'320px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Engine</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Year"
        sx={{borderRadius:'0px'}}
        >
        </Select>
      </FormControl>
    </Box>
       
       <Button variant='contained' sx={{width:'200px',borderRadius:'2px',backgroundColor:'red'}}>Search</Button>
    </Box>
       
    </Box>
    </>
    
  )
}

export default Block6
