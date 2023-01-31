import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography,useTheme } from '@mui/material'
import React,{useState} from 'react'

export default function Block2() {
    const theme = useTheme();

    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    setOpen(false);
  };
  return (
    <Box>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Typography sx={{fontWeight:500,fontSize:'18px'}}>Contact Details</Typography>
                <Button sx={{"&:hover":{background:'none'}}} variant='text' onClick={handleClickOpen}>Edit</Button>
                <Dialog open={open} onClose={handleClose} >
                    <DialogTitle>Update Contact Details</DialogTitle>
                    <DialogContent>
                        <Box sx={{width:'250px',display:'flex',flexDirection:'column',gap:'20px',marginBottom:'20px'}}>
                            <TextField defaultValue={'+91-9999999999'} margin="dense" id="number" label="Mobile Number" type="number" fullWidth variant="standard"/>
                            <TextField defaultValue={'ecvhvshfvwvbfbwfu@gamil.com'} margin="dense" id="email" label="Email" type="email" fullWidth variant="standard"/>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleSave}>Save</Button>
                    </DialogActions>
                </Dialog>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:'20px',padding:'20px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px',color:`${theme.colors.alpha.black[50]}`}}>
                <Box sx={{display:'flex',alignItems:{sm:'center',xs:'flex-start'},flexDirection:{sm:'row',xs:'column'},gap:{sm:'0',xs:'5px'}}} >
                    <Typography sx={{width:{md:'130px',sm:'100px',xs:'100%'}}} variant='span'>Mobile Number</Typography>
                    <Box sx={{width:{md:'calc(100% - 130px)',sm:'calc(100% - 100px)',xs:'100%'},height:{md:'40px',sm:'35px',xs:'32px'},padding:'5px 10px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px'}}>+91-999999999</Box>
                </Box>
                <Box sx={{display:'flex',alignItems:{sm:'center',xs:'flex-start'},flexDirection:{sm:'row',xs:'column'},gap:{sm:'0',xs:'5px'}}}>
                    <Typography sx={{width:{md:'130px',sm:'100px',xs:'100%'}}} variant='span'>Email</Typography>
                    <Box sx={{width:{md:'calc(100% - 130px)',sm:'calc(100% - 100px)',xs:'100%'},height:{md:'40px',sm:'35px',xs:'32px'},padding:'5px 10px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px',textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>ecvhvshfvwvbfbwfu@gamil.com</Box>
                </Box>
            </Box>
        </Box>
  )
}
