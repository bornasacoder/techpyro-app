import React from 'react'
import { styled } from '@mui/styles'
import { Box, Button, Card, Typography } from '@mui/material';
import { Add, CurrencyRupee, Star } from '@mui/icons-material';

const ImageContainer = styled(Card)(({ theme }) => ({
    width: '10vw',
    height: '150px',
    "@media (max-width: 1200px)": {
        width: "15vw",
        height: "150px",
    },
    [theme.breakpoints.down('md')]: {
        width: "15vw",
        height: "150px",
    },
    "@media (max-width: 800px)": {
        width: "20vw",
        height: "200px",
    },
    [theme.breakpoints.down('sm')]: {
        width: "40vw",
        height: "220px",
    },

}));
export default function Item({ posterLinks }) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }} >
            <ImageContainer sx={{ margin: '5px 10px', borderRadius: '5px' }}>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={posterLinks.url} alt="card" />
            </ImageContainer>
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%", margin:'0px 10px 0px 10px'}} >
                <Typography sx={{fontSize:"16px",fontWeight:"500", marginBottom:"5px"}} >{posterLinks.name}</Typography>
                <Box sx={{display:"flex", alignItems:"center", gap:"5px", marginBottom:"5px"}} >
                <Typography sx={{ display: "flex", justifyContent: 'center', alignItems: "center", background: "green", color: "white", width: { lg: "40px", xs: "45px" }, height: "25px", borderRadius: "5px", fontSize: { md: "14px", sm: "12px" } }} >4.2 <Star sx={{ fontSize: { md: "13px", xs: "1rem" }, color: "white", paddingLeft: "3px" }} /> </Typography>
                <Typography>(15)</Typography>
                </Box>
                <Typography sx={{ display: "flex", alignItems: "center", fontSize: "16px", fontWeight: "600", marginBottom:"5px" }} > <CurrencyRupee sx={{ fontSize: "16px" }} /> {posterLinks.Price}/-</Typography>
                <Button endIcon={<Add />} color="success" variant='contained' size="small" sx={{ width: "90%", height: "40px",borderRadius:"none", fontSize:"16px" }} >ADD</Button>
            </Box>
        </Box>
    )
}