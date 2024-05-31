import { useFormik } from 'formik';
import React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from "yup";
import { Link } from 'react-router-dom';

function Register() {
    const registerValidationSchema=yup.object({
        name:yup.string().required(),
        email:yup.string().required().email(),
        password:yup.string().required(),
    })
    const formik=useFormik({
        initialValues:{
            name:"",
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
        <h1>Registration Form</h1>
        <TextField id="outlined-basic" label="Name" variant="outlined" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.name && formik.errors.name} helperText={formik.touched.name && formik.errors.name ? formik.errors.name:null} name="name"/>

        <TextField id="outlined-basic" label="Email" variant="outlined" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email && formik.errors.email} helperText={formik.touched.email && formik.errors.email ? formik.errors.email:null} name="email"/>
        
        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.password && formik.errors.password} helperText={formik.touched.password && formik.errors.password ? formik.errors.password:null} name="password"/>

        <Button variant="contained" type="submit">submit</Button>
        
        <h4>Do have an account? click Here <Link to="/">Login</Link></h4>
    </form>
  )
}

export default Register