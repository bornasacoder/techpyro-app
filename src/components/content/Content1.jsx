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
          TECHPYRO GROCERY ITEMS
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
  ),url(${"https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Fresh Produce</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/fresh-dairy-products_114579-85567.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Dairy Products</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/still-life-with-uncooked-seafoods_1398-3683.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Meats and Seafood</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-vector/various-breads-flat-vector-collection_74855-5954.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Bakery Items</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-vector/set-tin-food_1308-26262.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Canned and Packaged Foods</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/frozen-food-table-arrangement_23-2148969458.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Frozen Foods</Item>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
