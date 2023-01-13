import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // "&:hover": {
  //   opacity: "0.3",
  // },
  //   [theme.breakpoints.down("sm")]: {
  //     width: "150px",
  //   },
}));
export default function Content3() {
  return (
    <StyleToolbar>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ padding: "36px 0px 28px" }}
      >
        <Typography
          variant="h1"
          sx={{
            margin: "0px 0px 26px",
            letterSpacing: "12px",
            textAlign: "center",
            fontSize: { md: "48px", sm: "35px", xs: "30px" },
            fontWeight: "600",
            width: { md: "60%", sm: "80%", xs: "100%" },
          }}
        >
          ONEPAGE DEMO
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
          textAlign: "center",
          bgcolor: "#F4F4F4!important",
        }}
      >
        <Grid
          container
          rowSpacing={2}
          sx={{
            bgcolor: "#F4F4F4",
            justifyContent: "space-between",
            display: "flex",
            textAlign: "center",
            width: { md: "40%", sm: "80%", xs: "100%" },
          }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          //   xs={{xs:12,sm:6,md:4}}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"/images/category/splitmenu-demo-screen.jpg"})
   center/cover no-repeat`,
                height: "300px",
              }}
            >
            </Item>
            <Item>clasic demo</Item>
          </Grid>
        </Grid>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ padding: "36px 0px 28px" }}
      >
        <Typography
          variant="h1"
          sx={{
            margin: "0px 0px 26px",
            letterSpacing: "12px",
            textAlign: "center",
            fontSize: { md: "48px", sm: "35px", xs: "30px" },
            fontWeight: "600",
            width: { md: "60%", sm: "80%", xs: "100%" },
          }}
        >
          ONEPAGE DEMO
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
          textAlign: "center",
          bgcolor: "#F4F4F4!important",
        }}
      >
        <Grid
          container
          rowSpacing={2}
          sx={{
            bgcolor: "#F4F4F4",
            justifyContent: "space-between",
            display: "flex",
            textAlign: "center",
            width: { md: "40%", sm: "80%", xs: "100%" },
          }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          //   xs={{xs:12,sm:6,md:4}}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"/images/category/onepage-demo-screen.jpg"})
   center/cover no-repeat`,
                height: "300px",
              }}
            >
              Techpyro
            </Item>
            <Item>Photojounarlist demo
                <Typography variant="span " sx={{color:"red",fontSize:"14px"}}>NEW DEMO</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ padding: "36px 0px 28px" }}
      >
        <Typography
          variant="h1"
          sx={{
            margin: "0px 0px 26px",
            letterSpacing: "12px",
            textAlign: "center",
            fontSize: { md: "48px", sm: "35px", xs: "30px" },
            fontWeight: "600",
            width: { md: "60%", sm: "80%", xs: "100%" },
          }}
        >
          FOOD DELIVERY
        </Typography>
        <Typography variant="p" sx={{ textAlign: "center",fontSize:"18px" }}>
          Use WooCommerce to build a delivery service
        </Typography>
      </Box>
     
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
          textAlign: "center",
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
            textAlign: "center",
            width: { md: "30%", sm: "80%", xs: "100%" },
          }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          //   xs={{xs:12,sm:6,md:4}}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"/images/category/woocommerce.jpg"})
   center/cover no-repeat`,
                height: "30px",
              }}
            >
            </Item>
            <Item >WooCommerance Powered
                <Typography variant="p " sx={{fontSize:"14px", textAlign: "center",}}>Easily setup a delivery service using WooCommerce</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ padding: "36px 0px 28px" }}
      >
        <Typography
          variant="h1"
          sx={{
            margin: "0px 0px 26px",
            letterSpacing: "12px",
            textAlign: "center",
            fontSize: { md: "48px", sm: "35px", xs: "30px" },
            fontWeight: "600",
            // width: { md: "90%", sm: "80%", xs: "100%" },
          }}
        >
          REALIABLE & SUPPORTED
        </Typography>
        <Typography variant="p" sx={{ alignItems: "center",fontSize:"18px" }}>
        Our technical support forum ensures your theme will be 100% functional.
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        // textAlign='center'
        alignItems='center'
        
        flexDirection="column"
        sx={{ padding: "36px 0px 28px" }}
      >
        <Box display='flex'>
        <Typography
          variant="h1"
          sx={{
            margin: "0px 0px 26px",
            letterSpacing: "12px",
            textAlign: "center",
            fontSize: { md: "48px", sm: "35px", xs: "30px" },
            fontWeight: "650",
            // width: { md: "90%", sm: "80%", xs: "100%" },
          }}
        >
         GET CINNAMON RESTAURANT
        </Typography>
        </Box>
        <Typography variant="p" sx={{ textAlign:'center', fontSize:"18px" ,}}>
        Features focused on Food Service. Cinnamon Theme has everything you need to create the best restaurant website.
        </Typography>
        <Box display='flex' justifyContent='center'>
        
        <Button
          sx={{
            border: "3px solid #000",
            background: "#ffffff",
            color: "#000",
            borderRadius: "0px",
            width:"150px",
            marginTop:"20px",
              "&:hover": {
                backgroundColor: '#000',
                color:"#ffffff"},
                display:{md:"block",sm:"none",xs:"none"}
            
          }}
        >
          RESERVATION
        </Button>
        </Box>
      </Box>
    </StyleToolbar>
  );
}
