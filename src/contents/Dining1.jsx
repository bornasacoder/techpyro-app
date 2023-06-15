import { FiberManualRecord } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import Image from "next/image";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "58px 58px",
  backgroundColor: "#FFFFFF",
  gap: "80px",
  [theme.breakpoints.down("md")]: {
    padding: "58px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "58px 10px",
  },
}));
const Dining1 = () => {
  return (
    <StyleToolbar>
      <Box sx={{ flex: "2.5" }}>
        <Typography sx={{ fontSize: "10px", color: "#9C9E9C" }}>
          THE DINING EXPERIENCE
        </Typography>
        <Typography sx={{ fontSize: "33px" }}>
          Where Every Taste Is a Journey
        </Typography>
        <br />
        <br />
        <Typography sx={{}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, in
          accusamus eum minus nihil illo. Qui neque provident nemo asperiores
          atque tenetur totam ipsam! Aspernatur voluptates officia consequuntur,
          repudiandae, dignissimos veniam consequatur, accusantium quo ipsum
          impedit sapiente nihil quae et rerum ipsa. Laudantium, sit. Eum
          impedit neque illo enim consequuntur.
        </Typography>
      </Box>
      <Box
        sx={{
          flex: "1.5",
          backgroundColor: "#F5F5F5",
          padding: "20px 20px",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <FiberManualRecord sx={{ fontSize: "10px" }} />
          Fare Calculation
        </Typography>
        <br />
        <Typography sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <FiberManualRecord sx={{ fontSize: "10px" }} />
          Time-Based Fare
        </Typography>
        <br />
        <Typography sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <FiberManualRecord sx={{ fontSize: "10px" }} />
          Flat Rate Fare
        </Typography>
        <br />
        <Typography sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <FiberManualRecord sx={{ fontSize: "10px" }} />
          Surge Pricing
        </Typography>
        <br />
        <Typography sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <FiberManualRecord sx={{ fontSize: "10px" }} />
          Additional Charges
        </Typography>
        <br />
        <Typography sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <FiberManualRecord sx={{ fontSize: "10px" }} />
          Booking Fee
        </Typography>
      </Box>
    </StyleToolbar>
  );
};

export default Dining1;
