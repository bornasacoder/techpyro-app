import React, { useState,useEffect } from 'react';
import {Button,Dialog,Menu,MenuItem} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import Signup from '../contents/Login/Signup';
import "./Nav.css";
import SettingsIcon from '@mui/icons-material/Settings';

import {Box} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function Nav() {
  
  const[show , handleShow] = useState(false);
  const [display , setDisplay] = useState(false);
  const transitionNavBar = () => {
      if(window.scrollY>100){
          handleShow(true);
      }else{
          handleShow(false);
      }
  }

  useEffect(
      () => {
          window.addEventListener("scroll",transitionNavBar);
          return () => window.removeEventListener("scroll",transitionNavBar);
      }
  );






    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open,setOpen] = useState(false);
    const handleClick =(e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }
    const handleClose = () => {
      setAnchorEl(null);
      setOpen(false);
    };
  return (
    <div>
    <Box sx={{width:"90%", marginLeft:"16px",display:{md:"none",xs:"flex"},justifyContent:"center",justifyItems:"center",height:"50px",backgroundColor:"white",borderRadius:"50px 50px", padding: "10px",boxShadow: "5px 10px 10px #888888",marginTop:"10px",border:"1px solid black",alignSelf:"center"}} >
                        <div className='flex grow-[3]'>
                            <SearchIcon sx={{fontSize:"30px",color:"black"}} />
                            <div className='flex flex-col'>
                              <div><h4 className='font-semibold'>Where to?</h4></div>
                              <div className='flex '>
                                <ul className='flex text-[12px] text-gray-400 gap-4'>
                                  <li>Anywhere</li>
                                  <li>Any Week</li>
                                  <li>Add guests</li>
                                </ul>
                              </div>
                            </div>
                        </div> 
                        <div>
                          <SettingsIcon sx={{fontSize:"35px",color:"black"}} />
                        </div>
                        </Box>

    <div className={`nav ${show && "nav_black"}`}>
    <div className='flex justify-between h-20 w-[100%] mx-auto px-[15px] fixed'>
        <div className='h-8 flex mt-[10px]'>
            <svg class="w-full block color:blue h-14 text-[#4F46E5]" viewBox="0 0 65 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.4444 14.0325C24.4444 21.4807 12.9444 29.3945 12.9444 29.3945C12.9444 29.3945 1.44444 21.4807 1.44444 14.0325C1.44444 7.51522 6.84722 2.39453 12.9444 2.39453C19.0417 2.39453 24.4444 7.51522 24.4444 14.0325Z" fill="currentColor"></path><path d="M12.9444 29.3945C12.9444 29.3945 24.4444 21.4807 24.4444 14.0325C24.4444 7.51522 19.0417 2.39453 12.9444 2.39453C6.84722 2.39453 1.44444 7.51522 1.44444 14.0325C1.44444 21.4807 12.9444 29.3945 12.9444 29.3945ZM12.9444 29.3945V2.6807" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="13" cy="15" r="4" fill="white"></circle><path d="M31.8601 25.2216C32.951 25.2216 33.897 24.3097 33.9055 23.1761C33.897 22.0597 32.951 21.1477 31.8601 21.1477C30.7351 21.1477 29.8061 22.0597 29.8146 23.1761C29.8061 24.3097 30.7351 25.2216 31.8601 25.2216ZM43.9261 11.9091H41.3267V11.0312C41.3267 10.1449 41.6847 9.625 42.75 9.625C43.1847 9.625 43.6278 9.71875 43.9176 9.8125L44.5568 7.08523C44.1051 6.94886 43.108 6.72727 41.9915 6.72727C39.5284 6.72727 37.696 8.11648 37.696 10.9631V11.9091H35.8466V14.6364H37.696V25H41.3267V14.6364H43.9261V11.9091ZM46.1442 25H49.7749V11.9091H46.1442V25ZM47.968 10.2216C49.0504 10.2216 49.9368 9.39489 49.9368 8.38068C49.9368 7.375 49.0504 6.54829 47.968 6.54829C46.8942 6.54829 46.0078 7.375 46.0078 8.38068C46.0078 9.39489 46.8942 10.2216 47.968 10.2216ZM63.5753 15.642C63.2514 13.2301 61.3082 11.7386 58.0014 11.7386C54.652 11.7386 52.4446 13.2898 52.4531 15.8125C52.4446 17.7727 53.6804 19.0426 56.2372 19.554L58.5043 20.0057C59.6463 20.2358 60.1662 20.6534 60.1832 21.3097C60.1662 22.0852 59.3224 22.6392 58.0526 22.6392C56.7571 22.6392 55.8963 22.0852 55.6747 21.0199L52.1037 21.2074C52.4446 23.7131 54.5753 25.2557 58.044 25.2557C61.4361 25.2557 63.8651 23.5256 63.8736 20.9432C63.8651 19.0511 62.6293 17.9176 60.0895 17.3977L57.7202 16.9205C56.5014 16.6562 56.0497 16.2386 56.0582 15.608C56.0497 14.8239 56.9361 14.3125 58.0611 14.3125C59.3224 14.3125 60.0724 15.0028 60.2514 15.8466L63.5753 15.642Z" fill="#1F2937"></path></svg>
            
            {/* <div className='bg-black-900 rotate-90 h-full'></div> */}
            
            <Button sx={{padding:"25px 20px",fontSize:"18px",color:"black",textTransform:"uppercase"}} 
            varient="text">Travelers <KeyboardArrowDownIcon onClick={handleClick}></KeyboardArrowDownIcon></Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Stays</MenuItem>
                <MenuItem onClick={handleClose}>Real State</MenuItem>
                <MenuItem onClick={handleClose}>Cars</MenuItem>
            </Menu>

        </div>
        <div className='flex gap-[20px] mt-[20px]'>
          <h1 className='font-semibold'>Templates<KeyboardArrowDownIcon></KeyboardArrowDownIcon></h1>
          <div>
            <LanguageIcon/> / <LocalAtmOutlinedIcon/> <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </div>
          <Button variant="outlined" color="primary"  sx={{borderRadius:"25px",backgroundColor:"white",height:"30px",color:"black",borderColor:"black"}}>List Your Property</Button>
          <NotificationsIcon />
          <img className='rounded-full h-10 ' src="https://chisfis-nextjs.vercel.app/_next/image?url=%2F_next%2Fsta" alt=""></img>
          <Button onClick={()=> {setDisplay(true)}} className='text-[16px] font-semibold leading-3 align-baseline mr-8 ' sx={{color:"black",paddingBottom:"30px"}}>Login</Button>
          <Dialog onClose={()=> {setDisplay(false)}} open={display}  ><Signup/></Dialog>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Nav