import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import "./footer.css"

  
const Footer = () => {
  return (
      <Box sx={{width:'100%',display:'flex',flexDirection:'column' ,alignItems:'center',background:'#091B31'}}>
          <Box sx={{width:'76%',display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'}, gap:{xs:'35px',sm:'40px',md:'60px', lg:'70px'},padding:'10px',marginLeft:{xs:'-85px',sm:'-85px',md:'0px',}}}>

              <Box sx={{color:'#fff',display:'flex',flexDirection:'column',gap:'7px'}}>
                <h2>Resources</h2>
                <Typography>Search Tours</Typography>
                <Typography>hospital Deals & Promotions</Typography>
                <Typography>Download hospital Brochures</Typography>
                <Typography>Terms & conditions</Typography>
                <Typography>Privacy Policy</Typography>
                <Typography>Payment Guide</Typography>
                <Typography>Site Map</Typography>
              </Box>

              <Box sx={{color:'#fff'}}>
                <h2>Quick Link</h2>
                <Typography>Why choose Odynovo</Typography>
                <Typography>Meet Our hospital Experts</Typography>
                <Typography>Review by Clients</Typography>
                <Typography>Our Awards</Typography>
                <Typography>Responsible hospital</Typography>
                <Typography>Cookie Policy</Typography>
              </Box>


              <Box sx={{color:'#fff',display:'flex',flexDirection:'column',gap:'7px'}}>
                <h2>Hot Destinations</h2>
                <Button variant='outlined' sx={{width:'65px',background:'teal',color:'#fff'}}>Egypt</Button>
                <Button variant='outlined' sx={{width:'90px',background:'teal',color:'#fff'}}>Thailand</Button>
                <Button variant='outlined' sx={{width:'90px',background:'teal',color:'#fff'}}>Vietnam</Button>
                <Button variant='outlined' sx={{width:'90px',background:'teal',color:'#fff'}}>Morocco</Button>
                <Button variant='outlined' sx={{width:'90px',background:'teal',color:'#fff'}}>japan</Button>
                <Button variant='outlined' sx={{width:'90px',background:'teal',color:'#fff'}}>India</Button>
              
              </Box>

              <Box sx={{color:'#fff'}}>
                <img style={{height:'100px',width:'100px',borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/previews/005/747/477/non_2x/24-hours-call-center-icon-247-support-icon-sign-button-call-center-symbol-icon-template-free-vector.jpg" alt="" />
                <h3>We're at your service</h3>

                <Box sx={{display:'flex',alignItems:'center',marginTop:'30px',gap:'5px'}}>
                  <img style={{height:'20px',width:'20px',borderRadius:'30%',}} src="https://www.tuktukdesign.com/wp-content/uploads/2020/01/call-icon-vector.jpg" alt="" />
                  <Typography>+91 9876543210</Typography>
                </Box>

                <Box sx={{display:'flex',alignItems:'center',marginTop:'30px',gap:'5px'}}>
                  <img style={{height:'20px',width:'20px',borderRadius:'30%',backgroundColor:'#fff'}} src="https://cdn-icons-png.flaticon.com/512/3494/3494693.png" alt="" />
                  <Typography>inquiry@websitename.com</Typography>
                </Box>
              </Box>

          </Box>


          <Box sx={{width:'100%', height:'150px' , background:'#000',marginTop:'20px',display:'flex',flexDirection:'column' ,justifyContent:'center',alignItems:'center',gap:'20px'}}>
               <Box sx={{display:'flex', gap:'10px'}}>
                  <img style={{height:'40px',width:'40px',background:'#fff',borderRadius:'50%'}} src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-line-icon.png" alt="" />
                  <img style={{height:'40px',width:'40px',background:'#fff',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyr058kmJ9mzBDDkRlLTr-HSYCoJkA0DHG9w&usqp=CAU" alt="" />
                  <img style={{height:'40px',width:'40px',background:'#fff',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_D-t53of6uVp0e6oglLAkNPhaVEVPvKge_w&usqp=CAU" alt="" />
                  <img style={{height:'40px',width:'40px',background:'#fff',borderRadius:'50%'}} src="https://image.similarpng.com/very-thumbnail/2021/05/Round-shiny-silver-frame-Instagram-icon-button-with-gradient-effect-on-transparent-background-PNG.png" alt="" />
               </Box>

               <Box>
                 <Typography sx={{color:'#fff'}}>Copyright © 2022. All Right Reserved.</Typography>
               </Box>
          </Box>
      </Box>
   
  )
}

export default Footer;