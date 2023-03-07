import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, TextField, InputAdornment, IconButton, Button, MenuItem, Typography } from '@material-ui/core';
import { Search as SearchIcon, LocationOn as LocationOnIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    border: "1px solid black",
    margin: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TravelSearch = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="center">
        <Grid item  xs={12} sm={6} md={4} lg={2}>
          <Paper className={classes.paper}>
            <LocationOnIcon /> <Typography>Find Your Holidays</Typography>
          </Paper>
        </Grid>
        <Grid item  xs={12} sm={6} md={4} lg={2}>
          <TextField
            label="Destination"
            fullWidth
            variant="outlined"
            select
            className={classes.formControl}
          >
            <MenuItem value="new-york">New York</MenuItem>
            <MenuItem value="los-angeles">Los Angeles</MenuItem>
            <MenuItem value="chicago">Chicago</MenuItem>
          </TextField>
        </Grid>
        <Grid item  xs={12} sm={6} md={4} lg={2}>
          <TextField
            label="Date"
            fullWidth
            variant="outlined"
            type="date"
            defaultValue="2023-03-01"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item  xs={12} sm={6} md={4} lg={2}>
          <TextField
            label="Travel Type"
            fullWidth
            variant="outlined"
            select
            className={classes.formControl}
          >
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="leisure">Leisure</MenuItem>
          </TextField>
        </Grid>
        <Grid item  xs={12} sm={6} md={4} lg={2}>
          <TextField
            label="Tour Destination"
            fullWidth
            variant="outlined"
            select
            className={classes.formControl}
          >
            <MenuItem value="city-tour">City Tour</MenuItem>
            <MenuItem value="museum-tour">Museum Tour</MenuItem>
            <MenuItem value="beach-tour">Beach Tour</MenuItem>
          </TextField>
        </Grid>
        <Grid item  xs={12} sm={6} md={4} lg={2}>
          <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default TravelSearch;
