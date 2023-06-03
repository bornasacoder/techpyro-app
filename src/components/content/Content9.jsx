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
              Americano Coffee
            </Typography>
            <Typography>
            An Americano coffee is a popular espresso-based beverage that originated in Europe and gained popularity in the United States. It is a simple yet satisfying drink that consists of hot water poured over a shot or two of espresso, creating a milder and more diluted version of espresso.

The process of making an Americano starts with brewing a shot or two of espresso using an espresso machine. Espresso is a concentrated form of coffee made by forcing hot water through finely ground coffee beans under high pressure. The result is a strong and flavorful coffee concentrate.


            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} data-aos="zoom-in">
            <Typography variant="h4">
              Cappuccino Coffee
            </Typography>
            <Typography>
            A cappuccino is a classic Italian coffee beverage that is enjoyed by coffee lovers worldwide. It is made using equal parts of espresso, steamed milk, and milk foam, resulting in a rich and velvety textured drink. The cappuccino is known for its distinct layers and a touch of artistry that often adorns the foam on top.

The process of making a cappuccino starts with brewing a shot of espresso using an espresso machine. Espresso is a concentrated form of coffee made by forcing hot water through finely ground coffee beans under high pressure. It provides the strong and bold foundation for the cappuccino.


            </Typography>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
};

export default Content9;
