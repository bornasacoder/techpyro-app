import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Block9() {
  return (

     <Box sx={{marginTop:{xs:'20px',sm:'30px',md:''} ,width:'100%',background:{xs:'#FC5B62',sm:'#FC5B62',md:'#fff',lg:'#fff'} ,display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'}}}>
            <Box sx={{width:{xs:'100%',sm:'100%', md:'80%' , lg:'60%'},height:'100%',background:'#FC5B62',clipPath:{ md:'polygon(0 0, 100% 0%, 80% 100%, 0% 100%)'}}}>
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:' 0px 10px'}}>
                    <Typography sx={{color:'#fff',margin:'10px 0px',fontSize:{md:'45px',xs:'25px'}}}>Sign up to our newsletter</Typography>
                    <Typography sx={{color:'#fff',fontSize:{md:'18px',xs:'16px'}}}>Get latest deals, giveaways & tips delivered straight to your inbox once or twice</Typography>
                    <Typography sx={{color:'#fff',fontSize:{md:'18px',xs:'16px'}}}> a month! You can unsubscribe at any time. Your information will be treated with</Typography>
                    <Typography sx={{color:'#fff',fontSize:{md:'18px',xs:'16px'}}}>respect.</Typography>
                </Box>
            </Box>

            <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',height:'auto',width:{xs:'90%',sm:'80%',md:'80%', lg:'50%'}}}>
                    <Box component="form"sx={{'& > :not(style)': { m: 1, width: '35ch' }, display:'flex',flexDirection:'column',}}
                    noValidate
                    autoComplete="off"
                    >
                    <Typography sx={{color:{xs:'#fff' ,sm:'#fff',md:'#222',lg:'#222222'},fontSize:{md:'18px',xs:'16px'}}}>Enter your E-mail id</Typography>
                    <TextField id="outlined-basic" sx={{background:{xs:'#fff',sm:'#fff',md:'',lg:'',fontSize:{md:'20px',xs:'16px'}}}} label=" Enter your email address here" variant="outlined" />
                    <Button sx={{background:'#FC5B62',color:'#fff',} } variant='outlined'>Get Started</Button>
                    </Box>
            </Box>
     </Box>
    
  )
}
