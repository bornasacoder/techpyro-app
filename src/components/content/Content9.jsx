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
              T-shirts
            </Typography>
            <Typography>
            T-shirts are a staple item of clothing that is widely worn by people of all ages and genders. They are known for their simple design, comfort, and versatility. T-shirts are typically made of soft and breathable fabric, and they come in various styles, colors, and patterns. Here are some general details about T-shirts.
            T-shirts have become a wardrobe essential due to their comfort, simplicity, and ability to showcase personal style. Whether worn alone or as part of a layered ensemble, T-shirts offer a versatile and timeless option for everyday wear.

            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} data-aos="zoom-in">
            <Typography variant="h4">
              Sarees
            </Typography>
            <Typography>
            A saree, also spelled as sari, is a traditional garment worn by women in South Asia, particularly in India, Bangladesh, Sri Lanka, and Nepal. It is a long piece of fabric, usually ranging from 4 to 9 yards in length, that is draped around the body in various styles to create a complete outfit. Sarees are known for their elegance, versatility, and intricate designs. Here are some general details about sarees.

            </Typography>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
};

export default Content9;
