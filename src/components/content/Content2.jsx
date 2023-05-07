import { AcUnitOutlined, Apartment, CameraAlt, Collections, CurrencyRupee, EmojiEventsOutlined, Image, LocalMall, MenuBook, MoreHoriz, OpenInFull, OpenInFullOutlined, Power, RemoveRedEyeOutlined, Token, ZoomIn } from "@mui/icons-material";
import { Box, Grid, Menu, Paper, styled, Typography } from "@mui/material";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // bgcolor: "#FFFFFF!important",
  padding: "68px 68px ",
  [theme.breakpoints.down("sm")]: {
  padding: "68px 30px ",
        
      },
  [theme.breakpoints.down("md")]: {
  padding: "68px 20px ",
        
      },
  // display: "flex",
  // justifyContent:"space-between",
  gap: 2,
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px!important",
  boxShadow: "none!important",
  backgroundColor:"#F4F4F4!important",
  textAlign: "center",
  padding: "20px 0px!important",
  fontSize: "18px",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",

}));
export default function Content2() {
  return (
    <StyleToolbar  >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "36px 0px 28px",gap:"10px" }}
      >
        <Typography
          sx={{
            letterSpacing: "4px",
            textAlign: "center",
            fontFamily: "Dancing Script",
            fontSize: { md: "58px", sm: "50px", xs: "28px" },
            fontWeight: "500",
            color:"red"
          }}
        >
      Special 
        </Typography>
        <Typography sx={{
            letterSpacing: "4px",
            textAlign: "center",
            fontFamily: "Dancing Script",
            fontSize: { md: "58px", sm: "50px", xs: "28px" },
            fontWeight: "500",
          }}>
         Offers
        </Typography>
      </Box>
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
          rowSpacing={2}
          sx={{
            bgcolor: "#F4F4F4",
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          //   xs={{xs:12,sm:6,md:4}}
        >
          <Grid item xs={12} sm={4} md={4} data-aos="zoom-in">
            <Item
              sx={{
                display:'flex',
                justifyContent:'flex-end',
                alignItems:'center',
                fontSize:'20px',
                fontWeight:'700',
                background: `url(${"https://img.freepik.com/free-vector/flat-autumn-sale-instagram-stories-collection-with-photo_23-2149042350.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,  
            height:'320px',
            // width:'350px'
            color:"#fff"
              }}
            >
            Seasonal promotions
            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={4} data-aos="zoom-in">
            <Item
              sx={{
                display:'flex',
                justifyContent:'flex-end',
                alignItems:'center',
                fontSize:'20px',
                fontWeight:'700',
                background: `url(${"https://img.freepik.com/premium-vector/download-premium-flat-illustration-discount-offer_203633-4924.jpg?w=740"})
                center/cover no-repeat`,  
                         height:'320px',
                         color:"#000"
              }}
              >
              Student discounts
            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={4} data-aos="zoom-in">
            <Item
              sx={{
                display:'flex',
                justifyContent:'flex-end',
                alignItems:'center',
                fontSize:'20px',
                fontWeight:'700',
                color:"#fff",
                background: `url(${"https://img.freepik.com/free-vector/online-payment_23-2147671254.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
                center/cover no-repeat`,  
                         height:'320px',
              }}
              >
            Financing options 
            </Item>
          </Grid>
         
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
