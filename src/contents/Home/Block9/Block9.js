import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:"150px",
    position:"relative",
    width:{md:"280px",xs:"330px"},
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius:"24px 24px",
    marginLeft:"12px",
   "&:hover":{
    filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))"
   }

  }));


function Block9(props) {
  return (
    <div className='md:mt-[100px] mt-20px]'>
        <div className='flex flex-col justify-center w-[100%] items-center py-14'>
            <h1 className='md:text-5xl text-3xl  font-bold'>Explore nearby</h1>
            <p className='md:text-2xl text-lg text-center text-gray-400  font-normal'>Discover great places near where you live</p>
        </div>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 1, md: 2 }} >
            {
                props.Block9_data.map((item) => (
                <Grid item xs={12} sm={6} md={3} sx={{display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:{xs:"center"}}}   >
                    <Item >
                        <div><img src={item.image} alt=""  className='rounded-full w-28 h-28'/></div>
                        <div className='flex flex-col justify-start items-start p-1'>
                            <h1 className='text-lg text-black font-normal'>{item.heading}</h1>
                            <p className='text-base text-gray-500'>19 minutes drive</p>
                        </div>
                        <div className='bg-gray-300 text-black text-sm rounded-xl px-2  absolute top-1 right-2'>{item.number}</div>
                    </Item>
                </Grid>
            ))}
        </Grid>
        </Box>
    </div>
  )
}

export default Block9
