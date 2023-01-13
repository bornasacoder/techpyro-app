import {
  ArrowForwardIosOutlined,
  LocalFlorist,
  Send,
} from "@mui/icons-material";
import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "68px 42px ",
  background: `url(${"/images/category/middle1.jpg"})
  center/cover no-repeat `,
  // position:"relative",

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
          color: "#000",
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
            fontWeight:'600',
            textAlign:"center",
            letterSpacing: "4px",
            // justifyContent: { sm: "center", xs: "center" },
            padding: "32px 0px 28px"
            ,width:{md:"60%",sm:"80%",xs:"100%"}
          }}
        >
          WELCOME TO CINNAMON DEMOS
        </Typography>
        <Box sx={{ display:"flex",justifyContent:"center",width:{md:"40%",sm:"80%",xs:"100%"}}}>
        <Typography
          variant="div"
          sx={{
            // padding: "0px 270px",
            fontFamily: "sans-serif",
            fontSize: "20px",
            color:"#6C7880",
            textAlign:"center"
            // color:"#fff"
          }}
        >
          Cinnamon Restaurant Theme is a responsive multipurpose restaurant
          WordPress theme which is designed for all types of food business
          related websites.
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
          >
          {/* <Button
              variant="contained"
              endIcon={<ArrowForwardIosOutlined />}
              sx={{
                color: "#AC78F6",
                bgcolor: "white",
                fontSize:{md:"14px",sm:"14px",xs:"10px"},
                width:{md:"200px",sm:"180px",xs:"130px"},
                
              }}
            >
              Start free trial
            </Button> */}
          {/* <ArrowForwardIosOutlined sx={{position:'absolute'}}/> */}

          {/* <Button
              variant="contained"
              endIcon={<Send />}
              sx={{
                color: "#fff",
                bgcolor: "transparent",
                border: "1px solid white",
                fontSize:{md:"14px",sm:"14px",xs:"10px"},
                width:{md:"200px",sm:"180px",xs:"130px"}
              }}
            >
              Contact sales
            </Button> */}
        </Box>

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          
          margin: "20px 0px",
          color: "#C9A46B",
        }}
      >
        <LocalFlorist />
        <LocalFlorist />
        <LocalFlorist />
        <LocalFlorist />
        <LocalFlorist />
      </Box> */}
      <Box
        sx={{
          display: "flex",
          color: "#666666",
          padding: { sm: "0px 25px", md: "0px 270px", xs: "0px 25px" },
        }}
      ></Box>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "Sofia",
          fontSize: "25px",
          //   padding: "0px 170px",
          marginTop: "55px",
          padding: { md: "0px 170px", sm: "0px 30px", xs: "0px 30px" },
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni illum
        sed ipsum aliquid! Sunt laudantium totam optio rem ad. Quos dolorum
        facere veritatis commodi sint. In possimus harum nesciunt ipsum
      </Box> */}
      {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Dancing Script",
            fontWeight: 600,
            fontSize: "3rem",
            paddingTop: "70px",
            marginBottom: "-10px",
          }}
        >
          Our Food Items
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0px",
          color: "#C9A46B",
        }}
      >
        <LocalFlorist />
        <LocalFlorist />
        <LocalFlorist />
        <LocalFlorist />
        <LocalFlorist />
      </Box> */}
    </StyleToolbar>
  );
}
