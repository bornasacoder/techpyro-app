import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar, Button, Card, Grid,  } from '@mui/material';
import PropTypes from 'prop-types';
import { pizzaPhotoes } from '../../constants/slider/pizzaPhotoes';
import { pizzaReview } from '../../constants/slider/pizzaReview';
import { Message, Share, Star,  ThumbUpOutlined } from '@mui/icons-material';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Block2({productDetail}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',padding:{md:"20px 58px",sm:"20px 20px",xs:"20px 20px" }}}>
      <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Reviews" {...a11yProps(0)}  />
          <Tab label="Photos" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
      <Typography sx={{fontSize:"1.6rem"}}>{productDetail.length!==0 && productDetail[0].tagline} Riviews </Typography>
       <br/>
       {pizzaReview.map((data) => (
        <Box sx={{borderBottom:"1px solid #CCCCCC",marginBottom:"20px",display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
       <Box >
          <Box sx={{display:"flex",gap:"10px"}}>
<Avatar src={data.image} sx={{height:"50px",width:"50px"}}/>
<Box>
<Typography sx={{fontSize:"1.3rem"}}>{data.user}</Typography>
<Box sx={{display:"flex",gap:'40px',color:"#CCCCCC"}}>
<Typography >{data.reviews} reviews  </Typography>
<Typography>{data.followers} followers</Typography>
</Box>
</Box>
</Box>
<Box sx={{display:"flex",gap:"10px",alignItems:"center",marginY:"10px"}}>
    <Box  sx={{background:"green",color:"#fff",fontSize:"10px",padding:"2px 2px",display:"flex",gap:"4px",alignItems:"center",borderRadius:"2px"}}>{data.rate}
    <Star sx={{fontSize:"10px"}}/></Box>
    <Typography >DELIVERY</Typography>
    <Typography sx={{color:"#CCCCCC"}}>5 hours ago</Typography>
</Box>
<Typography sx={{color:"#CCCCCC",marginY:"10px",fontSize:"16px"}}>0 Votes for helpful, 0 Comments</Typography>
<Box sx={{display:"flex",gap:"20px",marginBottom:"30px"}}>
    <Button sx={{background:"#F2F5F9",color:"#CCCCCC",padding:"2px 5px",borderRadius:"5px",fontWeight:"200","&:hover":{
        background:"#FAFAFA"
    }}} startIcon={<ThumbUpOutlined/>}>
        Helpful
    </Button>
    <Button sx={{background:"#F2F5F9",color:"#CCCCCC",padding:"2px 5px",borderRadius:"5px",fontWeight:"200","&:hover":{
        background:"#FAFAFA"
    }}} startIcon={<Message/>}>
       Comments
    </Button>
    <Button sx={{background:"#F2F5F9",color:"#CCCCCC",padding:"2px 5px",borderRadius:"5px",fontWeight:"200","&:hover":{
        background:"#FAFAFA"
    }}} startIcon={<Share/>}>
        Share
    </Button>
</Box>
       </Box>
   <Box>
    <Button sx={{color:"red",fontWeight:"200",background:"#F2F5F9",border:"0.5px solid red",padding:"6px 15px"}}>Follow</Button>
    </Box>    
       </Box>
          ))}     
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Typography sx={{fontSize:"1.6rem"}}>{productDetail.length!==0 && productDetail[0].tagline} Photos </Typography>
       <br/>
       <Box sx={{display:"flex",gap:"20px"}}>
        <Button sx={{background:"#FFFFFF",color:"#000",borderRadius:"5px",fontWeight:"200",padding:"4px 4px","&:hover":{
            background:"red",color:"#fff"
        }}}>All(46)</Button>
        <Button sx={{background:"#FFFFFF",color:"#000",borderRadius:"5px",fontWeight:"200",padding:"4px 4px","&:hover":{
            background:"red",color:"#fff"
        }}}>Food(46)</Button>
       </Box>
       <br/>
       <Box sx={{display:"flex",flexWrap:"wrap",width:"100%",gap:"20px",borderRadius:"auto" }} >

         <Grid container columnSpacing={2} rowSpacing={2}>
      {pizzaPhotoes.map((item) => (
          <Grid md={2.4} sm={4} xs={12} item  sx={{"&:hover":{
            transition: "all .3s ease-in-out"
          }}} >
          <Avatar src={item.image} alt='gallary ' sx={{width:"100%",height:"100%",borderRadius:"5px",}}/>
    </Grid>
          ))}
          </Grid>
          </Box>
      </TabPanel>
    </Box>
  );
}