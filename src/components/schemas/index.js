import * as yup from "yup";

export const signUpSchema = yup.object({
   email:yup.string().email().required("Please Enter Your email"),
   password:yup.string().min(6).required("please enter your password"),
})
export const joinSchema = yup.object({
    name1:yup.string().min(2).max(25).required("Please Enter Your name"),
   email1:yup.string().email().required("Please Enter Your email"),
   password1:yup.string().min(6).required("please enter your password"),
})