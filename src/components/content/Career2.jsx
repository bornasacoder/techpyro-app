import { ArrowForward } from '@mui/icons-material';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, styled, Typography } from '@mui/material'
import React from 'react'
const StyleToolbar = styled("Box")(({ theme }) => ({
    display: "flex",
   justifyContent:"space-between",
   flexDirection:"column",
   backgroundColor:"#FFFFFF",
   padding:"58px 58px",
    [theme.breakpoints.down("md")]: {
      
    },
    [theme.breakpoints.down("sm")]: {
     padding:"58px 20px" 
    },
  }));
const Career2 = () => {
  return (
    <StyleToolbar>
      <Box>
        <Typography variant='h2' sx={{textAlign:"center",fontSize:"36px"}}>Find a career that works for you</Typography>
        <Typography sx={{textAlign:"center",fontSize:"20px"}}>Whatever your background or interests are, Professional Certificates have you covered.</Typography>
        <br/>
        <Typography sx={{textAlign:"center",fontWeight:"600"}}>Filter by job category</Typography>
        <br/>
        <Box sx={{display:"flex",gap:"20px",justifyContent:"center",flexWrap:"wrap"}}>
          <Button sx={{border:"1px solid #000",padding:"2px 10px",borderRadius:"40px",color:"#fff",fontWeight:"400",backgroundColor:"#000","&:hover":{
            backgroundColor:"#000"
          }}}>All Careers(24)</Button>
          <Button sx={{border:"1px solid #000",padding:"2px 10px",borderRadius:"40px",color:"#000",fontWeight:"400"}}>Software Engineering & IT(10)</Button>
          <Button sx={{border:"1px solid #000",padding:"2px 10px",borderRadius:"40px",color:"#000",fontWeight:"400"}}>Sales & Marketing(6)</Button>
          <Button sx={{border:"1px solid #000",padding:"2px 10px",borderRadius:"40px",color:"#000",fontWeight:"400"}}>Business(5)</Button>
          <Button sx={{border:"1px solid #000",padding:"2px 10px",borderRadius:"40px",color:"#000",fontWeight:"400"}}>Data Science & Analytics(3)</Button>
        </Box>
      </Box>
      <br/>
        <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",rowGap:"30px"}} >
    <Card sx={{width:"360px"}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/44ANFFMFvQDjgd5vZ6p3oI/8afb0be7ec29027def9737f78f9a03f2/cover-android-developer.jpg?auto=format%2Ccompress&dpr=2&w=&h="
        alt="green iguana"
      />
       </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
        Android Developer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
        Build and write code for mobile apps hosted on Android smartphones and mobile tablets.
        </Typography>
        <br/>
        <Typography  variant="h5">Great if you like:</Typography>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Creative challenges</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px",}}>Building better user experiences</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Using Android products</Typography>
        <br/>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box paddingTop="8px">
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>$109,800</Typography> median salary ¹</Typography>
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>15,509</Typography>  jobs available ¹</Typography>
        </Box>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box sx={{paddingTop:"8px"}}>
            <Typography sx={{fontWeight:"600",fontSize:"16px"}}>Credentials from leading partners</Typography>
        </Box>
        <Box sx={{paddingTop:"8px",display:"flex",gap:"10px"}}>
        <Avatar alt="Remy Sharp" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_discovery/unified-career-academy/unified-ca-override-meta-logo.png?auto=format%2Ccompress&dpr=2&w=&h=" sx={{borderRadius:"6px"}} />
        <Typography sx={{display:"flex",alignItems:"center",gap:"10px",fontSize:"16px","&:hover":{
            textDecoration:"underline"
        }}} color="primary">Meta Android Developer <ArrowForward/></Typography>
        </Box>
      </CardContent>
  </Card>
    <Card sx={{width:"360px" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3H9ztONoEtJFe8B79WsifE/241d50889402816834d83338142b6d2f/cover-ios-developer.jpg?auto=format%2Ccompress&dpr=2&w=&h="
        alt="green iguana"
      />
       </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
        iOS Developer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
        Build and write code for mobile apps hosted on iOS, an operating system used on Apple devices like the iPhone and iPad.
        </Typography>
        <br/>
        <Typography  variant="h5">Great if you like:</Typography>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Creative challenges</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px",}}>Building better user experiences</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Using Android products</Typography>
        <br/>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box paddingTop="8px">
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>$109,800</Typography> median salary ¹</Typography>
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>15,509</Typography>  jobs available ¹</Typography>
        </Box>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box sx={{paddingTop:"8px"}}>
            <Typography sx={{fontWeight:"600",fontSize:"16px"}}>Credentials from leading partners</Typography>
        </Box>
        <Box sx={{paddingTop:"8px",display:"flex",gap:"10px"}}>
        <Avatar alt="Remy Sharp" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_discovery/unified-career-academy/unified-ca-override-meta-logo.png?auto=format%2Ccompress&dpr=2&w=&h=" sx={{borderRadius:"6px"}} />
        <Typography sx={{display:"flex",alignItems:"center",gap:"10px",fontSize:"16px","&:hover":{
            textDecoration:"underline"
        }}} color="primary">Meta iOS Developer <ArrowForward/></Typography>
        </Box>
      </CardContent>
  </Card>
    <Card sx={{width:"360px" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2myQHPO0Am0qV0e0EPJF8/ffcbd652b2198fbf8b718b8f62dc4507/digital-marketer-cover.jpg?auto=format%2Ccompress&dpr=2&w=&h="
        alt="green iguana"
      />
       </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
        Digital Marketer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
        Build and write code for mobile apps hosted on Android smartphones and mobile tablets.
        </Typography>
        <br/>
        <Typography  variant="h5">Great if you like:</Typography>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Creative challenges</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px",}}>Building better user experiences</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Using Android products</Typography>
        <br/>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box paddingTop="8px">
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>$109,800</Typography> median salary ¹</Typography>
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>15,509</Typography>  jobs available ¹</Typography>
        </Box>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box sx={{paddingTop:"8px"}}>
            <Typography sx={{fontWeight:"600",fontSize:"16px"}}>Credentials from leading partners</Typography>
        </Box>
        <Box sx={{paddingTop:"8px",display:"flex",gap:"10px"}}>
        <Avatar alt="Remy Sharp" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4YgA9i6O79eZxdUK345q55/b4e7041b0f0d92e0da7d3c835e168c8f/Google-G_360x360.jpeg?auto=format%2Ccompress&dpr=2&w=&h=" sx={{borderRadius:"6px"}} />
        <Typography sx={{display:"flex",alignItems:"center",gap:"10px",fontSize:"16px","&:hover":{
            textDecoration:"underline"
        }}} color="primary">Meta Android Developer <ArrowForward/></Typography>
        </Box>
      </CardContent>
  </Card>

 
    <Card sx={{ width:"360px" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/62YEtEKcqhqnwT8lBePhBW/03f6af20abaf6e6c162ecb79e18940b5/cover-frontend-developer.jpg?auto=format%2Ccompress&dpr=2&w=&h="
        alt="green iguana"
      />
       </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
        Front-End Developer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
        Design and develop the look, feel, function, and user experience of a website.
        </Typography>
        <br/>
        <Typography  variant="h5">Great if you like:</Typography>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Creative challenges</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px",}}>Building better user experiences</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Using Android products</Typography>
        <br/>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box paddingTop="8px">
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>$109,800</Typography> median salary ¹</Typography>
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>15,509</Typography>  jobs available ¹</Typography>
        </Box>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box sx={{paddingTop:"8px"}}>
            <Typography sx={{fontWeight:"600",fontSize:"16px"}}>Credentials from leading partners</Typography>
        </Box>
        <Box sx={{paddingTop:"8px",display:"flex",gap:"10px"}}>
        <Avatar alt="Remy Sharp" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_discovery/unified-career-academy/unified-ca-override-meta-logo.png?auto=format%2Ccompress&dpr=2&w=&h=" sx={{borderRadius:"6px"}} />
        <Typography sx={{display:"flex",alignItems:"center",gap:"10px",fontSize:"16px","&:hover":{
            textDecoration:"underline"
        }}} color="primary">Meta Android Developer <ArrowForward/></Typography>
        </Box>
      </CardContent>
  </Card>
    <Card sx={{width:"360px" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/17Z0RfMFbDtmzUaOcfUtHh/7041e73eb85f2783fc78570d23435974/cover-backend-developer.jpg?auto=format%2Ccompress&dpr=2&w=&h="
        alt="green iguana"
      />
       </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
        Back-End Developer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
        Build the structures that help websites function using industry-standard tools and programming systems.
        </Typography>
        <br/>
        <Typography  variant="h5">Great if you like:</Typography>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Creative challenges</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px",}}>Building better user experiences</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Using Android products</Typography>
        <br/>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box paddingTop="8px">
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>$109,800</Typography> median salary ¹</Typography>
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>15,509</Typography>  jobs available ¹</Typography>
        </Box>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box sx={{paddingTop:"8px"}}>
            <Typography sx={{fontWeight:"600",fontSize:"16px"}}>Credentials from leading partners</Typography>
        </Box>
        <Box sx={{paddingTop:"8px",display:"flex",gap:"10px"}}>
        <Avatar alt="Remy Sharp" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_discovery/unified-career-academy/unified-ca-override-meta-logo.png?auto=format%2Ccompress&dpr=2&w=&h=" sx={{borderRadius:"6px"}} />
        <Typography sx={{display:"flex",alignItems:"center",gap:"10px",fontSize:"16px","&:hover":{
            textDecoration:"underline"
        }}} color="primary">Meta iOS Developer <ArrowForward/></Typography>
        </Box>
      </CardContent>
  </Card>
    <Card sx={{width:"360px" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/RPKgXpC4AX6SrbU425JME/8eb2a07e3c1aba158ca3b3b9788fb48a/data-engineer-cover.jpg?auto=format%2Ccompress&dpr=2&w=&h="
        alt="green iguana"
      />
       </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
        Data Engineer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
        Design and build systems to collect and transform data into usable information for data science.
        </Typography>
        <br/>
        <Typography  variant="h5">Great if you like:</Typography>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Creative challenges</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px",}}>Building better user experiences</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Using Android products</Typography>
        <br/>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box paddingTop="8px">
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>$109,800</Typography> median salary ¹</Typography>
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>15,509</Typography>  jobs available ¹</Typography>
        </Box>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box sx={{paddingTop:"8px"}}>
            <Typography sx={{fontWeight:"600",fontSize:"16px"}}>Credentials from leading partners</Typography>
        </Box>
        <Box sx={{paddingTop:"8px",display:"flex",gap:"10px"}}>
        <Avatar alt="Remy Sharp" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4YgA9i6O79eZxdUK345q55/b4e7041b0f0d92e0da7d3c835e168c8f/Google-G_360x360.jpeg?auto=format%2Ccompress&dpr=2&w=&h=" sx={{borderRadius:"6px"}} />
        <Typography sx={{display:"flex",alignItems:"center",gap:"10px",fontSize:"16px","&:hover":{
            textDecoration:"underline"
        }}} color="primary">Meta Android Developer <ArrowForward/></Typography>
        </Box>
      </CardContent>
  </Card>
    <Card sx={{ width:"360px" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/62YEtEKcqhqnwT8lBePhBW/03f6af20abaf6e6c162ecb79e18940b5/cover-frontend-developer.jpg?auto=format%2Ccompress&dpr=2&w=&h="
        alt="green iguana"
      />
       </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
        Front-End Developer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
        Design and develop the look, feel, function, and user experience of a website.
        </Typography>
        <br/>
        <Typography  variant="h5">Great if you like:</Typography>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Creative challenges</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px",}}>Building better user experiences</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Using Android products</Typography>
        <br/>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box paddingTop="8px">
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>$109,800</Typography> median salary ¹</Typography>
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>15,509</Typography>  jobs available ¹</Typography>
        </Box>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box sx={{paddingTop:"8px"}}>
            <Typography sx={{fontWeight:"600",fontSize:"16px"}}>Credentials from leading partners</Typography>
        </Box>
        <Box sx={{paddingTop:"8px",display:"flex",gap:"10px"}}>
        <Avatar alt="Remy Sharp" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_discovery/unified-career-academy/unified-ca-override-meta-logo.png?auto=format%2Ccompress&dpr=2&w=&h=" sx={{borderRadius:"6px"}} />
        <Typography sx={{display:"flex",alignItems:"center",gap:"10px",fontSize:"16px","&:hover":{
            textDecoration:"underline"
        }}} color="primary">Meta Android Developer <ArrowForward/></Typography>
        </Box>
      </CardContent>
  </Card>
    <Card sx={{width:"360px" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1PW1CvFwqQDn19MYzW0bHD/baf5223f1f49ee9fde334013da559032/it-support-cover.jpg?auto=format%2Ccompress&dpr=2&w=&h="
        alt="green iguana"
      />
       </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
        Back-End Developer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
        Build the structures that help websites function using industry-standard tools and programming systems.
        </Typography>
        <br/>
        <Typography  variant="h5">Great if you like:</Typography>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Creative challenges</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px",}}>Building better user experiences</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Using Android products</Typography>
        <br/>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box paddingTop="8px">
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>$109,800</Typography> median salary ¹</Typography>
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>15,509</Typography>  jobs available ¹</Typography>
        </Box>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box sx={{paddingTop:"8px"}}>
            <Typography sx={{fontWeight:"600",fontSize:"16px"}}>Credentials from leading partners</Typography>
        </Box>
        <Box sx={{paddingTop:"8px",display:"flex",gap:"10px"}}>
        <Avatar alt="Remy Sharp" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_discovery/unified-career-academy/unified-ca-override-meta-logo.png?auto=format%2Ccompress&dpr=2&w=&h=" sx={{borderRadius:"6px"}} />
        <Typography sx={{display:"flex",alignItems:"center",gap:"10px",fontSize:"16px","&:hover":{
            textDecoration:"underline"
        }}} color="primary">Meta iOS Developer <ArrowForward/></Typography>
        </Box>
      </CardContent>
  </Card>
    <Card sx={{width:"360px" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7oeSAFfCbtJEfjncgTed55/f3a7f6baff4dfabf518d24dc34377731/data-analyst-cover.jpg?auto=format%2Ccompress&dpr=2&w=&h="
        alt="green iguana"
      />
       </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
        Data Engineer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
        Design and build systems to collect and transform data into usable information for data science.
        </Typography>
        <br/>
        <Typography  variant="h5">Great if you like:</Typography>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Creative challenges</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px",}}>Building better user experiences</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Using Android products</Typography>
        <br/>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box paddingTop="8px">
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>$109,800</Typography> median salary ¹</Typography>
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>15,509</Typography>  jobs available ¹</Typography>
        </Box>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box sx={{paddingTop:"8px"}}>
            <Typography sx={{fontWeight:"600",fontSize:"16px"}}>Credentials from leading partners</Typography>
        </Box>
        <Box sx={{paddingTop:"8px",display:"flex",gap:"10px"}}>
        <Avatar alt="Remy Sharp" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4YgA9i6O79eZxdUK345q55/b4e7041b0f0d92e0da7d3c835e168c8f/Google-G_360x360.jpeg?auto=format%2Ccompress&dpr=2&w=&h=" sx={{borderRadius:"6px"}} />
        <Typography sx={{display:"flex",alignItems:"center",gap:"10px",fontSize:"16px","&:hover":{
            textDecoration:"underline"
        }}} color="primary">Meta Android Developer <ArrowForward/></Typography>
        </Box>
      </CardContent>
  </Card>
    <Card sx={{ width:"360px" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=2&w=&h="
        alt="green iguana"
      />
       </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
        Front-End Developer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
        Design and develop the look, feel, function, and user experience of a website.
        </Typography>
        <br/>
        <Typography  variant="h5">Great if you like:</Typography>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Creative challenges</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px",}}>Building better user experiences</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Using Android products</Typography>
        <br/>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box paddingTop="8px">
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>$109,800</Typography> median salary ¹</Typography>
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>15,509</Typography>  jobs available ¹</Typography>
        </Box>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box sx={{paddingTop:"8px"}}>
            <Typography sx={{fontWeight:"600",fontSize:"16px"}}>Credentials from leading partners</Typography>
        </Box>
        <Box sx={{paddingTop:"8px",display:"flex",gap:"10px"}}>
        <Avatar alt="Remy Sharp" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_discovery/unified-career-academy/unified-ca-override-meta-logo.png?auto=format%2Ccompress&dpr=2&w=&h=" sx={{borderRadius:"6px"}} />
        <Typography sx={{display:"flex",alignItems:"center",gap:"10px",fontSize:"16px","&:hover":{
            textDecoration:"underline"
        }}} color="primary">Meta Android Developer <ArrowForward/></Typography>
        </Box>
      </CardContent>
  </Card>
    <Card sx={{width:"360px" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/d3KBmFnS1w0G5KvwNQ7X8/52a8514859266537014ab660f3362f4e/social-media-marketer.jpg?auto=format%2Ccompress&dpr=2&w=&h="
        alt="green iguana"
      />
       </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
        Back-End Developer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
        Build the structures that help websites function using industry-standard tools and programming systems.
        </Typography>
        <br/>
        <Typography  variant="h5">Great if you like:</Typography>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Creative challenges</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px",}}>Building better user experiences</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Using Android products</Typography>
        <br/>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box paddingTop="8px">
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>$109,800</Typography> median salary ¹</Typography>
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>15,509</Typography>  jobs available ¹</Typography>
        </Box>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box sx={{paddingTop:"8px"}}>
            <Typography sx={{fontWeight:"600",fontSize:"16px"}}>Credentials from leading partners</Typography>
        </Box>
        <Box sx={{paddingTop:"8px",display:"flex",gap:"10px"}}>
        <Avatar alt="Remy Sharp" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_discovery/unified-career-academy/unified-ca-override-meta-logo.png?auto=format%2Ccompress&dpr=2&w=&h=" sx={{borderRadius:"6px"}} />
        <Typography sx={{display:"flex",alignItems:"center",gap:"10px",fontSize:"16px","&:hover":{
            textDecoration:"underline"
        }}} color="primary">Meta iOS Developer <ArrowForward/></Typography>
        </Box>
      </CardContent>
  </Card>
    <Card sx={{width:"360px" }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4gbKow1HQIjUyvr5nvxkbU/b0647c21aba1b4f28c8835dbc95704e8/data-scientist-cover.jpg?auto=format%2Ccompress&dpr=2&w=&h="
        alt="green iguana"
      />
       </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
        Data Engineer
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
        Design and build systems to collect and transform data into usable information for data science.
        </Typography>
        <br/>
        <Typography  variant="h5">Great if you like:</Typography>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Creative challenges</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px",}}>Building better user experiences</Typography>
        <br/>
        <br/>
        <Typography component="span" sx={{padding:"3px 8px",backgroundColor:"#E5E7E8",borderRadius:"5px"}}>Using Android products</Typography>
        <br/>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box paddingTop="8px">
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>$109,800</Typography> median salary ¹</Typography>
        <Typography display="flex" gap={1}><Typography sx={{fontWeight:"600"}}>15,509</Typography>  jobs available ¹</Typography>
        </Box>
        <Typography sx={{borderBottom:"2px solid #EEEEEE",height:"20px",width:"100%"}}/>
        <Box sx={{paddingTop:"8px"}}>
            <Typography sx={{fontWeight:"600",fontSize:"16px"}}>Credentials from leading partners</Typography>
        </Box>
        <Box sx={{paddingTop:"8px",display:"flex",gap:"10px"}}>
        <Avatar alt="Remy Sharp" src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4YgA9i6O79eZxdUK345q55/b4e7041b0f0d92e0da7d3c835e168c8f/Google-G_360x360.jpeg?auto=format%2Ccompress&dpr=2&w=&h=" sx={{borderRadius:"6px"}} />
        <Typography sx={{display:"flex",alignItems:"center",gap:"10px",fontSize:"16px","&:hover":{
            textDecoration:"underline"
        }}} color="primary">Meta Android Developer <ArrowForward/></Typography>
        </Box>
      </CardContent>
  </Card>
  </Box>
  <br/>
  <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
    <Button sx={{backgroundColor:"#085cd1",color:"#fff",borderRadius:"5px","&:hover":{
      backgroundColor:"#00419E"
    }}}>View more(12 More)</Button>
    <br/>
    <Typography>¹ Salary data (median with 0-2 years experience) and job opening data are sourced from United States Lightcast™ Job Postings</Typography>
    <Typography>Report. Data for job roles relevant to featured programs (9/01/2021 - 9/01/22)</Typography>
    <br/>
    <Typography>² Coursera Platform Data, all time</Typography>
    <br/>
    <Typography>³ Most designed to be completed in 6 months, with 10 hours or less of work per week</Typography>
  </Box>
  </StyleToolbar>
  )
}

export default Career2
