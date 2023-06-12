import { Box, Grid, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
const StyleToolbar = styled(Box)(({ theme }) => ({
  bgcolor: "#F4F4F4",
  padding: "68px 92px ",
  gap: 2,
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px!important",
  boxShadow: "none!important",
  textAlign: "center",
  // bgcolor:"none!important",
  backgroundColor:"#F4F4F4!important",
  //   padding:"20px 0px!important",
  fontSize: "18px",
  "&:hover": {
    opacity: "0.3",
    bgcolor:"black"
  },
}));
export default function Content1() {
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
            letterSpacing: "4px",
            textAlign: "center",
            fontSize: { md: "48px", sm: "35px", xs: "30px" },
            fontWeight:'600',
            width:{md:"60%",sm:"80%",xs:"100%"}
          }}
        >
          TECHPYRO JEWLLERY SHOP ITEMS
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
            alignItems: "center",
          }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          //   xs={{xs:12,sm:6,md:4}}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/shiny-jewelry-crystal-platinum-gold-gemstone-drops-generated-by-ai_188544-10734.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=sph"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Necklaces</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/still-life-aesthetic-earrings_23-2149649128.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=sph"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Earrings</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-vector/golden-silver-wedding-rings-decorated-with-precious-stones-clipping-path-realistic-illustration_1284-60352.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=sph"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Rings</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/woman-s-arms-wearing-golden-jewelry_23-2149640599.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=sph"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Bracelets</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/watch-black-box-bow-tie-lie-white-windowsill_8353-687.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=sph"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Watches</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/golden-jewelry-store-window_1398-4127.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Jewelry Sets</Item>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
