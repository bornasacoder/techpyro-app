import { Box, Button } from '@mui/material'
import React ,{useState} from 'react';
import OtpInput from 'react-otp-input';


export default function Block5() {
  const [otp, setOtp] = useState('');

  const handleChange = (otp)=>{
    setOtp(otp);
  }
  return (
    <div>
        <Box  sx={{fontSize:'18px',display:'block',flexDirection:'column'}}>please enter the OTP sent to  <Button variant='outlined' >Change</Button></Box>
          <Box sx={{width:'100%',margin:'20px 0',display:'block'}}>
          <OtpInput
          shouldAutoFocus
           containerStyle={{width:'100%',gap:'5px',justifyContent:'center'}}
           inputStyle={{fontSize:'18px',width:'40px',height:'35px',borderTop:'none',borderRight:'none',borderLeft:'none'}}
           focusStyle={{outline:'none'}}
           value={otp}
           onChange={handleChange}
            numInputs={6}
            separator={<span> </span>}
          />
          </Box>
          <Button sx={{display:'block',width:'100%'}} variant='contained' >Verify</Button>
    </div>
  )
}
