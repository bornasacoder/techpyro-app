import { AccessTime, LocationCity, LocationOn } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Avatar, Tab, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react'
const StyleToolbar =styled(Box)(({theme})=>({
    backgroundColor:"#FFFFFF",
   
    }));
const Event1 = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <StyleToolbar>
      <Box sx={{padding:{md:"58px 58px",sm:"58px 20px",xs:"58px 20px"}}}>
        <Typography variant='h1'>Events</Typography>
      </Box>
      <Box sx={{ width: '100%', padding:{md:"30px 58px",sm:"30px 20px",xs:"30px 20px"},textAlign:"center"}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} >
            <Tab label="Happening" value="1" sx={{borderRadius:"0px !important",boxShadow:"none!important",}} />
            <Tab label="Upcoming" value="2" />
            <Tab label="Expired" value="3" />
          </TabList>
        </Box>
      <TabPanel value="1" sx={{padding:{md:"58px 58px",sm:"58px 20px",xs:"58px 20px"}}}>
        </TabPanel>
        <TabPanel value="2" sx={{padding:{md:"58px 58px",sm:"58px 20px",xs:"58px 0px"}}} >
            <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:{md:"row",sm:"row",xs:"column-reverse"},}}>
            <Typography variant='h1' sx={{color:"#FFB606",fontSize:"66px",display:"flex",flexDirection:{md:"column",sm:"column",xs:"row"},alignItems:"center"}}>17 <Typography sx={{color:"#000",fontWeight:"600"}}>FEB</Typography></Typography>
            <Typography sx={{borderRight:"1px solid #EEEEEE"}}/>
            <Box>
                <Typography sx={{fontSize:"20px",display:"flex"}}>Build Education Website Using WordPress</Typography>
                <br/>
                <Typography sx={{display:"flex",gap:"30px",color:"#CCCCCC",}}><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><AccessTime/> 8:00-17:00</Typography><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><LocationOn/> HARIDWAR,UK</Typography> </Typography>
                <br/>
                <Typography sx={{fontSize:"16px",color:"#CCCCCC",display:"flex",flexWrap:"wrap",textAlign:"start"}}>Tech you how to build a complete Learning Management System with WordPress <br/> and LearnPress.</Typography>
            </Box>
            <Avatar alt="Remy Sharp" src="https://eduma.thimpress.com/wp-content/uploads/2015/11/event-4-450x233.jpg" sx={{width:{md:"250px",sm:"250px",xs:"90vw"},height:{md:"150px",sm:"150px",xs:"200px"},borderRadius:"5px"}}/> 
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:{md:"row",sm:"row",xs:"column-reverse"},marginTop:"50px",borderTop:"1px Solid #EEEEEE",paddingTop:"30px"}}>
            <Typography variant='h1' sx={{color:"#FFB606",fontSize:"66px",display:"flex",flexDirection:{md:"column",sm:"column",xs:"row"},alignItems:"center"}}>17 <Typography sx={{color:"#000",fontWeight:"600"}}>FEB</Typography></Typography>
            <Typography sx={{borderRight:"1px solid #EEEEEE"}}/>
            <Box>
                <Typography sx={{fontSize:"20px",display:"flex",justifyContent:"flex-start"}}>Elegant Light Box Paper Cut Dioramas</Typography>
                <br/>
                <Typography sx={{display:"flex",gap:"30px",color:"#CCCCCC",}}><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><AccessTime/> 8:00-17:00</Typography><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><LocationOn/> PATNA,BIHAR</Typography> </Typography>
                <br/>
                <Typography sx={{fontSize:"16px",color:"#CCCCCC",display:"flex",flexWrap:"wrap",textAlign:"start"}}> Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.<br/> Sed non mauris itae erat conuat</Typography>
            </Box>
            <Avatar alt="Remy Sharp" src="https://eduma.thimpress.com/wp-content/uploads/2015/11/event-2-450x233.jpg" sx={{width:{md:"250px",sm:"250px",xs:"90vw"},height:{md:"150px",sm:"150px",xs:"200px"},borderRadius:"5px"}}/> 
            </Box>
        </TabPanel>
        <TabPanel value="3"  sx={{padding:{md:"58px 58px",sm:"58px 20px",xs:"58px 0px"}}}>
          <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:{md:"row",sm:"row",xs:"column-reverse"}}}>
            <Typography variant='h1' sx={{color:"#FFB606",fontSize:"66px",display:"flex",flexDirection:{md:"column",sm:"column",xs:"row"},alignItems:"center"}}>15 <Typography sx={{color:"#000",fontWeight:"600"}}>FEB</Typography></Typography>
            <Typography sx={{borderRight:"1px solid #EEEEEE"}}/>
            <Box>
                <Typography sx={{fontSize:"20px",display:"flex",justifyContent:"flex-start"}}>Applying Natural Laws to Technology and Society</Typography>
                <br/>
                <Typography sx={{display:"flex",gap:"30px",color:"#CCCCCC",}}><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><AccessTime/> 8:00-17:00</Typography><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><LocationOn/> HARIDWAR,UK</Typography> </Typography>
                <br/>
                <Typography sx={{fontSize:"16px",color:"#CCCCCC",display:"flex",flexWrap:"wrap",textAlign:"start"}}>Tech you how to build a complete Learning Management System with WordPress <br/> and LearnPress.</Typography>
            </Box>
            <Avatar alt="Remy Sharp" src="https://eduma.thimpress.com/wp-content/uploads/2015/06/course-6-450x233.jpg" sx={{width:{md:"250px",sm:"250px",xs:"90vw"},height:{md:"150px",sm:"150px",xs:"200px"},borderRadius:"5px"}}/> 
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:{md:"row",sm:"row",xs:"column-reverse"},marginTop:"50px",borderTop:"1px Solid #EEEEEE",paddingTop:"30px"}}>
            <Typography variant='h1' sx={{color:"#FFB606",fontSize:"66px",display:"flex",flexDirection:{md:"column",sm:"column",xs:"row"},alignItems:"center"}}>25 <Typography sx={{color:"#000",fontWeight:"600"}}>FEB</Typography></Typography>
            <Typography sx={{borderRight:"1px solid #EEEEEE"}}/>
            <Box>
                <Typography sx={{fontSize:"20px",display:"flex",justifyContent:"flex-start"}}>Roundtable discussion on STEAM education</Typography>
                <br/>
                <Typography sx={{display:"flex",gap:"30px",color:"#CCCCCC",}}><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><AccessTime/> 8:00-17:00</Typography><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><LocationOn/> PATNA,BIHAR</Typography> </Typography>
                <br/>
                <Typography sx={{fontSize:"16px",color:"#CCCCCC",display:"flex",flexWrap:"wrap",textAlign:"start"}}> Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.<br/> Sed non mauris itae erat conuat</Typography>
            </Box>
            <Avatar alt="Remy Sharp" src="https://eduma.thimpress.com/wp-content/uploads/2015/06/course-7-450x233.jpg" sx={{width:{md:"250px",sm:"250px",xs:"90vw"},height:{md:"150px",sm:"150px",xs:"200px"},borderRadius:"5px"}}/> 
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:{md:"row",sm:"row",xs:"column-reverse"},marginTop:"50px",borderTop:"1px Solid #EEEEEE",paddingTop:"30px"}}>
            <Typography variant='h1' sx={{color:"#FFB606",fontSize:"66px",display:"flex",flexDirection:{md:"column",sm:"column",xs:"row"},alignItems:"center"}}>26 <Typography sx={{color:"#000",fontWeight:"600"}}>FEB</Typography></Typography>
            <Typography sx={{borderRight:"1px solid #EEEEEE"}}/>
            <Box>
                <Typography sx={{fontSize:"20px",display:"flex",justifyContent:"flex-start"}}>Managing Time for Study</Typography>
                <br/>
                <Typography sx={{display:"flex",gap:"30px",color:"#CCCCCC",}}><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><AccessTime/> 8:00-17:00</Typography><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><LocationOn/> PATNA,BIHAR</Typography> </Typography>
                <br/>
                <Typography sx={{fontSize:"16px",color:"#CCCCCC",display:"flex",flexWrap:"wrap",textAlign:"start"}}> Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.<br/> Sed non mauris itae erat conuat</Typography>
            </Box>
            <Avatar alt="Remy Sharp" src="https://eduma.thimpress.com/wp-content/uploads/2015/11/event-2-450x233.jpg" sx={{width:{md:"250px",sm:"250px",xs:"90vw"},height:{md:"150px",sm:"150px",xs:"200px"},borderRadius:"5px"}}/> 
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:{md:"row",sm:"row",xs:"column-reverse"},marginTop:"50px",borderTop:"1px Solid #EEEEEE",paddingTop:"30px"}}>
            <Typography variant='h1' sx={{color:"#FFB606",fontSize:"66px",display:"flex",flexDirection:{md:"column",sm:"column",xs:"row"},alignItems:"center"}}>13 <Typography sx={{color:"#000",fontWeight:"600"}}>MARCH</Typography></Typography>
            <Typography sx={{borderRight:"1px solid #EEEEEE"}}/>
            <Box>
                <Typography sx={{fontSize:"20px",display:"flex",justifyContent:"flex-start"}}>Autumn Science Lectures</Typography>
                <br/>
                <Typography sx={{display:"flex",gap:"30px",color:"#CCCCCC",}}><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><AccessTime/> 8:00-17:00</Typography><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><LocationOn/> PATNA,BIHAR</Typography> </Typography>
                <br/>
                <Typography sx={{fontSize:"16px",color:"#CCCCCC",display:"flex",flexWrap:"wrap",textAlign:"start"}}> Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.<br/> Sed non mauris itae erat conuat</Typography>
            </Box>
            <Avatar alt="Remy Sharp" src="https://eduma.thimpress.com/wp-content/uploads/2015/11/event-7-450x233.jpg" sx={{width:{md:"250px",sm:"250px",xs:"90vw"},height:{md:"150px",sm:"150px",xs:"200px"},borderRadius:"5px"}}/> 
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:{md:"row",sm:"row",xs:"column-reverse"},marginTop:"50px",borderTop:"1px Solid #EEEEEE",paddingTop:"30px"}}>
            <Typography variant='h1' sx={{color:"#FFB606",fontSize:"66px",display:"flex",flexDirection:{md:"column",sm:"column",xs:"row"},alignItems:"center"}}>28 <Typography sx={{color:"#000",fontWeight:"600"}}>MARCH</Typography></Typography>
            <Typography sx={{borderRight:"1px solid #EEEEEE"}}/>
            <Box>
                <Typography sx={{fontSize:"20px",display:"flex",justifyContent:"flex-start"}}>Positive Psychology</Typography>
                <br/>
                <Typography sx={{display:"flex",gap:"30px",color:"#CCCCCC",}}><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><AccessTime/> 8:00-17:00</Typography><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><LocationOn/> PATNA,BIHAR</Typography> </Typography>
                <br/>
                <Typography sx={{fontSize:"16px",color:"#CCCCCC",display:"flex",flexWrap:"wrap",textAlign:"start"}}> Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.<br/> Sed non mauris itae erat conuat</Typography>
            </Box>
            <Avatar alt="Remy Sharp" src="https://eduma.thimpress.com/wp-content/uploads/2015/11/event-1-450x233.jpg" sx={{width:{md:"250px",sm:"250px",xs:"90vw"},height:{md:"150px",sm:"150px",xs:"200px"},borderRadius:"5px"}}/> 
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:{md:"row",sm:"row",xs:"column-reverse"},marginTop:"50px",borderTop:"1px Solid #EEEEEE",paddingTop:"30px"}}>
            <Typography variant='h1' sx={{color:"#FFB606",fontSize:"66px",display:"flex",flexDirection:{md:"column",sm:"column",xs:"row"},alignItems:"center"}}>23 <Typography sx={{color:"#000",fontWeight:"600"}}>APRIL</Typography></Typography>
            <Typography sx={{borderRight:"1px solid #EEEEEE"}}/>
            <Box>
                <Typography sx={{fontSize:"20px",display:"flex",justifyContent:"flex-start"}}>Change career to teaching</Typography>
                <br/>
                <Typography sx={{display:"flex",gap:"30px",color:"#CCCCCC",}}><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><AccessTime/> 8:00-17:00</Typography><Typography sx={{display:"flex",alignItems:"center",gap:"10px"}} ><LocationOn/> PATNA,BIHAR</Typography> </Typography>
                <br/>
                <Typography sx={{fontSize:"16px",color:"#CCCCCC",display:"flex",flexWrap:"wrap",textAlign:"start"}}> Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.<br/> Sed non mauris itae erat conuat</Typography>
            </Box>
            <Avatar alt="Remy Sharp" src="https://eduma.thimpress.com/wp-content/uploads/2015/12/event-3-450x233.jpg" sx={{width:{md:"250px",sm:"250px",xs:"90vw"},height:{md:"150px",sm:"150px",xs:"200px"},borderRadius:"5px"}}/> 
            </Box>
            </TabPanel>
      </TabContext>
    </Box>

    </StyleToolbar>
  )
}

export default Event1
