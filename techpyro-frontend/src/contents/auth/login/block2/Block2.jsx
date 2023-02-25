import { Box, Button, TextField ,useTheme,Zoom} from '@mui/material'
import { useFormik} from 'formik'
import { useSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { authenticateLogin} from '../../../../redux/apiCalls';

const schema = Yup.object({
  number: Yup.number().min(1000000000).required('please enter your mobile number'),
  password: Yup.string().min(6).required("Please enter your password"),
})

export default function Block2({toggleAccountInitial,setToggleAccount,toggleAccount,previousPage,setPreviousPage}) {

  const theme = useTheme();
    const [count, setCount] = useState('');
    const [length, setLength] = useState('');
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar();

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

    const maxLengthCheck = (e)=>{
      setCount(e.target.value.length);
    }
    const lengthCheck = (e)=>{
      setLength(e.target.value.length);
      console.log(length);
    }
      const handleMobileANDotpPage = ()=>{
        setPreviousPage([...previousPage, toggleAccount]);
        setToggleAccount(toggleAccountInitial.number);
      }
      const handleClick = async ()=>{
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
    <>
        <form style={{}}>
        <Box sx={{display:`block`}}>
          <label style={{fontSize:'18px',}} htmlFor="number" className="input-label">
                      Mobile Number
            </label>
          <Box sx={{width:'100%',display:'flex',gap:'5px',fontSize:'18px',alignItems:'center',borderBottom:`1px solid ${theme.colors.alpha.black[30]}`,height:'40px'}}>
            <Box sx={{display:'flex',fontSize:'16px',}}>+91</Box>
            <Box sx={{width:'1px',height:'17px',borderRight:`1px solid ${theme.colors.alpha.black[30]}`}}></Box>
            <div style={{display:'input-block',}}>
                    
            <TextField required sx={{"& fieldset": { border: 'none' }, '& .MuiInputBase-input': {
              paddingLeft: "5px",fontSize:'17px',letterSpacing:'0.5px',width:'300px',
               }}} type="number"
               autoComplete="off"
                name="username"
                id="number"
                maxLength='10'
                placeholder="Enter Your Mobile Number"
                 value={values.number}
                 onChange={handleChange}
                 onBlur={handleBlur} 
                 onInput={maxLengthCheck}/>
              </div>
                  
          </Box>
          {touched.number && errors.number ? (
                      <p style={{color:`${theme.colors.warning.main}`}} className="form-error">{errors.number}</p>
                    ) : null}
          </Box>
          <div style={{display:'input-block',borderBottom:`1px solid ${theme.colors.alpha.black[30]}`,margin:'10px 0'}}>
          <label style={{fontSize:'17px'}}  htmlFor="password" className="input-label">
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
            <Button sx={{marginTop:'5px',width:'100%', ":disabled":{background:`${theme.colors.alpha.black[10]}`},boxShadow:'0 2px 4px 0 rgb(0 0 0/ 15%)'}} variant='contained' disabled={`${count}`==='10'&&(`${length}`>='6' )?false:true} onClick={handleClick} onSubmit={handleSubmit}>Continue</Button>
            <Link to={'#'} style={{textDecoration:'none',marginLeft:'240px',fontSize:'14px'}}>Forget password?</Link>
            </form>
            <Button type='text' onClick={handleMobileANDotpPage} sx={{width:'100%',margin:'20px 0 10px 0',borderRadius:'4px',fontSize:'15px',color:`${theme.colors.alpha.white[100]}`,"&:hover":{color:`${theme.colors.success.dark}`},background:'#FFA500',cursor:{md:'pointer',xs:'none'},boxShadow:'0 2px 4px 0 rgb(0 0 0/ 20%)'}}>Login Phone and OTP</Button>

    </>
  )
}
