import { LocalLibrary, LocalOffer, Mail, School, SearchRounded, SendOutlined } from "@mui/icons-material";
import { InputBase, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  padding: "58px 58px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  gap: "50px",
  color: "#fff",
  background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.3)
    ),url(${"https://ifs.org.uk/sites/default/files/styles/full_height_banner/public/2022-12/Children%20running%20into%20school.jpg?itok=EdnkvFS4"})
                center/cover no-repeat`,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "58px 10px",
    // gap: "40px",
    height:"60vh"

  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "2px solid #FFFFFF",
  borderRadius: "10px",
  width: "100%",
  padding: "10px 10px",
  width: "50vw",
  [theme.breakpoints.down("sm")]: {
    width: "95vw",
  },
}));
const MailIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  right: "0px",
  bottom: "0px",
  padding: "10px 15px",
  borderRadius: " 7px",
  backgroundColor: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FFB606",
  },
  color: "#000",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {},
}));
const Content17 = () => {
  return (
    <StyleToolbar>
      <Box textAlign="center">
        <Typography variant="h1" sx={{ letterSpacing: "2px" }}>
        Unlock Your Potential, Illuminate Your Future
        </Typography>
        <Typography
          sx={{
            fontSize: { md: "16px", sm: "18px", xs: "16px" },
            display: "flex",justifyContent:"center"
          }}
        >
          Empowering Education, Anywhere, Anytime
        </Typography>
      </Box>
      <Box>
        <Search>
          <StyledInputBase placeholder="What do you going to learn today? " />
          <MailIconWrapper>
            <SearchRounded />
          </MailIconWrapper>
        </Search>
      </Box>
      <Box sx={{display:"flex",gap:"30px",flexDirection:{md:"row",sm:"row",xs:"column"}}}>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <School sx={{ fontSize: "20px", color: "#FFB606" }} />
            <Typography> Over 7 million students</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <LocalOffer sx={{ fontSize: "20px", color: "#FFB606" }} />
            <Typography>More than 30,000 courses.</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <LocalLibrary sx={{ fontSize: "20px", color: "#FFB606" }} />
            <Typography>   Learn anything online.</Typography>
          </Box>
        </Box>
    </StyleToolbar>
  );
};

export default Content17;
