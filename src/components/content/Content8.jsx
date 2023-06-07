import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import SearchBar from "../../components/navbar/searchbar/SearchBar";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#F2F2F2",
  marginTop: "40px",
  alignItems: "center",
  padding: "58px 58px",
  fontFamily: "Trirong",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: "20px 8px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "20px 8px",
  },
}));
export default function Content8() {
  return (
    <StyleToolbar>
      <Box>
        <Typography>
          Subscribe now and receive weekly newsletter with educational<br/>
          materials, new courses, interesting posts, popular books and much<br/>
          more!
        </Typography>
      </Box>
      <br/>
      <Box>
        <SearchBar/>
      </Box>
    </StyleToolbar>
  );
}
