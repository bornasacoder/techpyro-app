import React, { useState } from 'react';
import {Box, Button, Divider} from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';



  

const buttonBlock1 = {
  color:"gray",
  "&:hover": {
    color:"black",
    fontWeight:"600",
  }
}

function Block1() {
const [showTab,setShowTab] = useState("stays");

  
  const handleClick =(value) => {
        setShowTab(value);
        
  };
  return (
      <div className='relative w-[95%] flex justify-center mx-auto lg:h-[920px] h-auto flex-col lg:flex-row bg-blue-100'>
        <div className='flex md:flex-row  flex-col justify-start w-full mx-auto '>
                <div className='md:mt-[95px] mt-[20px]' >
                    <h1 className='lg:text-[70px] text-[40px] px-5 lg:px-0 font-semibold'>Hotel, car & <br></br> experiences</h1>
                    <div className='lg:mt-[35px] mt-[10px] flex lg:space-x-6 px-3 w-[350px] lg:px-5 lg:w-[600px] lg:text-[20px] text-[19px] text-gray-600'>    
                        <h3>Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels</h3>
                    </div>
                    <Button variant="contained"   sx={{borderRadius:{md:"25px",xs:'35px'},height:{md:"55px",xs:"50px"},marginTop:"30px",backgroundColor:"",width:{md:"200px",xs:"180px"}}}>Start your search</Button>
                    <Box className='flex mt-[100px] space-x-11 ml-10 hover:text-black' sx={{display:{md:"flex",xs:"none"}}} >
                        <Button onClick={()=>handleClick("stays")} variant="text" sx={buttonBlock1}>Stays</Button>
                        <Button onClick={()=>handleClick("experience")} variant="text" sx={buttonBlock1}>Experiences</Button>
                        <Button onClick={()=>handleClick("cars")} variant="text" sx={buttonBlock1}>Cars</Button>
                        <Button onClick={()=>handleClick("flights")} variant="text" sx={buttonBlock1}>Flights</Button>
                    </Box>
                  {showTab==="stays" &&   <Box sx={{width:"90%",display:{md:"flex",xs:"none"},justifyContent:"center",justifyItems:"center",height:"90px",position:"absolute",backgroundColor:"white",borderRadius:"50px 50px", padding: "10px",boxShadow: "5px 10px 10px #888888"}}>
                        <div className='flex grow-[3]'>
                            <LocationOnOutlinedIcon sx={{fontSize:"40px",marginLeft:"20px",marginTop:"10px",color:"gray"}} />
                            <div className='flex-col p-2'>
                              <h4 className='font-semibold'>Location</h4>
                              <p>Where are you going?</p>
                            </div>
                        </div> 
                        <div className='flex grow '>
                            <CalendarTodayIcon sx={{marginTop:"10px",fontSize:"40px",color:"gray"}} />
                            <div className='flex-col p-2'>
                              <h4 className='font-semibold'>Feb 06 - feb 23</h4>
                              <p>pick up - Drop off</p>
                            </div>
                          </div>
                        <div className='flex grow'>
                            <PersonAddOutlinedIcon sx={{marginTop:"10px",fontSize:"40px",color:"gray"}} />
                            <div className='flex-col p-2'>
                                  <h4 className='font-semibold'>4 Guests</h4>
                                    <p>Guests</p>
                            </div>
                        </div>
                        <div>
                          <Button variant="contained"   sx={{borderRadius:"100%",backgroundColor:"#FFFF00",height:"4rem"}}><SearchIcon sx={{fontSize:"2rem"}} /></Button>
                        </div>
                    </Box>}
                    {showTab==="experience" &&   <Box sx={{width:"90%",display:{md:"flex",xs:"none"},justifyContent:"center",justifyItems:"center",height:"90px",position:"absolute",backgroundColor:"white",borderRadius:"50px 50px", padding: "10px",boxShadow: "5px 10px 10px #888888"}}>
                        <div className='flex grow-[3]'>
                            <LocationOnOutlinedIcon sx={{fontSize:"40px",marginLeft:"20px",marginTop:"10px",color:"gray"}} />
                            <div className='flex-col p-2'>
                              <h4 className='font-semibold'>Location</h4>
                              <p>Where are you going?</p>
                            </div>
                        </div> 
                        <div className='flex grow '>
                            <CalendarTodayIcon sx={{marginTop:"10px",fontSize:"40px",color:"gray"}} />
                            <div className='flex-col p-2'>
                              <h4 className='font-semibold'>Mar 01 - Mar 16</h4>
                              <p>pick up - Drop off</p>
                            </div>
                          </div>
                        <div className='flex grow'>
                            <PersonAddOutlinedIcon sx={{marginTop:"10px",fontSize:"40px",color:"gray"}} />
                            <div className='flex-col p-2'>
                                  <h4 className='font-semibold'>4 Guests</h4>
                                    <p>Guests</p>
                            </div>
                        </div>
                        <div>
                          <Button variant="contained"   sx={{borderRadius:"100%",backgroundColor:"#FFFF00",height:"4rem"}}><SearchIcon sx={{fontSize:"2rem"}} /></Button>
                        </div>
                    </Box>}
                  {showTab==="cars" && <Box sx={{width:"90%",display:{md:"flex",xs:"none"},flexDirection:"column",justifyContent:"center",justifyItems:"center",height:"180px",position:"absolute",backgroundColor:"white",borderRadius:"25px 25px 50px 50px", padding: "10px",boxShadow: "5px 10px 10px #888888"}}>
                      <div className='flex justify-start space-x-4 ml-2 items-center h-[80px]'>
                          <Button variant="contained"   sx={{borderRadius:"25px 25px",backgroundColor:"black",height:"28px",color:"white"}}>Different drop off</Button>
                          <Button variant="contained"   sx={{borderRadius:"25px 25px",backgroundColor:"black",height:"28px",color:"white"}}>Same drop off</Button>
                      </div>
                      <Divider/>
                      <div className='flex h-[90px]'>
                            <div className='flex grow-[3]'>
                                  <LocationOnOutlinedIcon sx={{fontSize:"40px",marginLeft:"20px",marginTop:"10px",color:"gray"}} />
                                  <div className='flex-col p-2'>
                                    <h4 className='font-semibold'>City or Airport</h4>
                                    <p>pick up location</p>
                                  </div>
                              </div> 
                              <div className='flex grow-[3]'>
                                  <LocationOnOutlinedIcon sx={{fontSize:"40px",marginLeft:"20px",marginTop:"10px",color:"gray"}} />
                                  <div className='flex-col p-2'>
                                    <h4 className='font-semibold'>City or Airport</h4>
                                    <p>Drop off location</p>
                                  </div>
                              </div> 
                              
                              <div className='flex grow'>
                                    <CalendarTodayIcon sx={{marginTop:"10px",fontSize:"40px",color:"gray"}} />
                                    <div className='flex-col p-2'>
                                      <h4 className='font-semibold'>Mar 01 - Mar 16</h4>
                                      <p>pick up - Drop off</p>
                                    </div>
                              </div>
                              <div className='mt-2'>
                                <Button variant="contained"   sx={{borderRadius:"100%",backgroundColor:"#FFFF00",height:"4rem"}}><SearchIcon sx={{fontSize:"2rem"}} /></Button>
                              </div>

                      </div>
                    </Box>}
                    {showTab==="flights" && <Box sx={{width:"90%",display:{md:"flex",xs:"none"},flexDirection:"column",justifyContent:"center",justifyItems:"center",height:"180px",position:"absolute",backgroundColor:"white",borderRadius:"25px 25px 50px 50px", padding: "10px",boxShadow: "5px 10px 10px #888888"}}>
                      <div className='flex justify-start space-x-4 ml-2 items-center h-[80px]'>
                          <Button variant="contained"   sx={{borderRadius:"25px 25px",backgroundColor:"black",height:"28px",color:"white"}}>Round-trip</Button>
                          <Button variant="contained"   sx={{borderRadius:"25px 25px",backgroundColor:"black",height:"28px",color:"white"}}>One-way</Button>
                          <Button variant="contained"   sx={{borderRadius:"25px 25px",backgroundColor:"black",height:"28px",color:"white"}}>Economy</Button>
                          <Button variant="contained"   sx={{borderRadius:"25px 25px",backgroundColor:"black",height:"28px",color:"white"}}>4 Guests</Button>
                      </div>
                      <Divider/>
                      <div className='flex h-[90px]'>
                            <div className='flex grow-[3]'>
                                  <LocationOnOutlinedIcon sx={{fontSize:"40px",marginLeft:"20px",marginTop:"10px",color:"gray"}} />
                                  <div className='flex-col p-2'>
                                    <h4 className='font-semibold'>City or Airport</h4>
                                    <p>pick up location</p>
                                  </div>
                              </div> 
                              <div className='flex grow-[3]'>
                                  <LocationOnOutlinedIcon sx={{fontSize:"40px",marginLeft:"20px",marginTop:"10px",color:"gray"}} />
                                  <div className='flex-col p-2'>
                                    <h4 className='font-semibold'>City or Airport</h4>
                                    <p>Drop off location</p>
                                  </div>
                              </div> 
                              
                              <div className='flex grow'>
                                    <CalendarTodayIcon sx={{marginTop:"10px",fontSize:"40px",color:"gray"}} />
                                    <div className='flex-col p-2'>
                                      <h4 className='font-semibold'>Mar 01 - Mar 16</h4>
                                      <p>pick up - Drop off</p>
                                    </div>
                              </div>
                              <div className='mt-2'>
                                <Button variant="contained"   sx={{borderRadius:"100%",backgroundColor:"#FFFF00",height:"4rem"}}><SearchIcon sx={{fontSize:"2rem"}} /></Button>
                              </div>

                      </div>
                    </Box>}
                </div>
                <div className='md:mt-[200px] mt-[60px] lg:w-[680px] w-[335px]'>
                        <img  src="https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?size=626&ext=jpg&ga=GA1.1.1600733619.1686647879&semt=sph" className="h-[700px] w-[900px] rounded-2xl" alt=""></img>
                </div>
                
        </div>
        
        </div>
      
    
  )

}

export default Block1