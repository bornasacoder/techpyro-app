import { Box, Button, TextField ,useTheme} from '@mui/material'
import { useFormik} from 'formik'
import React from 'react'
import * as Yup from 'yup';

import app from "../../../../firebase";
import {
    getAuth,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink
  } from "firebase/auth";
  
  const auth = getAuth(app);


const schema = Yup.object({
  name: Yup.string().min(3).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email")
})

export default function Block2({toggleAccountInitial,setToggleAccount,toggleAccount,previousPage,setPreviousPage,login,setLogin,}) {
  const theme = useTheme()

  const initialValues = {
    name:"",
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

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3000',
    // This must be true.
    handleCodeInApp: true,
    // iOS: {
    //   bundleId: 'com.example.ios'
    // },
    // android: {
    //   packageName: 'com.example.android',
    //   installApp: true,
    //   minimumVersion: '12'
    // },
    // dynamicLinkDomain: 'http://localhost:3000'
  };

  const checkEmail = () => {
    
    console.log(window.location.href);
    if (isSignInWithEmailLink(auth, window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          // User opened the link on a different device. To prevent session fixation
          // attacks, ask the user to provide the associated email again. For example:
          email = window.prompt('Please provide your email for confirmation');
          
        }
        // The client SDK will parse the code from the link for you.
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            // Clear email from storage.
            window.localStorage.removeItem('emailForSignIn');
            console.log(result.user)
            // You can access the new user via result.user
            // Additional user info profile not available via:
            // result.additionalUserInfo.profile == null
            // You can check if the user is new or existing:
            // result.additionalUserInfo.isNewUser
          })
          .catch((error) => {
            // Some error occurred, you can inspect the code: error.code
            // Common errors could be invalid email and invalid or expired OTPs.
          });
      }
  }

  const handleOtpPage = async () => {
    sendSignInLinkToEmail(auth, values.email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    console.log('hi')
    window.localStorage.setItem('emailForSignIn', values.email);
    console.log('hello')
    checkEmail();
    console.log('hi hello')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    // ...
  });
  };
//   const handleEmailAndPass = ()=>{
//     setPreviousPage([...previousPage,toggleAccount]);
//     console.log(previousPage);
//     setToggleAccount(toggleAccountInitial.emailAndPass);
//   }

  return (
    <>
    <Box sx={{display:'inline-block'}}>
        <form onSubmit={handleSubmit}>
          <Box sx={{}}>
          <label style={{fontSize:'18px',paddingLeft:'5px'}} htmlFor="number" className="input-label">
                      Name
            </label>
          <Box sx={{width:'100%',display:'flex',gap:'5px',fontSize:'16px',alignItems:'center',borderBottom:`1px solid ${theme.colors.alpha.black[30]}`,height:'40px'}}>
            <div style={{display:'input-block',}}>
                    
            <TextField required sx={{"& fieldset": { border: 'none' }, '& .MuiInputBase-input': {
              paddingLeft: "5px",fontSize:'16px',letterSpacing:'0.2px',width:'335px',
               }}} type="text"
               autoComplete="off"
               name="name"
               id="name"
               placeholder="Enter Your Name"
               value={values.name}
               onChange={handleChange}
               onBlur={handleBlur} />
              </div>
                  
          </Box>
          {touched.name && errors.name ? (
                      <p style={{color:`${theme.colors.warning.main}`}} className="form-error">{errors.name}</p>
                    ) : null}
          </Box>
          <Box sx={{marginTop:'5px'}}>
          <label style={{fontSize:'18px',paddingLeft:'5px'}} htmlFor="number" className="input-label">
                      Email
            </label>
          <Box sx={{width:'100%',display:'flex',gap:'5px',fontSize:'16px',alignItems:'center',borderBottom:`1px solid ${theme.colors.alpha.black[30]}`,height:'40px'}}>
            <div style={{display:'input-block',}}>
                    
            <TextField required sx={{"& fieldset": { border: 'none' }, '& .MuiInputBase-input': {
              paddingLeft: "5px",fontSize:'16px',letterSpacing:'0.2px',width:'335px',
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
          <Button sx={{marginTop:'10px',width:'100%',":disabled":{background:`${theme.colors.alpha.black[10]}`},boxShadow:'0 2px 4px 0 rgb(0 0 0/ 15%)'}} variant='contained' type='submit' disabled={`${ errors.email }`==='true'?true:false} onClick={handleOtpPage}>Continue</Button>
          </Box>
    </>
  )
}
