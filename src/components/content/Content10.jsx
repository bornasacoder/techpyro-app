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
                background: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7A-jGPcN3_OhbK9velV4uJZgtE8I9zNCB8g&usqp=CAU"})
                center/cover no-repeat`,
              }}/>
            </Item>
            <br/>
            <Typography variant="h5" sx={{
              "&:hover":{
                borderBottom:"2px solid #000"
              }
            }}>Make Future of students</Typography> 
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
                background: `url(${"https://www.uchicagomedicine.org/-/media/images/ucmc/forefront/channel-pages/gastroenterology/college-celiac-disease.jpg?sc_lang=en&h=385&as=1&hash=80BCC18EA40F3281C3ACA0C964E2816B"})
                center/cover no-repeat`,
              }}
              />
            </Item>
            <br/>
            <Typography variant="h5" sx={{
              "&:hover":{
                borderBottom:"2px solid #000"
              }
            }}>Top Level Teacher</Typography>
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
                background: `url(${"https://www.globalcareercounsellor.com/blog/wp-content/uploads/2021/03/ow-to-Effectively-Guide-Students-on-College-Admissions.jpg"})
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
