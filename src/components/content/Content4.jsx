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
        background: `url(${"https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&w=600"})
         center/cover no-repeat`,
  }));
export default function Content4() {
  return (
    <StyleToolbar>
      <Box>
<Typography  sx={{color:"red",fontFamily:'Dancing Script',fontSize:{md:"48px",sm:'38px',xs:"28px"} }} data-aos="zoom-out">
Discover Our
</Typography>
<Typography  sx={{fontFamily:'Dancing Script',fontSize:{md:"88px",sm:'68px',xs:"38px"},color:"#fff"}} data-aos="zoom-out">
CLOTH ITEMS
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
