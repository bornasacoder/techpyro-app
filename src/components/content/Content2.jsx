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
                background: `url(${"https://img.freepik.com/free-vector/gradient-furniture-sale-banner-template_23-2148919731.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,  
            height:'320px',
            // width:'350px'
            color:"#fff"
              }}
            >
           Cashback offers
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
                background: `url(${"https://img.freepik.com/premium-vector/social-media-design-post-template-fashion-furniture-offer-sale_698982-2.jpg"})
                center/cover no-repeat`,  
                         height:'320px',
                         color:"#000"
              }}
              >
              Sales 
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
                background: `url(${"https://img.freepik.com/free-psd/furniture-store-poster-template_23-2148795316.jpg?w=740&t=st=1685790417~exp=1685791017~hmac=c4955f8b42c0c160c647194922aa4765a1a1838f53fae5f476586e3a074228d2"})
                center/cover no-repeat`,  
                         height:'320px',
              }}
              >
            Free delivery
            </Item>
          </Grid>
         
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
