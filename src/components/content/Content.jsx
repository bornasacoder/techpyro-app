import {
  CurrencyRupeeOutlined,
  FacebookOutlined,
  FavoriteBorderRounded,
  FlagOutlined,
  Instagram,
  Mail,
  MailOutline,
  MenuBookRounded,
  PeopleAltOutlined,
  Phone,
  RepeatOnOutlined,
  RepeatRounded,
  Twitter,
} from "@mui/icons-material";
import { Box, Container, createTheme, styled, Toolbar, Typography } from "@mui/material";
import React from "react";
const StyleToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  borderBottom:"1px solid #E4E4E4",
  padding:"15px 0px!important",
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
  alignItems: "center",
  justifyContent:"center",
  gap: "20px",
  marginLeft: "35px",
  [theme.breakpoints.down("sm")]: {
    display:"flex",
  marginLeft: "0px",
  },
  [theme.breakpoints.down("md")]: {
    display:"flex",
    justifyContent:"center"
  },
}));
const Right = styled(Box)(({ theme }) => ({
  display: "flex",
gap: "20px",
justifyContent:"space-between",
alignItems: "center",
marginRight: "40px",
[theme.breakpoints.down("md")]: {
  display:"flex",
 marginTop:"20px",
 marginRight:"0px"
  },
  [theme.breakpoints.down("sm")]: {
    display:"flex",
    flexDirection:"column",
    marginTop:"20px",
    gap:"20px",
    marginRight:"0px",
    alignItems:"space-between"
  },
  
}));
const Content = () => {
  return (
    <StyleToolbar
      >
     <Left>   
      <Box display="flex" alignItems="center"  >
        <Phone fontSize="small" sx={{marginRight:"10px",color:"#837283",}} />
        <Typography>+91 9999999999</Typography>
      </Box>
      <Typography sx={{ fontSize: "30px", fontWeight: "50",display:{md:"flex",sm:"none",xs:"none"}}}>
            |
          </Typography>
      <Box  sx={{display:"flex",alignItems:"center"}}>
        <MailOutline fontSize="small" sx={{marginRight:"10px",color:"#837283",}} />
        techpyro@domain.info
      </Box>
  </Left> 
     <Right >
      <Box sx={{display:"flex",gap:"20px"}}>
      <Box display="flex">
          <PeopleAltOutlined fontSize="small" sx={{marginRight:"10px",color:"#837283",}} />
        <Typography  sx={{   }}>
        My Account 
        </Typography>
        </Box><Typography sx={{ fontWeight: "50",display:{md:"flex",sm:"none",xs:"none"} }}>
            |
          </Typography>
        <Box display="flex">
          <RepeatRounded fontSize="small" sx={{marginRight:"10px",color:"#837283",}} />
        <Typography  sx={{   }}>
         Compare
        </Typography>
        </Box><Typography sx={{ fontWeight: "50",display:{md:"flex",sm:"none",xs:"none"} }}>
            |
          </Typography>
        </Box>
        <Box sx={{display:"flex",gap:"20px"}}>
        <Box display="flex">
          <FavoriteBorderRounded fontSize="small" sx={{marginRight:"10px",color:"#837283",}} />
        <Typography  sx={{   }}>
        Wishlist
        </Typography>
        </Box>
        <Typography sx={{ fontWeight: "50",display:{md:"flex",sm:"none",xs:"none"} }}>
            |
          </Typography>
        <Box display="flex">
          <FlagOutlined fontSize="small" sx={{marginRight:"10px",color:"#837283",}} />
        <Typography  sx={{   }}>
        IN
        </Typography>
        </Box><Typography sx={{ fontWeight: "50" ,display:{md:"flex",sm:"none",xs:"none"}}}>
            |
          </Typography>
        <Box display="flex" >
          <CurrencyRupeeOutlined fontSize="small" sx={{marginRight:"10px",color:"#837283",}} />
        <Typography  sx={{   }}>
        INR
        </Typography>
        </Box>
        </Box>
        </Right>  
    </StyleToolbar>
  );
};

export default Content;
