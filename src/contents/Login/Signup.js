import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
const schema = Yup.object({
    firstName:Yup.string().min(3).required("Please Enter your first Name"),
    lastName:Yup.string().min(3).required("Please Enter your last Name"),
    number: Yup.number().min(1000000000).required('please enter your mobile number'),
    password: Yup.string().min(6).required(""),
  })
function Signup(){
        const initialValues = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
        
        const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: schema,
            validateOnChange: true,
            validateOnBlur: false,
            //// By disabling validation onChange and onBlur formik will validate on submit.
            onSubmit: (values, {handleSubmit}) => {
            console.log( values);
            //// to get rid of all the values after submitting the form
           
            },
          });
        const handle = ()=>{
            console.log(values);
        }
    return(
        <div className='w-[580px] h-[573px] top-[225px] rounded-[10px]'>
            <h1 className='text-[36px] leading-[49px] font-bold text-center'>Create account </h1>
            <div className='flex items-center justify-center'><p className='font-normal text-[18px] leading-[24px] '>Already have an account? <span className='font-normal text-[#089FE0] text-[18px] leading-[24px]'>Sign In</span></p></div>
            <form onSubmit={handleSubmit} className='mt-[70px]'>
            <div className='flex justify-around'>
            <label htmlFor='firstName' className='font-semibold text-[18px] leading-[24px] text-[#333333] '>first Name</label> <br/>
                <input
                name="firstName"
                type="text"
                id="firstName"
                value={values.firstName}
                placeholder="Arjun"
                onChange={handleChange} 
                onBlur={handleBlur}
                className="outline"></input>
                </div>
                <br />
                <div className='flex justify-around'>
                <label htmlFor='lastName' className='font-semibold text-[18px] leading-[24px] text-[#333333] '>Last Name</label> <br/>
                    <input
                    name="lastName"
                    type="text"
                    id="lastName"
                    value={values.lastName}
                    placeholder="Singh"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="outline"></input></div>
                    <br/>
                    <div className='flex justify-around'>
                <label for="email" className='font-semibold text-[18px] leading-[24px] text-[#333333] '>EMAIL Address</label><br />
                <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder='Enter email address'
            />{errors.email && touched.email && errors.email}
            
                </div>
            <br/>
            <div className='flex justify-around'>
            <label for="password" className='font-semibold text-[18px] leading-[24px] text-[#333333] '>Password</label>
            <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />{errors.password && touched.password && errors.password}</div>
           <br /> 
            <div className='flex justify-center items-center '>
           <button onClick={handle} type="submit" className='px-[200px] py-[5px] bg-[#089FE0] rounded-lg'>
             Submit
           </button>
           </div>
            </form>

        </div>
    )
}
export default Signup;