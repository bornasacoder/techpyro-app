import { Box, Card, Divider, Typography ,useTheme} from '@mui/material'
import React from 'react'
import {CiDiscount1 }from 'react-icons/ci'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {CurrencyRupee} from '@mui/icons-material'
import Block3 from '../block3/Block3';
import { useSelector } from 'react-redux';
import { cartValue } from '../../../redux/cartRedux';

export default function Block2() {
  const cartVal = useSelector(cartValue);
  const theme = useTheme();
  return (
    <Box sx={{width:{md:'25%',xs:'100%'},position:{md:'fixed',xs:'static'},right:{md:'9%'}}}>
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center', height:'60px',padding:'0 25px',borderRadius:'5px',background:`${theme.colors.alpha.white[100]}`,cursor:{md:'pointer',xs:'none'},fontSize:'20px', marginBottom:'20px'}}>
        <Box sx={{display:'flex',alignItems:'center',}}>
          <CiDiscount1/>
          <Typography sx={{paddingLeft:'10px',fontSize:'18px'}}>Check For Coupons</Typography>
        </Box>
        <KeyboardArrowRightIcon/>
      </Box>
      <Card sx={{padding:'20px'}}>
          <Box sx={{display:'flex',height:'40px',justifyContent:'space-between',alignItems:'center'}}>
              <Typography>Total Cart Price</Typography>
              <Typography><CurrencyRupee sx={{fontSize:"14px"}}/>{cartVal.totalCart}</Typography>
          </Box>
          <Box sx={{display:'flex',height:'40px',justifyContent:'space-between',alignItems:'center'}}>
              <Typography>Product Discount(s)</Typography>
              <Typography sx={{color:`${theme.colors.success.main}`}}>-<CurrencyRupee sx={{fontSize:"14px"}}/>{cartVal.totalCart - cartVal.total}</Typography>
          </Box>
          <Box sx={{display:'flex',height:'40px',justifyContent:'space-between',alignItems:'center'}}>
              <Typography>Shipping Charge</Typography>
              <Typography sx={{color:`${theme.colors.success.main}`,fontWeight:500}}>FREE</Typography>
          </Box>
          <Divider sx={{marginTop:'10px'}}/>
          <Box sx={{display:'flex',height:'60px',justifyContent:'space-between',alignItems:'center'}}>
              <Typography sx={{fontSize:'18px',fontWeight:500}}>Total Amount</Typography>
              <Typography sx={{fontSize:'18px',fontWeight:500}}><CurrencyRupee sx={{fontSize:"14px"}}/>{cartVal.total}</Typography>
          </Box>
          <Divider sx={{marginBottom:'10px'}}/>
          <Typography sx={{color:`${theme.colors.success.main}`}}>You will save <CurrencyRupee sx={{fontSize:"14px"}}/>{cartVal.totalCart - cartVal.total} on this order</Typography>
          <Box sx={{display:{md:'block',xs:'none'}}}>
            <Block3/>
          </Box>
      </Card>
      
    </Box>
  )
}
