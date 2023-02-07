import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import  Typography  from '@material-ui/core/Typography';
import PrimaryCard from './primarycard';
import SecondaryCard from './secondarycard';
// import { useState } from 'react';
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    maxWidth: "100%",
    overflowx: 'hidden', /* Hide horizontal scrollbar */


    backgroundColor: "lightgrey"
  },
  heading: {
    margin: "50px"
  },
  container: {
    "@media (max-width: 600px)":{
      marginLeft: "30px"
   }
  },
  item: {
    margin:"-5px",
    marginLeft:"3px"
  },
}));

const TopCourses = () => {
  const classes = useStyles();
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (<>
    <div className={classes.heading}>
    <Typography variant="h3">TOP COURSES</Typography>
    </div>
    <div className={classes.root}>
       
      <Grid className={classes.container} container spacing={3}>
        {Array.from({ length: 12 }, (_, i) => (
          <Grid
          item
          xs={12}
          sm={6}
          md={3}
          xl={3}
            className={classes.item}
            key={i}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            {hoverIndex === i ? (
              <SecondaryCard />
            ) : (
              <PrimaryCard />
            )}
          </Grid>
        ))}
      </Grid>
    </div></>
  );
};

export default TopCourses;
