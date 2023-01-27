import { Box, Typography,useTheme,styled, Slider } from '@mui/material'
import React from 'react'
import { CurrencyRupee } from "@mui/icons-material";
import StarRateIcon from '@mui/icons-material/StarRate';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { Link } from 'react-router-dom';

const Container = styled(Box)(({ theme }) => ({
    margin:'20px 100px',
    "@media (max-width: 960px)": {
        margin:'20px 70px'
    },
    "@media (max-width: 800px)": {
        margin:'20px 20px'
    },
  }));

const Image = styled("img")(({ theme }) => ({
    width:'100%',
    height: "100%",
    objectFit: "cover",
    "@media (max-width: 960px)": {
      width: "180px",
    },
    "@media (max-width: 600px)": {
      width: "100%",
      height: "200px"
    },
  }));

export default function Block2() {
    const theme = useTheme();

    const marks = [
        {
          value: 0,
          label: 'order confirmed',
        },
        {
          value: 33,
          label: 'shipped ',
        },
        {
          value: 66,
          label: 'out for Delivery',
        },
        {
          value: 100,
          label: 'Delivered',
        },
      ];
  return (
    <Container sx={{display:'flex',justifyContent:'space-between',flexDirection:{sm:'row',xs:'column'},gap:'20px',padding:{md:'20px 30px',sm:'20px 20px',xs:'0'},background:`${theme.colors.alpha.white[100]}`,boxShadow:`${theme.colors.shadows.card}`}}>
        <Box>
            <Image src="/images/pic3.jpg" alt='orders'/>
        </Box>
        <Box sx={{display:'flex',paddingBottom:{sm:'0',xs:'20px'}}}>
        <Box sx={{display:{sm:'flex',xs:'block'}}}>
        <Box sx={{display:{sm:'block',xs:'flex'},paddingTop:{sm:'20px',xs:'0'}}}> 
        <Box sx={{marginLeft:{sm:'0',xs:'25px'}}}>
        <Typography sx={{ fontSize: {sm:"18px",xs:'16px'} }}>
              Restaurant Website template
            </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { lg: "20px", md: "18px", sm: "16px", xs: "15px" },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CurrencyRupee sx={{ fontSize: "14px" }} /> 1999
              </Typography>
              </Box>
            <Box sx={{display:{md:'flex',xs:'none'},width:'350px',alignItems:'center',marginLeft:'20px',marginTop:'40px',padding:'0 5%'}}>
            <Slider
                size="small"
                disabled
                aria-labelledby="track-false-range-slider"
                getAriaValueText={marks.label}
                defaultValue={[0,33,66,100]}
                marks={marks}

                sx={{color:`${theme.colors.success.dark}`}}
    
            />
        </Box>
        
        <Box sx={{display:{md:'none',sm:'block',xs:'none'},}}>
            <Link to={'/ordersDetails'} style={{marginTop:'20px',fontSize:'14px',textDecoration:'none',display:'flex',gap:'10px',color:`${theme.colors.primary.dark}`,fontWeight:500}}> <StarRateIcon /> Rate and Review Product</Link>
            <Link to={'/ordersDetails'} style={{marginTop:'20px',fontSize:'14px',textDecoration:'none',display:'flex',gap:'10px',color:`${theme.colors.primary.dark}`,fontWeight:500}}> <HelpCenterIcon fontSize='medium'/> Need Help</Link>
        </Box>
        </Box>
        <Box sx={{width:'200px',display:{md:'none',sm:'flex',xs:'none'},padding:'10px 0'}}>
            <Slider
                orientation='vertical'
                size="small"
                disabled
                aria-labelledby="track-false-range-slider"
                getAriaValueText={marks.label}
                defaultValue={[0,33,66,100]}
                marks={marks}

                sx={{color:`${theme.colors.success.dark}`}}
    
            />
        </Box>
        <Box sx={{display:{md:'none',sm:'none',xs:'block'},paddingLeft:'20px'}}>
            <Link to={'/ordersDetails'} style={{marginTop:'20px',fontSize:{md:'17px',xs:'14px'},textDecoration:'none',display:'flex',gap:'10px',color:`${theme.colors.primary.dark}`,fontWeight:500}}> <StarRateIcon sx={{fontSize:{md:'30px',xs:'25px'}}}/> Rate and Review Product</Link>
            <Link to={'/ordersDetails'} style={{marginTop:'20px',fontSize:{md:'17px',xs:'14px'},textDecoration:'none',display:'flex',gap:'10px',color:`${theme.colors.primary.dark}`,fontWeight:500}}> <HelpCenterIcon sx={{fontSize:{md:'30px',xs:'25px'}}}/> Need Help</Link>
        </Box>
        </Box>
        <Box sx={{display:{sm:'none',xs:'flex',},alignItems:'center',margin:'10px 20px 10px 5px'}}>
            <Slider
                orientation='vertical'
                size="small"
                disabled
                aria-labelledby="track-false-range-slider"
                getAriaValueText={marks.label}
                defaultValue={[0,33,66,100]}
                marks={marks}

                sx={{color:`${theme.colors.success.dark}`}}
    
            />
        </Box>
        </Box>
        <Box sx={{display:{md:'block',sm:'none',xs:'none'},width:'300px',paddingLeft:'20px'}}>
            <Link to={'/ordersDetails'} style={{marginTop:'20px',fontSize:{md:'17px',xs:'14px'},textDecoration:'none',display:'flex',gap:'10px',color:`${theme.colors.primary.dark}`,fontWeight:500}}> <StarRateIcon sx={{fontSize:{md:'30px',xs:'25px'}}}/> Rate and Review Product</Link>
            <Link to={'/ordersDetails'} style={{marginTop:'20px',fontSize:{md:'17px',xs:'14px'},textDecoration:'none',display:'flex',gap:'10px',color:`${theme.colors.primary.dark}`,fontWeight:500}}> <HelpCenterIcon sx={{fontSize:{md:'30px',xs:'25px'}}}/> Need Help</Link>
        </Box>
    </Container>
  )
}
