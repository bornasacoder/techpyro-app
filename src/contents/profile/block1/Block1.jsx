import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography,useTheme } from '@mui/material'
import React,{useState} from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/userRedux';

export default function Block1() {
    const theme = useTheme();
    const user = useSelector(selectUser)

    const [open, setOpen] = useState(null);
    const [name, setName] = useState(user.currentUser.data.name?user.currentUser.data.name:"TechPyro User");
    // const [lastName, setLastName] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
    setOpen(false);
  };

  const [value, setValue] = useState(dayjs('dd-mm-yyyy'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
        <Box >
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Typography sx={{fontWeight:500,fontSize:'18px'}}>Basic Details</Typography>
                <Button sx={{"&:hover":{background:'none'}}} variant='text' onClick={handleClickOpen}>Edit</Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Update Basic Details</DialogTitle>
                    <DialogContent>
                            <TextField onChange={handleSave} defaultValue={name} margin="dense" id="name" label="Name" type="name" fullWidth variant="standard"/>
                            {/* <TextField onChange={(e)=>{setLastName(e.target.value)}} defaultValue={lastName} margin="dense" id="name" label="Last Name" type="name" fullWidth variant="standard"/> */}
                     
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker label="Date Of Birth" inputFormat="DD/MM/YYYY" value={value} onChange={handleChange} renderInput={(params) => <TextField sx={{width:'100%'}} {...params} variant='standard'/>}/>                      
                        </LocalizationProvider>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleSave}>Save</Button>
                    </DialogActions>
                </Dialog>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:'20px',padding:'20px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px',color:`${theme.colors.alpha.black[50]}`}}>
                <Box sx={{display:'flex',alignItems:{sm:'center',xs:'flex-start'},flexDirection:{sm:'row',xs:'column'},gap:{sm:'0',xs:'5px'}}} >
                    <Typography sx={{width:{md:'130px',sm:'100px',xs:'100%'},color:`${theme.colors.alpha.black[100]}`}} variant='span'>Name</Typography>
                    <Box sx={{width:{md:'calc(100% - 130px)',sm:'calc(100% - 100px)',xs:'100%'},height:{md:'40px',sm:'35px',xs:'32px'},padding:'5px 10px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px'}}>{name}</Box>
                </Box>
                {/* <Box sx={{display:'flex',alignItems:{sm:'center',xs:'flex-start'},flexDirection:{sm:'row',xs:'column'},gap:{sm:'0',xs:'5px'}}}>
                    <Typography sx={{width:{md:'130px',sm:'100px',xs:'100%'},}} variant='span'>Last Name</Typography>
                    <Box sx={{width:{md:'calc(100% - 130px)',sm:'calc(100% - 100px)',xs:'100%'},height:{md:'40px',sm:'35px',xs:'32px'},padding:'5px 10px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px'}}>{lastName}</Box>
                </Box> */}
                <Box sx={{display:'flex',alignItems:{sm:'center',xs:'flex-start'},flexDirection:{sm:'row',xs:'column'},gap:{sm:'0',xs:'5px'}}}>
                    <Typography sx={{width:{md:'130px',sm:'100px',xs:'100%'},color:`${theme.colors.alpha.black[100]}`}} variant='span'>Date Of Birth</Typography>
                    <Box sx={{width:{md:'calc(100% - 130px)',sm:'calc(100% - 100px)',xs:'100%'},height:{md:'40px',sm:'35px',xs:'32px'},padding:'5px 10px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px'}}>dd-mm-yyyy</Box>
                </Box>
            </Box>
        </Box>
  )
}
