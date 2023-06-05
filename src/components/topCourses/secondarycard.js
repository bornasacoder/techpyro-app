import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MenuIcon from '@mui/icons-material/Menu';
import{ Avatar} from '@material-ui/core';
import NetworkCellIcon from '@mui/icons-material/NetworkCell';
import FavoriteIcon from '@mui/icons-material/Favorite';
const useStyles = makeStyles({
    root:{
    },
  card: {
   
    backgroudColor: "#ce93d8",

  },
  blacked: {
    color: 'black',
  },
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',

  },
  three: {
    justifyContent: 'space-between',
     

  },
  button: {
     
    marginTop: " 8px",
    color: "#fff",
    backgroundColor: '#757ce8',
    '&:hover': {
      backgroundColor: 'green',
    },
    textAlign: "center",
  },
});
export default function SecondaryCard() {
    const classes = useStyles();

  return (
    
    <Card style={{backgroundColor: "#f3e5f5", height: 390, width: 300, zIndex:999}}  >
        <div className={classes.root}>
      <CardActions  className={classes.cardActions}>
      <Avatar className={classes.avatar} src="https://img.freepik.com/free-photo/how-is-your-deals-group-people-business-conference-modern-classroom-daytime_146671-16408.jpg?size=626&ext=jpg" />

      <Typography variant="body1">
        Author
      </Typography>
      </CardActions>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions  className={classes.three}>
         
        <Button  color="secondary" size="small">< NetworkCellIcon/>Advanced</Button>
        <Button  color="secondary" size="small"><MenuIcon/>Price</Button>
        <Button  color="secondary" size="small"><AccessTimeFilledIcon/>3 hours</Button>
         
      </CardActions>
      <div className={classes.div}>
      <Button variant="outlined" color='secondary' size="large"className={classes.button}>
        <Typography variant='h6'>
          PREVIEW THIS COURSE
          </Typography>
        </Button>
        </div>
      <Divider />
      <CardActions  className={classes.three}>
        <Button  color="secondary" size="small"><FavoriteIcon/>Add to Wishlist</Button>
        <Button  color="secondary" size="small"><AttachMoneyIcon/>Price</Button>
      </CardActions>
      </div>
    </Card>
  );
}