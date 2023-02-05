import { Box, Button, TextField ,Typography,useTheme} from '@mui/material'
import { useFormik} from 'formik'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Block2 from '../block2/Block2';
import Block3 from '../block3/Block3';
import Block4 from '../block4/Block4';
import Block5 from '../block5/Block5';

const schema = Yup.object({
  number: Yup.number().min(1000000000).required('please enter your mobile number'),
  password: Yup.string().min(6).required("Please enter your password"),
})

const toggleAccountInitial = {
  number:{
    view:'number',
  },
  numberAndPass:{
    view:'numberAndPass'
  },
  email:{
    view:'email'
  },
  emailAndPass:{
    view:'emailAndPass'
  },
  otp:{
    view:'otp'
  }
}



export default function Block() {

  const theme = useTheme();
  const [toggleAccount, setToggleAccount] = useState(toggleAccountInitial.number)

    const [count, setCount] = useState('');
    

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
      
    },
  });

    const handle = ()=>{
      setToggleAccount(toggleAccountInitial.otp);
      
    }
    const maxLengthCheck = (e)=>{
      setCount(e.target.value.length);
    }
    const handlePhonePage = ()=>{
      setToggleAccount(toggleAccountInitial.number);
    }
    const handleEmailPage = ()=>{
      setToggleAccount(toggleAccountInitial.email);
    }
    const handleMobileANDpassPage = ()=>{
      setToggleAccount(toggleAccountInitial.numberAndPass);
    }

    
  return (
    <>
      <Box sx={{display:`flex`,justifyContent:'space-between',flexDirection:'column',gap:'10px',padding:"20px",width:'350px',height:'500px',border:`1px solid ${theme.colors.alpha.black[30]}`,background:`${theme.colors.alpha.white[100]}`}}>
      {(toggleAccount.view==='numberAndPass' || toggleAccount.view==='number') ? <Box>
      { toggleAccount.view==='number' ? <Box sx={{display:'flex',flexDirection:'column',gap:'20px'}}>
        <Box sx={{display:'flex',flexDirection:'column'}}>
          <form onSubmit={handleSubmit}>
          <Box sx={{display:`block`}}>
          <label style={{fontSize:'18px',}} htmlFor="number" className="input-label">
                      Mobile Number
            </label>
          <Box sx={{width:'310px',display:'flex',gap:'5px',fontSize:'18px',alignItems:'center',borderBottom:`1px solid ${theme.colors.alpha.black[30]}`,height:'40px'}}>
            <Box sx={{display:'flex',fontSize:'16px',}}>+91</Box>
            <Box sx={{width:'1px',height:'18px',borderRight:`1px solid ${theme.colors.alpha.black[30]}`}}></Box>
            <div style={{display:'input-block',}}>
                    
            <TextField required sx={{"& fieldset": { border: 'none' }, '& .MuiInputBase-input': {
              paddingLeft: "5px",fontSize:'17px',letterSpacing:'0.7px',width:'270px',
               }}} type="number"
               autoComplete="off"
                name="number"
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
          </form>
          <Button sx={{marginTop:'15px', ":disabled":{background:`${theme.colors.alpha.black[10]}`},boxShadow:'0 2px 4px 0 rgb(0 0 0/ 15%)'}} variant='contained' type='submit' disabled={`${count}`==='10'?false:true} onClick={handle}>Continue</Button>
          </Box>
          <Button type='text' onClick={handleMobileANDpassPage} sx={{width:'100%',margin:'10px 0',fontSize:'15px',color:`${theme.colors.success.dark}`,cursor:{md:'pointer',xs:'none'},boxShadow:'0 2px 4px 0 rgb(0 0 0/ 20%)',borderRadius:'4px'}}>Login Phone and Password</Button>
      </Box> : null }
        
      {toggleAccount.view==='numberAndPass' ? <Box>
          <Block2 toggleAccountInitial={toggleAccountInitial} setToggleAccount={setToggleAccount} />
      </Box> : null}

        <Button type='text' onClick={handleEmailPage} sx={{width:'100%',fontSize:'15px',color:`${theme.colors.success.dark}`,cursor:{md:'pointer',xs:'none'},boxShadow:'0 2px 4px 0 rgb(0 0 0/ 20%)',borderRadius:'4px'}}>Use Email to login</Button>
      
      </Box> : null}
      {(toggleAccount.view==='emailAndPass' || toggleAccount.view==='email') ?<Box >
      {toggleAccount.view==='email' && <Box>
          <Block3 toggleAccountInitial={toggleAccountInitial} setToggleAccount={setToggleAccount} />
      </Box>}
      {toggleAccount.view==='emailAndPass' && <Box>
          <Block4 toggleAccountInitial={toggleAccountInitial} setToggleAccount={setToggleAccount} />
      </Box>}
      <Button type='text' onClick={handlePhonePage} sx={{width:'100%',fontSize:'17px',color:`${theme.colors.success.dark}`,cursor:{md:'pointer',xs:'none'},boxShadow:'0 2px 4px 0 rgb(0 0 0/ 20%)',borderRadius:'4px'}}>Use Phone Number to login</Button>
      </Box>: null}
      {toggleAccount.view==='otp' ? <Block5/> : null}
      <Box sx={{display:'flex',gap:'8px',fontSize:'16px',alignItems:'center'}}>
        <Typography>Create an account ?</Typography>
        <Link to={'/signup'} style={{textDecoration:'none'}}>Sign up</Link>
      </Box>
      </Box>


        {/* Email Page */}

          {/* <Block2 setHideEmail={setHideEmail} setShowEmail={setShowEmail} showEmail={showEmail}/> */}
    </>
  )
}
