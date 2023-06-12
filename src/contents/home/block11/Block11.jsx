import { Box, Button, Checkbox, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Block11() {
  const handleClick1 = () =>{
    setText1(true)
    console.log(text1);
  }
  const handleClick2 = () =>{
    setText2(true)

  }
  const handleClick3 = () =>{
    setText3(true)
    
  }
  const handleClick4 = () =>{
    setText4(true)
  
  }
  const handleChange = (event) =>{
    setAge(event.target.value)
  }
  const handleChange2 = (e) =>{
    setCountry(e.target.value);
  }

  const[text1, setText1] = useState(false);
  const[text2 , setText2] = useState(false);
  const[text3 , setText3] = useState(false);
  const[text4 , setText4] = useState(false);

  const[age , setAge] = useState('');
  const[country , setCountry] = useState('India')
 
  return (
    <Box sx={{width:'100%',margin:'20px 0px',display:'flex',justifyContent:'center',background:'#fff',padding:'10px 0px'}}>
      
      <Box sx={{width:{xs:'95%',sm:'95%',md:'95%', lg:'76%',}}}>
        
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%',}}>
          <Typography sx={{fontFamily:'Dancing Script',fontSize:{md:'55px',xs:'25px'},color:'#222222',margin:'20px 0px'}}>Get Your Custom Itinerary with a Quote</Typography>
          <Typography sx={{fontSize:{md:'18px',xs:'16px'},opacity:'0.7'}}>Already got a hotel plan? Tell us by sending a quick inquiry below and a hotel specialist will be in touch within 24 hours to help you plan your treatment, individually</Typography>
          <Typography sx={{fontSize:{md:'18px',xs:'16px'},opacity:'0.7'}}> focusing on your tastes and interests. This inquiry is not a commitment for booking. our facilities are awsome and great for your choice,injoyfull</Typography>
        </Box>

        <Box sx={{display:'flex',width:{xs:'100%',sm:'100%',md:'100%', lg:'100%'}, flexDirection:{xs:'column',sm:'column',md:'row'} ,margin:'10px 0px'}}>
          
          <Box sx={{width:{xs:'100%',sm:'100%',md:'50%', lg:'50%',}}}>
            <Box>
              <h3>Arrival date</h3>
              <input style={{height:'50px',width:'99.5%',borderRadius:'7px',padding:'10px'}} type="date"
                placeholder='date'/>
            </Box>
            <Box sx={{margin:'10px 0px ',width:{xs:'100%',sm:'100%',md:'50%',lg:'99.5%'}}}>
              <h3>Hotel level:</h3>
              <Box sx={{display:'flex',flexDirection:{xs:'flex-wrap',sm:'flex-wrap', md:'', } ,gap:'7px',width:'100%'}}>
                <Button sx={{width:'140px'}} variant='contained'  color={text1?"error":'secondary'} onClick={handleClick1}> Deluxe 5 Stars </Button>
                <Button variant='contained'  color={text2?"error":'secondary'} onClick={handleClick2}>  5 Stars </Button>
                <Button variant='contained'  color={text3?"error":'secondary'} onClick={handleClick3}> 4 Stars </Button>
                <Button variant='contained'  color={text4?"error":'secondary'} onClick={handleClick4}> 3 Stars </Button>
              </Box>
              <Box sx={{margin:'10px 0px',width:'100%'}}>
                <h3>Email</h3>
                <input style={{height:'50px',width:'100%',borderRadius:'7px',padding:'10px'}} type="email"
                 placeholder='E-mail'/>
              </Box>

            </Box>
          </Box>

          <Box sx={{width:{xs:'100%',sm:'100%',md:'50%', lg:'50%'}}}>
              <Box >
                <h3>Number of travelers (age 12+)</h3>
                <FormControl sx={{width:'99.5%',}}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select style={{height:'50px',backgroundColor:'#fff'}}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={8}>8</MenuItem>
                      <MenuItem value={9}>9</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={11}>11</MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={13}>13</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={15}>15</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      
                    </Select>
                </FormControl>
              </Box>
              <Box sx={{margin:'10px 0px'}}>
                <h3>Full Name:</h3>
                <input style={{height:'50px',width:'100%',borderRadius:'7px',padding:'10px'}} type="text"
                placeholder='Full Name'/>
              </Box>
              <Box sx={{margin:'10px 0px'}}>
                <h3>Phone:</h3>
                <input style={{height:'50px',width:'100%',borderRadius:'7px',padding:'10px'}} type="number"
                placeholder='Phone' />
              </Box>
          </Box>

        </Box>

         <Box sx={{background:'#FC5B62',color:'#fff',display:'flex',justifyContent:'center',height:{xs:'70px',sm:'70px',md:'50px' ,lg:'40px'},borderRadius:'5px',width:'100%'}}>
           <Typography sx={{fontSize:{md:'18px',xs:'16px'},padding:'10px'}}> A little more details will make a difference.</Typography>
         </Box>

         <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:''}}}>
              <Box sx={{width:{xs:'100%',sm:'100%',md:'50%', lg:'50%'}}}>
                  <Box sx={{marginTop:{xs:'7px'}}}>
                    <h3>Nationality</h3>
                    <FormControl sx={{width:'99.5%',}}>
                        <InputLabel  id="demo-simple-select-label">India</InputLabel>
                        <Select style={{height:'50px',backgroundColor:'#fff',}}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={country}
                          label="country"
                          onChange={handleChange2}
                        
                        >
                          <MenuItem value={'India'}>India</MenuItem>
                          <MenuItem value={'China'}>China</MenuItem>
                          <MenuItem value={'USA'}>USA</MenuItem>
                          <MenuItem value={'Canada'}>Canada</MenuItem>
                        </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{margin:'10px 0px'}}>
                    <h3>Tour Budget (per person) :</h3>
                    <input style={{height:'50px',width:'99.5%',borderRadius:'7px',padding:'10px'}} type="number"
                    placeholder='Tour Budget' />
                  </Box>
              </Box>
              
              <Box sx={{width:{xs:'100%',sm:'100%',md:'50%', lg:'50%'}}}>
                <Box sx={{margin:'10px 0px',}}>
                  <h3>Your Age:</h3>
                  <input style={{height:'50px',width:'99.5%',borderRadius:'7px',padding:'10px'}} type="number"
                  placeholder='Your age' />
                </Box>
                <Box sx={{margin:'10px 0px '}}>
                  <h3>Newsletter:</h3>
                    <Box sx={{display:'flex', gap:'7px',marginTop:{xs:'7px',sm:''}}}>
                      <Button variant='contained'  color={text1?"error":'secondary'} onClick={handleClick1}> Yes </Button>
                      <Button variant='contained'  color={text2?"error":'secondary'} onClick={handleClick2}> No</Button>
                    </Box>
                  </Box>
              </Box>
         </Box>

         <Box>
            <h3>Your Treatment Ideas: </h3>
            <textarea style={{width:'100%',padding:'7px',marginTop:'5px',border:'1px solid'}} name="" id="" cols="100" rows="6" placeholder='trip ideas'></textarea>
         </Box>

          <Box sx={{margin:'10px 0px',display:'flex',alignItems:'center'}}>
           <Checkbox {...label} />
          <Typography sx={{fontSize:'18px'}}>* I have read and accept the privacy policy</Typography>
          </Box>

          <Button color='error' variant='contained'>Send inquiry</Button>

          <Typography sx={{marginTop:{xs:'10px',sm:'0px',}}}>All information provided will be kept securely in accordance with our privacy policy.</Typography>
      </Box>

    </Box>
  )
}
