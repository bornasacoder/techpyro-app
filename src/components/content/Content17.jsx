import { Mail, SendOutlined } from '@mui/icons-material';
import { InputBase, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react'
const StyleToolbar = styled(Box)(({ theme }) => ({
    backgroundColor: "#FFFFFF",
    padding: "58px 58px",
    display:"flex",
    justifyContent:"space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection:"column",
      padding:"58px 10px",
      gap:"40px"
    },
  }));
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: "1px solid #d2d2d2",
    borderRadius:"10px",
    width: '100%',
    padding:"8px 8px",
    width:"40vw",
    [theme.breakpoints.down("sm")]: {
      width:"95vw"
    },
   
  }));
  const MailIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    right:"0px",
    bottom:"0px",
    padding:"5px 15px",
    borderRadius:"5px",
    backgroundColor:"#000",
    color:"#fff"
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
    },
  }));
const Content17 = () => {
  return (
    <StyleToolbar>
      <Box>
        <Typography variant='h1' sx={{letterSpacing:"2px",alignItems:{xs:"center"}}}>Newsletter</Typography>
        <Typography sx={{fontSize:{md:"20px",sm:"18px",xs:"16px"},display:"flex"}}>Sign Up for get all update news & Get <Typography sx={{color:"#1F51D3",fontSize:{md:"20px",sm:"18px",xs:"16px"}}}>15% off</Typography></Typography>
      </Box>
      <Box>
      <Search>
            <StyledInputBase
              placeholder="Enter Your E-mail "
            />
            <MailIconWrapper>
              <SendOutlined sx={{rotate:"-45deg"}}/>
            </MailIconWrapper>
          </Search>
      </Box>
    </StyleToolbar>
  )
}

export default Content17
