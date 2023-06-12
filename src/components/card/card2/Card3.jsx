import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import { Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';



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
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function Card3({posterLink}) {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  
  return (
    
    <Box sx={{display:'flex' , margin:'8px'}} >
    <Card sx={{ width:'300px',height:'400px',"&:hover":{transform:'scale(1.05)'}}}>
      
      <CardMedia
        component="img"
        height="194"
        // image={posterLink.url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{color:'black',fontWeight:'600',display:'flex',justifyContent:'center'}}>
           {posterLink.name}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" sx={{color:'black',fontWeight:'500',display:'flex',justifyContent:'center'}}>
           {posterLink.price}
        </Typography>
      </CardContent>
      <Divider sx={{backgroundColor:'#8777',height:'1px'}}/>
      
      <p>Description:Lorem ipsum dolor sit.</p>
      <CardActions disableSpacing sx={{height:'0%' , display:'flex',justifyContent:'space-between'}} >
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{color:'red'}}/>
        </IconButton> */}
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
        <Button sx={{height:'28px',width:'39%',backgroundColor:'black',color:'white',"&:hover":{backgroundColor:'orange'}}}>
          Buy now
        </Button>
        <IconButton aria-label="share" >
          <ShareIcon  sx={{color:'grey'}}/>
        </IconButton>

      </CardActions>
      
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
    
    </Box>
  );
}