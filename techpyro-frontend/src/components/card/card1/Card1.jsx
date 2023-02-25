import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));
const MainCard = styled(Box)({
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-evenly",
    gap:"10px",
    
})
export default function Card1(props) {
//   const [expanded, setExpanded] = React.useState(false);
  console.log(props)

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

  return (
    
    <MainCard>
    { props.sliderData.map((item)=>( 
        <Card sx={{ maxWidth: 300, marginTop:"70px" }}>
        <CardHeader
    
    title={item.shopname}
    subheader="September 14, 2016"
    />
      <CardMedia
      component="img"
      height="194"
      image={item.image}
      alt="Paella dish"
      />
      <CardContent sx={{display: "flex", justifyContent:"center", alignItems:"center"}}>
       <b> Category: </b> 
          {item.category.map((cat)=>(
              <Typography variant="subtitle" sx={{color:"green",padding:"2px 0px 0px 5px", fontSize:"12px"}} color="text.primary">
                  {cat},
        </Typography>
            ))}
      </CardContent>
      <Box sx={{display: "flex", paddingLeft:"16px",justifyContent:"flex-start",alignItems:"center", gap:"10px"}}>
        <Typography variant="body1" sx={{fontSize:"16px", fontWeight:"600", }}>Rating:</Typography>
        <Typography variant="body1" sx={{background:"green", color:"white", fontSize:"20px", fontWeight:"600", borderRadius:"10px", padding:"3px 5px"}}>{item.rating}</Typography>

      </Box>
        <Box sx={{paddingLeft:"16px"}}>
            <Typography variant='subtitle' sx={{fontStyle:"italic"}} >{item.tagline}</Typography>
        </Box>
        <CardContent sx={{display:"flex", justifyContent:"space-between"}}>
            <Typography variant="body1" sx={{fontSize:"20px", fontWeight:"600"}}>Price: </Typography>
            <Box>
            <Typography variant="body1" sx={{fontSize:"16px", fontWeight:"600", color:"red"}} >Mrp {item.price.mrp}</Typography>
            <Typography variant="body1" sx={{fontSize:"14px", fontWeight:"600", textDecoration:"line-through", color:"grey"}}>discount {item.price.discount}</Typography>
            
            <Typography variant="body1" sx={{fontSize:"18px", fontWeight:"600", color:"green", borderTop:"2px solid #EEEEEE"}} >Rs {item.price.cost}/- only</Typography>
            </Box>

        </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShoppingCart/>
        </IconButton>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
          <ExpandMoreIcon /> */}
        {/* </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
      {/* </Collapse> */}
    </Card>
            ))}
    </MainCard>
  );
}