import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import SearchBar from "components/navbar/searchbar/SearchBar";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent:"space-around",
  backgroundColor: "#F2F2F2",
  gap: "30px",
  alignItems: "center",
  padding: "58px 80px",
  fontFamily: "Trirong",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: "20px 8px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "20px 8px",
  },
}));
export default function Content8() {
  return (
    <StyleToolbar>
      <Box sx={{ flex: "2" }}>
        <Typography sx={{ fontSize: {md:"40px",sm:"35px",xs:"30px"} }}>TechPyro for Business</Typography>
        <br />
        <Typography sx={{ fontSize: {md:"18px",sm:"16px",xs:"14px"} }}>
          We’ve got the solution: world-class training and development programs
          developed by top universities and companies. All on Coursera for
          Business.
        </Typography>
        <br />
        <Box sx={{ display: "flex", gap: "20px",flexDirection:{md:"row",sm:"row",xs:"column"} }}>
          <Button sx={{ border: "1px solid #005FB9", borderRadius: "5px" }}>
            TechPyro for Enterprise
          </Button>
          <Button sx={{ border: "1px solid #005FB9", borderRadius: "5px" }}>
            TechPyro for Teams
          </Button>
        </Box>
      </Box>
      <br />
      <Box sx={{ flex: "2", }}>
        <Typography
          sx={{ fontSize: "18px", color: "#382D8B", textAlign: "center" }}
        >
          Thousands of institutions use Coursera’s enterprise offering.
        </Typography>
        <Box sx={{display:"flex",gap:"14px",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around",padding:"30px 20px"}}>
        <Box sx={{ background: `url(${"https://images.ctfassets.net/wp1lcwdav1p1/13nB6DdjBJdV5aWWWB5DbH/115574ebbc6de3dffd98daed665dc736/loreal.svg"})
                    center/cover no-repeat`,height:{md:"18px",sm:"18px",xs:"10px"},width:{md:"100px",sm:"100px",xs:"55px"}}}/>
        <Box sx={{ background: `url(${"https://images.ctfassets.net/wp1lcwdav1p1/2aaUOe2Jitm1Z6OPdylXsL/37974ceb0982ccf2c6fabf3fa6bdb5bc/pandg.svg"})
                    center/cover no-repeat`,height:{md:"40px",sm:"40px",xs:"20px"},width:{md:"40px",sm:"40px",xs:"20px"}}}/>
        <Box sx={{ background: `url(${"https://images.ctfassets.net/wp1lcwdav1p1/2GrvpTu7uhIqDkD6pKRsNe/b638d1a9e255bf669584199d00be89c3/novartis.svg"})
                    center/cover no-repeat`,height:{md:"26px",sm:"26px",xs:"15px"},width:{md:"161px",sm:"161px",xs:"100px"}}}/>
        <Box sx={{ background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6VBitPRAPftA13W807P55R/cf7909727911d285ef69133f11bdf714/telenor.png?auto=format%2Ccompress&dpr=2&w=90&h=40&q=40"})
                    center/cover no-repeat`,height:{md:"41px",sm:"41px",xs:"25px"},width:{md:"92px",sm:"92px",xs:"60px"}}}/>
        <Box sx={{ background: `url(${"https://images.ctfassets.net/wp1lcwdav1p1/7aJfKFjQEZUz8Pn8VWb5s5/dfff052fe5b257c8788b351a393c7d9e/airbus.svg"})
                    center/cover no-repeat`,height:{md:"18px",sm:"18px",xs:"8px"},width:{md:"100px",sm:"100px",xs:"45px"}}}/>
        <Box sx={{ background: `url(${"https://images.ctfassets.net/wp1lcwdav1p1/41QtOC7ZCIBCQa7hslWPne/265786c423394ff4b8ccc0717355593e/axisbank.svg"})
                    center/cover no-repeat`,height:{md:"25px",sm:"25px",xs:"15px"},width:{md:"100px",sm:"100px",xs:"60px"}}}/>
        <Box sx={{ background: `url(${"https://images.ctfassets.net/wp1lcwdav1p1/xDe4paGWFYV7PUUUrGYwh/c2c3bc8ad7dcb941d3795f97e8976ffd/accelya.svg"})
                    center/cover no-repeat`,height:{md:"25px",sm:"20px",xs:"12px"},width:{md:"93px",sm:"80px",xs:"45px"}}}/>
        <Box sx={{ background: `url(${"https://images.ctfassets.net/wp1lcwdav1p1/2gSh2ySvHF7nLxtb9dlQEt/764bae06b9276de25caa4ed11bf14000/tata.svg"})
                    center/cover no-repeat`,height:{md:"38px",sm:"38px",xs:"25px"},width:{md:"45px",sm:"45px",xs:"30px"}}}/>
        <Box sx={{ background: `url(${"https://images.ctfassets.net/wp1lcwdav1p1/1l8dobMLD5tgvoUKx7CMmc/8af080406e1f0263b9e3519c5bbfb285/axa.svg"})
                    center/cover no-repeat`,height:{md:"40px",sm:"40px",xs:"25px"},width:{md:"40px",sm:"40px",xs:"25px"}}}/>
        <Box sx={{ background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6cQLsEIdYwjlG4whpJ0bau/9d677ec033ecd7d839db255af5c4de4c/danone.png?auto=format%2Ccompress&dpr=2&w=110&h=36&q=40"})
                    center/cover no-repeat`,height:{md:"25px",sm:"25px",xs:"15px"},width:{md:'80px',sm:"80px",xs:"50px"}}}/>
        <Box sx={{ background: `url(${"https://images.ctfassets.net/wp1lcwdav1p1/5K06YCK3EeZfQxNQ7HNjto/ad24f473b92560276deacfcd23e0f1dd/sk.svg"})
                    center/cover no-repeat`,height:{md:"30px",sm:"30px"},width:{md:"39px",sm:"39px"}}}/>
        </Box>
      </Box>
    </StyleToolbar>
  );
}
