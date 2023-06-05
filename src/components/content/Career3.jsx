import { Done, OpenInNew } from '@mui/icons-material';
import { Button, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
const StyleToolbar = styled(Box)(({ theme }) => ({
    display: "flex",
    // backgroundColor:"#FFFFFF",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
     
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection:"column",
      flex:"4"
    },
  }));
const Career3 = () => {
  return (
    <StyleToolbar>
         <Box sx={{background: `url(${"https://img.freepik.com/free-photo/portrait-pensive-young-girl-making-notes_171337-1646.jpg?w=996&t=st=1685974625~exp=1685975225~hmac=87fc03f8bd646a47e6917db0e9b57e6deed057da521eb2843bc1a54ef0a044ac"})
                    center/cover no-repeat`,height:{md:"70vh",sm:"120vh",xs:"30vh"},width:{md:"48vw",sm:"50vw",xs:"100vw"},margin:{md:"50px 30px",sm:"50px 30px",xs:"0px"}}}/>
      <Box sx={{flex:"2",padding:{md:"58px 58px",sm:"58px 10px",xs:"48px 10px"}}}>
        <Typography sx={{fontWeight:"600",color:"#382DA9"}}>Finished a Professional Certificate?</Typography>
        <Typography  sx={{fontSize:{md:"30px",sm:"20px",xs:"20px"},fontWeight:"600",lineHeight:"40px"}}>Get resources and support to guide you through the job search process.</Typography>
        <br/>
        <Box sx={{paddingTop:{md:"60px",sm:"60px",xs:"10px"}}} >
        <Typography  sx={{fontSize:{md:"18px",sm:"16px",xs:"16px"},}} variant="h2">Showcase your skills</Typography>
        <Typography  >Present real-world projects to potential employers.</Typography>
        <br/>
        <Typography  sx={{fontSize:{md:"18px",sm:"16px",xs:"16px"},}} variant="h2">Enhance your resume</Typography>
        <Typography  >Get support to build a standout resume and LinkedIn profile.</Typography>
        <br/>
        <Typography  sx={{fontSize:{md:"18px",sm:"16px",xs:"16px"},}} variant="h2">Ace your interview</Typography>
        <Typography  >Practice and improve your interview skills with virtual feedback.</Typography>
        </Box>
      </Box>
     
    </StyleToolbar>
  )
}

export default Career3
