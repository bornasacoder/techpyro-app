import { Box, Button, styled, Typography, useTheme } from '@mui/material'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartValue } from '../../../redux/cartRedux';

const Container = styled(Box)(({theme})=>({
    width:'100%',
    height:'70vh',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    gap:'20px',
    background: theme.colors.alpha.white[100],
}))
function Block() {
    const cart = useSelector(cartValue)
    const theme = useTheme();
    const navigate = useNavigate();
    const handleButton = ()=>{
        navigate('/');
    }
  return (
    <Container>
        <Box>
            <ShoppingCartOutlinedIcon sx={{fontSize:{md:'200px',sm:'170px',xs:'150px'},color:`${theme.colors.alpha.black[30]}`}}/>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <Typography sx={{fontSize:{md:'30px',sm:'26px',xs:'23px'}}}>Your Shopping Cart is Empty</Typography>
           {cart.quantity ===0 ? null: <Typography sx={{fontSize:'18px',textAlign:'center'}}>Please <Link to={'/login'} style={{color:`${theme.colors.success.dark}`,textDecoration:'none',margin:'0 3px',fontSize:'20px'}}>Login</Link> To Check Saved Products</Typography>}
        </Box>
        <Button onClick={handleButton} sx={{background:`${theme.colors.warning.main}`,marginTop:'10px',borderRadius:'5px',":hover":{background:`${theme.colors.warning.main}`}}} variant='contained'>
            Continue Shopping
        </Button>

    </Container>
  )
}

export default Block