import {
  ArrowForwardIosOutlined,
  LocalFlorist,
  Send,
} from "@mui/icons-material";
import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "68px 42px ",
  background: `url(${"https://as2.ftcdn.net/v2/jpg/00/90/93/97/1000_F_90939777_AREvg0n0SC0SZXOamWXfWyBretBCL0fL.jpg"})
  center/cover no-repeat `,
  zIndex: "0",
}));
export default function MiddleContent() {
  return (
    <StyleToolbar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 1,
          alignItems: { md: "center", sm: "flex-start", xs: "flex-start" },
        }}
      >
        <Typography
          variant="div"
          sx={{
            fontWeight: 600,
            marginTop: "60px",
            fontSize: { md: "48px", sm: "35px", xs: "30px" },
            textAlign: "center",
            letterSpacing: "4px",
            padding: "32px 0px 28px",
            width: { md: "60%", sm: "80%", xs: "100%" },
            color:"YELLOW"
          }}
        >
          WELCOME TO TECHPYRO SHOPPING MALL
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: { md: "50%", sm: "80%", xs: "100%" },
            color:"#fff"
          }}
        >
          <Typography
            variant="div"
            sx={{
              fontFamily: "sans-serif",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium culpa sapiente eius delectus sint, officia officiis at
            eos omnis, quasi debitis consectetur! Commodi nulla deleniti eum
            doloremque, reiciendis distinctio error quas totam, sit suscipit
            dolores tempore asperiores. Optio, hic maiores.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 2,
          position: "relative",
          flexDirection: { xs: "column", md: "row", sm: "row" },
          paddingLeft: { xs: "0px" },
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          color: "#666666",
          padding: { sm: "0px 25px", md: "0px 270px", xs: "0px 25px" },
        }}
      ></Box>
    </StyleToolbar>
  );
}
