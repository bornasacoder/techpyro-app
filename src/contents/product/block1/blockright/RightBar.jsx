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

const RightBar = ({product, setRating, rating}) => {
const reviewLength = product.data.review.length;
const ratingLength = product.data.rating.length;
console.log(reviewLength)
console.log(ratingLength)
// console.log(ratingLength)
let rate = 0
product.data.rating.forEach(element => {
  rate += element.ratingnumber

  setRating((rate/ratingLength).toFixed(1))
  console.log(rating)
});
  

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
      <Typography variant="h4" sx={{lineHeight:"1", fontSize:{lg:"18px", md:"16px", xs:"16px"}, fontWeight:"700", letterSpacing:{sm:"1px", xs:"0.9"},cursor:'pointer', "&:hover":{color:"#0D99FF",transition:"all 0.2s linear"}}} >{product.data.title.shortTitle}</Typography>
            <RightContentItems>
              <Typography sx={{ display:"flex", justifyContent:'center', alignItems:"center", background:"green",color:"white",width:{lg:"40px", xs:"45px"},height:"25px", borderRadius:"5px", fontSize:{md:"14px", sm:"12px"}}} >{rating} <Star sx={{fontSize:{md:"13px", xs:"1rem"}, color:"white", paddingLeft:"3px"}} /> </Typography>
              <Typography variant="h6" sx={{color:"#878787",fontWeight:"600", fontSize:{md:"14px", xs:"12px"}}} >{ratingLength} Ratings & {reviewLength} Reviews</Typography>
            </RightContentItems>
            <Box sx={{display:"flex", justifyContent:"center", flexDirection:{xs:"column"}, margin:"20px 0px"}}>
            <Typography variant="h3" sx={{fontSize:{lg:"20px",md:"20px",sm:"16px", xs:"18px"},display:"flex", alignItems:"center",color:"#008000", fontWeight:"500"}} > <CurrencyRupee sx={{ fontSize:{sm:'18px', xs:"18px"}, color:"#008000"}} />Extra 2001 OFF</Typography>
       <Typography variant="h3" sx={{fontSize:{lg:"25px",md:"20px",sm:"16px", xs:"18px"},display:"flex", alignItems:"center",   }} > <CurrencyRupee sx={{padding:"0", margin:"0",  fontSize:{sm:'24px', xs:"18px"}}} />{product.data.price.cost} </Typography>
      <Box sx={{display:"flex", justifyContent:"flex-start", gap:'10px', marginTop:'5px'}} >
       <Typography variant="subtitle1" sx={{fontSize:"14px",textDecoration:"line-through" }} ><CurrencyRupee sx={{fontSize:"14px"}} />{product.data.price.mrp}</Typography>
       <Typography variant='h6' sx={{color:"#008000", fontSize:"13px"}} >{product.data.price.discount}0FF</Typography>
      </Box>
      <Typography sx={{fontSize:"16px", color:"#000", display:{sm:"block", xs:"none"}}} >Inclusive of all taxes</Typography>
      <Typography variant='subtitle1' sx={{fontSize:"13px", color:"#000", display:{sm:"block", xs:"none"}}} > Free Delivery</Typography>
      <Typography variant='subtitle1' sx={{fontSize:{lg:"13px", sm:"10px"}, display:{xs:"none", sm:"block"}}} > Last Updated: {product.data.createdAt.slice(0,10)}</Typography>
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
        <Typography sx={{fontSize:"14px", fontWeight:"500", color:"#333"}} >{product.data.title.longTitle}</Typography>
      </Box>

      <RightProductDescription>
        <Typography sx={{fontSize:"24px", fontWeight:'600', color:"#878787"}} >Product Details</Typography>
        <Box sx={{display:"flex", gap:"30px",margin:"10px 0px 0px 20px"}} >
          <Typography variant="h4" >Storage:</Typography>
          <Typography variant='body1'>{product.data.details.storage}</Typography>
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