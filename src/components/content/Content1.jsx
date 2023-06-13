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
          TECHPYRO  SHOES STORE ITEMS
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
  ),url(${"https://img.freepik.com/free-vector/running-sport-shoes-illustration_1284-17528.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Athletic Shoes</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/brown-leather-shoes_74190-2610.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Casual Shoes</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-vector/shoes-realistic-set_1284-23172.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Dress Shoes</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/brown-flip-flops-summer-footwear-fashion_53876-106037.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=sph"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Sandals</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/leather-boots_1203-8146.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=sph"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Boots</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item
              sx={{
                background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)
  ),url(${"https://img.freepik.com/free-photo/close-up-builder-work-clothes-boots-close-up-part-body_169016-15216.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
                height: "200px",
              }}
            >
            </Item>
            <Item>Work Shoes
            </Item>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
