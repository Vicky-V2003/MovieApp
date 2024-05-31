import { useFormik } from 'formik';
import React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from "yup";
import { Link } from 'react-router-dom';

function Login() {
    const registerValidationSchema=yup.object({
        name:yup.string().required(),
        email:yup.string().required().email(),
        password:yup.string().required(),
    })
    const formik=useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validationSchema:registerValidationSchema,
        onSubmit:(values)=>{
            console.log(values);
        }
    })
  return (
    <form className="addForm" onSubmit={formik.handleSubmit}>
        <h1>Login Form</h1>

        <TextField id="outlined-basic" label="Email" variant="outlined" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email && formik.errors.email} helperText={formik.touched.email && formik.errors.email ? formik.errors.email:null} name="email"/>
        
        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.password && formik.errors.password} helperText={formik.touched.password && formik.errors.password ? formik.errors.password:null} name="password"/>

        <Button variant="contained" type="submit">submit</Button>
        <h4>Don't have an account? click Here <Link to="register">Register</Link></h4>
    </form>
  )
}
export default Login;