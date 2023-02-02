import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // backgroundColor:"red",
  padding: "10px  58px  ",
  backgroundColor:"#FFFFFF",
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
  borderRadius: "0!important",
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
      <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:{md:"row",sm:"row",xs:"column"} ,paddingBottom:"40px"}}>
<Box>
  <Typography variant="h2" >Explore Certificates</Typography>
  <Typography>Lorem ipsum dolor sit amet.</Typography>
</Box>
<br/>
<Box>
  <Button sx={{color:"#000",fontWeight:"400",borderRadius:"0px",border:"1px solid #E6E6E6","&:hover":{
    backgroundColor:"#fff",border:"1px solid #FFB606"
  }}}>VIEW ALL</Button>
</Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={5}
      ><Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
         <Grid item xs={12} sm={6} md={3}  >
          <Item sx={{border:"1px solid  #E6E6E6"}}>
            <Item
              sx={{
                height:"200px",
                background: `url(${"https://eduma.thimpress.com/wp-content/uploads/2022/11/certificates-new-1-2.png"})
                center/cover no-repeat`,
              }}
            >
            </Item>
            <Typography variant="h5" sx={{display:"flex",justifyContent:"center",padding:"20px 0px","&:hover":{
              color:"#FFB606"
            }}}>Certificate of Training</Typography>
            </Item>
         </Grid>
         <Grid item xs={12} sm={6} md={3}  >
          <Item sx={{border:"1px solid  #E6E6E6"}}>
            <Item
              sx={{
                height:"200px",
                background: `url(${"https://eduma.thimpress.com/wp-content/uploads/2022/11/certificates-new-2-2.png"})
                center/cover no-repeat`,
              }}
            >
            </Item>
            <Typography variant="h5" sx={{display:"flex",justifyContent:"center",padding:"20px 0px","&:hover":{
              color:"#FFB606"
            }}}>Course Completion</Typography>
            </Item>
         </Grid>
         <Grid item xs={12} sm={6} md={3}  >
          <Item sx={{border:"1px solid  #E6E6E6"}}>
            <Item
              sx={{
                height:"200px",
                background: `url(${"https://eduma.thimpress.com/wp-content/uploads/2022/11/certificates-new-3-2.png"})
                center/cover no-repeat`,
              }}
            >
            </Item>
            <Typography variant="h5" sx={{display:"flex",justifyContent:"center",padding:"20px 0px","&:hover":{
              color:"#FFB606"
            }}}>Digital Marketing</Typography>
            </Item>
         </Grid>
         <Grid item xs={12} sm={6} md={3}  >
          <Item sx={{border:"1px solid  #E6E6E6"}}>
            <Item
              sx={{
                height:"200px",
                background: `url(${"https://eduma.thimpress.com/wp-content/uploads/2022/11/certificates-new-4-2.png"})
                center/cover no-repeat`,
              }}
            >
            </Item>
            <Typography variant="h5" sx={{display:"flex",justifyContent:"center",padding:"20px 0px","&:hover":{
              color:"#FFB606"
            }}}>Data Analytics</Typography>
            </Item>
         </Grid>
        
         
        </Grid>
      </Box>

        

    </StyleToolbar>
  );
}
