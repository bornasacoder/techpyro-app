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
const Content2 = () => {
  return (
    <StyleToolbar>
      <Box sx={{ flex: "3" }}>
        <Typography sx={{ fontSize: "10px", color: "#9C9E9C" }}>
          BOOK YOUR TRAVEL HOTEL
        </Typography>
        <Typography sx={{ fontSize: "33px" }}>
          In the heart of Amalfi
        </Typography>
        <br />
        <br />
        <Typography sx={{}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          itaque qui excepturi, labore ut quaerat eum perspiciatis mollitia
          assumenda eaque fuga eos, provident id architecto, delectus
          distinctio? Omnis labore tempore quibusdam nobis? Fugit modi autem
          nostrum error cum neque recusandae dolor atque quis! Tenetur nemo
          dolorum in aspernatur mollitia. Beatae.
        </Typography>
      </Box>
      <Box
        sx={{
          flex: "1",
          backgroundColor: "#F5F5F5",
          padding: "20px 20px",
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontStyle: "italic" }}>
          “Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          culpa ad repellat nostrum aliquid officiis cum, veritatis esse quod
          accusantium? Voluptatum quas fugit facilis nobis vero labore dicta
          officia odit!”
        </Typography>
        <Image src="/ta.png" width={60} height={60} />
      </Box>
    </StyleToolbar>
  );
};

export default Content2;
