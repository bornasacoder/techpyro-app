import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "58px 48px ",
  backgroundColor:"#F2F2F2",
  [theme.breakpoints.down("md")]: {
  justifyContent:"center",
  padding: "25px 5px ",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent:"center",
  },
}));
const Item = styled(Box)(({ theme }) => ({
  textAlign: "center",
  fontSize: "18px",
  borderRadius:"10px",
  height:"60vh",
 width:"28vw",
 [theme.breakpoints.down("md")]: {
 height:"50vh",
 width:"45vw"
  },
 [theme.breakpoints.down("sm")]: {
 height:"40vh",
 width:"92vw"
  },
}));
export default function Content10() {
  return (
    <StyleToolbar>
       
      <Box
        display="flex"
        flexDirection="column"
      >
         <Grid
          container
          rowSpacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
           
          }}
        >
         <Grid item xs={12} sm={6} md={4} sx={{display:"flex",flexDirection:"column",alignItems:"center"}} >
            <Item >
              <Box   sx={{
                height:"100%",
                width:"100%",
                "&:hover":{
                  transform:" scale(1.05)",
            transition:"all",
                },
                background: `url(${"https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
                center/cover no-repeat`,
              }}/>
            </Item>
            <br/>
            <Typography variant="h5" sx={{
              "&:hover":{
                borderBottom:"2px solid #000"
              }
            }}>Startup culture </Typography> 
          </Grid>
         <Grid item xs={12} sm={6} md={4} sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Item >
               <Box
              sx={{
                height:"100%",
                width:"100%",
                "&:hover":{
                  transform:" scale(1.05)",
                },
                background: `url(${"https://images.pexels.com/photos/8197526/pexels-photo-8197526.jpeg?auto=compress&cs=tinysrgb&w=600"})
                center/cover no-repeat`,
              }}
              />
            </Item>
            <br/>
            <Typography variant="h5" sx={{
              "&:hover":{
                borderBottom:"2px solid #000"
              }
            }}>Top Level Faculty</Typography>
          </Grid>
         <Grid item xs={12} sm={6} md={4} sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Item>
              <Box
              sx={{
                height:"100%",
                width:"100%",
                "&:hover":{
                  transform:" scale(1.05)",
                },
                background: `url(${"https://images.pexels.com/photos/1467564/pexels-photo-1467564.jpeg?auto=compress&cs=tinysrgb&w=600"})
                center/cover no-repeat`,
              }}
              />
            </Item>
            <br/>
            <Typography variant="h5" sx={{
              "&:hover":{
                borderBottom:"2px solid #000"
              }
            }}>Explore your journey of your life</Typography> 
          </Grid>
         
        </Grid>
      </Box>

        

    </StyleToolbar>
  );
}
