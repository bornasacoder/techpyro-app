import { CircleOutlined, DirectionsCarOutlined, HealthAndSafetyOutlined, SupportAgentOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  Paper,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {

  },
  [theme.breakpoints.down("sm")]: {
    
    flexDirection:"column"
  },
}));
export default function Content4() {
  const theme = useTheme();
  return (
    <StyleToolbar>
      <Box
        sx={{
          display: "flex",
          padding: {md:"58px 58px ",sm:"58px 20px",xs:"58px 20px"},
          backgroundColor: "#282828",
          color: "#fff",
          justifyContent: "space-between",
          paddingTop:"30px" ,
          flexDirection:{md:"row",sm:"row",xs:"column"}
        }}
      >
        <Box>
          <Typography variant="h2">Contact Us</Typography>
          <Box
            sx={{
              width: "80px",
              height: "10px",
              borderBottom: "1px solid #414141",
            }}
          ></Box>
          <br />
          <Typography
            variant="h4"
            sx={{ display: "flex", gap: "8px", color: "#AAAAAA" }}
          >
            Address:
            <Typography>
              
              Bhairo mandir Coloni Prem Nagar,
              <br />
              haridwar(uttrakhand)
            </Typography>
          </Typography>
          <br />
          <Typography
            variant="h4"
            sx={{ display: "flex", gap: "8px", color: "#AAAAAA" }}
          >
            PHONE:
            <Typography>
              
              +91 9999093930 <br /> +91 3847687448
            </Typography>
          </Typography>
          <br />
          <Typography
            variant="h4"
            sx={{ display: "flex", gap: "8px", color: "#AAAAAA" }}
          >
            EMAIL:
            <Typography>
              domain@mail.com <br /> company@domain.info
            </Typography>
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2">My Account</Typography>
          <Box
            sx={{
              width: "80px",
              height: "10px",
              borderBottom: "1px solid #414141",
            }}
          ></Box>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <CircleOutlined sx={{ fontSize: "10px" }} /> Login Hare
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <CircleOutlined sx={{ fontSize: "10px" }} />
            Cart History
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <CircleOutlined sx={{ fontSize: "10px" }} />
            Payment History
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <CircleOutlined sx={{ fontSize: "10px" }} />
            Product Tracking
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <CircleOutlined sx={{ fontSize: "10px" }} /> Register
          </Typography>
          <br />
        </Box>
        <Box>
          <Typography variant="h2">Information</Typography>
          <Box
            sx={{
              width: "80px",
              height: "10px",
              borderBottom: "1px solid #414141",
            }}
          ></Box>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <CircleOutlined sx={{ fontSize: "10px" }} />
            About Us
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <CircleOutlined sx={{ fontSize: "10px" }} />
            Our Service
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <CircleOutlined sx={{ fontSize: "10px" }} />
            Pricing Plan
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <CircleOutlined sx={{ fontSize: "10px" }} />
            Vendor Detail
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <CircleOutlined sx={{ fontSize: "10px" }} />
            Affiliate
          </Typography>
          <br />
        </Box>
        <Box >
          <Typography variant="h2">Service</Typography>
          <Box
            sx={{
              width: "80px",
              height: "10px",
              borderBottom: "1px solid #414141",
            }}
          ></Box>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <CircleOutlined sx={{ fontSize: "10px" }} />
            Product Service
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <CircleOutlined sx={{ fontSize: "10px" }} />
            Payment Service
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <CircleOutlined sx={{ fontSize: "10px" }} />
            Discount Service
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <CircleOutlined sx={{ fontSize: "10px" }} />
            Shopping Service
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            <CircleOutlined sx={{ fontSize: "10px" }} />
            Promotional Add
          </Typography>
          <br />
        </Box>
      </Box>
      <Box
        sx={{
          display:"flex",
          backgroundColor: "#181818",
          justifyContent: "space-between",
          padding: {md:"58px 58px ",sm:"58px 20px",xs:"58px 20px"},
            flexDirection:{md:"row",sm:"row",xs:"column"}
        
        }}
      >
        <Box sx={{ display: "flex", gap: "20px", color: "#AAAAAA",paddingTop:"30px",  }}>
        <DirectionsCarOutlined
            sx={{ fontSize: "40px", color: "#fff", fontWeight: "50px" }}
          />
        <Typography
          variant="h2"
          sx={{fontSize:{md:"30px",sm:"26px",xs:"22px"},}}
        >
          Free Shipping
          <br/>
          <Typography paddingTop="10px">Free Shipping on Bangladesh</Typography>
        </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px", color: "#AAAAAA",paddingTop:"30px" }}>
        <HealthAndSafetyOutlined
            sx={{ fontSize: "40px", color: "#fff", fontWeight: "50px" }}
          />
        <Typography
          variant="h2"
          sx={{fontSize:{md:"30px",sm:"26px",xs:"22px"}}}
        >Money Guarentee
          <br/>
          <Typography paddingTop="10px">Free Shipping on Bangladesh</Typography>
        </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px", color: "#AAAAAA",paddingTop:"30px" }}>
        <SupportAgentOutlined
            sx={{ fontSize: "40px", color: "#fff", fontWeight: "50px" }}
          />
        <Typography
          variant="h2"
          sx={{fontSize:{md:"30px",sm:"26px",xs:"22px"}}}
        >Online Support
          <br/>
          <Typography paddingTop="10px">Free Shipping on Bangladesh</Typography>
        </Typography>
        </Box>
      </Box>
    </StyleToolbar>
  );
}
