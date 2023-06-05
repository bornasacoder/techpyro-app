import {
  ArrowForward,
  CurrencyRupee,
  Group,
  Message,
  OpenInNew,
  Star,
} from "@mui/icons-material";
import { Avatar, Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  padding: "58px 58px ",
  // gap: 2,
  [theme.breakpoints.down("sm")]: {
    padding: "58px 20px ",
  },
  [theme.breakpoints.down("md")]: {
    padding: "58px 20px ",
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px!important",
  textAlign: "center",
  fontSize: "18px",
}));
export default function Content13() {
  return (
    <StyleToolbar>
      <Box
        display="flex"
        sx={{
          padding: "26px 0px 28px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: { md: "24px", sm: "30px", xs: "20px" },
          }}
        >
          Popular Course​s
        </Typography>
        <Typography sx={{ color: "#9999A6" }}>
          Limitless learning, more possibilities
        </Typography>
      </Box>
      <br />
      <Box
        sx={{
          // width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid
          container
          rowSpacing={2}
          sx={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            // gap:"5px",
          }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                position: "relative",
                opacity: "1",
                height: { md: "200px", sm:"220px", xs:"250px"},
                "&:hover": {
                  filter: "brightness(80%)",
                },

                background: `url(${"https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
                center/cover no-repeat`,
              }}
            >
              <Box
                sx={{
                  zIndex: "100",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: "0",
                  height: "100%",
                  width: "100%",
                  "&:hover": {
                    opacity: "1",
                  },
                }}
              >
                <OpenInNew sx={{ color: "#fff" }} />
              </Box>
              <Box
                sx={{
                  zIndex: "10",
                  position: "absolute",
                  bottom: "-18px",
                  border: "4px solid #fff",
                  borderRadius: "50%",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://www.ed.ac.uk/sites/default/files/styles/panel_breakpoints_theme_uoe_tv_1x/public/thumbnails/image/studying-postgraduate-facilities-libraries.jpg?itok=XIBkJfkl"
                />
              </Box>
            </Item>
            <Item
              sx={{
                padding: "20px 10px",
                borderBottom: "1px solid #c1c1c1",
                "&:hover": {
                  borderBottom: "1.5px solid #000",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "16px", sm: "16px", xs: "14px" },
                  textAlign: "center",
                }}
              >
                How to Teach English Online and Get Paid
              </Typography>
            </Item>
            <Item
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 10px",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "#86888A",
                  fontSize: "16px",
                }}
              >
                <Message sx={{ fontSize: "16px" }} />6{" "}
                <Group sx={{ fontSize: "16px" }} /> 8
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "red",
                  fontSize: "16px",
                }}
              >
                ₹ 2299.00
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                position: "relative",
                opacity: "1",
                height: { md: "200px", sm:"220px", xs:"250px"},
                "&:hover": {
                  filter: "brightness(80%)",
                },

                background: `url(${"https://images.pexels.com/photos/5905480/pexels-photo-5905480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
                center/cover no-repeat`,
              }}
            >
              <Box
                sx={{
                  zIndex: "100",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: "0",
                  height: "100%",
                  width: "100%",
                  "&:hover": {
                    opacity: "1",
                  },
                }}
              >
                <OpenInNew sx={{ color: "#fff" }} />
              </Box>
              <Box
                sx={{
                  zIndex: "10",
                  position: "absolute",
                  bottom: "-18px",
                  border: "4px solid #fff",
                  borderRadius: "50%",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://secure.gravatar.com/avatar/17445360b49029117e3e61d7fc65c959?s=500&r=g"
                />
              </Box>
            </Item>
            <Item
              sx={{
                padding: "20px 10px",
                borderBottom: "1px solid #c1c1c1",
                "&:hover": {
                  borderBottom: "1.5px solid #000",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "16px", sm: "16px", xs: "14px" },
                  textAlign: "center",
                }}
              >
                How To Create In-Demand Online Courses
              </Typography>
            </Item>
            <Item
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 10px",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "#86888A",
                  fontSize: "16px",
                }}
              >
                <Message sx={{ fontSize: "16px" }} />6{" "}
                <Group sx={{ fontSize: "16px" }} /> 8
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "red",
                  fontSize: "16px",
                }}
              >
                ₹ 2299.00
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                position: "relative",
                opacity: "1",
                height: { md: "200px", sm:"220px", xs:"250px"},
                "&:hover": {
                  filter: "brightness(80%)",
                },

                background: `url(${"https://images.pexels.com/photos/4260325/pexels-photo-4260325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
                center/cover no-repeat`,
              }}
            >
              <Box
                sx={{
                  zIndex: "100",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: "0",
                  height: "100%",
                  width: "100%",
                  "&:hover": {
                    opacity: "1",
                  },
                }}
              >
                <OpenInNew sx={{ color: "#fff" }} />
              </Box>
              <Box
                sx={{
                  zIndex: "10",
                  position: "absolute",
                  bottom: "-18px",
                  border: "4px solid #fff",
                  borderRadius: "50%",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=500&r=g"
                />
              </Box>
            </Item>
            <Item
              sx={{
                padding: "20px 10px",
                borderBottom: "1px solid #c1c1c1",
                "&:hover": {
                  borderBottom: "1.5px solid #000",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "16px", sm: "16px", xs: "14px" },
                  textAlign: "center",
                }}
              >
                Instructional Design for Learning and Development
              </Typography>
            </Item>
            <Item
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 10px",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "#86888A",
                  fontSize: "16px",
                }}
              >
                <Message sx={{ fontSize: "16px" }} />6{" "}
                <Group sx={{ fontSize: "16px" }} /> 8
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "red",
                  fontSize: "16px",
                }}
              >
                ₹ 2299.00
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                position: "relative",
                opacity: "1",
                height: { md: "200px", sm:"220px", xs:"250px"},
                "&:hover": {
                  filter: "brightness(80%)",
                },

                background: `url(${"https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
                center/cover no-repeat`,
              }}
            >
              <Box
                sx={{
                  zIndex: "100",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: "0",
                  height: "100%",
                  width: "100%",
                  "&:hover": {
                    opacity: "1",
                  },
                }}
              >
                <OpenInNew sx={{ color: "#fff" }} />
              </Box>
              <Box
                sx={{
                  zIndex: "10",
                  position: "absolute",
                  bottom: "-18px",
                  border: "4px solid #fff",
                  borderRadius: "50%",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=500&r=g"
                />
              </Box>
            </Item>
            <Item
              sx={{
                padding: "20px 10px",
                borderBottom: "1px solid #c1c1c1",
                "&:hover": {
                  borderBottom: "1.5px solid #000",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "16px", sm: "16px", xs: "14px" },
                  textAlign: "center",
                }}
              >
                Begin Teaching Online Full Time
              </Typography>
            </Item>
            <Item
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 10px",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "#86888A",
                  fontSize: "16px",
                }}
              >
                <Message sx={{ fontSize: "16px" }} />6{" "}
                <Group sx={{ fontSize: "16px" }} /> 8
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "red",
                  fontSize: "16px",
                }}
              >
                ₹ 2299.00
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                position: "relative",
                opacity: "1",
                height: { md: "200px", sm:"220px", xs:"250px"},
                "&:hover": {
                  filter: "brightness(80%)",
                },

                background: `url(${"https://images.pexels.com/photos/8617731/pexels-photo-8617731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
                center/cover no-repeat`,
              }}
            >
              <Box
                sx={{
                  zIndex: "100",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: "0",
                  height: "100%",
                  width: "100%",
                  "&:hover": {
                    opacity: "1",
                  },
                }}
              >
                <OpenInNew sx={{ color: "#fff" }} />
              </Box>
              <Box
                sx={{
                  zIndex: "10",
                  position: "absolute",
                  bottom: "-18px",
                  border: "4px solid #fff",
                  borderRadius: "50%",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://secure.gravatar.com/avatar/17445360b49029117e3e61d7fc65c959?s=500&r=g"
                />
              </Box>
            </Item>
            <Item
              sx={{
                padding: "20px 10px",
                borderBottom: "1px solid #c1c1c1",
                "&:hover": {
                  borderBottom: "1.5px solid #000",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "16px", sm: "16px", xs: "14px" },
                  textAlign: "center",
                }}
              >
                Build a Six-Figure Business Selling Online Courses
              </Typography>
            </Item>
            <Item
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 10px",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "#86888A",
                  fontSize: "16px",
                }}
              >
                <Message sx={{ fontSize: "16px" }} />6{" "}
                <Group sx={{ fontSize: "16px" }} /> 8
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "red",
                  fontSize: "16px",
                }}
              >
                ₹ 2299.00
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                position: "relative",
                opacity: "1",
                height: { md: "200px", sm:"220px", xs:"250px"},
                "&:hover": {
                  filter: "brightness(80%)",
                },

                background: `url(${"https://images.pexels.com/photos/8466775/pexels-photo-8466775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
                center/cover no-repeat`,
              }}
            >
              <Box
                sx={{
                  zIndex: "100",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: "0",
                  height: "100%",
                  width: "100%",
                  "&:hover": {
                    opacity: "1",
                  },
                }}
              >
                <OpenInNew sx={{ color: "#fff" }} />
              </Box>
              <Box
                sx={{
                  zIndex: "10",
                  position: "absolute",
                  bottom: "-18px",
                  border: "4px solid #fff",
                  borderRadius: "50%",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=500&r=g"
                />
              </Box>
            </Item>
            <Item
              sx={{
                padding: "20px 10px",
                borderBottom: "1px solid #c1c1c1",
                "&:hover": {
                  borderBottom: "1.5px solid #000",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "16px", sm: "16px", xs: "14px" },
                  textAlign: "center",
                }}
              >
                50 Tips on Making a Great Online Course
              </Typography>
            </Item>
            <Item
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 10px",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "#86888A",
                  fontSize: "16px",
                }}
              >
                <Message sx={{ fontSize: "16px" }} />6{" "}
                <Group sx={{ fontSize: "16px" }} /> 8
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "red",
                  fontSize: "16px",
                }}
              >
                ₹ 2299.00
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                position: "relative",
                opacity: "1",
                height: { md: "200px", sm:"220px", xs:"250px"},
                "&:hover": {
                  filter: "brightness(80%)",
                },

                background: `url(${"https://images.pexels.com/photos/8618080/pexels-photo-8618080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
                center/cover no-repeat`,
              }}
            >
              <Box
                sx={{
                  zIndex: "100",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: "0",
                  height: "100%",
                  width: "100%",
                  "&:hover": {
                    opacity: "1",
                  },
                }}
              >
                <OpenInNew sx={{ color: "#fff" }} />
              </Box>
              <Box
                sx={{
                  zIndex: "10",
                  position: "absolute",
                  bottom: "-18px",
                  border: "4px solid #fff",
                  borderRadius: "50%",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=500&r=g"
                />
              </Box>
            </Item>
            <Item
              sx={{
                padding: "20px 10px",
                borderBottom: "1px solid #c1c1c1",
                "&:hover": {
                  borderBottom: "1.5px solid #000",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "16px", sm: "16px", xs: "14px" },
                  textAlign: "center",
                }}
              >
                Eduma Course Creation for Passive Income
              </Typography>
            </Item>
            <Item
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 10px",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "#86888A",
                  fontSize: "16px",
                }}
              >
                <Message sx={{ fontSize: "16px" }} />6{" "}
                <Group sx={{ fontSize: "16px" }} /> 8
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "red",
                  fontSize: "16px",
                }}
              >
                ₹ 2299.00
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                position: "relative",
                opacity: "1",
                height: { md: "200px", sm:"220px", xs:"250px"},
                "&:hover": {
                  filter: "brightness(80%)",
                },

                background: `url(${"https://images.pexels.com/photos/4019754/pexels-photo-4019754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
                center/cover no-repeat`,
              }}
            >
              <Box
                sx={{
                  zIndex: "100",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: "0",
                  height: "100%",
                  width: "100%",
                  "&:hover": {
                    opacity: "1",
                  },
                }}
              >
                <OpenInNew sx={{ color: "#fff" }} />
              </Box>
              <Box
                sx={{
                  zIndex: "10",
                  position: "absolute",
                  bottom: "-18px",
                  border: "4px solid #fff",
                  borderRadius: "50%",
                  "&:hover": {
                    opacity: "1 !important",
                  },
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=500&r=g"
                />
              </Box>
            </Item>
            <Item
              sx={{
                padding: "20px 10px",
                borderBottom: "1px solid #c1c1c1",
                "&:hover": {
                  borderBottom: "1.5px solid #000",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "16px", sm: "16px", xs: "14px" },
                  textAlign: "center",
                }}
              >
                How to Create an Awesome Online Course
              </Typography>
            </Item>
            <Item
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 10px",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "#86888A",
                  fontSize: "16px",
                }}
              >
                <Message sx={{ fontSize: "16px" }} />6{" "}
                <Group sx={{ fontSize: "16px" }} /> 8
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  color: "red",
                  fontSize: "16px",
                }}
              >
                ₹ 2299.00
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box
        display="flex"
        sx={{
          padding: {md:"56px  28px",sm:"50px 28px",xs:"30px 28px 0px"},
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          endIcon={<ArrowForward />}
          sx={{ color: "#000", backgroundColor: "#d2d2d2","&:hover":{
            backgroundColor:"#FAB519"
          } }}
        >
          VIEW ALL COURSES
        </Button>
      </Box>
    </StyleToolbar>
  );
}
