import { Box, Button, TextField ,useTheme} from '@mui/material'
import { useFormik} from 'formik'
import React from 'react'
import * as Yup from 'yup';


const schema = Yup.object({
  email: Yup.string().email().required("Please enter your email")
})

export default function Block3({toggleAccountInitial,setToggleAccount,toggleAccount,previousPage,setPreviousPage}) {
  const theme = useTheme()

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

  const handleOtpPage = () => {
    setPreviousPage([...previousPage, toggleAccount]);
    setToggleAccount(toggleAccountInitial.otp);
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
