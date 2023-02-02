import {
  BorderBottom,
  CircleOutlined,
  DirectionsCarOutlined,
  Facebook,
  FacebookTwoTone,
  HealthAndSafetyOutlined,
  Instagram,
  LocationOn,
  Mail,
  Phone,
  Pinterest,
  SupportAgentOutlined,
  Twitter,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  Paper,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Footer from "components/footer/Footer";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // padding:"58px 58px",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
export default function Content4() {
  const theme = useTheme();
  return (
    <StyleToolbar>
      <Box
        sx={{
          display: "flex",
          padding: { md: "58px 58px ", sm: "58px 20px", xs: "58px 20px" },
          backgroundColor: "#282828",
          color: "#fff",
          fontFamily: " Trirong",
          justifyContent: "space-between",
          flexDirection: { md: "row", sm: "row", xs: "column" }, BorderBottom:"1px solid red"
        }}
      >
        <Box >
          <Box
            sx={{
              background: `url(${"https://eduma.thimpress.com/wp-content/uploads/2022/06/logo-white.png"})
                center/cover no-repeat`,
              height: "46.5px",
              width: "199.5px",
            }}
          />

          <br />
          <Typography sx={{ display: "flex", gap: "8px", color: "#AAAAAA" }}>
            <LocationOn sx={{ color: "#FAB519" }} />
            <Typography>
              Bhairo mandir Coloni Prem Nagar,
              <br />
              haridwar(uttrakhand)
            </Typography>
          </Typography>
          <br />
          <Typography sx={{ display: "flex", gap: "8px", color: "#AAAAAA" }}>
            <Phone sx={{ color: "#FAB519" }} />
            <Typography>+91 9999093930</Typography>
          </Typography>
          <br />
          <Typography sx={{ display: "flex", gap: "8px", color: "#AAAAAA" }}>
            <Mail sx={{ color: "#FAB519" }} />
            <Typography>domain@mail.com</Typography>
          </Typography>
          <br />
          <Box display="flex" gap={1}>
            <FacebookTwoTone
              sx={{
                color: "#000",
                "&:hover": {
                  color: "#FAB519",
                },
              }}
            />
            <Twitter
              sx={{
                color: "#000",
                "&:hover": {
                  color: "#FAB519",
                },
              }}
            />
            <Pinterest
              sx={{
                color: "#000",
                "&:hover": {
                  color: "#FAB519",
                },
              }}
            />
            <Instagram
              sx={{
                color: "#000",
                "&:hover": {
                  color: "#FAB519",
                },
              }}
            />
          </Box>
        </Box>
        <br/>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "#fff", fontfamily: " trirong" }}
          >
            Company
          </Typography>
          <br />
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            About
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            Blog
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            Contact
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            Become a Teacher
          </Typography>
        </Box>
        <br/>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "#fff", fontfamily: " trirong" }}
          >
            Links
          </Typography>
          <br />
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            Courses
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            Events
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            Gallery
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            FAQs
          </Typography>
        </Box>
        <br/>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "#fff", fontfamily: " trirong" }}
          >
            Support
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            Documentation
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            Forums
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            Language Packs
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            Release Status
          </Typography>
        </Box>
        <br/>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "#fff", fontfamily: " trirong" }}
          >
            Recommend
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            WordPress
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            LearnPress
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            WooCommerce
          </Typography>
          <br />
          <Typography
            sx={{
              display: "flex",
              gap: "8px",
              color: "#AAAAAA",
              alignItems: "center",
              "&:hover": {
                color: "#fab519",
              },
            }}
          >
            bbPress
          </Typography>
        </Box>
        
      </Box>
      <Box sx={{padding:{md:"0px 58px",sm:'0px 48px',xs:"0px 10px"},backgroundColor:"#282828"}}>
      <Box sx={{border:"0.5px solid #6B6663"}}/>
      </Box>
      <Box>
        <Footer/>
      </Box>
    </StyleToolbar>
  );
}
