import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Block2 from "../block2/Block2";

import { FcGoogle } from "react-icons/fc";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import app from "../../../../firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const auth = getAuth(app);

const schema = Yup.object({
    name: Yup.string().min(3).required("Please enter your name"),
    number: Yup.number().min(1000000000).required("please enter your mobile number"),
});

const toggleAccountInitial = {
  number: {
    view: "number",
  },
  email: {
    view: "email",
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
  const [disabled, setDisabled] = useState(true);

  const initialValues = {
    name:"",
    phone: "",
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

    const [otp, setOtp] = useState('');
    const [otpInput, setOtpInput] = useState(false);

  const handleChangeOtp = (e)=>{
    setOtp(e.target.value);
  }

  const captchaVerify = async () => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          codeVerify();
        }
      }, auth);
    
    // let res = await sentOtpLogin(values);
    // console.log(res);
    // setPreviousPage([...previousPage, toggleAccount]);
    // setToggleAccount(toggleAccountInitial.otp);
  };
    

    const handleRequestOtp = () => {
        captchaVerify();
        const phoneNumber = "+91" + values.phone;
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          alert('otp sent successfully');
          setOtpInput(true);
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          console.log("SMS not sent")
          // ...
        });
        
    }

    const codeVerify = () => {
        const code = otp;
        window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(user);
            setDisabled(false);
            alert("Verification Done");
            // ...
          }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
            alert("Invalid OTP");
          });
    }

  
  const maxLengthCheck = (e) => {
    setCount(e.target.value.length);
  };
  const handlePhonePage = () => {
    setPreviousPage([...previousPage, toggleAccount]);
    setToggleAccount(toggleAccountInitial.number);
  };
  const handleEmailPage = () => {
    setPreviousPage([...previousPage, toggleAccount]);
    console.log(previousPage);
    setToggleAccount(toggleAccountInitial.email);
  };
//   const handleMobileANDpassPage = () => {
//     setPreviousPage([...previousPage, toggleAccount]);
//     setToggleAccount(toggleAccountInitial.numberAndPass);
//   };
  const handleBack = () => {
    var a = previousPage.slice(-1);
    setToggleAccount(a[0]);
    previousPage.pop();
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: `flex`,
          // justifyContent: { sm: "space-between", xs: "normal" },
          flexDirection: "column",
          gap: { sm: "20px", xs: "10px" },
          padding: "10px 20px",
          width: "400px",
          height: { sm: "600px", xs: "100%" },
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
                background: `${theme.colors.alpha.white[100]}`,
              },
            }}
          >
            <ArrowBackIosIcon />
            Back
          </Button>
        ) : null}

        {/* ------Block1 start------ */}

        {toggleAccount.view === "number" ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { sm: "20px", xs: "10px" },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <Box sx={{ display: `block` }}>
                  <label
                    style={{ fontSize: "18px" }}
                    htmlFor="number"
                    className="input-label"
                  >
                    Name
                  </label>
                  <div style={{ display: "input-block" }}>
                    <TextField
                      required
                      sx={{
                        "& fieldset": { borderRadius: "4px" },
                        "& .MuiInputBase-input": {
                          padding: "7px 0 7px 13px",
                          fontSize: "15px",
                          letterSpacing: "0.2px",
                          width: "345px",
                        },
                      }}
                      type="text"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {touched.number && errors.number ? (
                    <p
                      style={{ color: `${theme.colors.warning.main}` }}
                      className="form-error"
                    >
                      {errors.number}
                    </p>
                  ) : null}
                </Box>

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
                    <Box sx={{ display: "flex", fontSize: "16px" }}>+91</Box>
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
                  {`${count}` === "10" ?<Button
                    sx={{
                        width:'100%',
                        marginTop: "10px",
                        borderRadius:'4px',
                        boxShadow: "0 2px 4px 0 rgb(0 0 0/ 15%)",
                    }}
                    variant="contained"
                    type="submit"
                    onClick={handleRequestOtp}
                  >
                    Request OTP
                  </Button> : null}
                </Box>
               {otpInput ? <Box sx={{ display: `block` }}>
                  <label
                    style={{ fontSize: "18px" }}
                    htmlFor="number"
                    className="input-label"
                  >
                    OTP
                  </label>
                  <div style={{ display: "input-block" }}>
                    <TextField
                      required
                      sx={{
                        "& fieldset": { borderRadius:'4px' },
                        "& .MuiInputBase-input": {
                          padding: "7px 0 7px 13px",
                          fontSize: "15px",
                          letterSpacing: "0.2px",
                          width: "345px",
                        },
                      }}
                      type="number"
                      autoComplete="off"
                      name="otp"
                      id="otp"
                      maxLength="10"
                      placeholder="Enter OTP"
                      value={values.otp}
                      onChange={handleChangeOtp}
                    />
                  </div>
                  {touched.number && errors.number ? (
                    <p
                      style={{ color: `${theme.colors.warning.main}` }}
                      className="form-error"
                    >
                      {errors.number}
                    </p>
                  ) : null}
                  <Button
                    sx={{
                        width:'100%',
                        marginTop: '10px',
                        borderRadius: '4px',
                      ":disabled": {
                        background: `${theme.colors.alpha.black[10]}`,
                      },
                      boxShadow: "0 2px 4px 0 rgb(0 0 0/ 15%)",
                    }}
                    variant="contained"
                    type="submit"
                    disabled={`${count}` === "10" ? false : true}
                    onClick={codeVerify}
                  >
                    Verify
                  </Button>
                </Box>: null}
              </form>
              <Button
                sx={{
                  marginTop: "10px",
                  ":disabled": {
                    background: `${theme.colors.alpha.black[10]}`,
                  },
                  boxShadow: "0 2px 4px 0 rgb(0 0 0/ 15%)",
                }}
                variant="contained"
                type="submit"
                disabled={disabled}
                onClick={handleSubmit}
              >
                submit
              </Button>
            </Box>
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
              Use Email to Signup
            </Button>
          </Box>
        ) : null}

        {/* ------Block2 start------ */}

        {toggleAccount.view === "email" ? (
          <Box sx={{ width: "100%" }}>
            <Block2
              toggleAccountInitial={toggleAccountInitial}
              setToggleAccount={setToggleAccount}
              toggleAccount={toggleAccount}
              previousPage={previousPage}
              setPreviousPage={setPreviousPage}
            />
            <Button
              type="text"
              onClick={handlePhonePage}
              sx={{
                width: "100%",
                marginTop:'15px',
                fontSize: "15px",
                color: `${theme.colors.alpha.white[100]}`,
                "&:hover": { color: `${theme.colors.success.dark}` },
                background: "#FFA500",
                cursor: { md: "pointer", xs: "none" },
                boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)",
                borderRadius: "4px",
              }}
            >
              Use Phone Number to Signup
            </Button>
          </Box>
        ) : null}

        {/* ------Block3 start------ */}

        {/* {toggleAccount.view === "otp" ? <Block3 /> : null} */}

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
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              fontSize: "16px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "15px" }}>
              Already have an account ?
            </Typography>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", marginBottom: "1px" }}
            >
              Login
            </Link>
          </Box>
          <Typography sx={{ fontSize: "12.5px" }}>
            By continuing you agree to our Terms Of Use and Privacy Policy
          </Typography>
        </Box>
        <div id="sign-in-button"></div>
      </Box>
    </>
  );
}
