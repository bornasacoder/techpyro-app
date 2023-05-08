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
              Cakes is best dessert
            </Typography>
            <Typography>
            A cake is a baked dessert that is typically made with flour, sugar, eggs, butter or oil, and a leavening agent such as baking powder or baking soda. Cakes can come in many different flavors and forms, from simple vanilla or chocolate cakes to more elaborate creations such as layered cakes, cheesecakes, and fruitcakes.The texture and flavor of a cake can be influenced by a variety of factors, including the type of flour used, the ratio of ingredients, and any additional flavorings or ingredients that are added, such as cocoa powder, fruit, or nuts.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} data-aos="zoom-in">
            <Typography variant="h4">
              Muffins is best dessert 
            </Typography>
            <Typography>
            A muffin is a small, individual-sized baked good that is typically made with flour, sugar, eggs, butter or oil, and a leavening agent such as baking powder or baking soda. Muffins can come in many different flavors and varieties, from sweet blueberry or chocolate chip muffins to savory cheese or corn muffins.Muffins are typically baked in a muffin tin, which is a special pan with individual cup-shaped molds. The batter is poured into each mold and then baked in an oven until the muffins are golden brown and springy to the touch.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
};

export default Content9;
