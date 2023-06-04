import { Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // bgcolor: "#FFFFFF!important",
  padding: "78px 48px ",
  display: "flex",
  justifyContent: "flex-start",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));
const Content9 = () => {
  return (
    <StyleToolbar>
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
          <Grid item xs={12} sm={6} md={6} data-aos="zoom-in">
            <Typography variant="h4">
              Sports Shoes
            </Typography>
            <Typography>
            Sports shoes, also known as athletic shoes or sneakers, are specially designed footwear intended for sports and physical activities. They are designed to provide comfort, support, and protection for the feet during athletic movements. Sports shoes come in various styles and are engineered to cater to different sports and activities.

The construction and features of sports shoes vary depending on the intended purpose. Here are some general details about sports shoes


            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} data-aos="zoom-in">
            <Typography variant="h4">
              Formal Shoes
            </Typography>
            <Typography>
            Formal shoes, also known as dress shoes or business shoes, are footwear designed to be worn on formal occasions, professional settings, or business events. They are typically made of high-quality materials and feature a polished and sophisticated appearance. Formal shoes are characterized by their sleek and refined design, intended to complement formal attire. Here are some general details about formal shoes.

            </Typography>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
};

export default Content9;
