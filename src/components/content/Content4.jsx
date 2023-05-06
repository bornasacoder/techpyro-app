import { Box, Button, styled, Typography,useTheme } from '@mui/material';
import React from 'react'
// import styled from 'styled-components';
const StyleToolbar = styled(Box)(({ theme }) => ({
    // bgcolor: "#FFFFFF!important",
    padding: "68px 68px ",
    display:'flex',
    justifyContent:'flex-start',
    [theme.breakpoints.down("sm")]: {
        justifyContent:'center' 
        },
        background: `url(${"https://img.freepik.com/free-vector/pharmacy-shelf-drugstore-rack-with-medicine-retail-products-shop-showcase-with-pharmaceutical-pills_107791-6663.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
         center/cover no-repeat`,
  }));
export default function Content4() {
    const theme = useTheme();
  return (
    <StyleToolbar>
      <Box>
<Typography  sx={{color:"#fff",fontFamily:'Dancing Script',fontSize:{md:"48px",sm:'38px',xs:"28px"} }} data-aos="zoom-out">
Discover Our
</Typography>
<Typography  sx={{fontFamily:'Dancing Script',fontSize:{md:"88px",sm:'68px',xs:"38px"},color:"#000"}} data-aos="zoom-out">
Medical Store Items
</Typography>
<Box display="flex">
          <Button
            sx={{
              // border: "3px solid #000",
              background: "red",
              color: "white",
              borderRadius: "0px",
              "&:hover": {
                backgroundColor: "#000",
                color: "#ffffff",
              },
              // display: { md: "block", sm: "none", xs: "none" },
            }}
          >
            READ MORE
          </Button>
        </Box>
      </Box>
    </StyleToolbar>
  )
}
