import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // backgroundColor:"red",
  padding: "58px  58px  ",
  backgroundColor:"#FFFFFF",
  borderTop:"1px solid #F2F5F9",
  borderBottom:"1px solid #F2F5F9",
  [theme.breakpoints.down("md")]: {
  justifyContent:"center",
  padding: "25px 5px ",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent:"center",
    padding: "25px 20px 10px ",
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  // borderRadius: "!important",
  boxShadow: "none!important",
  textAlign: "center",
  fontSize: "18px",
  [theme.breakpoints.down("sm")]: {
  justifyContent:"center"
  },
}));
export default function Content12() {
  return (
    <StyleToolbar>
      <Box
        display="flex"
        flexDirection="column"
        gap={5}
        sx={
          {   
          }
        }
      ><Grid
          container
          rowSpacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
         <Grid item xs={4} sm={3} md={1.714} >
            <Item
              sx={{
                display: {md:"flex",sm:"flex",xs:"flex"},
                justifyContent: "center",
                alignItems: "center",
                // borderRadius: "50%!important",
                height:"90px",
                width:"90px",
               
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/brand-logo/12.png"})
                center/cover no-repeat`,
              }}
            >
            </Item>
         </Grid>
         <Grid item xs={4} sm={3} md={1.7} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // borderRadius: "50%!important",
                display: {md:"flex",sm:"flex",xs:"flex"},
                height:"90px",
                width:"90px",
               
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/brand-logo/13.png"})
                center/cover no-repeat`,
              }}
            >
            </Item>
         </Grid>
         <Grid item xs={4} sm={3} md={1.714} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // borderRadius: "50%!important",
                display: {md:"flex",sm:"flex",xs:"flex"},
                height:"90px",
                width:"90px",
               
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/brand-logo/11.png"})
                center/cover no-repeat`,
              }}
            >
            </Item>
         </Grid>
         <Grid item xs={4} sm={3} md={1.714} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                display: {md:"flex",sm:"flex",xs:"none"},
                // borderRadius: "50%!important",
                height:"90px",
                width:"90px",
               
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/brand-logo/10.png"})
                center/cover no-repeat`,
              }}
            >
            </Item>
         </Grid>
         <Grid item xs={4} sm={3} md={1.714} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                display: {md:"flex",sm:"none",xs:"none"},
                // borderRadius: "50%!important",
                height:"90px",
                width:"90px",
               
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/brand-logo/9.png"})
                center/cover no-repeat`,
              }}
            >
            </Item>
         </Grid>
         <Grid item xs={4} sm={3} md={1.714} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // borderRadius: "50%!important",
                display: {md:"flex",sm:"none",xs:"none"},
                height:"90px",
                width:"90px",
               
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/brand-logo/8.png"})
                center/cover no-repeat`,
              }}
            >
            </Item>
         </Grid>
         <Grid item xs={4} sm={3} md={1.714} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // borderRadius: "50%!important",
                display: {md:"flex",sm:"none",xs:"none"},
                height:"90px",
                width:"90px",
               
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/brand-logo/7.png"})
                center/cover no-repeat`,
              }}
            >
            </Item>
         </Grid>
        </Grid>
      </Box>

        

    </StyleToolbar>
  );
}
