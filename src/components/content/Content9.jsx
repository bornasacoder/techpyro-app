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
              Athletic Shoes and Classic Shoes Driven by Bold Movement
            </Typography>
            <Typography>
              Whether you’re moving your body or moving ideas forward, aim to
              move in the direction of progress. Day after day, find time to
              lace up your gym shoes and get in your workout, wherever, whenever
              and whatever it might be. There’s no one way approach fitness as
              long as you’re living an active life. If you’re passionate about
              running, weightlifting, cross training or studio workouts, Reebok
              has a range of athletic shoes designed to support you with
              technology and comfort. And no matter how you move, do it with
              purpose and style. Reebok’s retro sneakers were born from sports
              out of the 80s and 90s. Then, they were gamechangers on the
              basketball and tennis courts, track and trails. Now, they’re
              timelessly authentic classic shoes. Iconic since day one.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} data-aos="zoom-in">
            <Typography variant="h4">
              Workout Clothes and Apparel for Getting After It
            </Typography>
            <Typography>
              From running to dance, boxing to cross training and weightlifting
              to yoga, find workout clothes to support your moves. Inspired by
              the breadth of human movement, Reebok’s men’s, women’s, kids’ and
              unisex apparel is crafted in a range of inclusive sizes and
              styles. Fitness and movement are for all, full stop. So, power
              through your sweat sessions without distraction in
              performance-driven designs and technologically enhanced fabrics.
              Go about your day in comfortable athleisure and loungewear styles
              paired with gym shoes or retro sneakers. And experiment with style
              because sameness is the enemy of greatness. If what you wear is a
              reflection of who you are, express yourself boldly and
              unapologetically.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
};

export default Content9;
