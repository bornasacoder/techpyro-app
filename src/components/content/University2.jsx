import { ArrowForward, Campaign } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
const StyleToolbar = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  padding: "68px  58px  ",
  paddingTop: "150px",
  display: "flex",
  gap: "40px",
  position: "relative",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    padding: "68px 20px  ",
  },
  [theme.breakpoints.down("sm")]: {
  flexDirection:"column-reverse",
  padding:"280px 10px  40px"
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  borderRadius: "0px!important",
  boxShadow: "none!important",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
}));
export default function University2() {
  return (
    <StyleToolbar>
     
      <Box
        sx={{
          position: "absolute",
          top: {md:"-50px",sm:"-30px",xs:"-70px"},
          backgroundColor: "#000",
          padding: {md:"10px 50px",sm:"10px 40px",xs:"10px 20px"},
          borderRadius: "10px",
          display: "flex",
          width:"90vw",
          justifyContent: {md:"space-between",sm:"space-between",xs:"center"},
          // alignItems:"center",
          flexDirection:{md:"row",sm:"row",xs:"column"}
        }}
      >
        <Typography sx={{fontSize:{md:"45px",sm:"35px",xs:"30px"},display:"flex",borderRight:{md:"1px solid #636363",sm:"1px solid #636363"},borderBottom:{md:"none",sm:"none",xs:"1px solid #636363"},color:"#fff",gap:"10px",alignItems:"center",paddingRight:{md:"50px",sm:"10px"},padding:{xs:"20px 0px"},fontWeight:"600"}}>88% <Typography sx={{fontSize:"14px",flexWrap:"wrap"}}>of students are more likely to enroll in degree programs with industry microcredentials</Typography></Typography>
        <Typography sx={{fontSize:{md:"45px",sm:"35px",xs:"30px"},display:"flex",borderRight:{md:"1px solid #636363",sm:"1px solid #636363"},borderBottom:{md:"none",sm:"none",xs:"1px solid #636363"},color:"#fff",gap:"10px",alignItems:"center",paddingRight:{md:"50px",sm:"10px"},paddingLeft:{md:"50px",sm:"10px"},padding:{xs:"20px 0px"},fontWeight:"600"}}>92% <Typography sx={{fontSize:"14px",flexWrap:"wrap"}}>of employers agree professional certificates strengthen a candidate’s application</Typography></Typography>
        <Typography sx={{fontSize:{md:"45px",sm:"35px",xs:"30px"},display:"flex",color:"#fff",gap:"10px",alignItems:"center",paddingRight:{md:"50px",sm:"10px"},paddingLeft:{md:"50px",sm:"10px"},padding:{xs:"20px 0px"},fontWeight:"600"}}>89% <Typography sx={{fontSize:"16px",flexWrap:"wrap"}}>of students believe earning a professional certificate will help them get hired</Typography></Typography>
      </Box>
      <Box sx={{ flex: "2" }}>
      <Box >
        <Grid
          container
          rowSpacing={2}
          // columnSpacing={6}
        >
          <Grid
            item
           xs={4}
            sx={{
              padding:{md:"20px 20px",sm:"15px 15px",xs:"10px 10px"},
              display: "flex",
              alignitems: "center",
              borderRight: "1px solid #E5E7E8",
              borderBottom: "1px solid #E5E7E8",
            }}
          >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: {md:"26px",sm:"26px",xs:"18px"},
                width: {md:"117px",sm:"117px",xs:"80px"},
                background: `url(${"https://images.ctfassets.net/2pudprfttvy6/2emsPkdWL2gjtLC8CoWzaF/c50d3abcd3a0e57275a893a0ddeb94c1/logo-capgemini.svg"})
                center/cover no-repeat`,
              }}
            ></Item>
          </Grid>
          <Grid
            item
           xs={4}
            sx={{
              padding:{md:"20px 20px",sm:"15px 15px",xs:"10px 10px"},
              display: "flex",
              alignitems: "center",
              borderRight: "1px solid #E5E7E8",
              borderBottom: "1px solid #E5E7E8",
            }}
          >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: {md:"26px",sm:"26px",xs:"18px"},
                width: {md:"117px",sm:"117px",xs:"80px"},
                background: `url(${"https://images.ctfassets.net/2pudprfttvy6/301Il2XBFejBDSweok7JPu/45b8a521ad4f545198ccc9cc8ef76aa7/logo-emirates.svg"})
                center/cover no-repeat`,
              }}
            ></Item>
          </Grid>
          <Grid
            item
           xs={4}
            sx={{ padding: "10px 20px", borderBottom: "1px solid #E5E7E8" }}
          >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: {md:"64px",sm:"64px",xs:"51px"},
                width:{md: "89px",sm: "89px",xs:"70px"},
                background: `url(${"https://images.ctfassets.net/2pudprfttvy6/1eMUZavwSiX6T1FGwrCp6h/e3d4b55270ee4e3f360ac949f5dacc9f/Reliance_logo-2.svg"})
                center/cover no-repeat`,
              }}
            ></Item>
          </Grid>
          <Grid
            item
           xs={4}
            sx={{
              padding:{md:"20px 20px",sm:"15px 15px",xs:"10px 10px"},
              display: "flex",
              alignitems: "center",
              borderRight: "1px solid #E5E7E8",
              borderBottom: "1px solid #E5E7E8",
            }}
          >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height:{md: "53px",sm: "53px",xs:"40px"},
                width: {md:"108px",sm:"108px",xs:"85px"},
                background: `url(${"https://images.ctfassets.net/2pudprfttvy6/3gFhpn7w9vplbjOiTQdbbo/c42479ab3f7fc92f35d1e377f0d93c93/logo-pg.svg"})
                center/cover no-repeat`,
              }}
            ></Item>
          </Grid>
          <Grid
            item
           xs={4}
          
            
            sx={{
              padding:{md:"20px 20px",sm:"15px 15px",xs:"10px 10px"},
              display: "flex",
              alignitems: "center",
              borderRight: "1px solid #E5E7E8",
              borderBottom: "1px solid #E5E7E8",
            }}
          >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height:{md: "27px",sm: "27px",xs:"15px"},
                width: {md:"137px",sm:"137px",xs:"100px"},
                background: `url(${"https://images.ctfassets.net/2pudprfttvy6/6zKHwk9d22kTKdKWzWTFeO/5a7fd20d12c4ee62d826a2f25799b392/logo-petrobras.svg"})
                center/cover no-repeat`,
              }}
            ></Item>
          </Grid>
          <Grid
            item
           xs={4}
          
            
            sx={{
              padding:{md:"20px 20px",sm:"15px 15px",xs:"10px 10px"},
              display: "flex",
              alignitems: "center",
              borderBottom: "1px solid #E5E7E8",
            }}
          >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: {md:"36px",sm:"36px",xs:"25px"},
                width: "133px",
                background: `url(${"https://images.ctfassets.net/2pudprfttvy6/5oYgmQOEiUmGff4kUnik4V/7e37d46d738060e21d2828697d255504/logo-tata.svg"})
                center/cover no-repeat`,
              }}
            ></Item>
          </Grid>
          <Grid
            item
           xs={4}
          
            
            sx={{
              padding:{md:"20px 20px",sm:"15px 15px",xs:"10px 10px"},
              display: "flex",
              alignitems: "center",
              borderRight: "1px solid #E5E7E8",
            }}
          >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: {md:"26px",sm:"26px",xs:"18px"},
                width: {md:"117px",sm:"117px",xs:"80px"},
                background: `url(${"https://images.ctfassets.net/2pudprfttvy6/6xV9WheOlNVaFAWXK8LF0l/e6146f694e2e60b199d1aa32beb16f4c/LOreal_logo.svg"})
                center/cover no-repeat`,
              }}
            ></Item>
          </Grid>
          <Grid
            item
           xs={4}
          
            
            sx={{
              padding:{md:"20px 20px",sm:"15px 15px",xs:"10px 10px"},
              display: "flex",
              alignitems: "center",
              borderRight: "1px solid #E5E7E8",
            }}
          >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height:{md: "100px",sm: "100px",xs:"50px"},
                width: {md:"117px",sm:"117px",xs:"60px"},
                background: `url(${"https://images.ctfassets.net/2pudprfttvy6/5C0plXE9mGxEqtW3fDYcCT/c04cff9ee451ac4fe5ca2f216650c2bc/General_Electric_logo.svg"})
                center/cover no-repeat`,
              }}
            ></Item>
          </Grid>
          <Grid
            item
           xs={4}
          
            
            sx={{ padding:{md:"20px 20px",sm:"15px 15px",xs:"10px 10px"}, display: "flex", alignitems: "center" }}
          >
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: {md:"40px",sm:"40px",xs:"25px"},
                width: {md:"117px",sm:"117px",xs:"70px"},
                background: `url(${"https://images.ctfassets.net/2pudprfttvy6/1JXaqoROxkILMuOA37Qofr/70b8e8f1434438c53704af0877ef10c8/Danone_dairy_logo.svg"})
                center/cover no-repeat`,
              }}
            ></Item>
          </Grid>
        </Grid>
      </Box>
      </Box>
      <Box sx={{ flex: {md:"2",sm:"2",xs:"4"},display:"flex",flexWrap:"wrap" }}>
        <Typography variant="h2" sx={{ fontSize: {md:"35px",sm:"30px",xs:"20px"}, lineHeight: "40px" }}>
        Join colleges and universities worldwide that choose Coursera for Campus
        </Typography>
      </Box>
    </StyleToolbar>
  );
}
