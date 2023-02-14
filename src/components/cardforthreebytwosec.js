import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CardFORTHEEBYTWO() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' , margin: "0.78125vw", marginLeft:"15px"}}>
      <CardMedia
        component="img"
        sx={{ width: 120 }}
        image="https://static-cf.toppr.com/marketing/6c448a3/images/home/Award.svg"
        alt="Live from space album cover"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography component="div" variant="h6" sx={{
          [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '1rem'
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: '1.4rem'
          }
        }}>
          Best Tech in Education
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div" sx={{
          [theme.breakpoints.down('sm')]: {
            fontSize: '0.6rem'
          },
          [theme.breakpoints.up('md')]: {
            fontSize: '0.6rem'
          },
          [theme.breakpoints.up('lg')]: {
            fontSize: '0.8rem'
          }
        }}>
          IAMAI India Digital Awards 2019
        </Typography>
      </CardContent>
    </Card>
  );
}

