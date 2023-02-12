import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { techpyro } from '../../../constants/home/HomeLowerContent'
import { website } from '../../../constants/home/HomeLowerContent'
import { app } from '../../../constants/home/HomeLowerContent'
import { uiux } from '../../../constants/home/HomeLowerContent'
import { digitalmarketing } from '../../../constants/home/HomeLowerContent'
import { graphicsdesigning } from '../../../constants/home/HomeLowerContent'
import { logodesigning } from '../../../constants/home/HomeLowerContent'
import { videoediting } from '../../../constants/home/HomeLowerContent'
import { dashboard } from '../../../constants/home/HomeLowerContent'
import { presentation } from '../../../constants/home/HomeLowerContent'
import { ContentWriting } from '../../../constants/home/HomeLowerContent'
const Container = styled(Box)(({theme})=>({
background:"#F2F5F9"
}))
const Span = styled("span")(({theme})=>({
    cursor:"pointer"

}))

const Block17 = () => {
    const navigate = useNavigate()
    const handleRedirect = ()=>{
        navigate("/")
    }
  return (
<Container>
<Box sx={{margin:"20px 20px 0px 20px ", borderTop:"1px solid #EEEEEE" , borderBottom:"1px solid #EEEEEE" }} >
<Typography variant="h1" sx={{fontSize:"16px", fontWeight:"550", marginTop:"20px", color:"#878787", marginBottom:"5px"}} >
<Span onClick={handleRedirect} >  {techpyro.header} - Make your business digital </Span>
    </Typography>
    <Typography variant="body2" sx={{color:"#878787",fontSize:"12px", marginBottom:"20px" }} gutterBottom>
    {techpyro.content}
    </Typography>
    <Box>
    <Typography variant="h6" sx={{fontSize:"16px", fontWeight:"550", marginBottom:"20px", color:"#878787"  }} >
      what can you buy services from workLess?
    </Typography>
    </Box>

    <Box sx={{margin:"20px 0px"}} >
        <Link to="/websites" style={{textDecoration:"none"}} ><Typography variant = "h2" sx={{fontSize:"16px", fontWeight:"550", color:"#878787", marginBottom:"5px"}} >{website.header}</Typography></Link>
        <Typography variant="body1" sx={{fontSize:"12px", fontWeight:"400",textAlign:"justify", color:"#878787"  }}  >{website.content}</Typography>
 </Box>

 <Box sx={{margin:"20px 0px"}} >
        <Link to="/apps" style={{textDecoration:"none"}} ><Typography variant = "h2" sx={{fontSize:"16px", fontWeight:"550", color:"#878787", marginBottom:"5px"}} >{app.header}</Typography></Link>
        <Typography variant="body1" sx={{fontSize:"12px", fontWeight:"400",textAlign:"justify", color:"#878787"  }}  >{app.content}</Typography>
 </Box>


 <Box sx={{margin:"20px 0px"}} >
        <Link to="/uiux" style={{textDecoration:"none"}} ><Typography variant = "h2" sx={{fontSize:"16px", fontWeight:"550", color:"#878787", marginBottom:"5px"}} >{uiux.header}</Typography></Link>
        <Typography variant="body1" sx={{fontSize:"12px", fontWeight:"400",textAlign:"justify", color:"#878787"  }}  >{uiux.content}</Typography>
 </Box>

 <Box sx={{margin:"20px 0px"}} >
        <Link to="/dashboards" style={{textDecoration:"none"}} ><Typography variant = "h2" sx={{fontSize:"16px", fontWeight:"550", color:"#878787", marginBottom:"5px"}} >{dashboard.header}</Typography></Link>
        <Typography variant="body1" sx={{fontSize:"12px", fontWeight:"400",textAlign:"justify", color:"#878787"  }}  >{dashboard.content}</Typography>
 </Box>


 <Box sx={{margin:"20px 0px"}} >
        <Link to="/graphics" style={{textDecoration:"none"}} ><Typography variant = "h2" sx={{fontSize:"16px", fontWeight:"550", color:"#878787", marginBottom:"5px"}} >{graphicsdesigning.header}</Typography></Link>
        <Typography variant="body1" sx={{fontSize:"12px", fontWeight:"400",textAlign:"justify", color:"#878787"  }}  >{graphicsdesigning.content}</Typography>
 </Box>

 <Box sx={{margin:"20px 0px"}} >
        <Link to="/logos" style={{textDecoration:"none"}} ><Typography variant = "h2" sx={{fontSize:"16px", fontWeight:"550", color:"#878787", marginBottom:"5px"}} >{logodesigning.header}</Typography></Link>
        <Typography variant="body1" sx={{fontSize:"12px", fontWeight:"400",textAlign:"justify", color:"#878787"  }}  >{logodesigning.content}</Typography>
 </Box>

 <Box sx={{margin:"20px 0px"}} >
        <Link to="/digital" style={{textDecoration:"none"}} ><Typography variant = "h2" sx={{fontSize:"16px", fontWeight:"550", color:"#878787", marginBottom:"5px"}} >{digitalmarketing.header}</Typography></Link>
        <Typography variant="body1" sx={{fontSize:"12px", fontWeight:"400",textAlign:"justify", color:"#878787"  }}  >{digitalmarketing.content}</Typography>
 </Box>

 <Box sx={{margin:"20px 0px"}} >
        <Link to="/contentwriting" style={{textDecoration:"none"}} ><Typography variant = "h2" sx={{fontSize:"16px", fontWeight:"550", color:"#878787", marginBottom:"5px"}} >{ContentWriting.header}</Typography></Link>
        <Typography variant="body1" sx={{fontSize:"12px", fontWeight:"400",textAlign:"justify", color:"#878787"  }}  >{ContentWriting.content}</Typography>
 </Box>

 <Box sx={{margin:"20px 0px"}} >
        <Link to="/presentations" style={{textDecoration:"none"}} ><Typography variant = "h2" sx={{fontSize:"16px", fontWeight:"550", color:"#878787", marginBottom:"5px"}} >{presentation.header}</Typography></Link>
        <Typography variant="body1" sx={{fontSize:"12px", fontWeight:"400",textAlign:"justify", color:"#878787"  }}  >{presentation.content}</Typography>
 </Box>

 <Box sx={{margin:"20px 0px"}} >
        <Link to="/videoediting" style={{textDecoration:"none"}} ><Typography variant = "h2" sx={{fontSize:"16px", fontWeight:"550", color:"#878787", marginBottom:"5px"}} >{videoediting.header}</Typography></Link>
        <Typography variant="body1" sx={{fontSize:"12px", fontWeight:"400",textAlign:"justify", color:"#878787"  }}  >{videoediting.content}</Typography>
 </Box>

</Box>
</Container>
  )
}

export default Block17