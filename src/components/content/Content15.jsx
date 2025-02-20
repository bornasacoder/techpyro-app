import {
  AccessTime,
  ArrowForward,
  Campaign,
  CurrencyRupee,
  FavoriteBorder,
  RepeatOnRounded,
  RepeatOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
  Star,
  TrackChangesOutlined,
  WorkspacePremiumOutlined,
  WorkspacesOutlined,
} from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "58px 58px",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    padding: "25px 5px ",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    padding: "25px 20px ",
  },
}));
const Item = styled(Box)(({ theme }) => ({
  fontSize: "18px",
  gap: "10px",
  backgroundColor:"#FFFFFF",
  display:"flex",
  alignItems:"center",
  flexDirection:"column",
padding:"20px 20px",
    [theme.breakpoints.down("sm")]: {
      alignItems:"center"
    },
}));
export default function Content15() {
  return (
    <StyleToolbar>
      <Box>
        <Typography variant="h2" sx={{fontSize:"36px",fontWeight:"600",textAlign:"center"}}>Take the first step toward your new career</Typography>
        <Typography  sx={{fontSize:"20px",textAlign:"center"}}>Get professional-level training and earn a credential recognized by leading companies.</Typography>
      </Box>
      <br/>
      <br/>
      <br/>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
          }}
          columnSpacing={6}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item
              sx={{ padding:"20px 20px 62px" }}
            >
                <TrackChangesOutlined sx={{}}/>
              <Typography sx={{fontSize:"20px",fontWeight:"600",}}>Prior experience optional</Typography>
              <Typography sx={{color:"#636363",fontSize:"16px",textAlign:"center"}}>Build job-ready skills, even if you’re new to the field</Typography>
          <Typography sx={{borderBottom:"1px solid #EEEEEE",height:"20px",width:"100%"}}/>
          <Box sx={{padding:"5px 30px"}}>
          <Typography sx={{fontSize:"20px",fontWeight:"600",textAlign:"center"}}>2, 284, 150</Typography>
          <Typography sx={{textAlign:"center"}}>job openings across entry-level Professional Certificate fields¹</Typography>
          </Box>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item
              sx={{ display: "flex", alignItems: "center", }}
            >
                <WorkspacePremiumOutlined sx={{}}/>
              <Typography sx={{fontSize:"20px",fontWeight:"600",}}>Earn a valuable credential</Typography>
              <Typography sx={{color:"#636363",fontSize:"16px",textAlign:"center"}}>Apply your new skills to real-world projects using the latest industry tools and techniques.</Typography>
          <Typography sx={{borderBottom:"1px solid #EEEEEE",height:"20px",width:"100%"}}/>
          <Box sx={{padding:"5px 30px"}}>
          <Typography sx={{fontSize:"20px",fontWeight:"600",textAlign:"center"}}>4.7 / 5</Typography>
          <Typography sx={{textAlign:"center"}}>average rating given by 200,000+ global learners enrolled in an entry-level Professional Certificate²</Typography>
          </Box>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
          >
            <Item
              sx={{ padding:"20px 20px 85px" }}
            >
                <AccessTime sx={{}}/>
              <Typography sx={{fontSize:"20px",fontWeight:"600",}}>Learn at your own pace</Typography>
              <Typography sx={{color:"#636363",fontSize:"16px",textAlign:"center"}}>Complete the training in less than 6 months while working a full-time job.</Typography>
          <Typography sx={{borderBottom:"1px solid #EEEEEE",height:"20px",width:"100%"}}/>
          <Box sx={{padding:"5px 30px"}}>
          <Typography sx={{fontSize:"20px",fontWeight:"600",textAlign:"center"}}>Under 10 hours</Typography>
          <Typography sx={{textAlign:"center"}}>of flexible study per week³</Typography>
          </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </StyleToolbar>
  );
}
