 import * as yup from "yup";

 export const signUpSchema = yup.object({
    name:yup.string().min(2).max(25).required("Please Enter Your name"),
    lastname:yup.string().min(2).max(25).required("Please Enter Your last name"),
    email:yup.string().email().required("Please Enter Your email"),
    password:yup.string().min(6).required("please enter your password"),
    Confirm_password:yup.string().required().oneOf([yup.ref("password"),null],"password must match"),
    message:yup.string().min(2).required("please write something"),
   text:yup.string().min(1).max(100).required("please enter your Subject"),
 })