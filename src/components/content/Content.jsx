import {
  BorderBottom,
  Facebook,
  FacebookOutlined,
  Instagram,
  Mail,
  MenuBookRounded,
  Phone,
  Twitter,
} from "@mui/icons-material";
import { Box, Container, createTheme, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
const StyleToolbar = styled(Toolbar)(({ theme }) => ({
  // backgroundColor: "#575B5C!important",
  opacity:"0.6",
  display: "flex",
  justifyContent: "space-between",
  // gap: 10,
  // height:"50px",
  padding:"15px 0px",
  [theme.breakpoints.down("md")]: {
    display:"flex",
    justifyContent:'center',
    flexDirection:"column",
    padding:"5px 0px",
    // height:"150px",
  },
  [theme.breakpoints.down("sm")]: {
    display:"flex",
    justifyContent: " none",
    flexDirection:"column",
    // height:"150px",
    padding:"5px 0px",
  },
  
}));
const Left = styled(Box)(({ theme }) => ({
  // gap: "120px",
  display: "flex",
  // flex:1,
  // border:"2px solid black",
  // justifyContent:"space-between",
  // alignItems: "center",
  padding:"15px 0px",
  
  gap: 30,
  marginLeft: "15px",
  // marginTop: "5px",
  [theme.breakpoints.down("sm")]: {
    display:"flex",
    justifyContent:"center",
  },
  [theme.breakpoints.down("md")]: {
    display:"flex",
    justifyContent:"center"
  },
}));
const Right = styled(Box)(({ theme }) => ({
  display: "flex",
// flexDirection:"end",
// justifyContent:"flex-end",
gap: "50px",

// border:"2px solid black",
alignItems: "center",
paddingRight: "20px",
marginTop: "10px",
[theme.breakpoints.down("sm")]: {
  display:"flex",
  flexDirection:"column",
  gap:"1px"

  },
  [theme.breakpoints.down("md")]: {
    display:"flex",
    flexDirection:"column",
    gap:"1px"
  },
  
}));
const Content = () => {
  return (
    <StyleToolbar
      sx={{
       
        // position:'static'
      }}
      >
     <Left>   
      <Box padding="0px 10px" color="white" >
        <FacebookOutlined fontSize="small" />
      </Box>
      <Box color="#ffffff">
        <Twitter fontSize="small" padding="0px 4px" />
      </Box>
      <Box color="#ffffff">
        <Instagram fontSize="small" padding="0px 4px" />
      </Box>
      <Box display="flex">
        <Box padding="0px 10px" color="white">
          <MenuBookRounded fontSize="small" />
        </Box>
      </Box>
  </Left> 
     <Right>
     <Box display="flex">
        <Box padding="0px 10px" color="white">
          <Phone fontSize="small" />
      </Box>
        <Typography variant="h5" sx={{ color: "#ffffff", fontSize: "12px" }}>
          CALL US +919999999999
        </Typography>
        </Box>
        <Box display="flex"  color="white">
          <Mail sx={{fontSize:"18px"}}/>
        <Typography variant="h5" sx={{ color: "#ffffff", fontSize: "16px" }}>
        info@sitename.com
        </Typography>
        </Box>
        </Right>  
    </StyleToolbar>
  );
};

export default Content;
