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
              Our Restaurent
            </Typography>
            <Typography>
            Our restaurants are establishments that offer prepared meals and beverages to customers in exchange for payment. They play a significant role in our society, serving as gathering places for friends, families, and colleagues to come together and enjoy a shared dining experience. Restaurants provide a wide range of culinary options, catering to different tastes, dietary preferences, and cultural backgrounds.
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
