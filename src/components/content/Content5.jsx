import { Avatar, Button, Grid, Paper, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import styled from 'styled-components';
const StyleToolbar = styled(Box)(({ theme }) => ({
  // bgcolor: "#FFFFFF!important",
  padding: "68px 98px ",
  [theme.breakpoints.down("sm")]: {
    padding: "68px 30px ",
  },
  [theme.breakpoints.down("md")]: {
    padding: "68px 20px ",
  },
  gap: 2,
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px!important",
  boxShadow: "none!important",
  backgroundColor: "#F4F4F4!important",
  //   textAlign: "center",
  padding: "20px 0px!important",
  fontSize: "18px",
  display: "flex",
  flexDirection: "column",
}));
export default function Content5() {
  return (
    <StyleToolbar>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "36px 0px 28px",gap:"10px" }}
      >
        <Typography
          variant="h1"
          sx={{
            letterSpacing: "4px",
            textAlign: "center",
            fontFamily: "Dancing Script",
            fontSize: { md: "68px", sm: "50px", xs: "28px" },
            fontWeight: "500",
            color:"red",
          }}
        >
          News 
        </Typography>
        <Typography  sx={{
            letterSpacing: "4px",
            textAlign: "center",
            fontFamily: "Dancing Script",
            fontSize: { md: "68px", sm: "50px", xs: "28px" },
            fontWeight: "500",
          }}>
          & Testimonials
        </Typography>
      </Box>
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
          <Grid item xs={12} sm={4} md={4} data-aos="zoom-in">
            <Item
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                fontSize: "20px",
                color: "white",
                fontWeight: "600",
                background: `url(${"https://img.freepik.com/free-psd/online-shopping-poster-template-style_23-2148539006.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
                height: "200px",
                // width:'350px'
              }}
            >
            </Item>
            <Box display="flex" gap={3}>
              <Typography display="flex">
                on:
                <Typography variant="span" sx={{ color: "red" }}>
                  14 january 2023
                </Typography>
              </Typography>
              <Typography display="flex">
                <Typography sx={{ color: "red" }}>in:</Typography>
                Testimonial 1
              </Typography>
            </Box>
            <br />
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                ARUGULA, MOZZARELLA, SHOES ON FOCACCIA
              </Typography>
              <br />
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the…
              </Typography>
              <br />
              <Box display="flex">
                <Button
                  sx={{
                    // border: "3px solid #000",
                    background: "red",
                    color: "white",
                    borderRadius: "0px",
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#ffffff",
                    },
                    // display: { md: "block", sm: "none", xs: "none" },
                  }}
                >
                  READ MORE
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} data-aos="zoom-in">
            <Item
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                fontSize: "20px",
                color: "white",
                fontWeight: "600",
                background: `url(${"https://img.freepik.com/free-psd/online-shopping-banner-template-design_23-2148539002.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais"})
   center/cover no-repeat`,
                height: "200px",
                // width:'350px'
              }}
            >
            </Item>
            <Box display="flex" gap={3}>
              <Typography display="flex">
                on:
                <Typography variant="span" sx={{ color: "red" }}>
                  14 january 2023
                </Typography>
              </Typography>
              <Typography display="flex">
                <Typography sx={{ color: "red" }}>in:</Typography>
                Testimonial 1
              </Typography>
            </Box>
            <br />
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                ARUGULA, MOZZARELLA, SHOES ON FOCACCIA
              </Typography>
              <br />
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the…
              </Typography>
              <br />
              <Box display="flex">
                <Button
                  sx={{
                    // border: "3px solid #000",
                    background: "red",
                    color: "white",
                    borderRadius: "0px",
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#ffffff",
                    },
                    // display: { md: "block", sm: "none", xs: "none" },
                  }}
                >
                  READ MORE
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            // data-aos="zoom-in"
            padding="0px 60px"
            backgroundColor="#F5F5F5"
          >
            <Typography></Typography>
            <Box display="flex"
            alignContent="flex-start"
            flexDirection="column">
            <Typography variant="h5"> Nullam fringilla lacus nec</Typography>
            <br />
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum
            </Typography>
            <br />
            <Box display="flex" gap={3}>
              <Avatar alt="Travis Howard" src="https://img.freepik.com/free-photo/medium-shot-smiley-baker_23-2149233681.jpg?size=626&ext=jpg&ga=GA1.1.2042454013.1682690444&semt=ais" />
              <Typography variant="h5">
                SAFIRA
                <br />
                Happy Customer
              </Typography>
            </Box>
            <br/>
            <Box display="flex">
                <Button
                  sx={{
                    // border: "3px solid #000",
                    background: "#000",
                    color: "white",
                    borderRadius: "0px",
                    "&:hover": {
                      backgroundColor: "red",
                      color: "#ffffff",
                    },
                    // display: { md: "block", sm: "none", xs: "none" },
                  }}
                >
                  VIEW ALL TESTOMONIAL
                </Button>
              </Box>
              </Box>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
