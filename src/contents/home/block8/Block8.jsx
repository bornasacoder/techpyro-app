import React from 'react'
import { Button, Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import "./block8.css"

export default function Block8({block8Data}) {
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:'10px',margin:'15px 0px',background:'#fff',padding:'30px'}}>
        <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row',xl:'row'} ,justifyContent:'center',gap:{xs:'20px',sm:'25px',md:'45px',lg:'45px',xl:'80px'},background:'#fff'}}>
              {block8Data.data.map((item ,id)=>(
                  <Card key={id} sx={{ width:{xs:'360px', sm:'400px', md:'230px',lg:'300px',xl:'350px'},height:{xs:'150px', sm:'150px',md:'150px', lg:'150px',xl:'170px'},margin:'80px 0px',padding:'20px',position:'relative',boxShadow:'1px 1px 1.5px rgba(0,0,0,0.4)'}}> 
                      <Box sx={{ display:'flex',justifyContent:'center',position:'absolute',top:'-50px',zIndex:'10', left:"38%"}}>
                        <Box sx={{height:'90px',width:'90px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',boxShadow:'1px 1px 5px rgba(0,0,0,0.5)'}}>
                              <Box sx={{height:'70px',width:'70px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center', boxShadow:'1px 1px 5px rgba(0,0,0,0.5)'}}>
                                <img style={{height:'25px',width:'25px'}} src={item.image} alt="" />
                              </Box>
                          </Box>
                      </Box>
                      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
                        <Typography sx={{fontWeight:'600',fontSize:'19px'}}>{item.text}</Typography>
                      </Box>
                  </Card>  
                ))}
        </Box>
        <Button color='error' variant='contained' sx={{margin:{xs:'10px 0px',sm:'10px 0px',md:'0px 0px'},padding:'15px'}}>Start your journey Now</Button>
    </Box>
  )
}
