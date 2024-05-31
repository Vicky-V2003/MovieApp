import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import * as yup from "yup";
import { useFormik } from 'formik';

export default function EditForm({movie,id}) {
    const navigate = useNavigate();
    const movieValidationSchema = yup.object({
        name: yup.string().required(),
        poster: yup.string().required().min(10).url(),
        trailer: yup.string().required().min(10).url(),
        rating: yup.number().required().min(0).max(20),
        summary: yup.string().required().min(20),
    });
console.log(movie.name)
    const formik = useFormik({
        initialValues: {
            name: movie.name,
            poster: movie.poster,
            trailer: movie.trailer,
            rating: movie.rating,
            summary: movie.summary,
        },
        validationSchema: movieValidationSchema,
        onSubmit: (values) => {
            updateMovie(values);
        }
    });
    const updateMovie = (updatedMovie) => {
        fetch(`https://65f16bfe034bdbecc7627730.mockapi.io/movie/${id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(() => navigate("/portal/movie"));
    }
    return (
        <form className='addForm' onSubmit={formik.handleSubmit}>
            <h1>Add Movie</h1>
            <TextField id="outlined-basic" label="Name" variant="outlined" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handlleBlur} error={formik.touched.name && formik.errors.name} helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null} name="name" />

            <TextField id="outlined-basic" label="Poster" variant="outlined" value={formik.values.poster} onChange={formik.handleChange} onBlur={formik.handlleBlur} error={formik.touched.poster && formik.errors.poster} helperText={formik.touched.poster && formik.errors.poster ? formik.errors.Poster : null} name="poster" />

            <TextField id="outlined-basic" label="Trailor" variant="outlined" value={formik.values.trailer} onChange={formik.handleChange} onBlur={formik.handlleBlur} error={formik.touched.trailer && formik.errors.trailer} helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : null} name="trailer" />

            <TextField id="outlined-basic" label="Rating" variant="outlined" value={formik.values.rating} onChange={formik.handleChange} onBlur={formik.handlleBlur} error={formik.touched.rating && formik.errors.rating} helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : null} name="rating" />

            <TextField id="outlined-basic" label="Summary" variant="outlined" value={formik.values.summary} onChange={formik.handleChange} onBlur={formik.handlleBlur} error={formik.touched.summary && formik.errors.summary} helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary : null} name="summary" />

            <Button variant="contained" type="submit">submit</Button>
        </form>
    )
}
