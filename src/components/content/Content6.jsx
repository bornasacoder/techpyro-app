import { CurrencyRupee, Star } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  padding: "58px 10px ",

  [theme.breakpoints.down("sm")]: {
    padding: "58px 10px ",
    flexDirection:"column"
  },

  gap: 2,
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px!important",
  boxShadow: "none!important",
  textAlign: "center",
  backgroundColor: "#FFFFFF!important",
  fontSize: "18px",
  //   [theme.breakpoints.down("sm")]: {
  //     width: "150px",
  //   },
}));
export default function Content6() {
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
            borderBottom:{md:"3px solid #000",xs:"2px solid #000"} ,
          height: {md:"20px",xs:'10px'},
            marginRight: "30px",
          }}
        />
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontFamily: "Trirong",
            fontSize: { md: "28px", sm: "24px", xs: "16px" },
          }}
        >
          BEST SELLING
        </Typography>
        <Box
          width="80px"
          sx={{
            borderBottom:{md:"3px solid #000",xs:"2px solid #000"} ,
            height: {md:"20px",xs:'10px'},
            marginLeft: "30px",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection:{xs:'column'}
        }}
      >
        <Grid
          container
          rowSpacing={1}
          sx={{
            // bgcolor: "#F4F4F4",
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
          columnSpacing={{ xs: 1, sm: 2, md: 1 }}
          //   xs={{xs:12,sm:6,md:4}}
        >
          <Grid item md={5} xs={12}>
            <Item
              sx={{
                display: "flex",
                flexDirection:"column",
                justifyContent: "flex-end",
                height: { md: "548px", sm: "458px",  xs: "320px" },
                //  width: {md:"270px",sm:"150px",xs:"130px"},
                // borderRadius: "50%!important",
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/9.jpg"})
                center/cover no-repeat`,
              }}
            >
             <Box display="flex" justifyContent="center" paddingTop="20px">
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "38px", sm: "16px",  xs: "16px" },
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Play Station
              </Typography>
              <Typography>Headphone</Typography>
              <Typography
                variant="h3"
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
          <Grid item md={7} xs={12} sx={{ display: "flex", }} container>
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection:"column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: { md: "270px", sm: "150px", xs: "320px" },
                  margin:"5px",
                  background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/10.jpg"})
                center/cover no-repeat`,
                }}
              >
                 <Box display="flex" justifyContent="center" paddingTop="20px">
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "18px", sm: "16px",  xs: "16px" },
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Play Station
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
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection:"column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: { md: "270px", sm: "150px",    xs: "320px" },
                  margin:"5px",
                  //  width: {md:"270px",sm:"150px",xs:"130px"},
                  // borderRadius: "50%!important",
                  background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/11.jpg"})
                center/cover no-repeat`,
                }}
              >
                 <Box display="flex" justifyContent="center" paddingTop="20px">
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "18px", sm: "16px",  xs: "16px" },
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Play Station
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
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection:"column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: { md: "270px", sm: "150px",    xs: "320px" },
                  margin:"5px",
                  //  width: {md:"270px",sm:"150px",xs:"130px"},
                  // borderRadius: "50%!important",
                  background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/12.jpg"})
                center/cover no-repeat`,
                }}
              >
                 <Box display="flex" justifyContent="center" paddingTop="20px">
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "18px", sm: "16px",  xs: "16px" },
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Play Station
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
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection:"column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: { md: "270px", sm: "150px",    xs: "320px" },
                  margin:"5px",
                  //  width: {md:"270px",sm:"150px",xs:"130px"},
                  // borderRadius: "50%!important",
                  background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/13.jpg"})
                center/cover no-repeat`,
                }}
              >
                 <Box display="flex" justifyContent="center" paddingTop="20px">
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "18px", sm: "16px",  xs: "16px" },
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Play Station
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
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection:"column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: { md: "270px", sm: "150px",    xs: "320px" },
                  margin:"5px",
                  //  width: {md:"270px",sm:"150px",xs:"130px"},
                  // borderRadius: "50%!important",
                  background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/14.jpg"})
                center/cover no-repeat`,
                }}
              >
                 <Box display="flex" justifyContent="center" paddingTop="20px">
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "18px", sm: "16px",  xs: "16px" },
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Play Station
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
            <Grid item xs={12} sm={6} md={4}>
              <Item
                sx={{
                  display: "flex",
                  flexDirection:"column",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: { md: "270px", sm: "150px",    xs: "320px" },
                  margin:"5px",
                  //  width: {md:"270px",sm:"150px",xs:"130px"},
                  // borderRadius: "50%!important",
                  background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/product/electro/15.jpg"})
                center/cover no-repeat`,
                }}
              >
                 <Box display="flex" justifyContent="center" paddingTop="20px">
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
                <Star sx={{ color: "#FFC600", fontSize: "20px" }} />
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { md: "18px", sm: "16px",  xs: "16px" },
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Play Station
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
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
