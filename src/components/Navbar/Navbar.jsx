import React,{useState} from 'react'
import { AppBar, Box, Button, Radio, Tab, Tabs, Toolbar,} from "@mui/material"
import {CheckBox, Delete} from "@mui/icons-material"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import './navbar.css' 

const Navbar = () => {
 

  return (
    <>
      <div style={{zIndex:"1",width:"100%"}}>
        <div className='main' style={{background:"#fff",height:"52px",display:"flex",justifyContent:"center"}}>
          <div className='Navcontainer' style={{display:"flex",justifyContent:"center"}}>
            
            <div style={{display:"flex"}}>
                  <div className='MenuLogo'>
                    <a href="">
                      <img src="https://images.bewakoof.com/web/ic-web-head-hamburger.svg" alt="" />
                    </a>
                  </div>
                  <div className='OnlyLogo'>
                    <a href="/">
                      <img src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg" alt="" />
                    </a>
                  </div>
              </div>
              <div component="FullLogoimage" href="/" >
            <a className='logoImage' href="/" style={{textDecoration:"none",color:"black"}}><img   src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" style={{width:"147px",height:"20px",margin:"12px 20px 4px", }}/></a>
            </div>
              <div className='men_women_mobilecover_container' style={{display:"flex",margin:"13px 27px"}}>
                  < div className='men_women_mobilecover'>
                    <a href="/men-clothing" style={{textDecoration:"none",color:"black"}}>MEN</a> </div>

                  <div className='men_women_mobilecover'>
                    <a href="/women-clothing" style={{textDecoration:"none",color:"black"}}>WOMEN</a> </div>

                  <div className='men_women_mobilecover'>
                    <a href="/mobile-covers" style={{textDecoration:"none",color:"black"}}>MOBILE COVER</a> </div>
              </div >
              <div className='searchBar'>
                  <input type="text" value="" placeholder='Search by product , category or collection' style={{height: "40px",
                      display: 'block',
                      borderRadius: "5px",
                      border: "1px solid transparent",
                      background: "#eaeaea",
                      fontSize: "10px",
                      padding: "5px 5px 5px 9px",
                      width: "203px",
                      boxSizing: "border-box",
                      marginLeft:"auto",marginTop:"6px"
                      }}/>
                </div>
                    <div className="seperator" style={{
                        height: "20px",
                        opacity: ".3",
                        background: "#000",
                        width: "1px" , margin:'16px 13px'}}></div>
            <Button id='LoginButton' sx={{height:"35px", color:"black",margin:"7px 0"}}>Login</Button>
            <div className='icons' style={{display:"flex"}}>
              <SearchIcon id='searchbutton' sx={{color:"black",fontSize:'21px' , margin:"13px 15px"}}/>
           <FavoriteBorderOutlinedIcon  sx={{color:"black",fontSize:'21px' , marginTop:"13px"}}/>
           <ShoppingBagOutlinedIcon  sx={{color:"black",fontSize:'21px',margin:"13px 15px"}}/>
           </div>
          </div>
        </div>
      </div>
    {/* <nav sx={{height:"50px" , bgcolor:'white', display:'flex'}}>
        <div className="logo" style={{display:"block"}}>
        <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" style={{height:"20px",width:"147px",margin:'10px 10px 10px 131px'}} />
        </div>
        <div className="men" style={{color:'black',display:"block"}}>Men</div>
        <div className="men" style={{color:'black',display:"block"}}>Women</div>
        <div className="men" style={{color:'black'}}>Mobile cover</div>
        </nav> */}
    </>
  )
}

export default Navbar


