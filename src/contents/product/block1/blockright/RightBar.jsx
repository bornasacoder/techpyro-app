import { CurrencyRupee, Favorite, FavoriteBorder, NavigateNext, Share, Star } from '@mui/icons-material'
import { Box, Checkbox, styled, Typography } from '@mui/material'
import React from 'react'
const RightContainer = styled(Box)(({theme})=>({
  flex:"3.5",
  width:"100%",
  height:"auto",
  background:"#fff",
  position:"relative",
  [theme.breakpoints.down('sm')]: {
    padding:"16px 0px"
    },
}))
const RightItems = styled(Box)(({theme}) => ({
    paddingLeft: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"flex-start"
      },
      [theme.breakpoints.down('sm')]: {
        display:"none",
        padding:"16px"
        },
  }))
  const RightContentContainer = styled(Box)(({theme})=>({
display:"flex",
justifyContent:"flex-start",
paddingLeft:"16px",
flexDirection:"column"
  }))
  const RightContentItems = styled(Box)(({theme})=>({
    display:"flex",
    marginTop:"10px",
    alignItems:"center",
    gap:"10px",
  }))

  const RightDescription = styled(Box)(({theme})=>({
    display:"flex",
    width:"60%",
    alignItems:"flex-start",
    justifyContent:"space-between",
    marginLeft:"16px",
    [theme.breakpoints.down('lg')]: {
      width:"80%"
},
[theme.breakpoints.down('md')]: {
  width:"95%"
},


  }))
  const ListItems = styled("ul")(({theme}) => ({
    padding:"10px 0px",
    [theme.breakpoints.down('md')]: {
          padding:"10px 20px"
    },
    [theme.breakpoints.down('sm')]: {
    },    
    }))
    const ListItemText = styled("li")(({theme}) => ({
    fontSize:"16px",
    fontWeight:"500",
    paddingBottom:"3px",
    [theme.breakpoints.down('lg')]: {
      fontSize:"12px",
    },
    }))
    const RightProductDescription = styled(Box)(({theme})=>({
      display:"flex",
      margin:"30px 0px",
      marginLeft:"16px",
      flexDirection:"column"
    }))

const RightBar = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <RightContainer>
       <RightItems>
        <Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#878787", fontWeight: "400", fontSize: "12px",  }}>Home<NavigateNext />Education<NavigateNext />Coachings<NavigateNext />Coaching Templates </Typography>
      <Box sx={{display:'flex', alignItems:"center" , gap:"10px"}} >
        <Typography variant="h4"  sx={{display:"flex", justifyContent:"center", alignItems:'center', gap:"5px", color:"#878787", fontSize:{sm:"13px"}}} > <Share sx={{fontSize:{sm:"16px"}}} /> Share  </Typography>
        <Checkbox {...label} sx={{fontSize:{md:"24px", sm:"16px"}}}  icon={<FavoriteBorder sx={{fontSize:{md:"24px", sm:"16px"}}}  />} checkedIcon={<Favorite color="error" sx={{fontSize:{md:"24px", sm:"16px"}}} />}  />
        </Box>
      </RightItems>
      <RightContentContainer>
      <Typography variant="h4" sx={{lineHeight:"1", fontSize:{lg:"18px", md:"16px", xs:"16px"}, fontWeight:"700", letterSpacing:{sm:"1px", xs:"0.9"},cursor:'pointer', "&:hover":{color:"#0D99FF",transition:"all 0.2s linear"}}} >Static Website for Website</Typography>
            <RightContentItems>
              <Typography sx={{ display:"flex", justifyContent:'center', alignItems:"center", background:"green",color:"white",width:{lg:"40px", xs:"45px"},height:"25px", borderRadius:"5px", fontSize:{md:"14px", sm:"12px"}}} >4.2 <Star sx={{fontSize:{md:"13px", xs:"1rem"}, color:"white", paddingLeft:"3px"}} /> </Typography>
              <Typography variant="h6" sx={{color:"#878787",fontWeight:"600", fontSize:{md:"14px", xs:"12px"}}} >100 Ratings & 100 Reviews</Typography>
            </RightContentItems>
            <Box sx={{display:"flex", justifyContent:"center", flexDirection:{xs:"column"}, margin:"20px 0px"}}>
            <Typography variant="h3" sx={{fontSize:{lg:"20px",md:"20px",sm:"16px", xs:"18px"},display:"flex", alignItems:"center",color:"#008000", fontWeight:"500"}} > <CurrencyRupee sx={{ fontSize:{sm:'18px', xs:"18px"}, color:"#008000"}} />Extra 2001 OFF</Typography>
       <Typography variant="h3" sx={{fontSize:{lg:"25px",md:"20px",sm:"16px", xs:"18px"},display:"flex", alignItems:"center",   }} > <CurrencyRupee sx={{padding:"0", margin:"0",  fontSize:{sm:'24px', xs:"18px"}}} />2999/- </Typography>
      <Box sx={{display:"flex", justifyContent:"flex-start", gap:'10px', marginTop:'5px'}} >
       <Typography variant="subtitle1" sx={{fontSize:"14px",textDecoration:"line-through" }} ><CurrencyRupee sx={{fontSize:"14px"}} />5000/-</Typography>
       <Typography variant='h6' sx={{color:"#008000", fontSize:"13px"}} >35% OFF</Typography>
      </Box>
      <Typography sx={{fontSize:"16px", color:"#000", display:{sm:"block", xs:"none"}}} >Inclusive of all taxes</Typography>
      <Typography variant='subtitle1' sx={{fontSize:"13px", color:"#000", display:{sm:"block", xs:"none"}}} > Free Delivery</Typography>
      <Typography variant='subtitle1' sx={{fontSize:{lg:"13px", sm:"10px"}, display:{xs:"none", sm:"block"}}} > Last Updated: 31 Jan 2023</Typography>
        </Box>
      </RightContentContainer>
      <RightDescription>
        <Typography sx={{fontSize:"16px", fontWeight:'600', color:"#878787"}}>Overview</Typography>
        <Box>
        <ListItems>
                    <ListItemText >Mobile Friendly (Responsive)</ListItemText>
                    <ListItemText >8GB storage of your websites</ListItemText>
                    <ListItemText >1 Inquiry Form/Contact Form</ListItemText>
                    <ListItemText >Contact Google Address Map Integration</ListItemText>      
                </ListItems>
        </Box>
      </RightDescription>

      <RightDescription>
        <Typography sx={{fontSize:"16px", fontWeight:'600', color:"#878787"}}>Easy Payment Options</Typography>
        <Box sx={{marginRight:"12px"}}>
        <ListItems>
                    <ListItemText >EMI starting from ₹312/month</ListItemText>
                    <ListItemText >Cash on Delivery</ListItemText>
                    <ListItemText >Net banking & Credit/ Debit/ ATM card</ListItemText>     
                </ListItems>
        </Box>
      </RightDescription>
      <Box sx={{display:"flex",marginLeft:"16px",gap:"20px", marginTop:"10px"}} >
        <Typography sx={{fontSize:"16px", fontWeight:'600', color:"#878787"}} >Description:</Typography>
        <Typography sx={{fontSize:"14px", fontWeight:"500", color:"#333"}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium dolorem illo beatae? Illo alias animi asperiores reiciendis ea facilis debitis excepturi. Consequuntur temporibus distinctio quae quidem eligendi placeat praesentium cum?</Typography>
      </Box>

      <RightProductDescription>
        <Typography sx={{fontSize:"24px", fontWeight:'600', color:"#878787"}} >Product Details</Typography>
        <Box sx={{display:"flex", gap:"30px",margin:"10px 0px 0px 20px"}} >
          <Typography variant="h4" >General:</Typography>
          <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sit?</Typography>
        </Box>

        <Box sx={{display:"flex", gap:"30px",margin:"10px 0px 0px 20px"}} >
          <Typography variant="h4" >General:</Typography>
          <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sit?</Typography>
        </Box>

        <Box sx={{display:"flex", gap:"30px",margin:"10px 0px 0px 20px"}} >
          <Typography variant="h4" >General:</Typography>
          <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sit?</Typography>
        </Box>

        <Box sx={{display:"flex", gap:"30px",margin:"10px 0px 0px 20px"}} >
          <Typography variant="h4" >General:</Typography>
          <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sit?</Typography>
        </Box>

        <Box sx={{display:"flex", gap:"30px",margin:"10px 0px 0px 20px"}} >
          <Typography variant="h4" >General:</Typography>
          <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sit?</Typography>
        </Box>

        <Box sx={{display:"flex", gap:"30px",margin:"10px 0px 0px 20px"}} >
          <Typography variant="h4" >General:</Typography>
          <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sit?</Typography>
        </Box>

        <Box sx={{display:"flex", gap:"30px",margin:"10px 0px 0px 20px"}} >
          <Typography variant="h4" >General:</Typography>
          <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sit?</Typography>
        </Box>

        <Box sx={{display:"flex", gap:"30px",margin:"10px 0px 0px 20px"}} >
          <Typography variant="h4" >General:</Typography>
          <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sit?</Typography>
        </Box>

        <Box sx={{display:"flex", gap:"30px",margin:"10px 0px 0px 20px"}} >
          <Typography variant="h4" >General:</Typography>
          <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sit?</Typography>
        </Box>

        <Box sx={{display:"flex", gap:"30px",margin:"10px 0px 0px 20px"}} >
          <Typography variant="h4" >General:</Typography>
          <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sit?</Typography>
        </Box>

        <Box sx={{display:"flex", gap:"30px",margin:"10px 0px 0px 20px"}} >
          <Typography variant="h4" >General:</Typography>
          <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sit?</Typography>
        </Box>
      </RightProductDescription>
    </RightContainer>
  )
}

export default RightBar