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
              Fruits
            </Typography>
            <Typography>
            Fruits are the edible reproductive structures of flowering plants, typically containing seeds. They are known for their vibrant colors, delicious flavors, and nutritional benefits. Fruits are an essential part of a balanced diet and offer a wide range of vitamins, minerals, antioxidants, and dietary fiber. Here are some general details about fruits

            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} data-aos="zoom-in">
            <Typography variant="h4">
              FoodGrains
            </Typography>
            <Typography>
            Food grains, also known as cereals or staple crops, are agricultural crops that are primarily cultivated for their edible seeds. They form the basis of the human diet in many parts of the world and provide essential nutrients and energy. Here are some common types of food grains

            </Typography>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
};

export default Content9;
