import { Google } from '@mui/icons-material'
import { Avatar, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useFormik } from 'formik'
import React from 'react'
import { signUpSchema } from '../../schema'
const initialValues = {
    name:"",
    lastname:"",
    email:"",
    number:"",
    password:"",
    Confirm_password:"",
    message:"",
  }
const Signup = ({opener,setOpener,setSignupopen,signupopen}) => {
    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values , action)=>{
      console.log(values);
      console.log(errors);
      action.resetForm();
        }
      
      });
      const handleClick = ()=>{
        setSignupopen(false);
   setOpener(true)
      }
  return (
    <>
    <form noValidate autoComplete='off' onSubmit={handleSubmit} sx={{maxWidth:"80vw",}}>
      <Card sx={{ maxWidth:"100%"}}>
      <Box sx={{display:"flex",justifyContent:"center"}}>
            <Avatar src="/images/category/logo.png" sx={{textAlign:"center",height:"80px",width:"80px"}}/>
            </Box>
        <CardContent>
            <Typography variant='h3' gutterBottom sx={{display:"flex",justifyContent:"center",paddingBottom:"10px",color:"#0C487C"}}>Signup</Typography>
<Grid container spacing={3} sx={{"& .MuiInputoutlined-input": {
            // marginBottom:"70px",
            fontSize: "20px",
            paddingLeft: "30px",
          },}}>
   
    <Grid xs={12}  item>
<TextField type="email" name="email" label="Email Id"  value={values.email} onChange={handleChange} onBlur={handleBlur}    placeholder='Enter your Email id' variant='outlined' fullWidth required/>
{touched.email && errors.email ? (<Typography component="p" sx={{color:"red"}}>{errors.email}</Typography>) : null}
    </Grid>
   
    <Grid xs={12}  item>
<TextField type="password"  name="password" label="Password" value={values.password} onChange={handleChange} onBlur={handleBlur}   placeholder='Enter your Password' variant='outlined' fullWidth required/>
{touched.password && errors.password ? (<Typography component="p" sx={{color:"red"}}>{errors.password}</Typography>) : null}
    </Grid>
    <Grid xs={12}  item>
<TextField type="password" name="Confirm_password" label="Conform Password" value={values.Confirm_password} onChange={handleChange} onBlur={handleBlur}   placeholder='Enter your Mobile Number' variant='outlined' fullWidth required/>
{touched.Confirm_password && errors.Confirm_password ? (<Typography component="p" sx={{color:"red"}}>{errors.Confirm_password}</Typography>) : null}
    </Grid>
   
    <Grid xs={12}  item>
<Button type='submit' variant='contained' fullWidth sx={{background:"#0C487C","&:hover":{
                    background:"#0C487C",
                 }}}>Submit</Button>
<br/>
<Typography sx={{display:"flex",alignItems:"center",justifyContent:"center",paddingY:"10px"}}>Already have account? <Typography component="span"  sx={{cursor:"pointer",color:"#0C487C"}} onClick={handleClick}>Signin</Typography></Typography>
    </Grid>
</Grid>
<br/>
<Box sx={{display:"flex",justifyContent:"center",width:'100%'}}>
    <Button
    startIcon={<Google/>}
    variant ="contained"
    sx={{background:"#0C487C","&:hover":{
        background:"#0C487C",
     }}}
    >Sign Up With google</Button>
</Box>
        </CardContent>
      </Card>
    </form>
    </>
  )
}

export default Signup;