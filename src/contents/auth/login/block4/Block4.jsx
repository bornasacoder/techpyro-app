import { Box, Button, TextField ,useTheme,Zoom} from '@mui/material'
import { useFormik} from 'formik'
import { useSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { authenticateLogin} from '../../../../redux/apiCalls';


const schema = Yup.object({
  email: Yup.string().email().required('please enter your email'),
  password: Yup.string().min(6).required("Please enter your password"),
})

export default function Block4({toggleAccountInitial,setToggleAccount,toggleAccount,previousPage,setPreviousPage}) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const {enqueueSnackbar} = useSnackbar();

  const [length, setLength] = useState('');

  const initialValues = {
    username: "",
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
      
    },
  });

  

  const lengthCheck = (e)=>{
    setLength(e.target.value.length);
  }

  const handleEmail = (e)=>{
    setPreviousPage([...previousPage, toggleAccount]);
    setToggleAccount(toggleAccountInitial.email);
  }
  const handleClick = async()=>{
    const res = await authenticateLogin(dispatch,values);
    if(res.data?res.data.status==='SUCCESS':false){
      enqueueSnackbar('You have Successfully logged in', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
        });
    }
    else{
      enqueueSnackbar(`${res.response.data.message ==="Incorrect Password"? 'Invalid Credential': res.response.data.message}`, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
        });
    }
  }

  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
        <form>
            <Box sx={{display:'inline-block'}}>
          <label style={{fontSize:'18px',}} htmlFor="number" className="input-label">
                      Email
            </label>
          <Box sx={{width:'100%',display:'flex',gap:'5px',fontSize:'18px',alignItems:'center',borderBottom:`1px solid ${theme.colors.alpha.black[30]}`,height:'40px'}}>
            <div style={{display:'input-block',}}>
                    
            <TextField required sx={{"& fieldset": { border: 'none' }, '& .MuiInputBase-input': {
              paddingLeft: "5px",fontSize:'18px',letterSpacing:'1px',width:'335px',
               }}} type="email"
               autoComplete="off"
               name="username"
               id="email"
               placeholder="Enter Your Email"
               value={values.email}
               onChange={handleChange}
               onBlur={handleBlur} />
              </div>
                  
          </Box>
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
              onInput={lengthCheck}
              onBlur={handleBlur}/>
          </div>
          {errors.password && touched.password ? (
                      <p style={{color:`${theme.colors.warning.main}`}} className="form-error">{errors.password}</p>
                    ) : null}
            <Button sx={{marginTop:'5px',width:'100%'}} variant='contained' onClick={handleClick}  onSubmit={handleSubmit}>Continue</Button>
            <Link to={'#'} style={{textDecoration:'none',marginLeft:'240px',fontSize:'14px'}}>Forget password?</Link>

          {touched.email && errors.email ? (
                      <p style={{color:`${theme.colors.warning.main}`}} className="form-error">{errors.email}</p>
                    ) : null}
          </Box>
            </form>
          <Button type='text' onClick={handleEmail} sx={{width:'100%',margin:'10px 0',fontSize:'15px',color:`${theme.colors.alpha.white[100]}`,"&:hover":{color:`${theme.colors.success.dark}`},background:'#FFA500',cursor:{md:'pointer',xs:'none'},boxShadow:'0 2px 4px 0 rgb(0 0 0/ 20%)',borderRadius:'4px'}}>Login Email and OTP</Button>
    </div>
  )
}
