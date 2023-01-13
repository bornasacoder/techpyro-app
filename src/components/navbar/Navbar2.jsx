import { Spa } from '@mui/icons-material';
import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components';
const NavLeft = styled(Box)(({ theme }) => ({
    gap: "60px",
    display: "flex",
    // border:"2px solid black",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: "20px",
    marginTop: "5px",
    [theme.breakpoints.down("sm")]: {
      height: "50px",
    },
  }));
  const NavBar2 = styled(AppBar)(({ theme }) => ({
    // background: theme.header.background,
    background: "#262626",
    color: theme.colors.alpha.black[100],
    position:"sticky",
    // height: "450px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: "15px",
  
    // width: "100%",
    color: "#fff",
    zIndex: 2,
    // position: "static",
    // background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)
    // ),url(${"/images/category/header.jpg"})
    //  center/cover no-repeat`,
  }));
export default function Navbar2() {
  return (
    <Navbar2>
       <NavLeft>
        <Box sx={{ display: "flex", justifyContent: "center",fontSize:{md:"26px",sm:"22px",xs:"21px"} }}>
          <Box  marginRight="5px" color="#7AA93C">
            <Spa />
          </Box>
          <Typography
            variant="span"
            sx={{  fontWeight: "400px" }}
          >
            envato
          </Typography>
          <Typography
            variant="span"
            sx={{ fontWeight: "300px", color: "#7AA93C" }}
          >
            market
          </Typography>
          {/* <NavButton/> */}
        </Box>
       
      </NavLeft>
    </Navbar2>
  )
}
