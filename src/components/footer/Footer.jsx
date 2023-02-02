
import { CurrencyExchangeTwoTone, EastOutlined, Facebook, FiberManualRecordTwoTone, Instagram, LocalShippingTwoTone, Mail, MoneyTwoTone, Pinterest, Twitter, YouTube } from '@mui/icons-material';
import { Box, Typography,styled, TextField, Button } from '@mui/material'
import React from 'react'
import "./footer.css"
import {Link}from 'react-router-dom'
import {Divider} from '@mui/material'
  
const Ram = styled(Box)(({theme}) => ({
        display:'flex',
        // alignItems:'center',
        // justifyContent:'center',
        // backgroundColor:theme.colors.alpha.black[100],
        height:'auto',
        width:'100%',
        gap:'20px',
        // color:theme.colors.alpha.white[100],
        paddingTop:'20px',
        [theme.breakpoints.down('md')]: {
         flexDirection:'column',
          padding:'20px',
          alignItems:'flex-end'
        // display:'none'
      }
        
}));
const Lakshman = styled(Box)(({theme}) => ({
  display:'flex',
  justifyContent:'space-evenly',
  // backgroundColor:theme.colors.alpha.black[100],
  height:'auto',
  width:'100%',
  // color:theme.colors.alpha.white[100],
  padding:'30px',
  [theme.breakpoints.up('md')]: {
  //  flexDirection:'column',
  //   padding:'10px',
  display:'none',
}
  
}));
const Sita = styled(Box)(({theme}) => ({
  display:'flex',
  justifyContent:'space-evenly',
  // backgroundColor:theme.colors.alpha.black[100],
  height:'50px',
  width:'100%',
  flexDirection:'row',
  // color:theme.colors.alpha.white[100],
  alignItems:'center',
 
  [theme.breakpoints.down('md')]: {
    //  flexDirection:'column',
    //   padding:'10px'
    height:'100px',
  }

}));

const Footer = () => {
  return (
    <Box sx={{backgroundColor:'white',marginTop:'80px',}}>
      <Box sx={{fontSize:{xs:'12px',sm:'20px',md:'30px'}, display:'flex',justifyContent:'center',backgroundColor:'white'}}>
          <Link style={{textDecoration:'inherit',color:'black'}}to="/instagram">
           <Instagram sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'purple',borderRadius:'50%'}} />
          </Link>
          <Link style={{textDecoration:'inherit',color:'black'}}to="/facebook">
          <Facebook sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'blue'}}/>
          </Link>
          <Link style={{textDecoration:'inherit',color:'black'}}to="/twitter"> <Twitter sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'skyblue'}}/></Link>
          <Link style={{textDecoration:'inherit',color:'black'}}to="/youtube"> <YouTube sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'red'}}/></Link>
          <Link style={{textDecoration:'inherit',color:'black'}}to="/pinterest"> <Pinterest sx={{fontSize: {xs:'30px',sm:'40px',md:'30px'} , margin:{xs:'5px',sm:'8px',md:'10px'},color:'orange'}}/></Link>
        </Box>

        <Box sx={{color:'black'}}>
          <Typography sx={{margin:'0px 30px', fontSize:'17.5px'}}>
          Samsung Fest Sale is the best time to purchase mobile phones, tablets, televisions, soundbars, refrigerators, washing machines, air conditioners, wearables, kitchen care, accessories, laptops, and monitors. Explore the best offers and great deals on all major electronic categories during the sale. Unlock the great deals & discounts by referring to friends and family! Purchase electronic items at Samsung Fest Sale and get additional benefits. What are you waiting for? Get the advantage of the best deals.

          Avail great deals and discounts with Samsung Fest Sale:

          1. Get up to ₹ 10000* off on exchange
          2. Up to ₹ 4500 off*** with App Voucher
          3. Buy more and save extra 5%* more

          Samsung Fest Sale is a great chance to own the latest products such as the Galaxy S22 Ultra, Galaxy Z Fold4, Galaxy Z Flip4, Galaxy A73 5G, Galaxy A33 5G, Galaxy Book2 Pro 360, Neo QLED 4K Smart TV, The Frame QLED 4K TV, Twin Cooling Plus™ Double Door Refrigerator, Fully Automatic Front Load Washing Machine, Front Load with AI Control & SmartThings Connectivity, Galaxy Watch4, Galaxy Buds2, and much more. Fulfil your wishlist with great deals with Samsung.

          Grab great deals, discounts, no-cost EMI options, cashback, combo offers and much more. It is the best time to buy more and save more. So browse the range of high-quality Samsung electronic items. Our electronic store has everything for you, at the most exciting prices. Our goal is to grant customers extra benefits, choices, and freedom. We assist our customers throughout the shopping journey until the final transaction. Shop your favourite products from Samsung Fest Sale and get the finest discounts, deals, offers, cashback, and no-cost EMI options. Samsung Fest Sale is the best spot to shop for all your favourite items.

          TnC apply. Discounts vary product to product. Product images shown are for representational purpose only, actual product may vary.
          </Typography>
        
        </Box>

        <Divider/>
       
        
      <Ram sx={{marginBottom:'20px',color:'black',borderBottom:'0.5px solid #8777',display:'flex', alignItems:{xs:'flex-start'}}}>
     
      <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'300px'},display:'flex',flexDirection:'column',gap:'20px',color:'black',alignItems:{xs:'none',sm:'none',md:'center'},borderRight:{sm:'0.5px solid #8777', xs:"none"},height:{xs:'auto',sm:'auto',md:'745px'}}}>
        <Typography sx={{paddingTop:{xs:'20px',sm:'20px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'20px'},fontWeight:'500',display:'flex'}}>Product & Services</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/smartphone">
         <Typography>Smart Phone </Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/tablet">
         <Typography>Tablet </Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/airsound">
         <Typography>Audio Sound </Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/watches">
         <Typography>Watches </Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/smartswitch">
         <Typography>Smart Switch </Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/mobileaccessories">
         <Typography>Mobile Accessories </Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/tvs">
         <Typography>TVs </Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/sounddevices">
         <Typography>Sound Devices </Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/refrigerator">
         <Typography>Refrigerator </Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/laundry">
         <Typography>Laundry </Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/airsolutions">
         <Typography>Air Solutions </Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/cookies appliances">
         <Typography>Cookies Appliances </Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/monitors">
         <Typography>Monitors </Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/memorystorage">
         <Typography>Memory Storage </Typography>
        </Link>
    
      </Box>
       
        </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'300px'},display:'flex',flexDirection:'column',gap:'20px',color:'black',alignItems:{xs:'none',sm:'none',md:'center'},borderRight:{sm:'0.5px solid #8777', xs:"none"},height:{xs:'auto',sm:'auto',md:'745px'}}}>
        <Typography sx={{paddingTop:{xs:'20px',sm:'20px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'20px'},fontWeight:'500',display:'flex'}}>Shop</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/cancellation">
         <Typography>Cancellation and Return Policy</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/trackstatus">
         <Typography>Track Order Status</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/welcomevoucher">
         <Typography>Welcome Voucher</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/storelocator">
         <Typography>Store Locator</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/defencePurchageProgram">
         <Typography>Defence purchage program</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/samsungStudentAdvantages">
         <Typography>Samsung Student Advantages</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/coparateEmployeeProgram">
         <Typography>Coparate Employee Program</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/smartclub">
         <Typography>Smart Club</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/faqs">
         <Typography>FAQs</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/termsOfUse">
         <Typography>Terms of Use</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/explore">
         <Typography>Explore</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/">
         <Typography></Typography>
        </Link>
    
       </Box>
       
        </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'300px'},display:'flex',flexDirection:'column',gap:'20px',color:'black',alignItems:{xs:'none',sm:'none',md:'center'},borderRight:{sm:'0.5px solid #8777', xs:"none"},height:{xs:'auto',sm:'auto',md:'745px'}}}>
        <Typography sx={{paddingTop:{xs:'20px',sm:'20px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'20px'},fontWeight:'500',display:'flex'}}>Support</Typography>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/whatsAppUs">
         <Typography>WhatsApp Us</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/signLanguage">
         <Typography>Sign Language</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/emailUs">
         <Typography>Email Us</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/callUs">
         <Typography>Call Us</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/emailTheCeo">
         <Typography>Email The CEO</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/community">
         <Typography>Community</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/productRegistration">
         <Typography>product Regristration</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/serviceCenter">
         <Typography>Service Center</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/giveFeedback">
         <Typography>Give Feedback</Typography>
        </Link>

        </Box>
        
     
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'300px'},display:'flex',flexDirection:'column',gap:'20px',color:'black',alignItems:{xs:'none',sm:'none',md:'center'},borderRight:{sm:'0.5px solid #8777', xs:"none"},height:{xs:'auto',sm:'auto',md:'745px'}}}>
        <Typography sx={{paddingTop:{xs:'20px',sm:'20px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'20px'},fontWeight:'500',display:'flex'}}>Sustainability</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>

        <Link style={{textDecoration:'inherit',color:'black'}}to="/overview">
         <Typography>Overview</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/envornment">
         <Typography>Envornment</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/coparateCitizenship">
         <Typography>Coparate CitizenShip</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/digitalResponsability">
         <Typography>Digital Responsability</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/security&privecy">
         <Typography>Security & privecy</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/accessibility">
         <Typography>Accessibility</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/labor&HumanRights">
         <Typography>Labor & Human Rights</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/diversity&Inclusion">
         <Typography>Diversity & inclusion</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/SustainableSupplyChain">
         <Typography>Sustainable Supply Chain</Typography>
        </Link>
     
       </Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'250px'},display:'flex',flexDirection:'column',gap:'20px',color:'black'}}>
        <Typography sx={{paddingTop:{xs:'30px',sm:'40px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'15px'},fontWeight:'500',display:'flex',justifyContent:{xs:'none',sm:'none',md:'center'}}}>About Us</Typography>
        <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}></Box>
        </Box>

        <Link style={{textDecoration:'inherit',color:'black'}}to="/companyInfo">
         <Typography>Company info</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/businessArea">
         <Typography>Business Area</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/brandIdentity">
         <Typography>Brand Identity</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/careers">
         <Typography>Careers</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/investorsRelations">
         <Typography>Investor Relations</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/newsRoom">
         <Typography>NewsRoom</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/ethics">
         <Typography>Ethics</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/samsungDesign">
         <Typography>Samsung Design</Typography>
        </Link>
     </Box>
     <Box>
        <Box sx={{fontSize: {xs:'15px',sm:'18px',md:'18px'},paddingBottom:{xs:'0px',sm:'18px',md:'none'},width:{xs:'300px',sm:'350px',md:'300px'},display:'flex',flexDirection:'column',gap:'20px',color:'black',alignItems:{xs:'none',sm:'none',md:'center'},borderRight:{sm:'0.5px solid #8777', xs:"none"},height:{xs:'auto',sm:'auto',md:'745px'}}}>
        <Typography sx={{paddingTop:{xs:'20px',sm:'20px',md:'0px'},fontSize: {xs:'20px',sm:'20px',md:'20px'},fontWeight:'500',display:'flex'}}>Account & Community</Typography>
        
        <Link style={{textDecoration:'inherit',color:'black'}}to="/myPage">
         <Typography>My Page</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/myProduct">
         <Typography>My Product</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/orders">
         <Typography>Orders</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/wishlist">
         <Typography>Wishlist</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/voucher">
         <Typography>Voucher</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/myRefferals">
         <Typography>My Refferals</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/service">
         <Typography>Service</Typography>
        </Link>
        <Link style={{textDecoration:'inherit',color:'black'}}to="/community">
         <Typography>Community</Typography>
        </Link>
       
        </Box> 
     </Box>
       
      </Ram>
  
      <Box sx={{margin:'10px 40px ',borderBottom:'0.5ps solid #8777',color:'black'}}>
       Copyright ⓒ 1995-2023 SAMSUNG All Rights reserved.
      <br />
    Please dispose of e-waste and plastic waste responsibly. <br/>
    For more information or e-waste pick up, please call 1800 5 7267864 or click here for more details. 
     <br/>
    Registered Office Address: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001
    Corporate Identification Number (CIN): U31900DL1995PTC071387
      </Box>
      <Divider/>
      <Box sx={{margin:'10px  40px',borderBottom:'0.5ps solid #8777',color:'black',display:'flex',gap:'20px',height:'20px'}}>
       <Link to="/indiaEnglish"><Typography>India/English</Typography></Link>
       <Link to="/privacy"><Typography>Privacy</Typography></Link>
       <Link to="/legal"><Typography>Legal</Typography></Link>
       <Link to ="/policy"><Typography>CSR Policy</Typography></Link>
       <Link to ="/siteMap"><Typography>Sitemap</Typography></Link>
      </Box>
      
      
    </Box>
   
  )
}

export default Footer