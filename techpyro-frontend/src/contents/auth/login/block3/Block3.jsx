import { Box, Button, TextField ,useTheme,Zoom} from '@mui/material'
import { useFormik} from 'formik'
import { useSnackbar } from 'notistack';
import React from 'react'
import * as Yup from 'yup';
import { sentOtpLogin } from '../../../../redux/apiCalls';


const schema = Yup.object({
  email: Yup.string().email().required("Please enter your email")
})

export default function Block3({toggleAccountInitial,setToggleAccount,toggleAccount,previousPage,setPreviousPage,login,setLogin,setInitialEmailValues,countDown,setCountDown}) {
  const theme = useTheme();
  const {enqueueSnackbar} = useSnackbar();

  const initialValues = {
    email: "",
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

  const handleOtpPage = async () => {
    setInitialEmailValues({email:values.email});
    setLogin({username:"",otp:""});
    setLogin({...login, username:values.email});
    const res = await sentOtpLogin(values);
    if(res.data.status==='SUCCESS'){
      enqueueSnackbar('OTP sent Successfully to Your Email', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
        });
    }
    else{
      enqueueSnackbar('Some Error Occured', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
        });
    }
    setPreviousPage([...previousPage, toggleAccount]);
    setToggleAccount(toggleAccountInitial.otp);
  //   setCountDown(0);
  //   setInterval(() => {
  //     setCountDown(countDown => countDown - 1)
  // }, 1000)
  };
  const handleEmailAndPass = ()=>{
    setPreviousPage([...previousPage,toggleAccount]);
    console.log(previousPage);
    setToggleAccount(toggleAccountInitial.emailAndPass);
  }

  return (
    <>
    <Box sx={{display:'inline-block'}}>
        <form onSubmit={handleSubmit}>
          <Box sx={{}}>
          <label style={{fontSize:'18px',}} htmlFor="number" className="input-label">
                      Email
            </label>
          <Box sx={{width:'100%',display:'flex',gap:'5px',fontSize:'18px',alignItems:'center',borderBottom:`1px solid ${theme.colors.alpha.black[30]}`,height:'40px'}}>
            <div style={{display:'input-block',}}>
                    
            <TextField required sx={{"& fieldset": { border: 'none' }, '& .MuiInputBase-input': {
              paddingLeft: "5px",fontSize:'18px',letterSpacing:'0.4px',width:'335px',
               }}} type="email"
               autoComplete="off"
               name="email"
               id="email"
               placeholder="Enter Your Email"
               value={values.email}
               onChange={handleChange}
               onBlur={handleBlur} />
              </div>
                  
          </Box>
          {touched.email && errors.email ? (
                      <p style={{color:`${theme.colors.warning.main}`}} className="form-error">{errors.email}</p>
                    ) : null}
          </Box>
          </form>
          <Button sx={{marginTop:'20px',width:'100%',":disabled":{background:`${theme.colors.alpha.black[10]}`},boxShadow:'0 2px 4px 0 rgb(0 0 0/ 15%)'}} variant='contained' type='submit' disabled={`${ errors.email }`==='true'?true:false} onClick={handleOtpPage} >Continue</Button>
          </Box>
          <Button type='text' onClick={handleEmailAndPass} sx={{width:'100%',margin:'50px 0 20px 0',fontSize:'15px',color:`${theme.colors.alpha.white[100]}`,"&:hover":{color:`${theme.colors.success.dark}`},background:'#FFA500',cursor:{md:'pointer',xs:'none'},boxShadow:'0 2px 4px 0 rgb(0 0 0/ 20%)',borderRadius:'4px'}}>Login Email and Password</Button>
    </>
  )
}
