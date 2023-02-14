
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SwiggySlider from './MySecondCarousel/SwiggySlider';
import { Button } from '@material-ui/core';
import {   createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  heading: {
    fontWeight: 'bold',
    color:"grey",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.h3.fontSize,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h1.fontSize,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.h1.fontSize,
    },
  },
}));
const sliderData = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
      title: "The best Restaurant",
      description:
        "Et recusandae nihil et perferendis dolor ab totam eveniet aut quod accusamus aut officia aperiam aut explicabo ipsum! Sit aperiam aspernatur cum libero veritatis cum magnam itaque vel enim consequatur non porro aliquam a maiores ipsum. Hic odio quaerat et rerum deserunt hic consequuntur vitae et placeat doloribus aut magnam possimus.",
      author: "Van Chuan",
      date: "12/22/20",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      title: "It was Delicious",
      description:
        "Et recusandae nihil et perferendis dolor ab totam eveniet aut quod accusamus aut officia aperiam aut explicabo ipsum! Sit aperiam aspernatur cum libero veritatis cum magnam itaque vel enim consequatur non porro aliquam a maiores ipsum. Hic odio quaerat et rerum deserunt hic consequuntur vitae et placeat doloribus aut magnam possimus.",
      author: "Chek Mary",
      date: "12/22/20",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg",
      title: "I am Delighted",
      description:
        "Et recusandae nihil et perferendis dolor ab totam eveniet aut quod accusamus aut officia aperiam aut explicabo ipsum! Sit aperiam aspernatur cum libero veritatis cum magnam itaque vel enim consequatur non porro aliquam a maiores ipsum. Hic odio quaerat et rerum deserunt hic consequuntur vitae et placeat doloribus aut magnam possimus.",
      author: " Hurry Lama",
      date: "12/22/20",
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/2108843/pexels-photo-2108843.jpeg",
      title: "I will visit again",
      description:
        "Et recusandae nihil et perferendis dolor ab totam eveniet aut quod accusamus aut officia aperiam aut explicabo ipsum! Sit aperiam aspernatur cum libero veritatis cum magnam itaque vel enim consequatur non porro aliquam a maiores ipsum. Hic odio quaerat et rerum deserunt hic consequuntur vitae et placeat doloribus aut magnam possimus.",
      author: " Smith Curry",
      date: "12/22/20",
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
      title: "The Restaurant",
      description:
        "Et recusandae nihil et perferendis dolor ab totam eveniet aut quod accusamus aut officia aperiam aut explicabo ipsum! Sit aperiam aspernatur cum libero veritatis cum magnam itaque vel enim consequatur non porro aliquam a maiores ipsum. Hic odio quaerat et rerum deserunt hic consequuntur vitae et placeat doloribus aut magnam possimus.",
      author: "Van Chuan",
      date: "12/22/20",
    },
  ];
  const theme = createTheme();
  const responsiveTheme = responsiveFontSizes(theme);
export default function DifferentShapeComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.heading}>
      Students, Parents & Experts Love Us!
      </Typography>
    <div  > <SwiggySlider sliderData={sliderData} /></div>
    
    </div>
  );
}
