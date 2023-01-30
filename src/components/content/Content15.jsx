import {
  ArrowForward,
  Campaign,
  CurrencyRupee,
  FavoriteBorder,
  RepeatOnRounded,
  RepeatOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
  Star,
} from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "58px 58px",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    padding: "25px 5px ",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    padding: "25px 10px ",
  },
}));
const Item = styled(Box)(({ theme }) => ({
  borderRadius: "0px!important",
  boxShadow: "none!important",
  fontSize: "18px",
  gap: "10px",
  border: "1px solid #F2F5F9",
  paddingLeft:"5px",
    [theme.breakpoints.down("sm")]: {
      flexDirection:"column",
      height:"450px",
      gap: "5px",
    },
}));
export default function Content15() {
  return (
    <StyleToolbar>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item
              sx={{ display: "flex", height: "250px", alignItems: "center",gap:"30px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: { md: "120px", sm: "150px", xs: "200px" },
                  width: { md: "120px", sm: "150px", xs: "250px" },
                  // borderRadius: "50%!important",
                  background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/16.jpg"})
                center/cover no-repeat`,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                     textAlign: "initial",
                   width:{md:"175px",sm:"200px",xs:"300px"}
                }}
              >
                <Typography variant="h4" >
                  Autel Robotics - X- Star Premium Quadcopter
                </Typography>
                <Box display="flex" paddingTop="10px">
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                </Box>

                <Typography
    
                  // textAlign="center"
                  sx={{
                    paddingBottom: "20px",
                  }}
                >
                 
                  ₹ 1199.00
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    color: "#c1c1c1",
                    fontWeight: "100px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <ShoppingCartOutlined sx={{fontSize:"20px"}}/>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <FavoriteBorder sx={{fontSize:"20px"}}/>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <RepeatOutlined sx={{fontSize:"20px"}}/>
                  </Box>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item
              sx={{ display: "flex", height: "250px", alignItems: "center",gap:"30px" }}
            >
              <Box
                sx={{
                  display: "flex",
                   height: { md: "120px", sm: "150px", xs: "200px" },
                    width: { md: "120px", sm: "150px", xs: "250px" },
                  // borderRadius: "50%!important",
                  background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/21.jpg"})
                center/cover no-repeat`,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                     textAlign: "initial",
                   width:{md:"175px",sm:"200px",xs:"300px"}
                }}
              >
                <Typography variant="h4">
                  Autel Robotics - X-
                   Star Premium
                   Quadcopter
                </Typography>
                <Box display="flex" paddingTop="10px">
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                </Box>

                <Typography
    
                  // textAlign="center"
                  sx={{
                    paddingBottom: "20px",
                  }}
                >
                  ₹ 1199.00
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    color: "#c1c1c1",
                    fontWeight: "100px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <ShoppingCartOutlined sx={{fontSize:"20px"}}/>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <FavoriteBorder sx={{fontSize:"20px"}}/>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <RepeatOutlined sx={{fontSize:"20px"}}/>
                  </Box>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item
              sx={{ display: "flex", height: "250px", alignItems: "center",gap:"30px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: { md: "120px", sm: "150px", xs: "200px" },
                  width: { md: "120px", sm: "150px", xs: "250px" },
                  // borderRadius: "50%!important",
                  background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/20.jpg"})
                center/cover no-repeat`,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                     textAlign: "initial",
                   width:{md:"175px",sm:"200px",xs:"300px"}
                }}
              >
                <Typography variant="h4">
                  Autel Robotics - X-
                   Star Premium
                   Quadcopter
                </Typography>
                <Box display="flex" paddingTop="10px">
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                </Box>

                <Typography
    
                  // textAlign="center"
                  sx={{
                    paddingBottom: "20px",
                  }}
                >
                 
                  ₹ 1199.00
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    color: "#c1c1c1",
                    fontWeight: "100px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <ShoppingCartOutlined sx={{fontSize:"20px"}}/>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <FavoriteBorder sx={{fontSize:"20px"}}/>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <RepeatOutlined sx={{fontSize:"20px"}}/>
                  </Box>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item
              sx={{ display: "flex", height: "250px", alignItems: "center" ,gap:"30px"}}
            >
              <Box
                sx={{
                  display: "flex",
                  height: { md: "120px", sm: "150px", xs: "200px" },
                    width: { md: "120px", sm: "150px", xs: "250px" },
                  // borderRadius: "50%!important",
                  background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/19.jpg"})
                center/cover no-repeat`,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                     textAlign: "initial",
                   width:{md:"175px",sm:"200px",xs:"300px"}
                }}
              >
                <Typography variant="h4">
                  Autel Robotics - X-
                   Star Premium
                   Quadcopter
                </Typography>
                <Box display="flex" paddingTop="10px">
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                </Box>

                <Typography
    
                  // textAlign="center"
                  sx={{
                    paddingBottom: "20px",
                  }}
                >
                 
                  ₹ 1199.00
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    color: "#c1c1c1",
                    fontWeight: "100px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <ShoppingCartOutlined sx={{fontSize:"20px"}}/>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <FavoriteBorder sx={{fontSize:"20px"}}/>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <RepeatOutlined sx={{fontSize:"20px"}}/>
                  </Box>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item
              sx={{ display: "flex", height: "250px", alignItems: "center",gap:"30px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: { md: "120px", sm: "150px", xs: "200px" },
                    width: { md: "120px", sm: "150px", xs: "250px" },
                  // borderRadius: "50%!important",
                  background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/18.jpg"})
                center/cover no-repeat`,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                     textAlign: "initial",
                   width:{md:"175px",sm:"200px",xs:"300px"}
                }}
              >
                <Typography variant="h4">
                  Autel Robotics - X-
                   Star Premium
                   Quadcopter
                </Typography>
                <Box display="flex" paddingTop="10px">
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                </Box>

                <Typography
    
                  // textAlign="center"
                  sx={{
                    paddingBottom: "20px",
                  }}
                >
                 
                  ₹ 1199.00
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    color: "#c1c1c1",
                    fontWeight: "100px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <ShoppingCartOutlined sx={{fontSize:"20px"}}/>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <FavoriteBorder sx={{fontSize:"20px"}}/>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <RepeatOutlined sx={{fontSize:"20px"}}/>
                  </Box>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item
              sx={{ display: "flex", height: "250px", alignItems: "center",gap:"30px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: { md: "130px", sm: "150px", xs: "200px" },
                    width: { md: "130px", sm: "150px", xs: "250px" },
                  // borderRadius: "50%!important",
                  background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/17.jpg"})
                center/cover no-repeat`,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                     textAlign: "initial",
                  width:{md:"175px",sm:"200px",xs:"300px"}
                }}
              >
                <Typography variant="h4">
                  Autel Robotics - X-
                   Star Premium
                   Quadcopter
                </Typography>
                <Box display="flex" paddingTop="10px">
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                  <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                </Box>

                <Typography
    
                  // textAlign="center"
                  sx={{
                    paddingBottom: "20px",
                  }}
                >
                 
                  ₹ 1199.00
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    color: "#c1c1c1",
                    fontWeight: "100px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <ShoppingCartOutlined sx={{fontSize:"20px"}}/>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <FavoriteBorder sx={{fontSize:"20px"}}/>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "1px solid #c1c1c1",
                      height: "30px",
                      width: "30px",
                      padding: "5px 4px",
                      "&:hover": {
                        color: "#fff",
                        backgroundColor: "#000",
                      },
                    }}
                  >
                    <RepeatOutlined sx={{fontSize:"20px"}}/>
                  </Box>
                </Box>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
