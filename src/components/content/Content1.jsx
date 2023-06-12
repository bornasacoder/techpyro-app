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
          TECHPYRO BACKERY ITEMS
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
  ),url(${"https://img.freepik.com/free-photo/bread-wooden-tray-red-white-cloth_1150-23896.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=sph"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Bread</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/assortment-pieces-cake_114579-28235.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=sph"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Pastries</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/joyful-birthday-celebration-with-delicious-chocolate-cake-generative-ai_188544-9589.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=sph"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Cakes</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/chocolate-chip-cookie-white_93675-132144.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=sph"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Cookies</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/chocolate-walnut-muffins-with-coffee-cup-with-walnuts-dark-surface_114579-5336.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=sph"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Muffins</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/egg-tart-wood_1150-12281.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Pies and tarts</Item>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
