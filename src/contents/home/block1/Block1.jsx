import {
    ArrowForwardIosOutlined,
    LocalFlorist,
    Send,
  } from "@mui/icons-material";
  import { Box, Button, styled, Typography } from "@mui/material";
  import React from "react";
  const StyleToolbar = styled(Box)(({ theme }) => ({
    padding: "80px 60px",
    background: `url(${"https://img.freepik.com/free-photo/high-angle-shot-lens-headphones-gimbal-phone_181624-43878.jpg?size=626&ext=jpg&uid=R96333062&ga=GA1.2.833918949.1682592323&semt=ais"})
    center/cover no-repeat fixed`,
    // position:"relative",
  
    zIndex:"0",
    
  }));
  export default function Block1() {
    return (
      <StyleToolbar>
        <Box sx={{ display: "flex", flexDirection: "column",gap:2.5, width:{md:"60%",sm:"100%",xs:"100%"} ,alignItems:{md:"start",sm:"flex-start",xs:"flex-start"}}}>
            <Typography variant="span" sx={{ fontWeight: 600,marginTop:"50px", fontSize:{md:'54px',sm:"48px",xs:"30px"},color:"#fff",justifyContent:{sm:"center",xs:"center"}}}>
            Capturing life's moments beautifully
            </Typography>
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
At our photo studio, we understand the importance of capturing life's precious moments. We strive to create beautiful, timeless portraits that you and your loved ones will cherish for years to come. 
</Typography>
         
          <Box sx={{ display: "flex",justifyContent:"flex-start",alignItems:"center", gap: 2, position: "relative",flexDirection:{xs:'column',md:"row",sm:"row"},paddingLeft:{xs:"0px"} }}>
            
              <Button
                variant="contained"
                endIcon={<ArrowForwardIosOutlined />}
                sx={{
                  color: "#AC78F6",
                  bgcolor: "white",
                  fontSize:{md:"14px",sm:"14px",xs:"10px"},
                  width:{md:"200px",sm:"180px",xs:"130px"},
                  
                }}
              >
                Start Now
              </Button>
              {/* <ArrowForwardIosOutlined sx={{position:'absolute'}}/> */}
           
            
              <Button
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
              </Button>
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
  