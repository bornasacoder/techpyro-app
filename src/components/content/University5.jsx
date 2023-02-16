import { TableChart, TableChartOutlined } from '@mui/icons-material';
import { Grid, Paper, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react'
const StyleToolbar = styled(Box)(({ theme }) => ({
    padding:"58px 58px",
    backgroundColor:"#0056D2",
    color:"#fff",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      padding:"58px 20px"
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection:"column",
      flex:"4",
      padding:"58px 20px"
    },
  }));
  const Item = styled(Paper)(({ theme }) => ({
   backgroundColor:"#0056D2",
   boxShadow:"none",
   borderRadius:"0px",
   display:"flex",
   flexDirection:"column",
   color:"#fff",
   alignItems:"flex-start"
  }));
const University5 = () => {
  return (
    <StyleToolbar>
      <Box sx={{flex:"2"}}>
<Typography variant='h2' sx={{display:"flex",flexWrap:"wrap",fontSize:{md:"48px",sm:"36px",xs:"30px"}}}>Expand your curriculum and empower your faculty</Typography>
<br/>
<Typography variant='p' sx={{display:"flex",flexWrap:"wrap",fontSize:{md:"20px",sm:"18px",xs:"14px"}}}>Deliver practical, job-relevant learning experiences with professional content and courses from university and industry experts</Typography>
      </Box>
      <Box sx={{flex:"2",marginLeft:{md:"50px",sm:"50px"}}}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4}}>
  <Grid item xs={6}>
    <Item>
        <TableChartOutlined sx={{fontSize:"80px",fontWeight:"200"}}/>
        <br/>
        <Typography variant="h2" sx={{fontSize:"20px"}}>Guided Projects</Typography>
        <Typography  sx={{fontSize:"14px"}}>Give students hands-on projects to practice skills and stand out to employers.</Typography>
    </Item>
  </Grid>
  <Grid item xs={6}>
  <Item>
        <TableChartOutlined sx={{fontSize:"80px",fontWeight:"200"}}/>
        <br/>
        <Typography variant="h2" sx={{fontSize:"20px"}}>Guided Projects</Typography>
        <Typography  sx={{fontSize:"14px"}}>Give students hands-on projects to practice skills and stand out to employers.</Typography>
    </Item>
  </Grid>
  <Grid item xs={6}>
  <Item>
        <TableChartOutlined sx={{fontSize:"80px",fontWeight:"200"}}/>
        <br/>
        <Typography variant="h2" sx={{fontSize:"20px"}}>Professional Certificates</Typography>
        <Typography  sx={{fontSize:"14px"}}>Help your students grow job confidence, apply learning, and hone critical skills in high-growth fields.</Typography>
    </Item>
  </Grid>
  <Grid item xs={6}>
  <Item>
        <TableChartOutlined sx={{fontSize:"80px",fontWeight:"200"}}/>
        <br/>
        <Typography variant="h2" sx={{fontSize:"20px"}}>LMS Integration</Typography>
        <Typography  sx={{fontSize:"14px"}}>Streamline the learning experience by linking Coursera to your learning management system.</Typography>
    </Item>
  </Grid>
</Grid>
      </Box>
    </StyleToolbar>
  )
}

export default University5
