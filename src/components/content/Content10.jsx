import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "58px 48px ",
  backgroundColor:"#FFFFFF",
  [theme.breakpoints.down("md")]: {
  justifyContent:"center",
  padding: "25px 5px ",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent:"center",
    padding: " 0px",
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "none!important",
  textAlign: "center",
  fontSize: "18px",
}));
export default function Content10() {
  return (
    <StyleToolbar>
       
      <Box
        display="flex"
        flexDirection="column"
        sx={
          {   
          }
        }
      >
         <Grid
          container
          rowSpacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
           
          }}
        >
         <Grid item xs={12} sm={6} md={4} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection:"column",
                paddingLeft:"30px",
                textAlign:"initial",
                height:{md:"35vh",sm:"40vh",xs:"23vh"},
                width:{md:"28vw",sm:"48vw",xs:"95vw"},
                "&:hover":{
                  transform:" scale(1.05)",
                },
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/banner/15.jpg"})
                center/cover no-repeat`,
              }}
            >
            <Typography variant="h1">LIVE 4K!</Typography>  
            <Typography variant="h4">UPTO 20% OFF</Typography>  
            <Typography sx={{letterSpacing:"3px"}}>Amazone excusive</Typography>  
            <Typography>BUY NOW <ArrowForward fontSize="10px"/> </Typography>
            </Item>
            
          </Grid>
         <Grid item xs={12} sm={6} md={4} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:"column",
                paddingLeft:"30px",
                textAlign:"initial",
                height:{md:"35vh",sm:"40vh",xs:"23vh"},
                width:{md:"28vw",sm:"48vw",xs:"95vw"},
                "&:hover":{
                  transform:" scale(1.05)",
                },
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/banner/16.jpg"})
                center/cover no-repeat`,
              }}
            >
              <Typography variant="h1">LIVE 4K!</Typography>  
            <Typography variant="h4">UPTO 20% OFF</Typography>  
            <Typography sx={{letterSpacing:"3px"}}>Amazone excusive</Typography>  
            <Typography>BUY NOW <ArrowForward fontSize="10px"/> </Typography>
            </Item>
            
          </Grid>
         <Grid item xs={12} sm={6} md={4} >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection:"column",
                paddingLeft:"30px",
                textAlign:"initial",
                height:{md:"35vh",sm:"40vh",xs:"23vh"},
                width:{md:"28vw",sm:"48vw",xs:"95vw"},
                "&:hover":{
                  transform:" scale(1.05)",
                },
                background: `url(${"https://template.hasthemes.com/ezone/ezone/assets/img/banner/17.jpg"})
                center/cover no-repeat`,
              }}
            ><Typography variant="h1">LIVE 4K!</Typography>  
            <Typography variant="h4">UPTO 20% OFF</Typography>  
            <Typography sx={{letterSpacing:"3px"}}>Amazone excusive</Typography>  
            <Typography>BUY NOW <ArrowForward fontSize="10px"/> </Typography>
            </Item>
            
          </Grid>
         
        </Grid>
      </Box>

        

    </StyleToolbar>
  );
}
