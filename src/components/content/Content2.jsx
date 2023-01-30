import { AcUnitOutlined, Apartment, CameraAlt, Collections, CurrencyRupee, EmojiEventsOutlined, Image, LocalMall, MenuBook, MoreHoriz, OpenInFull, OpenInFullOutlined, Power, RemoveRedEyeOutlined, Token, ZoomIn } from "@mui/icons-material";
import { Box, Button, Grid, Menu, Paper, styled, Typography } from "@mui/material";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF!important",
  padding: "58px 58px ",
  [theme.breakpoints.down("sm")]: {
  padding: "68px 30px ",
        
      },
  [theme.breakpoints.down("md")]: {
  padding: "68px 10px ",
        
      },
  // display: "flex",
  // justifyContent:"space-between",
  gap: 2,
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px!important",
  boxShadow: "none!important",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  padding:"0px!important",
  justifyContent:'center',
  alignItems:'center',
  textAlign:"initial",
  fontWeight:'600',
}));
export default function Content2() {
  return (
    <StyleToolbar  >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // bgcolor: "#F4F4F4!important",
        }}
      >
        <Grid
          container
          sx={{
            bgcolor: "#F4F4F4",
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
          //   xs={{xs:12,sm:6,md:4}}
        >
          <Grid item xs={12}  >
            <Item
              sx={{
                
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/banner/19.jpg"})
   center/cover no-repeat`,  
            height:'320px',
            // width:'350px'
              }}
            >
              <Box data-aos="fade-up" sx={{marginLeft:{xs:"20px"}}}>
              <Typography variant="h2">Play with flexible</Typography>
              <br/>
              <Typography sx={{fontSize:"16px"}}>Multicontrol Smooth Controller, Black Color All<br/> Buttons 
are somooth, Super Shine.</Typography>
<br/>
<Button sx={{color:"#000",border:"1px solid #000",padding:"5px 20px","&:hover":{
  backgroundColor:"#000",color:"#fff"
}}}>BUY NOW</Button>
</Box>
            </Item>
          </Grid>
         
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
