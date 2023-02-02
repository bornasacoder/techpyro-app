import {
  MailOutline,
  PeopleAltOutlined,
  Phone,
} from "@mui/icons-material";
import { Box, Container, createTheme, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
const StyleToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  borderBottom:"1px solid #E4E4E4",
  padding:"15px 50px!important",
  backgroundColor:"#222222",
  color:"#95A0A7",
  [theme.breakpoints.down("md")]: {
   
  },
  [theme.breakpoints.down("sm")]: {
  
  },
  
}));
const Left = styled(Box)(({ theme }) => ({
  gap: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent:"center",
  [theme.breakpoints.down("sm")]: {
  },
  [theme.breakpoints.down("md")]: {
  },
}));
const Right = styled(Box)(({ theme }) => ({
  display: "flex",
gap: "10px",
justifyContent:"space-between",
alignItems: "center",
[theme.breakpoints.down("md")]: {
 
  },
  [theme.breakpoints.down("sm")]: {
    
  },
  
}));
const Content = () => {
  return (
    <StyleToolbar
      >
     <Left>   
      <Box display="flex" alignItems="center" gap="10px"  >
        <Typography sx={{display:{md:"flex",sm:"none",xs:"none"}}}>Contact Us :</Typography>
        <Phone sx={{fontSize:"14px"}} />
        <Typography sx={{display:{md:"flex",sm:"none",xs:"none"}}}>+91 9999999999</Typography>
      </Box>
      <Box  sx={{display:"flex",alignItems:"center",gap:"10px"}}>
        <MailOutline  sx={{fontSize:"14px"}} />
        <Typography sx={{display:{md:"flex",sm:"none",xs:"none"}}} > techpyro@domain.info</Typography>
      </Box>
      <Box  sx={{display:"flex",alignItems:"center",gap:"10px"}}>
        <PeopleAltOutlined  sx={{fontSize:"14px"}} />
        <Typography sx={{display:{md:"flex",sm:"none",xs:"none"}}} >   Demo account</Typography>
    
      </Box>
  </Left> 
     <Right >
      <Box sx={{display:"flex",gap:"20px"}}>
      <Box display="flex">
        <Typography  sx={{   }}>
        Register
        </Typography>
        </Box><Typography sx={{ fontWeight: "50", }}>
            |
          </Typography>
        <Box display="flex">
        <Typography  sx={{   }}>
         login
        </Typography>
        </Box>
        </Box>
       
        </Right>  
    </StyleToolbar>
  );
};

export default Content;
