import { Box, Button, Typography, useTheme, Zoom } from "@mui/material";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { authenticateLogin, sentOtpLogin } from "../../../../redux/apiCalls";
import { useSnackbar } from "notistack";
// import { useSelector } from 'react-redux';
// import {selectUser} from '../../../../redux/userRedux'

export default function Block5({
  login,
  setLogin,
  values,
  initialEmailValues,
}) {
  const {enqueueSnackbar} = useSnackbar();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [otp, setOtp] = useState("");
  const [countDown, setCountDown] = useState(60);
  let mobile = values.phone;
  let email = initialEmailValues.email;

  useEffect(() => {
    countDown > 0 && setTimeout(() => setCountDown(countDown - 1), 1000);
  }, [countDown]);

  const handleChange = (otp) => {
    setOtp(otp);
    setLogin({ ...login, otp: otp });
  };

  const handleLogin = async () => {
    const res = await  authenticateLogin(dispatch, login);
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
      enqueueSnackbar(`${res.response.data.message}`, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        TransitionComponent: Zoom
        });
    }
  };

  const handleResendOtp = async () => {
    if (mobile === "" && email !== "") {
    const res = await  sentOtpLogin(initialEmailValues);
    if(res.data?res.data.status==='SUCCESS':false){
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
    } else {
    const res = await sentOtpLogin(values);
    if(res.data?res.data.status==='SUCCESS':false){
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
    }
    setCountDown(60);
  };

  return (
    <div>
      <Box
        sx={{
          fontSize: "18px",
          display: "block",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        please enter the OTP Sent to {mobile===""&&email !=="" ? email:mobile}
      </Box>
      <Box sx={{ width: "100%", margin: "20px 0", display: "block" }}>
        <OtpInput
          shouldAutoFocus
          containerStyle={{
            width: "100%",
            gap: "5px",
            justifyContent: "center",
          }}
          inputStyle={{
            fontSize: "18px",
            width: "40px",
            height: "35px",
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            background: `${theme.colors.alpha.white[10]}`,
          }}
          focusStyle={{ outline: "none" }}
          value={otp}
          onChange={handleChange}
          numInputs={6}
          separator={<span> </span>}
        />
      </Box>
      <Button
        sx={{ display: "block", width: "100%" }}
        variant="contained"
        onClick={handleLogin}
      >
        Verify
      </Button>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginLeft: `${countDown}`>0 ? "230px" : "260px",
          marginTop: "10px",
        }}
      >
        <Button
          sx={{
            padding: "0",
            ":hover": { background: `${theme.colors.alpha.white[100]}` },
          }}
          variant="text"
          onClick={handleResendOtp}
          disabled={countDown > 0 ? true : false}
        >
          Resend OTP{" "}
        </Button>
        {countDown > 0 ? (
          <Typography sx={{ marginRight: "10px" }}>{countDown}s</Typography>
        ) : null}
      </Box>
    </div>
  );
}
