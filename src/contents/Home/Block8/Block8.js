import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:"250px",
    width:"220px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius:"8%",
    marginLeft:"10px",

   "&:hover":{
    filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))"
   }

  }));

  
  

function Block8(props) {

  return (
    <div className='bg-[#FFF7ED] mt-[100px] md:h-[900px]'>
        <div className='flex flex-col justify-center w-[100%] items-center py-14'>
            <h1 className='md:text-5xl text-3xl font-bold text-center'>Top 10 Doctor of the month</h1>
            <p className='md:text-2xl text-lg text-gray-400'>Rating based on customer reviews</p>
        </div>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 1, md: 2 }} >
            {
                props.Block8_data.map((item) => (
                <Grid item xs={12} sm={6} md={12/5} sx={{display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:{xs:"center"}}}  >
                    <Item sx={{width:{xs:"300px"}}}>
                        <div><img src={item.image} alt=""  className='rounded-full w-20'/></div>
                        <div><h1 className='text-lg text-black font-semibold'>{item.name}</h1></div>
                        {/* <div><p className='text-gray-300 text-lg'>New York</p></div> */}
                        <div className='flex justify-between gap-1  px-[18px] rounded-2xl py-[7px] bg-slate-100'><p className=''>4.9</p><StarIcon className='text-orange-600'></StarIcon></div>
                        
                    </Item>
                </Grid>
            ))}
        </Grid>
        </Box>
        <div className='flex justify-center items-center mt-16 gap-5 md:flex-row flex-col'>
            <Button variant="contained" sx={{ backgroundColor:"white",color:"Black",borderRadius:"20px",width:{md:"170px",xs:"300px"},height:"50px",fontSize:"15px"}}>Show me more</Button>
            <Button variant="contained" sx={{borderRadius:"20px",width:{md:"170px",xs:"300px"},height:"50px",fontSize:"15px"}}>Become a host</Button>
      </div>
    </div>
  )
}

export default Block8
