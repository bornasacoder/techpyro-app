 import * as Yup from "yup";

 export const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter Your name"),
    lastname:Yup.string().min(2).max(25).required("Please Enter Your last name"),
    email:Yup.string().email().required("Please Enter Your email"),
    password:Yup.string().min(6).required("please enter your password"),
    Confirm_password:Yup.string().required().oneOf([Yup.ref("password"),null],"password must match"),
    message:Yup.string().min(2).required("please write something"),
   text:Yup.string().min(1).max(100).required("please enter your Subject"),
 })