import { CurrencyRupee, Favorite, FavoriteBorder, FilterList, NavigateNext, ShoppingCart, Sort, Star } from '@mui/icons-material'
import { Box, Checkbox, Drawer, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Sliders from '../slider1/Sliders'
// import  {bannerData}  from '../../../../constants/Constant'
import "./rightbar.css"
import { Link, useNavigate } from "react-router-dom";
import List from './sortlist/List'
import FilterData from './filterlist/FilterData'
import { useSelector } from 'react-redux'

const RightContainer = styled(Box)((theme) => ({
  flex: "5",
  background: "#fff"

}))
const RightItems = styled(Box)(({ theme }) => ({
  paddingLeft: "20px",
  marginTop: "10px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  [theme.breakpoints.down('sm')]: {
    display: "none"
  },


}))
const RightFilterButtons = styled(Box)(({ theme }) => ({
  paddingLeft: "20px",
  marginTop: "10px",
  fontSize: "16px",
  gap: "20px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  [theme.breakpoints.down('sm')]: {
    display: "none",
    marginTop: "0px"
  },
}))
const RightFilterMobile = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: "none",
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: "50px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
}))
const RightInnerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "10px 10px 20px 10px",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 1px 1px rgba(104, 104, 104, 0.6)",
  padding: '10px 0px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: "column",
    margin: "10px 10px 30px 10px",
    padding: '0px 0px 20px 0px',
  },
}))
const RightTemplateLeftContainer = styled(Box)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down('sm')]: {
    flexDirection: "column",


  },


}))
const RightTemplateLeftImage = styled(Box)((theme) => ({
  position: "relative",
}))


const RightTemplateLeftContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: "40px",
  [theme.breakpoints.down('sm')]: {
    marginTop: "10px",
    marginLeft: "10px",
  },


}))
const RightContentItems = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "10px",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.down('sm')]: {
    justifyContent: "flex-start"
  },


}))
const ListItems = styled("ul")(({ theme }) => ({
  padding: "10px 20px",
  [theme.breakpoints.down('md')]: {
    padding: "10px 10px"
  },
  [theme.breakpoints.down('sm')]: {
    display: "none"
  },



}))
const ListItemText = styled("li")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "500",
  paddingBottom: "3px",
  [theme.breakpoints.down('lg')]: {
    fontSize: "12px",
  },

}))
const RightTemplateRightContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",

  margin: "0px 30px 0px 0px",
  borderLeft: "2px solid #EEEEEE",
  [theme.breakpoints.down('lg')]: {
    margin: "0px 30px 0px 0px"
  },
  [theme.breakpoints.down('lg')]: {
    margin: "0px 20px 0px 0px"
  },
  [theme.breakpoints.down('md')]: {
    margin: "0px 20px 0px 0px",
    justifyContent: "center",
    alignItems: "center"
  },
  [theme.breakpoints.down('sm')]: {
    border: "none",
    width: "93%",
    margin: "10px 0px 0px 0px",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },




}))
const Buttons = styled("button")(({ theme }) => ({
  margin: "20px 0px 0px 10px",
  width: "40px",
  height: "40px",
  color: "gray",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  border: "1px solid #878787",
  borderRadius: "2px",
  "&:hover": {
    transition: "all 0.2s linear",
    color: "white",
    background: "gray"
  },
  [theme.breakpoints.down('md')]: {
    margin: "20px 0px 0px 20px",
    width: "30px",
    height: '35px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: "20px 0px 0px 0px"
  },

}))
const Buttons1 = styled("a")(({ theme }) => ({
  marginTop: "20px",
  width: "170px",
  height: "40px",
  color: "teal",
  fontSize: "15px",
  border: "1px solid #087096",
  background: "white",
  borderRadius: "2px",
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "&:hover": {
    transition: "all 0.2s linear",
    color: "white",
    background: "#087096"
  },
  [theme.breakpoints.down('lg')]: {
    width: "150px",
    height: "40px",
    fontSize: "14px"
  },
  [theme.breakpoints.down('md')]: {
    width: "100px",
    height: "35px",
    fontSize: "13px"
  },
  [theme.breakpoints.down('sm')]: {
    width: "120px",
    height: "35px",
    fontSize: "14px"
  },
}))


const RightBar = ({ sort, setSort, query, setQuery, filter, setFilter }) => {
  const products = useSelector((state) => state.product?.products);
  // console.log(products)
  // const category = "restaurant"
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [opener, setOpener] = useState(false);



  useEffect(() => {
    if ((sort === "Newest")) {
      setSort({ createdAt: 1 })
      setFilter(true)


    } else if ((sort === "asc")) {
      setSort({ "price.cost": 1 })
      setFilter(true)

    } else if ((sort === "desc")) {
      setSort({ "price.cost": -1 })
setFilter(true)
    }
    // eslint-disable-next-line
  }, [sort])

  console.log(sort)




  const handleOpen = () => {
    console.log("open")
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }

  const handleOpener = () => {
    console.log("open")
    setOpener(true);
  };
  const handleCloser = () => {
    setOpener(false);
  }

  const openCart = () => {
    navigate("/cart")
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <RightContainer>
      <RightItems>
        <Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#878787", fontWeight: "400", fontSize: "12px" }}><Link to="/" style={{
          textDecoration
            : "none", color: "#878787"
        }}>  Home </Link>  <NavigateNext /> <Link to={`/products`} style={{ textDecoration: "none", color: "#878787" }}>   Education </Link> <NavigateNext /> <Link to={`/products/`} style={{ textDecoration: "none", color: "#878787" }} >  Coachings </Link>  </Typography>
      </RightItems>
      <RightItems>
        <Typography sx={{ color: "#000", fontWeight: "500", fontSize: "16px", paddingRight: "5px" }}>Coachings</Typography>
        <Typography sx={{ color: "#878787", fontWeight: "400", fontSize: "12px", alignSelf: "center" }} >(Showing 1 to 20 Templates out of 100)</Typography>
      </RightItems>

      {/* filtering for mobile */}

      <RightFilterMobile>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography onClick={handleOpen} variant="h6" sx={{ display: "flex", cursor: "pointer", alignItems: "center", gap: "5px" }} ><Sort /> Sort</Typography>
          <Drawer anchor={'bottom'} open={open} onClose={handleClose} transitionDuration={{ enter: 400, exit: 400 }} >
            <List />
          </Drawer>
        </Box>

        <Box width="1px" height="100%" sx={{ border: "1px solid #EEEEEE" }} > </Box>


        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
          <Typography onClick={handleOpener} variant='h6' sx={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }} ><FilterList /> Filter</Typography>
          <Drawer anchor={'left'} open={opener} onClose={handleCloser} transitionDuration={{ enter: 400, exit: 400 }}>
            <FilterData />
          </Drawer>
        </Box>
      </RightFilterMobile>
      {/* filtering of the templates */}
      <RightFilterButtons>
        <Typography sx={{ color: "#000", fontWeight: "500", fontSize: "16px", paddingRight: "5px" }}>Sort By</Typography>
        <Typography sx={{ "&:hover": { borderBottom: "1px solid #0D99FF" }, cursor: "pointer", color: "#0D99FF" }} onClick={(e) => setSort("popularity")} >Popularity</Typography>
        <Typography sx={{ "&:hover": { borderBottom: "1px solid #0D99FF", color: "#0D99FF" }, cursor: "pointer" }} onClick={(e) => setSort("asc")} >Price -- Low to High</Typography>
        <Typography sx={{ "&:hover": { borderBottom: "1px solid #0D99FF", color: "#0D99FF" }, cursor: "pointer" }} onClick={(e) => setSort("desc")} >Price -- High to Low</Typography>
        <Typography sx={{ "&:hover": { borderBottom: "1px solid #0D99FF", color: "#0D99FF" }, cursor: "pointer" }} onClick={(e) => setSort("Newest")} >Newest First</Typography>
      </RightFilterButtons>
      <Box width="100%" height="1px" sx={{ background: "#EEEEEE", marginTop: { sm: "10px", xs: "0px" } }}></Box>

      {/* inner container of templates */}
      {products.data.data.map((item) => (
        <RightInnerContainer>
          <RightTemplateLeftContainer>
            <RightTemplateLeftImage  >
              <Sliders sliderData={item.productImages} />
              <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="error" />} sx={{ position: "absolute", top: { sm: "-10px", xs: "100%" }, right: { md: "-35px", xs: "0px" } }} />
            </RightTemplateLeftImage>
            <RightTemplateLeftContent>
              <Link style={{ textDecoration: "none", color: "#333" }} to={`/product/${item.id}`} >
                <Typography variant="h4" sx={{ lineHeight: "1", fontSize: { lg: "18px", md: "16px", xs: "16px" }, fontWeight: "700", letterSpacing: { sm: "1px", xs: "0.9" }, cursor: 'pointer', "&:hover": { color: "#0D99FF", transition: "all 0.2s linear" } }} >{item.title.shortTitle}</Typography>
              </Link>
              <RightContentItems>
                <Typography sx={{ display: "flex", justifyContent: 'center', alignItems: "center", background: "green", color: "white", width: { lg: "40px", xs: "45px" }, height: "25px", borderRadius: "5px", fontSize: { md: "14px", sm: "12px" } }} >4.2 <Star sx={{ fontSize: { md: "13px", sx: "9px" }, color: "white", paddingLeft: "3px" }} /> </Typography>
                <Typography variant="h6" sx={{ color: "#878787", fontWeight: "600", fontSize: { md: "14px", xs: "12px" } }} >100 Ratings & 100 Reviews</Typography>
              </RightContentItems>
              <ListItems>
                {/* <ListItemText >{item.details}</ListItemText> */}
                {/* <ListItemText >{item.details.storage}</ListItemText>
                    <ListItemText >{item.details}</ListItemText> */}
                <ListItemText >Mobile Friendly (Responsive)</ListItemText>
                <ListItemText >8GB storage of your websites</ListItemText>
                <ListItemText >1 Inquiry Form/Contact Form</ListItemText>
                <ListItemText >Contact Google Address Map Integration</ListItemText>

              </ListItems>
            </RightTemplateLeftContent>
          </RightTemplateLeftContainer>

          {/* right container of the templates */}
          <RightTemplateRightContainer >
            <Box sx={{ marginLeft: { lg: "30px", md: "20px" }, display: "flex", justifyContent: { sm: "center", xs: "flex-start" }, flexDirection: { xs: "column" }, alignItems: { sm: "center", xs: "flex-start" } }}>
              <Typography variant="h3" sx={{ fontSize: { lg: "25px", md: "20px", sm: "16px", xs: "18px" }, display: "flex", alignItems: "center", }} > <CurrencyRupee sx={{ padding: "0", margin: "0", fontSize: { sm: '24px', xs: "18px" } }} />{item.price.cost}/- </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: '10px', marginTop: '5px' }} >
                <Typography variant="subtitle1" sx={{ fontSize: "14px", textDecoration: "line-through" }} ><CurrencyRupee sx={{ fontSize: "14px" }} />{item.price.mrp}/-</Typography>
                <Typography variant='h6' sx={{ color: "#008000", fontSize: "13px" }} >{item.price.discount}/-  Less</Typography>
              </Box>
              <Typography variant='subtitle1' sx={{ fontSize: "13px", color: "#000", display: { sm: "block", xs: "none" } }} > Free Delivery</Typography>
              <Typography variant='subtitle1' sx={{ fontSize: { lg: "13px", sm: "10px" }, display: { xs: "none", sm: "block" } }} > Last Updated: {item.updatedAt.slice(0,10)}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center", flexDirection: { sm: "row" }, marginLeft: { lg: "30px", md: "20px", xs: "0px" } }}>
              <Buttons variant="outlined" onClick={openCart}>
                <ShoppingCart sx={{ fontSize: "16px" }} />
              </Buttons>
              <Buttons1 href={item.productUrl} target="_blank" variant="outlined" >
                Live Preview
              </Buttons1>
            </Box>


          </RightTemplateRightContainer>
        </RightInnerContainer>
      ))
      }

      {/* 
    <RightInnerContainer>
      <RightTemplateLeftContainer>
          <RightTemplateLeftImage  >
            <Sliders sliderData={bannerData} />
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="error" />} sx={{position:"absolute", top:"-10px", right:"-35px"}}  />
          </RightTemplateLeftImage>
          <RightTemplateLeftContent>
            <Typography variant="h4" sx={{lineHeight:"1", fontSize:"18px", fontWeight:"700", letterSpacing:"1px",cursor:'pointer', "&:hover":{color:"#0D99FF",transition:"all 0.1s linear"}}} >Static website for Coachings</Typography>
            <RightContentItems>
              <Typography sx={{ display:"flex", justifyContent:'center', alignItems:"center", background:"green",color:"white",width:"40px",height:"25px", borderRadius:"5px", fontSize:"14px"}} >4.2 <Star sx={{fontSize:"13px", color:"white", paddingLeft:"3px"}} /> </Typography>
              <Typography variant="h6" sx={{color:"#878787",fontWeight:"600"}} >100 Ratings & 100 Reviews</Typography>
            </RightContentItems>
              <ListItems>
                    <ListItemText >Upto 5 Pages Website</ListItemText>
                    <ListItemText >Whatsapp Chat Integration</ListItemText>
                    <ListItemText >Free SSL Certificate</ListItemText>
                    <ListItemText >Mobile Friendly (Responsive)</ListItemText>
                    <ListItemText >Image Slider on Home Page</ListItemText>
                    <ListItemText >1 Inquiry Form/Contact Form</ListItemText>
                    <ListItemText >Contact Google Address Map Integration</ListItemText>                   
                </ListItems>
          </RightTemplateLeftContent>
      </RightTemplateLeftContainer>

      {/* right container of the templates
      <RightTemplateRightContainer >
        <Box sx={{marginLeft:"20px"}}>
       <Typography variant="h3" sx={{fontSize:"25px",display:"flex", alignItems:"center" }} > <CurrencyRupee sx={{padding:"0", margin:"0", fontSize:'24px'}} />14000/- </Typography>
      <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", gap:'10px', marginTop:'5px'}} >
       <Typography variant="subtitle1" sx={{fontSize:"14px",textDecoration:"line-through" }} ><CurrencyRupee sx={{fontSize:"14px"}} />22000/- </Typography>
       <Typography variant='h6' sx={{color:"#008000", fontSize:"14px"}} >40% OFF </Typography>
      </Box>
      <Typography variant='subtitle1' sx={{fontSize:"13px", color:"#000"}} > Free Delivery</Typography>
      <Typography variant='subtitle1' sx={{fontSize:"13px"}} > Last Updated: 31 Jan 2023</Typography>
        </Box>
      <Box sx={{display:"flex", alignItems:"center", gap:"10px", justifyContent:"center" ,marginLeft:"30px"}}>
     <Buttons variant="outlined">
     <ShoppingCart sx={{fontSize:"16px"}} />
     </Buttons>
     <Buttons1 variant="outlined" >
      Live Preview
      </Buttons1>
      </Box>
      
         
      </RightTemplateRightContainer>
    </RightInnerContainer> */}

      {/* <RightInnerContainer>
      <RightTemplateLeftContainer>
          <RightTemplateLeftImage  >
            <Sliders sliderData={bannerData} />
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="error" />} sx={{position:"absolute", top:"-10px", right:"-35px"}}  />
          </RightTemplateLeftImage>
          <RightTemplateLeftContent>
            <Typography variant="h4" sx={{lineHeight:"1", fontSize:"18px", fontWeight:"700", letterSpacing:"1px",cursor:'pointer', "&:hover":{color:"#0D99FF",transition:"all 0.1s linear"}}} >Static website for Coachings</Typography>
            <RightContentItems>
              <Typography sx={{ display:"flex", justifyContent:'center', alignItems:"center", background:"green",color:"white",width:"40px",height:"25px", borderRadius:"5px", fontSize:"14px"}} >4.2 <Star sx={{fontSize:"13px", color:"white", paddingLeft:"3px"}} /> </Typography>
              <Typography variant="h6" sx={{color:"#878787",fontWeight:"600"}} >100 Ratings & 100 Reviews</Typography>
            </RightContentItems>
              <ListItems>
                    <ListItemText >Upto 5 Pages Website</ListItemText>
                    <ListItemText >Whatsapp Chat Integration</ListItemText>
                    <ListItemText >Free SSL Certificate</ListItemText>
                    <ListItemText >Mobile Friendly (Responsive)</ListItemText>
                    <ListItemText >Image Slider on Home Page</ListItemText>
                    <ListItemText >1 Inquiry Form/Contact Form</ListItemText>
                    <ListItemText >Contact Google Address Map Integration</ListItemText>
                   
                </ListItems>
          </RightTemplateLeftContent>
      </RightTemplateLeftContainer>

      right container of the templates 
      <RightTemplateRightContainer >
        <Box sx={{marginLeft:"20px"}}>
       <Typography variant="h3" sx={{fontSize:"25px",display:"flex", alignItems:"center" }} > <CurrencyRupee sx={{padding:"0", margin:"0", fontSize:'24px'}} />14000/- </Typography>
      <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", gap:'10px', marginTop:'5px'}} >
       <Typography variant="subtitle1" sx={{fontSize:"14px",textDecoration:"line-through" }} ><CurrencyRupee sx={{fontSize:"14px"}} />22000/- </Typography>
       <Typography variant='h6' sx={{color:"#008000", fontSize:"14px"}} >40% OFF </Typography>
      </Box>
      <Typography variant='subtitle1' sx={{fontSize:"13px", color:"#000"}} > Free Delivery</Typography>
      <Typography variant='subtitle1' sx={{fontSize:"13px"}} > Last Updated: 31 Jan 2023</Typography>
        </Box>
      <Box sx={{display:"flex", alignItems:"center", gap:"10px", justifyContent:"center" ,marginLeft:"30px"}}>
     <Buttons variant="outlined">
     <ShoppingCart sx={{fontSize:"16px"}} />
     </Buttons>
     <Buttons1 variant="outlined" >
      Live Preview
      </Buttons1>
      </Box>
      
         
      </RightTemplateRightContainer>
    </RightInnerContainer>

    <RightInnerContainer>
      <RightTemplateLeftContainer>
          <RightTemplateLeftImage  >
            <Sliders sliderData={bannerData} />
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="error" />} sx={{position:"absolute", top:"-10px", right:"-35px"}}  />
          </RightTemplateLeftImage>
          <RightTemplateLeftContent>
            <Typography variant="h4" sx={{lineHeight:"1", fontSize:"18px", fontWeight:"700", letterSpacing:"1px",cursor:'pointer', "&:hover":{color:"#0D99FF",transition:"all 0.1s linear"}}} >Static website for Coachings</Typography>
            <RightContentItems>
              <Typography sx={{ display:"flex", justifyContent:'center', alignItems:"center", background:"green",color:"white",width:"40px",height:"25px", borderRadius:"5px", fontSize:"14px"}} >4.2 <Star sx={{fontSize:"13px", color:"white", paddingLeft:"3px"}} /> </Typography>
              <Typography variant="h6" sx={{color:"#878787",fontWeight:"600"}} >100 Ratings & 100 Reviews</Typography>
            </RightContentItems>
              <ListItems>
                    <ListItemText >Upto 5 Pages Website</ListItemText>
                    <ListItemText >Whatsapp Chat Integration</ListItemText>
                    <ListItemText >Free SSL Certificate</ListItemText>
                    <ListItemText >Mobile Friendly (Responsive)</ListItemText>
                    <ListItemText >Image Slider on Home Page</ListItemText>
                    <ListItemText >1 Inquiry Form/Contact Form</ListItemText>
                    <ListItemText >Contact Google Address Map Integration</ListItemText>
                   
                </ListItems>
          </RightTemplateLeftContent>
      </RightTemplateLeftContainer>

      {/* right container of the templates
      <RightTemplateRightContainer >
        <Box sx={{marginLeft:"20px"}}>
       <Typography variant="h3" sx={{fontSize:"25px",display:"flex", alignItems:"center" }} > <CurrencyRupee sx={{padding:"0", margin:"0", fontSize:'24px'}} />14000/- </Typography>
      <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", gap:'10px', marginTop:'5px'}} >
       <Typography variant="subtitle1" sx={{fontSize:"14px",textDecoration:"line-through" }} ><CurrencyRupee sx={{fontSize:"14px"}} />22000/- </Typography>
       <Typography variant='h6' sx={{color:"#008000", fontSize:"14px"}} >40% OFF </Typography>
      </Box>
      <Typography variant='subtitle1' sx={{fontSize:"13px", color:"#000"}} > Free Delivery</Typography>
      <Typography variant='subtitle1' sx={{fontSize:"13px"}} > Last Updated: 31 Jan 2023</Typography>
        </Box>
      <Box sx={{display:"flex", alignItems:"center", gap:"10px", justifyContent:"center" ,marginLeft:"30px"}}>
     <Buttons variant="outlined">
     <ShoppingCart sx={{fontSize:"16px"}} />
     </Buttons>
     <Buttons1 variant="outlined" >
      Live Preview
      </Buttons1>
      </Box>
      
         
      </RightTemplateRightContainer>
    </RightInnerContainer> */}

      {/* <RightInnerContainer>
      <RightTemplateLeftContainer>
          <RightTemplateLeftImage  >
            <Sliders sliderData={bannerData} />
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="error" />} sx={{position:"absolute", top:"-10px", right:"-35px"}}  />
          </RightTemplateLeftImage>
          <RightTemplateLeftContent>
            <Typography variant="h4" sx={{lineHeight:"1", fontSize:"18px", fontWeight:"700", letterSpacing:"1px",cursor:'pointer', "&:hover":{color:"#0D99FF",transition:"all 0.1s linear"}}} >Static website for Coachings</Typography>
            <RightContentItems>
              <Typography sx={{ display:"flex", justifyContent:'center', alignItems:"center", background:"green",color:"white",width:"40px",height:"25px", borderRadius:"5px", fontSize:"14px"}} >4.2 <Star sx={{fontSize:"13px", color:"white", paddingLeft:"3px"}} /> </Typography>
              <Typography variant="h6" sx={{color:"#878787",fontWeight:"600"}} >100 Ratings & 100 Reviews</Typography>
            </RightContentItems>
              <ListItems>
                    <ListItemText >Upto 5 Pages Website</ListItemText>
                    <ListItemText >Whatsapp Chat Integration</ListItemText>
                    <ListItemText >Free SSL Certificate</ListItemText>
                    <ListItemText >Mobile Friendly (Responsive)</ListItemText>
                    <ListItemText >Image Slider on Home Page</ListItemText>
                    <ListItemText >1 Inquiry Form/Contact Form</ListItemText>
                    <ListItemText >Contact Google Address Map Integration</ListItemText>
                   
                </ListItems>
          </RightTemplateLeftContent>
      </RightTemplateLeftContainer> */}

      {/* right container of the templates */}
      {/* <RightTemplateRightContainer >
        <Box sx={{marginLeft:"20px"}}>
       <Typography variant="h3" sx={{fontSize:"25px",display:"flex", alignItems:"center" }} > <CurrencyRupee sx={{padding:"0", margin:"0", fontSize:'24px'}} />14000/- </Typography>
      <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", gap:'10px', marginTop:'5px'}} >
       <Typography variant="subtitle1" sx={{fontSize:"14px",textDecoration:"line-through" }} ><CurrencyRupee sx={{fontSize:"14px"}} />22000/- </Typography>
       <Typography variant='h6' sx={{color:"#008000", fontSize:"14px"}} >40% OFF </Typography>
      </Box>
      <Typography variant='subtitle1' sx={{fontSize:"13px", color:"#000"}} > Free Delivery</Typography>
      <Typography variant='subtitle1' sx={{fontSize:"13px"}} > Last Updated: 31 Jan 2023</Typography>
        </Box>
      <Box sx={{display:"flex", alignItems:"center", gap:"10px", justifyContent:"center" ,marginLeft:"30px"}}>
     <Buttons variant="outlined">
     <ShoppingCart sx={{fontSize:"16px"}} />
     </Buttons>
     <Buttons1 variant="outlined" >
      Live Preview
      </Buttons1>
      </Box>
      
         
      </RightTemplateRightContainer>
    </RightInnerContainer> */}

      {/* <RightInnerContainer>
      <RightTemplateLeftContainer>
          <RightTemplateLeftImage  >
            <Sliders sliderData={bannerData} />
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="error" />} sx={{position:"absolute", top:"-10px", right:"-35px"}}  />
          </RightTemplateLeftImage>
          <RightTemplateLeftContent>
            <Typography variant="h4" sx={{lineHeight:"1", fontSize:"18px", fontWeight:"700", letterSpacing:"1px",cursor:'pointer', "&:hover":{color:"#0D99FF",transition:"all 0.1s linear"}}} >Static website for Coachings</Typography>
            <RightContentItems>
              <Typography sx={{ display:"flex", justifyContent:'center', alignItems:"center", background:"green",color:"white",width:"40px",height:"25px", borderRadius:"5px", fontSize:"14px"}} >4.2 <Star sx={{fontSize:"13px", color:"white", paddingLeft:"3px"}} /> </Typography>
              <Typography variant="h6" sx={{color:"#878787",fontWeight:"600"}} >100 Ratings & 100 Reviews</Typography>
            </RightContentItems>
              <ListItems>
                    <ListItemText >Upto 5 Pages Website</ListItemText>
                    <ListItemText >Whatsapp Chat Integration</ListItemText>
                    <ListItemText >Free SSL Certificate</ListItemText>
                    <ListItemText >Mobile Friendly (Responsive)</ListItemText>
                    <ListItemText >Image Slider on Home Page</ListItemText>
                    <ListItemText >1 Inquiry Form/Contact Form</ListItemText>
                    <ListItemText >Contact Google Address Map Integration</ListItemText>
                   
                </ListItems>
          </RightTemplateLeftContent>
      </RightTemplateLeftContainer> */}

      {/* right container of the templates */}
      {/* <RightTemplateRightContainer >
        <Box sx={{marginLeft:"20px"}}>
       <Typography variant="h3" sx={{fontSize:"25px",display:"flex", alignItems:"center" }} > <CurrencyRupee sx={{padding:"0", margin:"0", fontSize:'24px'}} />14000/- </Typography>
      <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", gap:'10px', marginTop:'5px'}} >
       <Typography variant="subtitle1" sx={{fontSize:"14px",textDecoration:"line-through" }} ><CurrencyRupee sx={{fontSize:"14px"}} />22000/- </Typography>
       <Typography variant='h6' sx={{color:"#008000", fontSize:"14px"}} >40% OFF </Typography>
      </Box>
      <Typography variant='subtitle1' sx={{fontSize:"13px", color:"#000"}} > Free Delivery</Typography>
      <Typography variant='subtitle1' sx={{fontSize:"13px"}} > Last Updated: 31 Jan 2023</Typography>
        </Box>
      <Box sx={{display:"flex", alignItems:"center", gap:"10px", justifyContent:"center" ,marginLeft:"30px"}}>
     <Buttons variant="outlined">
     <ShoppingCart sx={{fontSize:"16px"}} />
     </Buttons>
     <Buttons1 variant="outlined" >
      Live Preview
      </Buttons1>
      </Box>
      
         
      </RightTemplateRightContainer>
    </RightInnerContainer> */}

      {/* <RightInnerContainer>
      <RightTemplateLeftContainer>
          <RightTemplateLeftImage  >
            <Sliders sliderData={bannerData} />
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="error" />} sx={{position:"absolute", top:"-10px", right:"-35px"}}  />
          </RightTemplateLeftImage>
          <RightTemplateLeftContent>
            <Typography variant="h4" sx={{lineHeight:"1", fontSize:"18px", fontWeight:"700", letterSpacing:"1px",cursor:'pointer', "&:hover":{color:"#0D99FF",transition:"all 0.1s linear"}}} >Static website for Coachings</Typography>
            <RightContentItems>
              <Typography sx={{ display:"flex", justifyContent:'center', alignItems:"center", background:"green",color:"white",width:"40px",height:"25px", borderRadius:"5px", fontSize:"14px"}} >4.2 <Star sx={{fontSize:"13px", color:"white", paddingLeft:"3px"}} /> </Typography>
              <Typography variant="h6" sx={{color:"#878787",fontWeight:"600"}} >100 Ratings & 100 Reviews</Typography>
            </RightContentItems>
              <ListItems>
                    <ListItemText >Upto 5 Pages Website</ListItemText>
                    <ListItemText >Whatsapp Chat Integration</ListItemText>
                    <ListItemText >Free SSL Certificate</ListItemText>
                    <ListItemText >Mobile Friendly (Responsive)</ListItemText>
                    <ListItemText >Image Slider on Home Page</ListItemText>
                    <ListItemText >1 Inquiry Form/Contact Form</ListItemText>
                    <ListItemText >Contact Google Address Map Integration</ListItemText>
                   
                </ListItems>
          </RightTemplateLeftContent>
      </RightTemplateLeftContainer> */}

      {/* right container of the templates */}
      {/* <RightTemplateRightContainer >
        <Box sx={{marginLeft:"20px"}}>
       <Typography variant="h3" sx={{fontSize:"25px",display:"flex", alignItems:"center" }} > <CurrencyRupee sx={{padding:"0", margin:"0", fontSize:'24px'}} />14000/- </Typography>
      <Box sx={{display:"flex", justifyContent:"flex-start", alignItems:"center", gap:'10px', marginTop:'5px'}} >
       <Typography variant="subtitle1" sx={{fontSize:"14px",textDecoration:"line-through" }} ><CurrencyRupee sx={{fontSize:"14px"}} />22000/- </Typography>
       <Typography variant='h6' sx={{color:"#008000", fontSize:"14px"}} >40% OFF </Typography>
      </Box>
      <Typography variant='subtitle1' sx={{fontSize:"13px", color:"#000"}} > Free Delivery</Typography>
      <Typography variant='subtitle1' sx={{fontSize:"13px"}} > Last Updated: 31 Jan 2023</Typography>
        </Box>
      <Box sx={{display:"flex", alignItems:"center", gap:"10px", justifyContent:"center" ,marginLeft:"30px"}}>
     <Buttons variant="outlined">
     <ShoppingCart sx={{fontSize:"16px"}} />
     </Buttons>
     <Buttons1 variant="outlined" >
      Live Preview
      </Buttons1>
      </Box>   
      </RightTemplateRightContainer>
    </RightInnerContainer> */}

    </RightContainer>
  )
}

export default RightBar