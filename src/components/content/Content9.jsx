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
              Gold
            </Typography>
            <Typography>
            Gold is a precious metal that has been valued for its beauty, rarity, and durability for thousands of years. Here are some general details about gold.Gold is a dense, soft, and malleable metal. It has a bright yellow color, which is one of its most distinctive characteristics. Gold is resistant to tarnish, corrosion, and oxidation, making it highly durable

            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} data-aos="zoom-in">
            <Typography variant="h4">
              Diamond
            </Typography>
            <Typography>
            Diamonds are precious gemstones known for their exceptional brilliance, clarity, and durability. Here are some general details about diamonds.Diamonds are formed deep within the Earth's mantle under high pressure and temperature conditions. They are composed of carbon atoms arranged in a crystal lattice structure. Diamonds are the hardest naturally occurring substance, scoring a 10 on the Mohs scale of mineral hardness.

            </Typography>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
};

export default Content9;
