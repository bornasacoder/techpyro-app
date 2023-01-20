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
  backgroundColor: "#666666",
  color: "#fff",
  height: "90px",
  display: "flex",
  padding:'0px 20px',
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
    gap:"10px",
    height: "110px",

  },
}));
const Image = styled("img")(({ theme }) => ({
  height: "30px",
  width: "350px",
}));

const Footer = () => {
  return (
    <StyleToolbar>
      <Box
        sx={{
          color: "#fff",
          gap: "15px",
display:"flex"
          // display: { md: "flex", sm: "none", xs: "none" },
        }}
      >
        <Typography
          sx={{
            fontSize: {md:"20px",sm:'18px',xs:"14px"},
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          © 2022 Sinp. Made with
          <FavoriteBorder  sx={{color:"#FC6935"}}/>
          by Codecarnival.
        </Typography>
      </Box>
      <Box sx={{
            display: "flex",
            alignItems: "center",}}>
      <Image src="https://htmldemo.net/sinp/sinp/assets/images/logo/payment.webp" />
      </Box>
    </StyleToolbar>
  );
};

export default Footer;
