import {
  Facebook,
  FacebookOutlined,
  FacebookRounded,
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
  // backgroundColor: "#282828",/
  color: "#fff",
  height: "90px",
  display: "flex",
  padding: "0px 40px",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    display:"none"
  },
}));

const Footer = () => {
  return (
    <StyleToolbar>
        <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#AAAAAA",
        }}
      >
        <Typography sx={{ display: "flex", gap: "3px" }}>
          Copyright © <Typography sx={{ color: "#000" }}>TechPyro</Typography>{" "}
          2023 . All Right Reserved
        </Typography>
      </Box>
      <Box
        sx={{
          color: "#AAAAAA",
          gap: "15px",
          display: "flex",
          alignItems:"center"
        }}
      >
        <FacebookOutlined sx={{backgroundColor:"#fff",color:"#000",fontSize:"24px"}}/>
        <LinkedIn sx={{backgroundColor:"#fff",color:"#000",fontSize:"24px"}}/>
        <Twitter sx={{backgroundColor:"#fff",color:"#000",fontSize:"24px"}}/>
        <YouTube sx={{backgroundColor:"#fff",color:"#000",fontSize:"24px"}}/>
        <Instagram sx={{backgroundColor:"#fff",color:"#000",fontSize:"24px"}}/>
      </Box>
    
    </StyleToolbar>
  );
};

export default Footer;
