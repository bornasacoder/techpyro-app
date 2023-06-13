import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  width: "98vw",
  display: "flex",
  position: "relative",
  justifyContent: "center",
}));
export default function Content8() {
  return (
    <StyleToolbar>
      <video
        width="100%"
        height="500px"
        style={{ position: "absolute", zIndex: "-1", objectFit: "cover" }}
        src="https://v4.cdnpk.net/videvo_files/video/free/video0462/large_watermarked/_import_60ea7d4e703ec0.39022137_FPpreview.mp4"
        autoPlay
        loop
        muted
      ></video>
      <Box
        gap={5}
        sx={{
          flexDirection: { md: "column", sm: "column", xs: "column" },
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          height: "500px",
        }}
      >
        <Box>
          
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h1"
              sx={{
                color: "#FC6539",
                fontFamily: " Abril Fatface",
                fontSize: { md: "48px", sm: "38px", xs: "30px" },
                // fontFamily: "Dancing Script",
              }}
            >
              The Right Fashion in furniture
            </Typography>
          </Box>
          <br/>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              fontSize: { md: "20px", sm: "18px", xs: "14px" },
              textAlign: "center",
              alignItems: "center",
            }}
          >
            In ornare quam viverra orci sagittis. Duis ultricies lacus sed
            turpis tincidunt id aliquet 
            <br/>
            risus. Arcu felis bibendum ut tristique
            et.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "0px 3px 3px 0px",
            borderBottom: "2px solid #000",
            borderRight: "2px solid #000",
          }}
        >
          <Button
            endIcon={<ArrowForward />}
            sx={{
              background: "white",
              color: "#000",
              borderRadius: "0px",
              // boxShadow: "0 3px 3px rgba(15,12, 10, 1)",
              "&:hover": {
                backgroundColor: "#000",
                color: "#ffffff",
              },
            }}
          >
            Join Now
          </Button>
        </Box>
        {/* <Box data-aos="fade-right">
          <Campaign sx={{ fontSize: "100px" }} />
          </Box>  */}
      </Box>
    </StyleToolbar>
  );
}
