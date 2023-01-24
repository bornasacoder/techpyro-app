import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography,useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React,{useState} from 'react'
import DoneIcon from '@mui/icons-material/Done';

export default function Block2(props) {

    const [show, setShow] = useState('flex');
    const [hide, setHide] = useState('none');

    const handleDeliver = ()=>{
        props.setActiveStep(1);
        setShow('none');
        setHide('block');
    }
    const handleChange = ()=>{
        props.setActiveStep(0);
        setShow('flex');
        setHide('none');
    }

    const theme = useTheme();
    return (
        <div>
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0 20px',
          background:`${theme.colors.alpha.white[100]}`,border:`1px solid ${theme.colors.alpha.black[10]}`,
          boxShadow:`${theme.colors.shadows.cardSm}`}}>
          <Box>
              <Box sx={{display:'flex',gap:{sm:'20px',xs:'5px'},alignItems:'center'}}>
                  <Box sx={{width:'20px',height:'20px', textAlign:'center',background:`${theme.colors.alpha.black[10]}`}}>2</Box>
                  <Typography sx={{fontSize:'20px',fontWeight:500}}>Delivery Address</Typography>
                  <DoneIcon sx={{display:`${hide}`,color:`${theme.colors.success.dark}`}} fontSize='small'/>
  
              </Box>
              <Box sx={{marginBottom:'10px',display:`${show}`,gap:'10px',alignItems:'center'}}>
                  <Typography variant='span' sx={{fontSize:'15px',fontWeight:500}}>Nitish Kumar</Typography>
                  <Typography variant='span'>+919999999999</Typography>
              </Box>
          </Box>
          <Box sx={{margin:'5px 0',display:`${hide}`}}>
              <Button onClick={handleChange} variant='outlined' sx={{width:{sm:'100px',xs:'80px'},height:'35px',borderRadius:{sm:'18px',xs:'16px'}}}>Change</Button>
          </Box>
      </Box>
      <Box sx={{display:`${show}`,width:'100%'}}>
      <FormControl sx={{width:'100%'}}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <Box sx={{display:'flex',padding:'0 20px',
          background:`${theme.colors.alpha.white[100]}`,border:`1px solid ${theme.colors.alpha.black[10]}`,}}>
            <FormControlLabel sx={{display:'block',width:'5%'}} value="female" control={<Radio />} />
            <Box sx={{display:'flex',width:'95%',flexDirection:'column',}}>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Box sx={{display:'flex',gap:'5px'}}>
                        <Typography variant='span' sx={{fontSize:'15px',fontWeight:500,marginLeft:{sm:'0',xs:'5px'}}}>Nitish Kumar</Typography>
                        <Box sx={{width:'50px',height:'25px',background:`${theme.colors.alpha.black[10]}`,textAlign:'center'}}>Home</Box>
                        <Typography variant='span' sx={{fontSize:'15px',fontWeight:500,display:{sm:'block',xs:'none'}}}>+919999999999</Typography>
                    </Box>
                    <Box>
                        <Button variant='text'>Edit</Button>
                    </Box>
                </Box>
                <Box sx={{marginBottom:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, deserunt.</Box>
                <Box sx={{marginBottom:'20px'}}>
                    <Button variant='contained' onClick={handleDeliver}>Deliver Here</Button>
                </Box>
            </Box>
        </Box>
        <Box sx={{display:'flex',padding:'0 20px',
          background:`${theme.colors.alpha.white[100]}`,border:`1px solid ${theme.colors.alpha.black[10]}`,}}>
            <FormControlLabel sx={{display:'block',width:'5%'}} value="male" control={<Radio />} />
            <Box sx={{display:'flex',width:'95%',flexDirection:'column',}}>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Box sx={{display:'flex',gap:'5px'}}>
                        <Typography variant='span' sx={{fontSize:'15px',fontWeight:500,marginLeft:{sm:'0',xs:'5px'}}}>Nitish Kumar</Typography>
                        <Box sx={{width:'50px',height:'25px',background:`${theme.colors.alpha.black[10]}`,textAlign:'center'}}>Work</Box>
                        <Typography variant='span' sx={{fontSize:'15px',fontWeight:500,display:{sm:'block',xs:'none'}}}>+919999999999</Typography>
                    </Box>
                    <Box>
                        <Button variant='text'>Edit</Button>
                    </Box>
                </Box>
                <Box sx={{marginBottom:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, deserunt.</Box>
                {/* <Box sx={{marginBottom:'20px'}}>
                    <Button variant='contained'>Deliver Here</Button>
                </Box> */}
            </Box>
        </Box>
        <Box sx={{display:'flex',padding:'0 20px',
          background:`${theme.colors.alpha.white[100]}`,border:`1px solid ${theme.colors.alpha.black[10]}`,}}>
            <FormControlLabel sx={{display:'block',width:'5%'}} value="other" control={<Radio />} />
            <Box sx={{display:'flex',width:'95%',flexDirection:'column',}}>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <Box sx={{display:'flex',gap:{sm:'5px',xs:'2px'}}}>
                        <Typography variant='span' sx={{fontSize:'15px',fontWeight:500,marginLeft:{sm:'0',xs:'5px'}}}>Nitish Kumar</Typography>
                        <Box sx={{width:'50px',height:'25px',background:`${theme.colors.alpha.black[10]}`,textAlign:'center'}}>Others</Box>
                        <Typography variant='span' sx={{fontSize:'15px',fontWeight:500,display:{sm:'block',xs:'none'}}}>+919999999999</Typography>
                    </Box>
                    <Box>
                        <Button variant='text'>Edit</Button>
                    </Box>
                </Box>
                <Box sx={{marginBottom:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, deserunt.</Box>
                {/* <Box sx={{marginBottom:'20px'}}>
                    <Button variant='contained'>Deliver Here</Button>
                </Box> */}
            </Box>
        </Box>
        
      </RadioGroup>
    </FormControl>
    </Box>
    <Box sx={{cursor:{md:'pointer',xs:'none'},marginTop:'10px',height:'50px',display:`${show}`,gap:'20px',alignItems:'center',padding:'0 20px',
          background:`${theme.colors.alpha.white[100]}`,border:`1px solid ${theme.colors.alpha.black[10]}`,
          boxShadow:`${theme.colors.shadows.cardSm}`,color:`${theme.colors.primary.main}`}}>
            <Typography sx={{fontSize:'30px'}}>+</Typography>
            <Typography sx={{fontSize:'16px'}}>Add a new address</Typography>
          </Box>
    </div>
    )
}
