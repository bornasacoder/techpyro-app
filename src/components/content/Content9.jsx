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
              Coffee
            </Typography>
            <Typography>
            Coffee is one of the most beloved and widely consumed beverages in the world. Originating from the seeds of the Coffea plant, coffee has a rich and fascinating history that spans centuries. Today, it has become an integral part of our daily routines, offering not only a stimulating boost but also a comforting and enjoyable experience.

One of the key reasons for coffee's popularity is its stimulating effect. Coffee contains caffeine, a natural stimulant that enhances alertness and reduces fatigue. Many people rely on their morning cup of coffee to kick-start their day and feel more energized.


            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} data-aos="zoom-in">
            <Typography variant="h4">
              Snacks
            </Typography>
            <Typography>
            Snacks are a beloved part of our culinary culture, providing delicious and convenient bites to satisfy cravings and keep us fueled between meals. Whether enjoyed during a movie night, as a quick pick-me-up during a busy day, or as a tasty accompaniment to social gatherings, snacks have become a staple in our daily lives.

Snacks come in a wide variety of forms, catering to different tastes, preferences, and dietary needs. They can range from sweet to savory, crunchy to chewy, and simple to complex in flavor profiles. From classic options like potato chips, cookies, and popcorn to more specialized choices like granola bars, fruit cups, or vegetable sticks with dip, there is a snack for everyone.


            </Typography>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
};

export default Content9;
