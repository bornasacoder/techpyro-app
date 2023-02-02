import { Box, Button, Divider, TextField ,Typography,useTheme} from '@mui/material'
import { useFormik} from 'formik'
import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const schema = Yup.object({
  number: Yup.number().min(5).max(10).required('please enter your mobile number'),
  password: Yup.string().min(6).required("Please enter your password"),
})

export default function Block() {

  const theme = useTheme();
    const [show, setShow] = useState('block');
    const [hide, setHide] = useState('none');
    const [otp, setOtp] = useState('');

  const initialValues = {
    number: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
  useFormik({
    initialValues,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: false,
    //// By disabling validation onChange and onBlur formik will validate on submit.
    onSubmit: (values) => {
      console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
      //// to get rid of all the values after submitting the form
      
      console.log(show);
      console.log(hide);
    },
  });

  
    
    const handleChangeOtp = (otp)=>{
      setOtp(otp)
      console.log(otp);
    }
    const handlegetOtp = ()=>{
      console.log(parseInt(values.number).toString.length);
      
    }
    const handle = ()=>{
      setShow('none');
      setHide('block');
      
    }
    const handleChangeNumber = ()=>{
      setShow('block');
      setHide('none');
      setOtp('');
    }
  return (
    <>
      <Box sx={{display:'flex',flexDirection:'column',gap:'20px',padding:"20px",width:'350px',height:'500px',border:`1px solid ${theme.colors.alpha.black[30]}`,background:`${theme.colors.alpha.white[100]}`}}>
        <Box sx={{display:'flex',flexDirection:'column'}}>
          <Box sx={{fontSize:'16px',color:`${theme.colors.info.main}`,marginBottom:'10px'}}>Login with Mobile Number and OTP</Box>
          <form onSubmit={handleSubmit}>
          <Box sx={{display:`${show}`}}>
          <label style={{fontSize:'18px',}} htmlFor="number" className="input-label">
                      Mobile Number
            </label>
          <Box sx={{width:'310px',display:'flex',gap:'5px',fontSize:'18px',alignItems:'center',borderBottom:`1px solid ${theme.colors.alpha.black[30]}`,height:'40px'}}>
            <Box sx={{display:'flex',fontSize:'16px',}}>+91</Box>
            <Box sx={{width:'1px',height:'18px',borderRight:`1px solid ${theme.colors.alpha.black[30]}`}}></Box>
            <div style={{display:'input-block',}}>
                    
            <TextField required sx={{"& fieldset": { border: 'none' }, '& .MuiInputBase-input': {
              paddingLeft: "5px",fontSize:'18px',letterSpacing:'1px',width:'270px',
               }}} type="number"
               autoComplete="off"
                name="number"
                id="number"
                placeholder="Enter Your Mobile Number"
                 value={values.number}
                 onChange={handleChange}
                 onBlur={handleBlur} />
              </div>
                  
          </Box>
          {touched.number && errors.number ? (
                      <p style={{color:`${theme.colors.warning.main}`}} className="form-error">{errors.number}</p>
                    ) : null}
          </Box>
          </form>
          <Box  sx={{fontSize:'18px',display:`${hide}`,flexDirection:'column'}}>please enter the OTP sent to {values.number} <Button variant='outlined' onClick={handleChangeNumber}>Change Number</Button></Box>
          <Box sx={{width:'100%',margin:'20px 0',display:`${hide}`}}>
          <OtpInput
           containerStyle={{width:'100%',gap:'5px',justifyContent:'center'}}
           inputStyle={{fontSize:'18px',width:'40px',height:'35px',borderTop:'none',borderRight:'none',borderLeft:'none'}}
           focusStyle={{outline:'none'}}
             value={otp}
            onChange={handleChangeOtp}
            numInputs={6}
            separator={<span> </span>}
          />
          </Box>
          <Button sx={{display:`${show}`,marginTop:'15px'}} variant='contained' type='submit' onClick={handle}>Request for OTP</Button>
          <Button sx={{display:`${hide}`}} variant='contained' onClick={handlegetOtp}>Verify</Button>
          </Box>
          <Divider sx={{fontSize:'15px'}}/>
        <Box sx={{display:`${show}`,flexDirection:'column'}}>
          <Box sx={{color:`${theme.colors.info.main}`,marginBottom:'10px',fontSize:'18px'}}>Login with Password</Box>
          <form>
          {/* <label style={{fontSize:'18px'}} htmlFor="number" className="input-label">
                      Mobile Number
            </label>
          <Box sx={{width:'310px',display:'flex',gap:'5px',fontSize:'18px',alignItems:'center',borderBottom:`1px solid ${theme.colors.alpha.black[30]}`,height:'40px'}}>
            <Box sx={{display:'flex',fontSize:'16px',}}>+91</Box>
            <Box sx={{width:'1px',height:'18px',borderRight:`1px solid ${theme.colors.alpha.black[30]}`}}></Box>
            <div style={{display:'input-block',}}>
                    
            <TextField required sx={{"& fieldset": { border: 'none' }, '& .MuiInputBase-input': {
              paddingLeft: "5px",fontSize:'18px',letterSpacing:'1px',width:'270px',
               }}} type="number"
               autoComplete="off"
                name="number"
                id="number"
                onFocus={{outline:'none'}}
                placeholder="Enter Your Mobile Number"
                 value={values.number}
                 onChange={handleChange}
                 onBlur={handleBlur} />
              </div>
                  
          </Box>
          {touched.number && errors.number ? (
                      <p style={{color:`${theme.colors.warning.main}`}} className="form-error">{errors.number}</p>
                    ) : null} */}
          <div style={{display:'input-block',borderBottom:`1px solid ${theme.colors.alpha.black[30]}`,margin:'10px 0'}}>
          <label style={{fontSize:'18px'}}  htmlFor="password" className="input-label">
                      Password
                    </label>

                    <TextField required sx={{"& fieldset": { border: 'none' }, '& .MuiInputBase-input': {padding:'5px 20px',
              fontSize:'16px',width:'280px',letterSpacing:'1px'
              }}}  type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}/>
              
          </div>
          {errors.password && touched.password ? (
                      <p style={{color:`${theme.colors.warning.main}`}} className="form-error">{errors.password}</p>
                    ) : null}
            <Button sx={{marginTop:'5px'}} variant='contained' onSubmit={handleSubmit}>Continue with password</Button>
            </form>
        </Box>
        <Box sx={{fontSize:'18px',color:`${theme.colors.success.dark}`,cursor:{md:'pointer',xs:'none'}}}>Use Email to login</Box>
      <Box sx={{display:'flex',gap:'8px',fontSize:'16px',alignItems:'center'}}>
        <Typography>Create an account ?</Typography>
        <Link to={'/signup'} style={{textDecoration:'none'}}>Sign up</Link>
      </Box>
      </Box>
      
    </>
  )
}
