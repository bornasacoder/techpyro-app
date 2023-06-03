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
              Phones
            </Typography>
            <Typography>
            Phones, also known as smartphones or mobile phones, have become an integral part of our modern lives. These devices have revolutionized communication, enabling us to stay connected with others, access information, and perform various tasks conveniently. Phones have evolved significantly over the years, offering a wide range of features and capabilities.

The primary function of a phone is to make and receive calls. With advancements in technology, phones now offer crystal-clear voice calls and improved network coverage, allowing us to communicate with others across different locations and even internationally. In addition to voice calls, phones also provide options for video calls, enabling face-to-face conversations with friends, family, and colleagues regardless of distance.


            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} data-aos="zoom-in">
            <Typography variant="h4">
              Laptop
            </Typography>
            <Typography>
            A laptop, also known as a notebook computer, is a portable computing device designed for personal and professional use. Laptops offer the convenience of a desktop computer while allowing users to work, study, or entertain themselves on the go.

Laptops consist of several key components that enable their functionality. The central processing unit (CPU) serves as the brain of the laptop, executing instructions and performing calculations. The CPU's speed and power determine the overall performance of the laptop.


            </Typography>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
};

export default Content9;
