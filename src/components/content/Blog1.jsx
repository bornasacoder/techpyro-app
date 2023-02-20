import { AppBar, Avatar, Button, Grid, Paper, Toolbar, Typography } from '@mui/material';
import { Box, display, styled } from '@mui/system'
import React from 'react'
const StyleToolbar =styled(Toolbar)(({theme})=>({
display:"flex",
backgroundColor:"#FFFFFF",
justifyContent:"flex-start",
alignItems:"flex-start",
[theme.breakpoints.down("md")]: {
  
},
[theme.breakpoints.down("sm")]: {
  flexDirection:"column"
},
// position:"relative"
}));
const Right =styled(Box)(({theme})=>({
flex:'1',
position:"sticky",
maxHeight:"auto",
top:"-105vh",
display:"flex",
flexDirection:"column",
justifyContent:"flex-start",
marginTop:"130px",
paddingRight:"20px",
marginBottom:"40px",
[theme.breakpoints.down("sm")]: {
  padding:'38px 20px',
  flex:'4',
},
}));
const Left =styled(Box)(({theme})=>({
flex:'3',
padding:'38px 58px',
position:"relative",
[theme.breakpoints.down("md")]: {
  padding:'38px 20px',
},
[theme.breakpoints.down("sm")]: {
  padding:'38px 20px',
  flex:'4',
  width:"100vw",
},
}));
const Item = styled(Paper)(({ theme }) => ({
   boxShadow:"none",
   borderRadius:"0px",
   [theme.breakpoints.down("md")]: {
    
  },
  [theme.breakpoints.down("sm")]: {
    display:"flex",
    flexDirection:"column"
  },
  }));
const Blog1 = () => {
  return (
    <StyleToolbar>
        <Left>
<Typography variant='h2'>Blog</Typography>
<Box sx={{ width: '100%',paddingTop:"30px" }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Item>
<Box sx={{  background: `url(${"https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-5.jpg"})
   center/cover no-repeat`,  
            height:{md:"80vh",sm:"80vh",xs:"30vh"},
            borderRadius:"5px"
              }}/>
              <Box sx={{display:"flex",gap:"20px",marginTop:"30px",flexDirection:{md:"row",sm:"row",xs:"column"}}}>
            <Typography variant='h1' sx={{color:"#FFB606",fontSize:"66px",}}>20 <Typography sx={{color:"#000",fontWeight:"600"}}>OCTOBER</Typography></Typography>
            <Box ><Typography sx={{fontSize:"24px",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},"&:hover":{
             color:"#FFB606",
            }}}> LMS WordPress Plugin
            <br/>
            <Box sx={{display:"flex",gap:"30px",marginTop:"30px"}}>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600"}}>Posted by <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>KENY WHITE</Typography></Typography>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},}}>Categories <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>BLOG</Typography></Typography>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},}}>Comments <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>0 COMMENT</Typography></Typography>
            </Box>
            </Typography>
            
            </Box>
              </Box>
              <br/>
             <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a …</Typography> 
             <br/>
             <Box>
             <Button sx={{backgroundColor:"#FFB606",color:"#000",padding:"5px 20px",borderRadius:"5px","&:hover":{
              backgroundColor:"#E6A303"
             } 
             }}>Read More</Button>
             </Box>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
<Box sx={{  background: `url(${"https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-8.jpg"})
   center/cover no-repeat`,  
            height:{md:"80vh",sm:"80vh",xs:"30vh"},
            borderRadius:"5px"
              }}/>
              <Box sx={{display:"flex",gap:"20px",marginTop:"30px",flexDirection:{md:"row",sm:"row",xs:"column"}}}>
            <Typography variant='h1' sx={{color:"#FFB606",fontSize:"66px",}}>20 <Typography sx={{color:"#000",fontWeight:"600"}}>OCTOBER</Typography></Typography>
            <Box ><Typography sx={{fontSize:"24px",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},"&:hover":{
             color:"#FFB606",
            }}}> LMS WordPress Plugin
            <br/>
            <Box sx={{display:"flex",gap:"30px",marginTop:"30px"}}>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600"}}>Posted by <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>KENY WHITE</Typography></Typography>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},}}>Categories <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>BLOG</Typography></Typography>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},}}>Comments <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>0 COMMENT</Typography></Typography>
            </Box>
            </Typography>
            
            </Box>
              </Box>
              <br/>
             <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a …</Typography> 
             <br/>
             <Box>
             <Button sx={{backgroundColor:"#FFB606",color:"#000",padding:"5px 20px",borderRadius:"5px","&:hover":{
              backgroundColor:"#E6A303"
             } 
             }}>Read More</Button>
             </Box>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
<Box sx={{  background: `url(${"https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-2.jpg"})
   center/cover no-repeat`,  
            height:{md:"80vh",sm:"80vh",xs:"30vh"},
            borderRadius:"5px"
              }}/>
              <Box sx={{display:"flex",gap:"20px",marginTop:"30px",flexDirection:{md:"row",sm:"row",xs:"column"}}}>
            <Typography variant='h1' sx={{color:"#FFB606",fontSize:"66px",}}>20 <Typography sx={{color:"#000",fontWeight:"600"}}>OCTOBER</Typography></Typography>
            <Box ><Typography sx={{fontSize:"24px",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},"&:hover":{
             color:"#FFB606",
            }}}> LMS WordPress Plugin
            <br/>
            <Box sx={{display:"flex",gap:"30px",marginTop:"30px"}}>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600"}}>Posted by <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>KENY WHITE</Typography></Typography>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},}}>Categories <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>BLOG</Typography></Typography>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},}}>Comments <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>0 COMMENT</Typography></Typography>
            </Box>
            </Typography>
            
            </Box>
              </Box>
              <br/>
             <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a …</Typography> 
             <br/>
             <Box>
             <Button sx={{backgroundColor:"#FFB606",color:"#000",padding:"5px 20px",borderRadius:"5px","&:hover":{
              backgroundColor:"#E6A303"
             } 
             }}>Read More</Button>
             </Box>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
<Box sx={{  background: `url(${"https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-13.jpg"})
   center/cover no-repeat`,  
            height:{md:"80vh",sm:"80vh",xs:"30vh"},
            borderRadius:"5px"
              }}/>
              <Box sx={{display:"flex",gap:"20px",marginTop:"30px",flexDirection:{md:"row",sm:"row",xs:"column"}}}>
            <Typography variant='h1' sx={{color:"#FFB606",fontSize:"66px",}}>20 <Typography sx={{color:"#000",fontWeight:"600"}}>OCTOBER</Typography></Typography>
            <Box ><Typography sx={{fontSize:"24px",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},"&:hover":{
             color:"#FFB606",
            }}}> LMS WordPress Plugin
            <br/>
            <Box sx={{display:"flex",gap:"30px",marginTop:"30px"}}>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600"}}>Posted by <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>KENY WHITE</Typography></Typography>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},}}>Categories <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>BLOG</Typography></Typography>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},}}>Comments <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>0 COMMENT</Typography></Typography>
            </Box>
            </Typography>
            
            </Box>
              </Box>
              <br/>
             <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a …</Typography> 
             <br/>
             <Box>
             <Button sx={{backgroundColor:"#FFB606",color:"#000",padding:"5px 20px",borderRadius:"5px","&:hover":{
              backgroundColor:"#E6A303"
             } 
             }}>Read More</Button>
             </Box>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
<Box sx={{  background: `url(${"https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-1.jpg"})
   center/cover no-repeat`,  
            height:{md:"80vh",sm:"80vh",xs:"30vh"},
            borderRadius:"5px"
              }}/>
              <Box sx={{display:"flex",gap:"20px",marginTop:"30px",flexDirection:{md:"row",sm:"row",xs:"column"}}}>
            <Typography variant='h1' sx={{color:"#FFB606",fontSize:"66px",}}>20 <Typography sx={{color:"#000",fontWeight:"600"}}>OCTOBER</Typography></Typography>
            <Box ><Typography sx={{fontSize:"24px",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},"&:hover":{
             color:"#FFB606",
            }}}> LMS WordPress Plugin
            <br/>
            <Box sx={{display:"flex",gap:"30px",marginTop:"30px"}}>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600"}}>Posted by <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>KENY WHITE</Typography></Typography>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},}}>Categories <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>BLOG</Typography></Typography>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},}}>Comments <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>0 COMMENT</Typography></Typography>
            </Box>
            </Typography>
            
            </Box>
              </Box>
              <br/>
             <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a …</Typography> 
             <br/>
             <Box>
             <Button sx={{backgroundColor:"#FFB606",color:"#000",padding:"5px 20px",borderRadius:"5px","&:hover":{
              backgroundColor:"#E6A303"
             } 
             }}>Read More</Button>
             </Box>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
<Box sx={{  background: `url(${"https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-16.jpg"})
   center/cover no-repeat`,  
            height:{md:"80vh",sm:"80vh",xs:"30vh"},
            borderRadius:"5px"
              }}/>
              <Box sx={{display:"flex",gap:"20px",marginTop:"30px",flexDirection:{md:"row",sm:"row",xs:"column"}}}>
            <Typography variant='h1' sx={{color:"#FFB606",fontSize:"66px",}}>20 <Typography sx={{color:"#000",fontWeight:"600"}}>OCTOBER</Typography></Typography>
            <Box ><Typography sx={{fontSize:"24px",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},"&:hover":{
             color:"#FFB606",
            }}}> LMS WordPress Plugin
            <br/>
            <Box sx={{display:"flex",gap:"30px",marginTop:"30px"}}>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600"}}>Posted by <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>KENY WHITE</Typography></Typography>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},}}>Categories <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>BLOG</Typography></Typography>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},}}>Comments <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>0 COMMENT</Typography></Typography>
            </Box>
            </Typography>
            
            </Box>
              </Box>
              <br/>
             <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a …</Typography> 
             <br/>
             <Box>
             <Button sx={{backgroundColor:"#FFB606",color:"#000",padding:"5px 20px",borderRadius:"5px","&:hover":{
              backgroundColor:"#E6A303"
             } 
             }}>Read More</Button>
             </Box>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
<Box sx={{  background: `url(${"https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-19.jpg"})
   center/cover no-repeat`,  
            height:{md:"80vh",sm:"80vh",xs:"30vh"},
            borderRadius:"5px"
              }}/>
              <Box sx={{display:"flex",gap:"20px",marginTop:"30px",flexDirection:{md:"row",sm:"row",xs:"column"}}}>
            <Typography variant='h1' sx={{color:"#FFB606",fontSize:"66px",}}>20 <Typography sx={{color:"#000",fontWeight:"600"}}>OCTOBER</Typography></Typography>
            <Box ><Typography sx={{fontSize:"24px",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},"&:hover":{
             color:"#FFB606",
            }}}> LMS WordPress Plugin
            <br/>
            <Box sx={{display:"flex",gap:"30px",marginTop:"30px"}}>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600"}}>Posted by <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>KENY WHITE</Typography></Typography>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},}}>Categories <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>BLOG</Typography></Typography>
            <Typography sx={{color:"#CCCCCC",fontWeight:"600",borderLeft:{md:"2px solid #EEEEEE",sm:"2px solid #EEEEEE",xs:"none"},paddingLeft:{md:"30px",sm:"20px",xs:"0px"},}}>Comments <Typography sx={{color:"#000","&:hover":{
               color:"#FFB606",textDecoration:"underline"
            }}}>0 COMMENT</Typography></Typography>
            </Box>
            </Typography>
            
            </Box>
              </Box>
              <br/>
             <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a …</Typography> 
             <br/>
             <Box>
             <Button sx={{backgroundColor:"#FFB606",color:"#000",padding:"5px 20px",borderRadius:"5px","&:hover":{
              backgroundColor:"#E6A303"
             } 
             }}>Read More</Button>
             </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
        </Left>
      <Right>
<Typography sx={{fontSize:"20px",fontWeight:"600", }}>POPULAR COURSES</Typography>
<br/>
<Box sx={{display:"flex",gap:"20px"}}>
<Avatar alt="Remy Sharp" src="https://eduma.thimpress.com/wp-content/uploads/2022/12/introduction-learnpress-lms-plugin-2-1-150x150.jpg" sx={{width:"90px",height:"90px",borderRadius:"5px"}}/>
<Typography  sx={{fontSize:"18px","&:hover":{
  color:"#E6A303"
}}}>Introduction LearnPress – LMS plugin
 <Typography variant='h4' sx={{color:"#00D757",paddingTop:"10px"}}>
  Free
  </Typography></Typography>
</Box>
<br/>
<Box sx={{display:"flex",gap:"20px"}}>
<Avatar alt="Remy Sharp" src="https://eduma.thimpress.com/wp-content/uploads/2022/06/course-8-150x150.jpg" sx={{width:"90px",height:"90px",borderRadius:"5px"}}/>
<Typography  sx={{fontSize:"18px","&:hover":{
  color:"#E6A303"
}}}>
How To Teach Online Courses Effectively
 <Typography variant='h4' sx={{color:"#00D757",paddingTop:"10px"}}>
  Free
  </Typography></Typography>
</Box>
<br/>
<Box sx={{display:"flex",gap:"20px"}}>
<Avatar alt="Remy Sharp" src="https://eduma.thimpress.com/wp-content/uploads/2022/12/introduction-learnpress-lms-plugin-2-1-150x150.jpg" sx={{width:"90px",height:"90px",borderRadius:"5px"}}/>
<Typography  sx={{fontSize:"18px","&:hover":{
  color:"#E6A303"
}}}>Create an LMS Website with LearnPress
 <Typography variant='h4' sx={{color:"#00D757",paddingTop:"10px"}}>
  Free
  </Typography></Typography>
</Box>
<Typography sx={{fontSize:"20px",fontWeight:"600", marginTop:"30px",flexDirection:{md:"row",sm:"row",xs:"column"}}}>LATEST POSTS</Typography>
<br/>
<Box sx={{display:"flex",gap:"20px"}}>
<Avatar alt="Remy Sharp" src="https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-5-266x266.jpg" sx={{width:"90px",height:"90px",borderRadius:"5px"}}/>
<Typography  sx={{fontSize:"18px","&:hover":{
  color:"#E6A303"
}}}>
LMS WordPress plugin
 <Typography  sx={{color:"#CCCCCC",paddingTop:"10px",fontWeight:"600"}}>
 17 feb 2023
  </Typography></Typography>
</Box>
<br/>
<Box sx={{display:"flex",gap:"20px"}}>
<Avatar alt="Remy Sharp" src="https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-8-266x266.jpg" sx={{width:"90px",height:"90px",borderRadius:"5px"}}/>
<Typography  sx={{fontSize:"18px","&:hover":{
  color:"#E6A303"
}}}>
Introducing: Dr. Deniz Zeynep
 <Typography  sx={{color:"#CCCCCC",paddingTop:"10px",fontWeight:"600"}}>
  17 feb 2023
  </Typography></Typography>
</Box>
<br/>
<Box sx={{display:"flex",gap:"20px"}}>
<Avatar alt="Remy Sharp" src="https://eduma.thimpress.com/wp-content/uploads/2022/06/courses-2-266x266.jpg" sx={{width:"90px",height:"90px",borderRadius:"5px"}}/>
<Typography  sx={{fontSize:"18px","&:hover":{
  color:"#E6A303"
}}}>
Admin earns scholarship
<Typography  sx={{color:"#CCCCCC",paddingTop:"10px",fontWeight:"600"}}>
  17 feb 2023
  </Typography></Typography>
</Box>
<br/>
<Box sx={{  background: `url(${"https://eduma.thimpress.com/wp-content/uploads/2022/11/ads-sidebar.jpg"})
   center/cover no-repeat`,  
            height:"60vh",
              }}/>
      </Right>

    </StyleToolbar>
  )
}

export default Blog1
