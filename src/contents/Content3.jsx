import { CheckCircleSharp } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import Image from "next/image";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "58px 58px",
  backgroundColor: "#F5F5F5",
  [theme.breakpoints.down("md")]: {
    padding: "58px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    // flexDirection:"column",
    padding: "58px 20px",
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px",
  boxShadow: "none",
}));
const Content3 = () => {
  return (
    <StyleToolbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "33px" }}>Travel Options</Typography>
        <br />
        <br />
        <Typography
          sx={{
            width: { md: "59vw", sm: "70vw", xs: "90vw" },
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          corporis perspiciatis, dignissimos officia in molestiae, explicabo
          optio impedit fuga quod beatae aspernatur. Repudiandae nesciunt
          excepturi fugiat placeat animi consequuntur quo?
        </Typography>
      </Box>
      <br />
      <Box>
        <Grid container columnSpacing={2} rowSpacing={3}>
          <Grid md={4} sm={6} xs={12} item sx={{ boxShadow: "3px #CCCCCC" }}>
            <Item>
              <Box
                sx={{
                  background: `url("https://img.freepik.com/premium-photo/bus-parked-road_69593-7793.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais") center`,
                  height: "250px",
                  width: "auto",
                }}
              />
              <Box sx={{ padding: "10px 10px" }}>
                <Typography sx={{ fontSize: "20px" }}>
                Bus and Coach Travel
                </Typography>
                <br />
                <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
                <br />
                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  From{" "}
                  <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                    ₹ 23999
                  </Typography>{" "}
                </Box>
                <br />
                <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
                <br />
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facilis cumque nesciunt saepe temporibus cupiditate fuga
                  maxime porro ex numquam laudantium, obcaecati, iste
                  dignissimos et nisi
                </Typography>
                <br />
                <Box>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <CheckCircleSharp sx={{ color: "#858585" }} /> 2 Twin beds
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <CheckCircleSharp sx={{ color: "#858585" }} />
                    247 sq feet
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <CheckCircleSharp sx={{ color: "#858585" }} /> 2 adults, 1
                    child
                  </Typography>
                </Box>
                <br />
                <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
                <br />
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    sx={{
                      padding: "5px 10px",
                      backgroundColor: "#00BFA5",
                      color: "#FFFFFF",
                      borderRadius: "0px",
                      "&:hover": {
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    BOOK NOW
                  </Button>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid md={4} sm={6} xs={12} item sx={{ boxShadow: "3px #CCCCCC" }}>
            <Item>
              <Box
                sx={{
                  background: `url("https://img.freepik.com/free-photo/large-luxurious-cruise-ship-sailing-sea-sunny-day-ai-generative_123827-23852.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais") center`,
                  height: "250px",
                  width: "auto",
                }}
              />
              <Box sx={{ padding: "10px 10px" }}>
                <Typography sx={{ fontSize: "20px" }}>
                Cruise Travel
                </Typography>
                <br />
                <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
                <br />
                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  From{" "}
                  <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                    ₹ 23999
                  </Typography>{" "}
                </Box>
                <br />
                <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
                <br />
                <Typography>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error, facere! Officiis est nam cumque architecto quasi
                  facilis. Quam provident unde voluptatem. Reprehenderit saepe
                  ipsa ullam ut quos nostrum neque quod.
                </Typography>
                <br />
                <Box>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <CheckCircleSharp sx={{ color: "#858585" }} /> 2 Twin beds
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <CheckCircleSharp sx={{ color: "#858585" }} />
                    247 sq feet
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <CheckCircleSharp sx={{ color: "#858585" }} /> 2 adults, 1
                    child
                  </Typography>
                </Box>
                <br />
                <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
                <br />
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    sx={{
                      padding: "5px 10px",
                      backgroundColor: "#00BFA5",
                      color: "#FFFFFF",
                      borderRadius: "0px",
                      "&:hover": {
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    BOOK NOW
                  </Button>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid md={4} sm={6} xs={12} item sx={{ boxShadow: "3px #CCCCCC" }}>
            <Item>
              <Box
                sx={{
                  background: `url("https://img.freepik.com/premium-photo/airplane-taking-off-from-airport_37416-74.jpg?size=626&ext=jpg&ga=GA1.2.2042454013.1682690444&semt=ais") center`,
                  height: "250px",
                  width: "auto",
                }}
              />
              <Box sx={{ padding: "10px 10px" }}>
                <Typography sx={{ fontSize: "20px" }}>
                Air Travel
                </Typography>
                <br />
                <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
                <br />
                <Box
                  sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  From{" "}
                  <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                    ₹ 23999
                  </Typography>{" "}
                </Box>
                <br />
                <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
                <br />
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem voluptatem aliquid doloremque porro temporibus aliquam
                  omnis maiores, recusandae tenetur optio et vel, eligendi
                  beatae fugit minus ullam
                </Typography>
                <br />
                <Box>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <CheckCircleSharp sx={{ color: "#858585" }} /> 2 Twin beds
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <CheckCircleSharp sx={{ color: "#858585" }} />
                    247 sq feet
                  </Typography>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <CheckCircleSharp sx={{ color: "#858585" }} /> 2 adults, 1
                    child
                  </Typography>
                </Box>
                <br />
                <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
                <br />
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    sx={{
                      padding: "5px 10px",
                      backgroundColor: "#00BFA5",
                      color: "#FFFFFF",
                      borderRadius: "0px",
                      "&:hover": {
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    BOOK NOW
                  </Button>
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
};

export default Content3;
