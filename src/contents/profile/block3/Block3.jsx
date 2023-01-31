import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography,useTheme } from '@mui/material'
import React,{useState} from 'react'

export default function Block3() {
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
        <Typography sx={{fontWeight:500,fontSize:'18px'}}>Personal Details</Typography>
        <Button sx={{"&:hover":{background:'none'}}} variant='text' onClick={handleClickOpen}>Add</Button>
        <Dialog open={open} onClose={handleClose} >
                    <DialogTitle>Update Personal Details</DialogTitle>
                    <DialogContent>
                        <Box sx={{width:'250px',display:'flex',flexDirection:'column',gap:'20px',marginBottom:'20px'}}>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">--- Select Your Gender ---</FormLabel>
                                <RadioGroup
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  defaultValue="male"
                                  name="radio-buttons-group"
                                >
                                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
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
            <Typography sx={{width:{md:'130px',sm:'100px',xs:'100%'}}} variant='span'>Gender</Typography>
            <Box sx={{width:{md:'calc(100% - 130px)',sm:'calc(100% - 100px)',xs:'100%'},height:{md:'40px',sm:'35px',xs:'32px'},padding:'5px 10px',border:`1px solid ${theme.colors.alpha.black[30]}`,borderRadius:'5px'}}></Box>
        </Box>
    </Box>
</Box>
  )
}
