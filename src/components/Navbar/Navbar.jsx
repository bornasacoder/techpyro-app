import React,{useState} from 'react'
import { AppBar, Box, Button, Radio, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import {CheckBox, Delete} from "@mui/icons-material"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
const Navbar = () => {
 

  return (
    <>
      <Box sx={{ flexGrow: 1 , position:"fixed"}}>
        <AppBar sx={{bgcolor:"whitesmoke" }}>
          <Toolbar sx={{    margin:"-15px 0px"}}>
            <Typography component="div" >
              <img src="	https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" style={{width:"147px",height:"20px",margin:"4px 20px 4px 138px"}}/>
            </Typography>
            <Typography color="black" fontSize="13px" padding="0 11px" marginLeft={"30px"}>MEN </Typography>
            <Typography color="black" fontSize="13px" padding="0 11px">WOMEN </Typography>
            <Typography color="black" fontSize="13px" padding="0 11px">MOBILE COVERS</Typography>
           
            <input type="text" value="" placeholder='Search by product , category or collection' style={{height: "40px",
                display: 'block',
                borderRadius: "5px",
                border: "1px solid transparent",
                background: "#eaeaea",
                fontSize: "10px",
                padding: "5px 5px 5px 9px",
                width: "203px",
                boxSizing: "border-box",
                marginLeft:"auto"}}/>
            <div className="seperator" style={{display: "inline-block",
                height: "20px",
                opacity: ".3",
                background: "#000",
                width: "1px" , margin:'0 13px'}}></div>
           <Button sx={{height:"35px", color:"black"}}>Login</Button>
           <h1><FavoriteBorderOutlinedIcon  sx={{color:"black",fontSize:'21px' , margin:"5px 5px"}}/></h1>
           <h1><ShoppingBagOutlinedIcon  sx={{color:"black",fontSize:'21px',margin:"5px 5px"}}/></h1>
            <div className="right" style={{margin: "0px 129px"}}></div>
            
          </Toolbar>
        </AppBar>
      </Box>
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


