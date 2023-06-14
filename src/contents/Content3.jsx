import { CheckCircleSharp } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import Image from "next/image";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  padding: "58px 58px",
  backgroundColor: "#F5F5F5",
  [theme.breakpoints.down('md')]:{
    padding: "58px 20px",
  },
  [theme.breakpoints.down('sm')]:{
    // flexDirection:"column",
    padding: "58px 20px",
  }
}));
const Item = styled(Paper)(({ theme }) => ({
 borderRadius:"0px",
 boxShadow:"none"
}));
const Content3 = () => {
  return (
    <StyleToolbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "33px" }}>Rooms & Suites</Typography>
        <br />
        <br />
        <Typography sx={{ width:{ md:"59vw",sm:"70vw",xs:"90vw"}, textAlign: "center" }}>
          With a wide variety of luxurious Rooms & Suites there is something for
          each taste. A very small stage in a vast cosmic arena bits of moving
          fluff take root and flourish a mote of dust suspended in a sunbeam
          rings.
        </Typography>
      </Box>
      <br />
      <Box>
        <Grid container  columnSpacing={2} rowSpacing={3}>
          <Grid md={4} sm={6} xs={12} item sx={{boxShadow:"3px #CCCCCC",}}>
            <Item>
            <Box sx={{background:`url("https://themes.themeenergy.com/bookyourtravel/hotel/wp-content/uploads/sites/10/2018/11/hotel14-600x400.jpg") center`,height:"250px",width:"auto"}}/>
            <Box sx={{ padding: "10px 10px" }}>
              <Typography sx={{ fontSize: "20px" }}>Comfort Room</Typography>
              <br />
              <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
              <br />
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                From{" "}
                <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                  ₹ 23999
                </Typography>{" "}
              </Box>
              <br />
              <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
              <br />
              <Typography>
                As a patch of light bits of moving fluff with pretty stories for
                which there's little good evidence.
              </Typography>
              <br/>
              <Box>
                <Typography sx={{display:"flex",alignItems:"center",gap:"10px"}}><CheckCircleSharp sx={{color:"#858585"}}/> 2 Twin beds</Typography>
                <Typography sx={{display:"flex",alignItems:"center",gap:"10px"}}><CheckCircleSharp sx={{color:"#858585"}}/>247 sq feet</Typography>
                <Typography sx={{display:"flex",alignItems:"center",gap:"10px"}}><CheckCircleSharp sx={{color:"#858585"}}/> 2 adults, 1 child</Typography>
              </Box>
              <br />
              <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
              <br />
              <Box sx={{display:"flex",justifyContent:"center"}}>
                <Button sx={{padding:"5px 10px",backgroundColor:"#00BFA5",color:"#FFFFFF",borderRadius:"0px","&:hover":{
                    backgroundColor:"#000"
                }}}>BOOK NOW</Button>
              </Box>
            </Box>
            </Item>
          </Grid>
          <Grid md={4} sm={6} xs={12} item sx={{boxShadow:"3px #CCCCCC",}}>
            <Item>
            <Box sx={{background:`url("https://themes.themeenergy.com/bookyourtravel/hotel/wp-content/uploads/sites/10/2018/10/hotel4-600x400.jpg") center`,height:"250px",width:"auto"}}/>
            <Box sx={{ padding: "10px 10px" }}>
              <Typography sx={{ fontSize: "20px" }}>Comfort Room</Typography>
              <br />
              <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
              <br />
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                From{" "}
                <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                  ₹ 23999
                </Typography>{" "}
              </Box>
              <br />
              <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
              <br />
              <Typography>
                As a patch of light bits of moving fluff with pretty stories for
                which there's little good evidence.
              </Typography>
              <br/>
              <Box>
                <Typography sx={{display:"flex",alignItems:"center",gap:"10px"}}><CheckCircleSharp sx={{color:"#858585"}}/> 2 Twin beds</Typography>
                <Typography sx={{display:"flex",alignItems:"center",gap:"10px"}}><CheckCircleSharp sx={{color:"#858585"}}/>247 sq feet</Typography>
                <Typography sx={{display:"flex",alignItems:"center",gap:"10px"}}><CheckCircleSharp sx={{color:"#858585"}}/> 2 adults, 1 child</Typography>
              </Box>
              <br />
              <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
              <br />
              <Box sx={{display:"flex",justifyContent:"center"}}>
                <Button sx={{padding:"5px 10px",backgroundColor:"#00BFA5",color:"#FFFFFF",borderRadius:"0px","&:hover":{
                    backgroundColor:"#000"
                }}}>BOOK NOW</Button>
              </Box>
            </Box>
            </Item>
          </Grid>
          <Grid md={4} sm={6} xs={12} item sx={{boxShadow:"3px #CCCCCC",}}>
            <Item>
            <Box sx={{background:`url("https://themes.themeenergy.com/bookyourtravel/hotel/wp-content/uploads/sites/10/2018/10/hotel11-600x400.jpg") center`,height:"250px",width:"auto"}}/>
            <Box sx={{ padding: "10px 10px" }}>
              <Typography sx={{ fontSize: "20px" }}>Comfort Room</Typography>
              <br />
              <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
              <br />
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                From{" "}
                <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                  ₹ 23999
                </Typography>{" "}
              </Box>
              <br />
              <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
              <br />
              <Typography>
                As a patch of light bits of moving fluff with pretty stories for
                which there's little good evidence.
              </Typography>
              <br/>
              <Box>
                <Typography sx={{display:"flex",alignItems:"center",gap:"10px"}}><CheckCircleSharp sx={{color:"#858585"}}/> 2 Twin beds</Typography>
                <Typography sx={{display:"flex",alignItems:"center",gap:"10px"}}><CheckCircleSharp sx={{color:"#858585"}}/>247 sq feet</Typography>
                <Typography sx={{display:"flex",alignItems:"center",gap:"10px"}}><CheckCircleSharp sx={{color:"#858585"}}/> 2 adults, 1 child</Typography>
              </Box>
              <br />
              <Typography sx={{ borderBottom: "1px solid #CCCCCC" }} />
              <br />
              <Box sx={{display:"flex",justifyContent:"center"}}>
                <Button sx={{padding:"5px 10px",backgroundColor:"#00BFA5",color:"#FFFFFF",borderRadius:"0px","&:hover":{
                    backgroundColor:"#000"
                }}}>BOOK NOW</Button>
              </Box>
            </Box>
            </Item>
          </Grid>
          
        </Grid>
      </Box>
    </StyleToolbar>
  );
};

export default Content3;
