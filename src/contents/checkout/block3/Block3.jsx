import { Button, styled, Typography,useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React,{useState} from 'react'
import DoneIcon from '@mui/icons-material/Done';
import Item from './item/Item';
import {CurrencyRupee} from '@mui/icons-material'


const Button1 = styled(Box)(({theme})=>({
  position:'static',
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  background:`${theme.colors.alpha.white[100]}`,
  boxShadow:`${theme.colors.shadows.card}`,
  padding:'0 20px',
  zIndex:1,
  [theme.breakpoints.down('sm')]:{
    position:'fixed',
    bottom:0,
    left:0,
    right:0,
    background:`${theme.header.background}`
  }
}))

export default function Block3(props) {
    const theme = useTheme();
    const [hide, setHide] = useState('none')

    const handleContinue = ()=>{
        props.setActiveStep(2);
        setHide('block');
        console.log(props.scollToRef);
        props.scollToRef.current.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"});
    }

  return (
    <Box>
        <Box sx={{height:'50px',display:'flex',gap:'20px',alignItems:'center',padding:'0 20px',
        background:`${theme.colors.alpha.white[100]}`,border:`1px solid ${theme.colors.alpha.black[10]}`,
        boxShadow:`${theme.colors.shadows.cardSm}`}}>
                <Box sx={{width:'20px',height:'20px', textAlign:'center',background:`${theme.colors.alpha.black[10]}`}}>3</Box>
                <Typography sx={{fontSize:'20px',fontWeight:500}}>Order Summary</Typography>
                <DoneIcon sx={{color:`${theme.colors.success.dark}`,display:`${hide}`}} fontSize='small'/>
        </Box>
        <Box sx={{width:'100%',display:(`${props.activeStep}`==='1'||`${props.activeStep}`==='2')?'block':'none'}}>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Item/>
          <Button1>
            <Box sx={{marginTop:'13px',}}>
              <Typography sx={{fontSize:'25px',color:{md:`${theme.colors.alpha.black[100]}`,xs:`${theme.header.textColor}`}}}><CurrencyRupee sx={{fontSize:"20px",marginLeft:'10px'}}/>9999</Typography>
              <Typography sx={{fontSize:'18px',color:{md:`${theme.colors.alpha.black[100]}`,xs:`${theme.header.textColor}`},textDecoration:'line-through'}}><CurrencyRupee sx={{fontSize:"14px",marginLeft:'10px'}}/>49999</Typography>
            </Box>
            <Button disabled={`${props.activeStep}`==='2'?true:false} onClick={handleContinue} sx={{marginTop:'13px',width:'150px',background:`${theme.colors.gradients.blue1}`,color:`${theme.colors.alpha.white[100]}`}}>Continue</Button>
          </Button1>
      </Box>
    </Box>
  )
}
