import { AccessAlarmOutlined, PinDrop, PinDropOutlined, SupportAgentOutlined, SupportOutlined } from '@mui/icons-material';
import { Grid, Paper, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react'
const StyleToolbar =styled(Box)(({theme})=>({
    backgroundColor:"#FFFFFF",
   padding:"58px 58px",
   [theme.breakpoints.down("md")]: {
    padding:"58px 20px",
      },
   [theme.breakpoints.down("sm")]: {
    padding:"58px 20px",
      },
    }));
    const Item = styled(Paper)(({ theme }) => ({
       height:"50vh" ,
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       flexDirection:"column",
       padding:"20px 40px"
      }));
const Contact1 = () => {
  return (
    <StyleToolbar>
      <Typography sx={{fontSize:"30px",fontWeight:"600"}}>Contact</Typography>
      <br/>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item md={4} sm={6} xs={12}>
          <Item sx={{"&:hover":{
            borderBottom:"4px solid #0B57E7"
          }}}><PinDropOutlined color='primary' sx={{fontSize:"60px",fontWeight:"200"}}/>
          <Typography variant='h3'>Address way</Typography>
          <Typography sx={{fontSize:"16px",textAlign:"center"}}>1800 Abbot Kinney Blvd. Unit D & E Venice</Typography>
          </Item>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Item sx={{"&:hover":{
            borderBottom:"4px solid #5EBB3E"
          }}}><SupportAgentOutlined  sx={{fontSize:"60px",fontWeight:"200",color:"#5EBB3E"}}/>
          <Typography variant='h3'>Contact info</Typography>
          <Typography sx={{fontSize:"16px"}}>Mobile: (+91) - 99999 - 0000</Typography>
          <Typography sx={{fontSize:"16px"}}>Hotline: 1800 - 000</Typography>
          <Typography sx={{fontSize:"16px"}}>Mail: contact@techpyro.com</Typography>
          </Item>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
        <Item sx={{"&:hover":{
            borderBottom:"4px solid #FFB70A"
          }}}>
            
            <AccessAlarmOutlined  sx={{fontSize:"60px",fontWeight:"200",color:"#FFB70A"}}/>
          <Typography variant='h3'>Work timer</Typography>
          <Typography sx={{fontSize:"16px"}}>Monday - Friday: 09:00 - 20:00</Typography>
          <Typography sx={{fontSize:"16px"}}>Sunday & Saturday: 10:30 - 22:0</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </StyleToolbar>
  )
}

export default Contact1
