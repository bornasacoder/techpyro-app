import {
  ArrowForwardIosOutlined,
  LocalFlorist,
  Send,
} from "@mui/icons-material";
import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "80px 60px",
  background: `url(${"/images/category/middle.jpg"})
  center/cover no-repeat`,
  
}));
export default function MiddleContent() {
  return (
    <StyleToolbar>
      <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <Box paddingBottom="32px">
          <Typography variant="span" sx={{ fontWeight: 600, fontSize: "54px",color:"#fff"}}>
            Power Your Deliveries
          </Typography>
        </Box>
        <Box paddingBottom="32px">
          <Typography
            variant="p"
            sx={{
              // padding: "0px 270px",
              fontFamily: "sans-serif",
              fontSize: "17px",
              // textAlign:"center"
              color:"#fff"
            }}
          >
            Delight customers, scale operations, and boost efficiency with the
            world's most advanced logistics software.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2, position: "relative" }}>
          <Box>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIosOutlined />}
              sx={{
                color: "#AC78F6",
                bgcolor: "white",
               
              }}
            >
              Start free trial
            </Button>
            {/* <ArrowForwardIosOutlined sx={{position:'absolute'}}/> */}
          </Box>
          <Box>
            <Button
              variant="contained"
              endIcon={<Send />}
              sx={{
                color: "#fff",
                bgcolor: "transparent",
                border: "1px solid white",
              }}
            >
              Contact sales
            </Button>
          </Box>
        </Box>
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
