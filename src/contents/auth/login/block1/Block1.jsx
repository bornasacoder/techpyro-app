import { Box, Button, TextField, Typography, useTheme,Zoom } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Block2 from "../block2/Block2";
import Block3 from "../block3/Block3";
import Block4 from "../block4/Block4";
import Block5 from "../block5/Block5";

import { FcGoogle } from "react-icons/fc";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { sentOtpLogin } from "../../../../redux/apiCalls";
import { useSnackbar } from 'notistack';

const schema = Yup.object({
  number: Yup.number()
    .min(1000000000)
    .required("please enter your mobile number"),
  password: Yup.string().min(6).required("Please enter your password"),
});

const toggleAccountInitial = {
  number: {
    view: "number",
  },
  numberAndPass: {
    view: "numberAndPass",
  },
  email: {
    view: "email",
  },
  emailAndPass: {
    view: "emailAndPass",
  },
  otp: {
    view: "otp",
  },
};

export default function Block() {
  const theme = useTheme();
  const [toggleAccount, setToggleAccount] = useState(
    toggleAccountInitial.number
  );
  const [previousPage, setPreviousPage] = useState([]);

  const [count, setCount] = useState("");
  const  {enqueueSnackbar}  = useSnackbar();
  

  let initialValues = {
    phone: ""
  };
  const [initialEmailValues, setInitialEmailValues] = useState({email:""});
  

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

    const initialValuesLogin = {
      username: "",
      otp:""
    };
  
    const [login, setLogin] = useState(initialValuesLogin);

  const handle = async () => {
    setLogin({username:"",otp:""});
    setLogin({...login, username:values.phone});
    const res = await sentOtpLogin(values);
    if(res.data.status==='SUCCESS'){
      enqueueSnackbar('OTP sent Successfully to Your Phone', {
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

  };
  const maxLengthCheck = (e) => {
    setCount(e.target.value.length);
  };
  const handlePhonePage = () => {
    setPreviousPage([...previousPage, toggleAccount]);
    setToggleAccount(toggleAccountInitial.number);
    setInitialEmailValues({email:""});
  };
  const handleEmailPage = () => {
    setPreviousPage([...previousPage, toggleAccount]);
    console.log(previousPage);
    setToggleAccount(toggleAccountInitial.email);
    values.phone="";
  };
  const handleMobileANDpassPage = () => {
    setPreviousPage([...previousPage, toggleAccount]);
    setToggleAccount(toggleAccountInitial.numberAndPass);
  };
  const handleBack = () => {
    var a = previousPage.slice(-1);
    setToggleAccount(a[0]);
    previousPage.pop();
    values.phone="";
  };


  return (
    <>
      <Box
        sx={{
          position:'relative',
          display: `flex`,
          // justifyContent: { sm: "space-between", xs: "normal" },
          flexDirection: "column",
          gap: {sm:"20px",xs:'10px'},
          padding: "10px 20px",
          width: "400px",
          height: {sm:"600px",xs:'100%'},
          border: {
            sm: `1px solid ${theme.colors.alpha.black[30]}`,
            xs: "none",
          },
          background: { sm: `${theme.colors.alpha.white[100]}`, xs: "none" },
        }}
      >
        <Box
          sx={{
            display: { sm: "none", xs: "flex" },
            width: "100%",
            height: "150px",
            justifyContent: "center",
          }}
        >
          <img
            style={{ width: "70%", height: "100%" }}
            src="/images/mainLogo/TP LOGO-01.png"
            alt="logo"
          />
        </Box>
        {!(toggleAccount.view === "number") ? (
          <Button
            onClick={handleBack}
            variant="text"
            sx={{
              width: "20%",
              padding: "0",
              fontSize: "18px",
              "&:hover": {
                border: "none",
                background: {md:`${theme.colors.alpha.white[100]}`,xs:`${theme.colors.alpha.white[0]}`},
              },
            }}
          >
            <ArrowBackIosIcon />
            Back
          </Button>
        ) : null}
        {toggleAccount.view === "numberAndPass" ||
        toggleAccount.view === "number" ? (
          <Box>
            {/* ------Block1 start------ */}

            {toggleAccount.view === "number" ? (
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: {sm:"20px",xs:'10px'} }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <form onSubmit={handleSubmit}>
                    <Box sx={{ display: `block` }}>
                      <label
                        style={{ fontSize: "18px" }}
                        htmlFor="number"
                        className="input-label"
                      >
                        Mobile Number
                      </label>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          gap: "5px",
                          fontSize: "18px",
                          alignItems: "center",
                          borderBottom: `1px solid ${theme.colors.alpha.black[30]}`,
                          height: "40px",
                        }}
                      >
                        <Box sx={{ display: "flex", fontSize: "16px" }}>
                          +91
                        </Box>
                        <Box
                          sx={{
                            width: "1px",
                            height: "18px",
                            borderRight: `1px solid ${theme.colors.alpha.black[30]}`,
                          }}
                        ></Box>
                        <div style={{ display: "input-block" }}>
                          <TextField
                            required
                            sx={{
                              "& fieldset": { border: "none" },
                              "& .MuiInputBase-input": {
                                paddingLeft: "5px",
                                fontSize: "17px",
                                letterSpacing: "0.7px",
                                width: "300px",
                              },
                            }}
                            type="number"
                            autoComplete="off"
                            name="phone"
                            id="number"
                            maxLength="10"
                            placeholder="Enter Your Mobile Number"
                            value={values.number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onInput={maxLengthCheck}
                          />
                        </div>
                      </Box>
                      {touched.number && errors.number ? (
                        <p
                          style={{ color: `${theme.colors.warning.main}` }}
                          className="form-error"
                        >
                          {errors.number}
                        </p>
                      ) : null}
                    </Box>
                  </form>
                  <Button
                    sx={{
                      marginTop: {md:"30px",sm:'25px',xs:'20px'},
                      ":disabled": {
                        background: `${theme.colors.alpha.black[10]}`,
                      },
                      boxShadow: "0 2px 4px 0 rgb(0 0 0/ 15%)",
                    }}
                    variant="contained"
                    type="submit"
                    disabled={`${count}` === "10" ? false : true}
                    onClick={handle}
                  >
                    Continue
                  </Button>
                </Box>
                <Button
                  type="text"
                  onClick={handleMobileANDpassPage}
                  sx={{
                    width: "100%",
                    margin: { sm: "50px 0 20px 0", xs: "10px 0 15px 0" },
                    fontSize: "15px",
                    color: `${theme.colors.alpha.white[100]}`,
                    "&:hover": { color: `${theme.colors.success.dark}` },
                    background: "#FFA500",
                    cursor: { md: "pointer", xs: "none" },
                    boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
                    borderRadius: "4px",
                  }}
                >
                  Login Phone and Password
                </Button>
              </Box>
            ) : null}

            {/* ------Block2 start------ */}

            {toggleAccount.view === "numberAndPass" ? (
              <Box>
                <Block2
                  toggleAccountInitial={toggleAccountInitial}
                  setToggleAccount={setToggleAccount}
                  toggleAccount={toggleAccount}
                  previousPage={previousPage}
                  setPreviousPage={setPreviousPage}
                />
              </Box>
            ) : null}

            <Button
              type="text"
              onClick={handleEmailPage}
              sx={{
                width: "100%",
                fontSize: "15px",
                color: `${theme.colors.alpha.white[100]}`,
                "&:hover": { color: `${theme.colors.success.dark}` },
                cursor: { md: "pointer", xs: "none" },
                background: "#FFA500",
                boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
                borderRadius: "4px",
              }}
            >
              Use Email to login
            </Button>
          </Box>
        ) : null}

        {toggleAccount.view === "emailAndPass" ||
        toggleAccount.view === "email" ? (
          <Box sx={{width:'100%'}}>
            {/* ------Block3 start------ */}

            {toggleAccount.view === "email" && (
              <Box sx={{width:'100%'}}>
                <Block3
                  toggleAccountInitial={toggleAccountInitial}
                  setToggleAccount={setToggleAccount}
                  toggleAccount={toggleAccount}
                  previousPage={previousPage}
                  setPreviousPage={setPreviousPage}
                  login={login}
                  setLogin={setLogin}
                  initialValuesLogin={initialValuesLogin}
                  setInitialEmailValues={setInitialEmailValues}
                />
              </Box>
            )}

            {/* ------Block4 start------ */}

            {toggleAccount.view === "emailAndPass" && (
              <Box>
                <Block4
                  toggleAccountInitial={toggleAccountInitial}
                  setToggleAccount={setToggleAccount}
                  toggleAccount={toggleAccount}
                  previousPage={previousPage}
                  setPreviousPage={setPreviousPage}
                />
              </Box>
            )}
            <Button
              type="text"
              onClick={handlePhonePage}
              sx={{
                width: "100%",
                fontSize: "15px",
                color: `${theme.colors.alpha.white[100]}`,
                "&:hover": { color: `${theme.colors.success.dark}` },
                background: "#FFA500",
                cursor: { md: "pointer", xs: "none" },
                boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
                borderRadius: "4px",
              }}
            >
              Use Phone Number to login
            </Button>
          </Box>
        ) : null}

        {/* ------Block5 start------ */}

        {toggleAccount.view === "otp" ? <Block5 values={values} initialEmailValues={initialEmailValues} login={login} setLogin={setLogin}/> : null}

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              textAlign: "center",
              margin: "0 0 10px 0",
              fontWeight: 500,
              color: `${theme.colors.secondary.main}`,
            }}
          >
            OR
          </Typography>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button
              type="text"
              onClick={handlePhonePage}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                width: "40%",
                fontSize: "15px",
                color: `${theme.colors.alpha.black[100]}`,
                "&:hover": { color: `${theme.colors.success.dark}` },
                background: "#ecf3ff",
                cursor: { md: "pointer", xs: "none" },
                boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
                borderRadius: "4px",
              }}
            >
              <FcGoogle style={{ fontSize: "25px" }} /> Google
            </Button>
          </Box>
        </Box>
        <Box sx={{position:'absolute',bottom:0,display:'flex',flexDirection:'column',gap:'20px',marginBottom:'10px'}}>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "15px" }}>New to TechPyro ?</Typography>
            <Link
              to={"/signup"}
              style={{ textDecoration: "none", marginBottom: "1px" }}
            >
              Sign up
            </Link>
          </Box>
          <Typography sx={{ fontSize: "12.5px" }}>
            By continuing you agree to our Terms Of Use and Privacy Policy
          </Typography>
        </Box>
      </Box>
    </>
  );
}
