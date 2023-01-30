import { CurrencyRupee, Star } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  padding: "58px 58px ",
  gap: 2,
  [theme.breakpoints.down("sm")]: {
    padding: "58px 20px ",
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px!important",
  textAlign: "center",
  backgroundColor: "#FFFFFF!important",
  fontSize: "18px",
  width: { md: "60%!important", sm: "80%!important", xs: "100%!important" },
}));
export default function Content13() {
  return (
    <StyleToolbar>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ padding: "26px 0px 28px", gap: "5px" }}
      >
        <Box
          width="80px"
          sx={{
            borderBottom: "3px solid #000",
            height: "25px",
            marginRight: "30px",
          }}
        />
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontFamily: "Trirong",
            fontSize: { md: "38px", sm: "30px", xs: "20px" },
          }}
        >
          TOP PRODUCTS
        </Typography>
        <Box
          width="80px"
          sx={{
            borderBottom: "3px solid #000",
            height: "25px",
            marginLeft: "30px",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Button
          sx={{
            color: "#000",
            border: "1px solid #000",
            borderRadius: "40px",
            padding: "5px 30px",
            "&:hover":{
              backgroundColor:"#fff"
            }
          }}
        >
          FICTION
        </Button>
        <Button
          sx={{
            color: "#000",
            border: "1px solid #000",
            borderRadius: "40px",
            padding: "5px 30px",
            "&:hover":{
              backgroundColor:"#fff"
            }
          }}
        >
          STRIKE
        </Button>
        <Button
          sx={{
            color: "#000",
            border: "1px solid #000",
            borderRadius: "40px",
            padding: "5px 30px",
            "&:hover":{
              backgroundColor:"#fff"
            }
          }}
        >
          ANTHOLOGIES
        </Button>
      </Box>
      <br />
      <Box
        sx={{
          width: "100%",
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
          }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { md: "220px", sm: "150px", xs: "130px" },
                //  width: {md:"220px",sm:"150px",xs:"130px"},
                // borderRadius: "50%!important",
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/1.jpg"})
                center/cover no-repeat`,
              }}
            ></Item>
            <Item sx={{}}>
              <Box display="flex" justifyContent="center" paddingTop="20px">
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#999999", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "18px", sm: "16px", xs: "14px" },
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                First Air Headphone <br /> Black
              </Typography>
              <Typography>Headphone</Typography>
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "20px",
                }}
              >
               ₹ 1199.00
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { md: "220px", sm: "150px", xs: "130px" },
                //  width: {md:"220px",sm:"150px",xs:"130px"},
                // borderRadius: "50%!important",
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/2.jpg"})
                center/cover no-repeat`,
              }}
            ></Item>
            <Item sx={{}}>
              <Box display="flex" justifyContent="center" paddingTop="20px">
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#999999", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "18px", sm: "16px", xs: "14px" },
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Full Bast Doule Speaker
              </Typography>
              <Typography>Headphone</Typography>
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "20px",
                }}
              >
               ₹ 1199.00
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { md: "220px", sm: "150px", xs: "130px" },
                //  width: {md:"220px",sm:"150px",xs:"130px"},
                // borderRadius: "50%!important",
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/8.jpg"})
                center/cover no-repeat`,
              }}
            ></Item>
            <Item sx={{}}>
              <Box display="flex" justifyContent="center" paddingTop="20px">
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#999999", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "18px", sm: "16px", xs: "14px" },
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Featured Tab Windows
              </Typography>
              <Typography>Headphone</Typography>
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "20px",
                }}
              >
                
               ₹ 1199.00
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { md: "220px", sm: "150px", xs: "130px" },
                //  width: {md:"220px",sm:"150px",xs:"130px"},
                // borderRadius: "50%!important",
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/6.jpg"})
                center/cover no-repeat`,
              }}
            ></Item>
            <Item sx={{}}>
              <Box display="flex" justifyContent="center" paddingTop="20px">
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#999999", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "18px", sm: "16px", xs: "14px" },
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Cannon D300R
              </Typography>
              <Typography>Headphone</Typography>
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "20px",
                }}
              >
                
               ₹ 1199.00
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { md: "220px", sm: "150px", xs: "130px" },
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/3.jpg"})
                center/cover no-repeat`,
              }}
            ></Item>
            <Item sx={{}}>
              <Box display="flex" justifyContent="center" paddingTop="20px">
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#999999", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "18px", sm: "16px", xs: "14px" },
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Xo GoPro Hero
              </Typography>
              <Typography>Headphone</Typography>
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "20px",
                }}
              >
                
               ₹ 1199.00
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { md: "220px", sm: "150px", xs: "130px" },
                //  width: {md:"220px",sm:"150px",xs:"130px"},
                // borderRadius: "50%!important",
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/4.jpg"})
                center/cover no-repeat`,
              }}
            ></Item>
            <Item sx={{}}>
              <Box display="flex" justifyContent="center" paddingTop="20px">
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#999999", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "18px", sm: "16px", xs: "14px" },
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Twin Wash Dual
              </Typography>
              <Typography>Headphone</Typography>
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "20px",
                }}
              >
                
               ₹ 1199.00
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { md: "220px", sm: "150px", xs: "130px" },
                //  width: {md:"220px",sm:"150px",xs:"130px"},
                // borderRadius: "50%!important",
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/7.jpg"})
                center/cover no-repeat`,
              }}
            ></Item>
            <Item sx={{}}>
              <Box display="flex" justifyContent="center" paddingTop="20px">
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#999999", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "18px", sm: "16px", xs: "14px" },
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Wifi Printer For Office
              </Typography>
              <Typography>Headphone</Typography>
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "20px",
                }}
              >
                
               ₹ 1199.00
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { md: "220px", sm: "150px", xs: "130px" },
                //  width: {md:"220px",sm:"150px",xs:"130px"},
                // borderRadius: "50%!important",
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/5.jpg"})
                center/cover no-repeat`,
              }}
            ></Item>
            <Item sx={{}}>
              <Box display="flex" justifyContent="center" paddingTop="20px">
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#999999", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "18px", sm: "16px", xs: "14px" },
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Play Station Suporting
              </Typography>
              <Typography>Headphone</Typography>
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "20px",
                }}
              >
                
               ₹ 1199.00
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
