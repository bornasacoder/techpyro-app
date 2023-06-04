import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor:"red",
  padding: "48px 58px ",
  display:"flex",
  justifyContent:"space-around"
}));
export default function Content10() {
  return (
    <StyleToolbar>
      <Box
        display="flex"
        justifyContent="center"
        gap={5}
        sx={{
          flexDirection: { md: "row", sm: "column", xs: "column" },
          textAlign: "center",
        }}
      >
         {/* <Box data-aos="fade-right">
          <Campaign sx={{ fontSize: "100px" }} />
          </Box>  */}

        <Box sx={{ display:"flex", justifyContent:"center",textAlign:"center"}}>
          <Typography
            sx={{
              color: "white",
              fontSize: {md:'38px',sm:"24px",xs:"20px"},
              // fontFamily: "Dancing Script",
              textAlign:"center"
              
            }}
          >
           {/* JOIN WITH US */}
           FIRST PURCHASE
           <br/>
           AND GET 15% OFF
          </Typography>
        </Box>
         
          
          <Box display="flex" justifyContent="center" alignItems="center">
          <Button
          endIcon={<ArrowForward/>}
            sx={{
              // border: "3px solid #000",
             
              backgroundColor: "#000",
              color: "#ffffff",
              borderRadius: "0px",
              "&:hover": {
                background: "white",
                color: "#000",
              },
              // display: { md: "block", sm: "none", xs: "none" },
            }}
          >
            SIGN UP FOR FREE
          </Button>
        </Box>
      </Box>
    </StyleToolbar>
  );
}
