import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "68px 42px ",
  gap: 2,
  [theme.breakpoints.down("md")]:{
padding:"68px 20px"
  },
  [theme.breakpoints.down("sm")]:{
padding:"68px 10px"
  }
}));
const Span = styled("span")(({theme})=>({
  color:"#0056D2",
  "&:hover":{
    textDecoration:"underline"
   }
}))
export default function Content3() {
  return (
    <StyleToolbar>
        <Typography
        sx={{fontSize:'30px',textAlign:"center"}}
        >
         We collaborate with 
         <Span  > 275+ leading universities and companies</Span>
        </Typography>
      <br/>
        <br/>
        <br/>
      <Box display="flex" gap={2} alignItems="center" flexWrap="wrap" padding="30px 20px">
        <Box sx={{height:{md:"25px",sm:"25px",xs:"15px"},width:{md:"150px",sm:"150px",xs:"80px"},background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/77hmeEJo3ZPlURCU02fD52/aa37b7f7b52285ba350acac62d8af5c1/illinois-3.png?auto=format%2Ccompress&dpr=2&w=&h=32"})
   center/cover no-repeat`,}}/>
        <Box sx={{height:{md:"30px",sm:"30px",xs:"15px"},width:{md:"90px",sm:"90px",xs:"45px"},background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6XkOucZz6pMLV5DPvXCgCL/1777129a58b0a62b237bd28e9956afe8/duke-3.png?auto=format%2Ccompress&dpr=2&w=&h=32"})
   center/cover no-repeat`,}}/>
        <Box sx={{height:{md:"30px",sm:"30px",xs:"16px"},width:{md:"95px",sm:"95px",xs:"50px"},background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1c6RjBHi3Lqb9QpWxje7iA/b529f909c5230af3210ba2d47d149620/google.png?auto=format%2Ccompress&dpr=2&w=&h=37"})
   center/cover no-repeat`,}}/>
        <Box sx={{height:{md:"50px",sm:"50px",xs:"25px"},width:{md:"50px",sm:"50px",xs:"25px"},background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/60SA8pGxPXMmJf4n7umK1H/ccec31bbe2358210bf8391dcba6cd2f1/umich.png?auto=format%2Ccompress&dpr=2&w=&h=55"})
   center/cover no-repeat`,}}/>
        <Box sx={{height:{md:"30px",sm:"30px",xs:"15px"},width:{md:"95px",sm:"95px",xs:"50px"},background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3toC4I7jbWxiedfxiyNjtT/735faeaf976a9692f425f8c3a7d125dc/1000px-IBM_logo.svg.png?auto=format%2Ccompress&dpr=2&w=&h=32"})
   center/cover no-repeat`,}}/>
        <Box sx={{height:{md:"40px",sm:"40px",xs:"22px"},width:{md:"155px",sm:"155px",xs:"85px"},background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/FHOd44z40jTFsSSao84AM/d1e357f5650a23bf2936114112d44445/imperial.png?auto=format%2Ccompress&dpr=2&w=&h=35"})
   center/cover no-repeat`,}}/>
        <Box sx={{height:{md:"32px",sm:"32px",xs:"17px"},width:{md:"151px",sm:"151px",xs:"80px"},background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4FSFmNXuDIzTvFb7n0v4mK/704ae9e0a7981fb6415f4cb4609bbbb3/stanford.svg?auto=format%2Ccompress&dpr=2&w=&h=27"})
   center/cover no-repeat`,}}/>
        <Box sx={{height:{md:"35px",sm:"35px",xs:"17px"},width:{md:"115px",sm:"115px",xs:"50px"},background: `url(${"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1ZeiauXe5bPProvfuIo7o2/55d005d42979ab585cdfa01f825b7d4f/penn.svg?auto=format%2Ccompress&dpr=2&w=&h=37"})
   center/cover no-repeat`,}}/>
      </Box>
    </StyleToolbar>
  );
}
