import {
  Facebook,
  FavoriteBorder,
  Google,
  Instagram,
  Label,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor: "#282828",
  color: "#fff",
  height: "90px",
  display: "flex",
  padding: "0px 40px",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
    padding: "0px 20px",
  },
}));

const Footer = () => {
  return (
    <StyleToolbar>
      <Box
        sx={{
          color: "#AAAAAA",
          gap: "15px",
          display: "flex",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          privacy policy
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          Blog
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          Help Center
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#AAAAAA",
        }}
      >
        <Typography sx={{ display: "flex", gap: "3px" }}>
          Copyright © <Typography sx={{ color: "#fff" }}>TechPyro</Typography>{" "}
          2023 . All Right Reserved
        </Typography>
      </Box>
    </StyleToolbar>
  );
};

export default Footer;
