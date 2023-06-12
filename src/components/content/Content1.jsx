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
          TECHPYRO CAFE ITEMS
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
  ),url(${"https://img.freepik.com/free-vector/white-cup-hot-coffee-with-cinnamon-saucer-beans-wooden-table-realistic_1284-56783.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=sph"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Coffee</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/side-view-two-cups-coffee-cookies-cinnamon-limes-old-newspaper-dark-surface_140725-142669.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=sph"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Tea</Item>
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
  ),url(${"https://img.freepik.com/free-photo/side-view-chicken-roll-grilled-chicken-fillet-with-lettuce-greens-mayo-wrapped-tortilla-club-sandwich-table_141793-4848.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Sandwiches and Wraps</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/top-view-fresh-vegetables-white-flower-wooden-hammer-delicious-vegan-salad-dark-color-background_179666-47261.jpg?w=900&t=st=1686567477~exp=1686568077~hmac=a27e438ca04598d9cb34c075f6e4366bbaa0ac519d1516625dfdb89ad9a2ace9"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Salads</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-vector/collection-four-bowls-with-hot-soup-soup-puree-with-greenery-rusks-decorations-isolated_1284-31751.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=sph"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Soups</Item>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
