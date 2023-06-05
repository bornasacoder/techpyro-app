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
  [theme.breakpoints.down("sm")]: {
    margin: "200px 0px 0px ",
    padding:"30px 20px"
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px!important",
  textAlign: "center",
  fontSize: "18px",
}));
export default function Content18() {
  return (
    <StyleToolbar>
      <Box
        sx={{
          // padding: "58px 28px",
          display:"flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:"center",
          
          // padding:{md:"50px 0px",sm:"50px 0px ",xs:"100px 0px"},
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontFamily: "Trirong",
            fontSize: { md: "30px", sm: "30px", xs: "20px" },
          }}
        >
          New Courses
        </Typography>
        <Typography sx={{ color: "#9999A6" ,fontFamily: "Trirong",}}>
        All eduma, all the time
        </Typography>
      </Box>
      <br />
      <Box
        sx={{
          // width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // paddingBottom:"100px",
          borderBottom:"1px solid #E6E6E6",
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

                background: `url(${"https://images.pexels.com/photos/8363771/pexels-photo-8363771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
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

                background: `url(${"https://images.pexels.com/photos/8500305/pexels-photo-8500305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
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

                background: `url(${"https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
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

                background: `url(${"https://images.pexels.com/photos/8926456/pexels-photo-8926456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
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
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
