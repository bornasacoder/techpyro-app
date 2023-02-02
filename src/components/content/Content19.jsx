import {
  AutoStories,
  Language,
  School,
  WorkspacePremium,
} from "@mui/icons-material";
import { Button, Select, TextField, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const Box2 = styled(Box)(({ theme }) => ({
  height: "300px",
  width: "100%",
  backgroundImage: `url(${"https://images.pexels.com/photos/2098691/pexels-photo-2098691.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
  backgroundSize: "cover",
  margin: "100px 0px 0px 0px",
  backgroundColor: "rgba(0,0,0,0.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    padding: "40px 0px",
  },
}));

const Content19 = () => {
  const theme = useTheme();
  return (
    <>
      <Box2>
        <Box
          sx={{
            
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { md: "row", sm: "row", xs: "column" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              color: "white",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              borderRight: {
                md: "1px solid #E6E6E6",
                sm: "1px solid #E6E6E6",
                xs: "none",
              },
              gap: "20px",
            }}
          >
            <AutoStories
              sx={{ fontSize: { xs: "30px", sm: "35px", md: "65px" } }}
            />
            <Typography
              sx={{
                fontSize: { xs: "30px", sm: "35px", md: "30px" },
                fontWeight: "900",
              }}
            >
              98655
            </Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
              Learners
            </Typography>
          </Box>
          <br/>
          <br/>
          <Box
            sx={{
              display: "flex",
              color: "white",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              borderRight: {
                md: "1px solid #E6E6E6",
                sm: "1px solid #E6E6E6",
                xs: "none",
              },
              gap: "20px",
            }}
          >
            <School sx={{ fontSize: { xs: "30px", sm: "35px", md: "65px" } }} />
            <Typography
              sx={{
                fontSize: { xs: "30px", sm: "35px", md: "30px" },
                fontWeight: "900",
              }}
            >
              68655
            </Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
              Graduates
            </Typography>
          </Box>
<br/>
<br/>
          <Box
            sx={{
              display: "flex",
              color: "white",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              borderRight: {
                md: "1px solid #E6E6E6",
                sm: "1px solid #E6E6E6",
                xs: "none",
              },
              gap: "20px",
            }}
          >
            <Language
              sx={{ fontSize: { xs: "30px", sm: "35px", md: "65px" } }}
            />
            <Typography
              sx={{
                fontSize: { xs: "30px", sm: "35px", md: "30px" },
                fontWeight: "900",
              }}
            >
              35
            </Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
              Countries Reached
            </Typography>
          </Box>
<br/>
<br/>
          <Box
            sx={{
              display: "flex",
              color: "white",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              gap: "20px",
            }}
          >
            <WorkspacePremium
              sx={{ fontSize: { xs: "30px", sm: "35px", md: "65px" } }}
            />
            <Typography
              sx={{
                fontSize: { xs: "30px", sm: "35px", md: "30px" },
                fontWeight: "900",
              }}
            >
              1560
            </Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
              Course Published
            </Typography>
          </Box>
        </Box>
      </Box2>
    </>
  );
};

export default Content19;
