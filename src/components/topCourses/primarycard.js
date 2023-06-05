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
const useStyles = makeStyles({
  cardContent: {
    marginRight: '20px',
  },
  cardActions: {
    justifyContent: 'space-between',
  },
});
export default function PrimaryCard() {
    const classes = useStyles();

  return (
    <Card style={{backgroundColor: "#f3e5f5",height: 390, width: 300, zIndex: -1}}  >
      <CardMedia
        sx={{ height: 200 }}
        image="https://img.freepik.com/free-photo/front-view-children-playing-together-kindergarten_23-2148633303.jpg?size=626&ext=jpg"
        title="green iguana"
      />
      <CardContent className={classes.cardContent}>
        
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread  
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Lizard defined but never used
        </Typography>
      </CardContent>
      <Divider />
      <CardActions  className={classes.cardActions}>
        <Button color='secondary' size="small"><AccessTimeFilledIcon/>time</Button>
        <Button color='secondary' size="small"><AttachMoneyIcon/>Price</Button>
      </CardActions>
    </Card>
  );
}