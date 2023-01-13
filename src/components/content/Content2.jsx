import { AcUnitOutlined, Apartment, CameraAlt, Collections, CurrencyRupee, EmojiEventsOutlined, Image, LocalMall, MenuBook, MoreHoriz, OpenInFull, OpenInFullOutlined, Power, RemoveRedEyeOutlined, Token, ZoomIn } from "@mui/icons-material";
import { Box, Grid, Menu, Paper, styled, Typography } from "@mui/material";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // bgcolor: "#FFFFFF!important",
  padding: "68px 42px ",
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
  // "&:hover": {
  //   opacity: "0.3",
  // },
  //   [theme.breakpoints.down("sm")]: {
  //     width: "150px",
  //   },
}));
export default function Content2() {
  return (
    <StyleToolbar>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "36px 0px 28px" }}
      >
        <Typography
          variant="h1"
          sx={{
            margin: "0px 0px 26px",
            letterSpacing: "4px",
            fontSize: "48px",
            textAlign: "center",
            fontSize: { md: "48px", sm: "35px", xs: "30px" },
            fontWeight:'600',
            width:{md:"60%",sm:"80%",xs:"100%"}
          }}
        >
          WHY CHOOSE CINNAMON THEME
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
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
            
              }}
            >
              <MenuBook sx={{fontSize:"60px"}}/>
              FOOD MENUS
            </Item>
            <Item>Varieties of Food Menus</Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
            
                
              }}
              >
              <OpenInFullOutlined sx={{fontSize:"60px"}}/>
              FOOD VARIATION
            </Item>
            <Item>Add food item variations</Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
            
                
              }}
              >
              <RemoveRedEyeOutlined sx={{fontSize:"60px"}}/>
              EVENTS
            </Item>
            <Item>Events management Built-in to theme.</Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
            
              }}
            >
              <EmojiEventsOutlined sx={{fontSize:"60px"}}/>
              ON / OFF FOOD ITEMS
            </Item>
            <Item>Easily enable and disable food items without deleting them.</Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
            
              }}
            >
              <CameraAlt sx={{fontSize:"60px"}}/>
              FOOD GALLERY
            </Item>
            <Item>Powerful Food Galleries</Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
            
              }}
            >
              <Menu sx={{fontSize:"60px"}}/>
              4 HEADER TYPES
            </Item>
            <Item>4 Header styles with combination of displaying social header.</Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
            
              }}
            >
              <Image sx={{fontSize:"60px"}}/>
              IMAGE GALLERIES
            </Item>
            <Item>Easily build photo galleries saving precious time.</Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
            
              }}
            >
              <LocalMall sx={{fontSize:"60px"}}/>
              WOOCOMMERCE
            </Item>
            <Item>WooCommerce to build a delivery shop easily.</Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
            
              }}
            >
              <AcUnitOutlined sx={{fontSize:"60px"}}/>
              MULTI-LINGUAL READY
            </Item>
            <Item>Use popular plugin WPML to translate the site to multiple languages</Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
            
              }}
            >
              <Token sx={{fontSize:"60px"}}/>
              QUALITY SUPPORT
            </Item>
            <Item>After sales Support to ensure the your site works 100% through our Support Forum</Item>
          </Grid>
         
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
            
              }}
            >
              <Collections sx={{fontSize:"60px"}}/>
              BULK IMAGE UPLOADING
            </Item>
            <Item>Bulk image uploading and management</Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
            
              }}
            >
              <Apartment sx={{fontSize:"60px"}}/>
              PAGEBUILDER
            </Item>
            <Item>Our Pagebuilder closely works with the theme making it lightweight and easy to build.</Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
            
              }}
            >
              <Power sx={{fontSize:"60px"}}/>
              PREMIUM PLUGINS
            </Item>
            <Item>Packed with Premium plugins</Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
            
              }}
            >
              <ZoomIn sx={{fontSize:"60px"}}/>
              RESPONSIVE LIGHBOX
            </Item>
            <Item>Fully responsive lightbox with zoom functionality. Even works on mobiles.</Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
            
              }}
            >
              <CurrencyRupee sx={{fontSize:"60px"}}/>
              FOOD ITEM CURRENCY
            </Item>
            <Item>Easily change currency symbols via theme options</Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                 
             
            
                // justifyContent:"center"
              }}
            >
              <MoreHoriz sx={{fontSize:"60px"}}/>
              MANY MORE FEATURES INCLUDED
            </Item>
            <Item>View our demo to see the many features and varieties of grids and galleries it supports.</Item>
          </Grid>
         
        
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
