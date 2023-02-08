import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor: "#EBF3FF!important",
  padding: "58px 58px ",
  marginTop: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "20px 18px ",
    flexDirection: "column",
  },

  gap: 2,
}));
const Span = styled("span")(({ theme }) => ({
  fontWeight: "400",
  margin: "0px 5px",
}));
const Content20 = () => {
  return (
    <StyleToolbar>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          height: {md:"68vh",sm:"60vh",xs:'45vh'},
        }}
      >
        <Box
          sx={{
            background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6xXERT0XZPJDXgjPzr8Bve/d858e0cda1a5e5df2cb8accd65d5c1b7/outcomes.png?auto=format%2Ccompress&dpr=2&w=606&h=553&q=40"})
                    center/cover no-repeat`,
            height: { md: "75vh", sm: "60vh", xs: "40vh" },
            width: { md: "42vw", sm: "42vw", xs: "95vw" },
            position: "absolute",
            top: "-30px",
          }}
        />
      </Box>
      <Box sx={{maxWidth:{md:"50%",sm:"60%",xs:"90%"}}}>
        <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
          87% of people learning
          <Span>for professional development</Span>
          <Span sx={{ fontWeight: "600" }}>report career benefits,</Span>
          <Span>
            {" "}
            including outcomes like getting a promotion, becoming better at
            their current job, and finding a new job.
          </Span>
          <Span sx={{color:"#0062E4",textDecoration:"underline"}}>TechPyro Impact Report (2022)</Span>
        </Typography>
        <br/>
        <Box sx={{ paddingTop: { md: "20px" } }}>
          <Button
            sx={{
              backgroundColor: "#0062E4",
              color: "#fff",
              padding: "8px 15px",
              "&:hover": {
                backgroundColor: "#00419E",
              },
            }}
          >
            Join for free
          </Button>
        </Box>
      </Box>
    </StyleToolbar>
  );
};

export default Content20;
