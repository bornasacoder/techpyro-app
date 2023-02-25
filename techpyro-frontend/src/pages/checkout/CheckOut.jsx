import { Box ,Stepper,Step,StepLabel} from '@mui/material'
import React,{useRef, useState} from 'react'
import Block1 from '../../contents/checkout/block1/Block1'
import Block2 from '../../contents/checkout/block2/Block2'
import Block3 from '../../contents/checkout/block3/Block3'
import Block4 from '../../contents/checkout/block4/Block4'
import BlockRight from '../../contents/checkout/blockRight/BlockRight'
import Navbar from '../../contents/checkout/navbar/Navbar'

export default function CheckOut() {
  const [activeStep, setActiveStep] = useState(0);
  const scollToRef = useRef();
  return (
    <Box sx={{position:'relative'}}>
        <Navbar/>
        <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column'},width:'100%',marginTop:'80px'}}>
            <Box sx={{display:'flex',flexDirection:'column',gap:'20px',width:{md:'50%',xs:'90%'},margin:{md:'0 0 0 150px',sm:'0 50px',xs:'0 20px'}}}>
            <Box sx={{display:{sm:'none',xs:'block'} }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              <Step>
                <StepLabel>Address</StepLabel>
              </Step>
              <Step>
                <StepLabel>Order Summary</StepLabel>
              </Step>
              <Step>
                <StepLabel>Payment</StepLabel>
              </Step>
            </Stepper>
            </Box>
                <Block1/>
                <Block2 setActiveStep={setActiveStep}/>
                <Block3 activeStep={activeStep} setActiveStep={setActiveStep} scollToRef={scollToRef}/>
                <Block4 activeStep={activeStep} setActiveStep={setActiveStep} ref={scollToRef}/>
            </Box>
            <Box sx={{display:{sm:'block',xs:'none'} ,margin:{md:'0',sm:'0 50px',xs:'0 20px'}}}>
                <BlockRight/>
            </Box>
            
        </Box>
    </Box>
  )
}

