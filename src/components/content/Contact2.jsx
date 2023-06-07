import { Google } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'
import { signUpSchema } from '../../schemas'
// import { signUpSchema } from '../schemas'
 const initialValues = {
    name:"",
    email:"",
    text:"",
    password:"",
    Confirm_password:"",
    message:"",
 }
const Contact2 = () => {
    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
       initialValues:initialValues,
       validationSchema:signUpSchema,
       onSubmit:(values , action)=>{
console.log(values);
console.log(errors);
action.resetForm();
       }
     
    });
   
  return (
    <Box style={{padding:{md:"58px 58px",sm:"58px 20px",xs:"58px 20px"}}} >
        
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
      <Card sx={{ maxWidth:{md:"60vw",sm:"70vw",xs:"100vw"},margin:"0 auto ",padding:"20px 5px",boxShadow:"none",borderRadius:"0px",backgroundColor:"transparent"}}>
      <Typography variant='h3' sx={{ display:"flex",justifyContent:"center",textAlign:"center"}}>Fill the form below so we can get to know you and your needs better.</Typography>
        <CardContent>
           
<Grid container spacing={3} sx={{"& .MuiInputoutlined-input": {
            // marginBottom:"70px",
            fontSize: "20px",
            paddingLeft: "30px",
          },}}>
    <Grid xs={12} item >
<TextField label="Name" name="name"  value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder='Enter your first name' variant='outlined' fullWidth required />
{touched.name && errors.name ? (<Typography component="p" color="red">{errors.name}</Typography>) : null}
    </Grid>
    <Grid xs={12}  item>
<TextField type="email" name="email" label="Email"  value={values.email} onChange={handleChange} onBlur={handleBlur}    placeholder='Enter your Email id' variant='outlined' fullWidth required/>
{touched.email && errors.email ? (<Typography component="p" color="red">{errors.email}</Typography>) : null}
    </Grid>
    <Grid xs={12}  item>
<TextField type="text"  name="text" label="Subject" value={values.text} onChange={handleChange} onBlur={handleBlur}  placeholder='Enter subject' variant='outlined' fullWidth required/>
{touched.text && errors.text ? (<Typography component="p" color="red">{errors.number}</Typography>) : null}
    </Grid>
   
    <Grid xs={12}  item>
<TextField type="message" name="message" label="Message" value={values.message} onChange={handleChange} onBlur={handleBlur}  multiline rows={6}  placeholder='Enter Massage here' variant='outlined' fullWidth required/>
{touched.message && errors.message ? (<Typography component="p" color="red">{errors.message}</Typography>) : null}
    </Grid>
    <Grid xs={12}  item sx={{display:"flex",justifyContent:"center"}}>
<Button type='submit' variant='contained'  sx={{padding:"10px 40px",backgroundColor:"#FFB606","&:hover":{
    backgroundColor:"#E6A303"
}}} >Submit</Button>
    </Grid>

</Grid>
        </CardContent>
      </Card>
    </form>
    </Box>
  )
}

export default Contact2
