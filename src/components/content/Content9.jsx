import { FacebookOutlined, Instagram, Public, Twitter, YouTube } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import SearchBar from "components/navbar/searchbar/SearchBar";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  // bgcolor: "#FFFFFF!important",
  padding: "78px 48px ",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap:"50px",
  backgroundColor: "#F7F2F1",
  
}));
const Image = styled("img")(({ theme }) => ({
  height: "60px",
  width: "120px",
}));
const Content9 = () => {
  return (
    <StyleToolbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src="https://img.freepik.com/free-icon/sale_318-676719.jpg?size=626&ext=jpg " />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign:"center",
          alignItems:"center"

        }}
      >
        <Typography sx={{fontSize:"18px"}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.aliqua. Ut
          enim ad minim.<br/> Lorem ipsum dolor sit amet.
        </Typography>
      </Box>
      <Box  sx={{
          display: "flex",
          justifyContent: "center",
          textAlign:"center",
          alignItems:"center"

        }}>
        <SearchBar/>
      </Box>
      <Box sx={{
        display:"flex",
        justifyContent:"center",
        gap:3,

      }}>
        <FacebookOutlined sx={{fontSize:'30px ', backgroundColor:"#F7F2F1","&:hover":{
  color:"#FC6935"
}}}/>
        <Twitter sx={{fontSize:'30px ', backgroundColor:"#F7F2F1","&:hover":{
  color:"#FC6935"
}}}/>
        <Instagram sx={{fontSize:'30px ', backgroundColor:"#F7F2F1","&:hover":{
  color:"#FC6935"
}}}/>
        <YouTube sx={{fontSize:'30px ', backgroundColor:"#F7F2F1","&:hover":{
  color:"#FC6935"
}}}/>
        <Public sx={{fontSize:'30px ', backgroundColor:"#F7F2F1","&:hover":{
  color:"#FC6935"
}}}/>
      </Box>
    </StyleToolbar>
  );
};

export default Content9;
