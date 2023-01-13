import {
  BorderBottom,
  Facebook,
  FacebookOutlined,
  Instagram,
  MenuBookRounded,
  Phone,
  Twitter,
} from "@mui/icons-material";
import { Box, Container, createTheme, Typography } from "@mui/material";
import React from "react";

const Content = () => {
  return (
    <Box
      sx={{
        bgcolor: "#575B5C",
        display: "flex",
        justifyContent: "center",
        gap: 2,
        height:"75px",
        padding:"37.5px 0px"
        // position:'static'
      }}
    >
      <Box color="#ffffff" padding="0px 4px">
        <FacebookOutlined fontSize="14px" />
      </Box>
      <Box color="#ffffff">
        <Twitter fontSize="12px" padding="0px 4px" />
      </Box>
      <Box color="#ffffff">
        <Instagram fontSize="14px" padding="0px 4px" />
      </Box>
      <Box display="flex">
        <Box padding="0px 10px" color="white">
          <MenuBookRounded fontSize="14px" />
        </Box>
        <Typography variant="h6" sx={{ color: "#ffffff", fontSize: "12px" }}>
          COMPANY, STREET, CITY, COUNTRY
        </Typography>
      </Box>
      <Box display="flex">
        <Box padding="0px 10px" color="white">
          <Phone fontSize="14px" />
        </Box>
        <Typography variant="h6" sx={{ color: "#ffffff", fontSize: "12px" }}>
          CALL US +919999999999
        </Typography>
      </Box>
    </Box>
  );
};

export default Content;
