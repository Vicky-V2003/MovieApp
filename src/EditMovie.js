import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EditForm from './EditForm';

export default function EditMovie() {
    
    const [show,setShow]=useState(false);
    const {id}=useParams();
    console.log(id);
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        fetch(`https://65f16bfe034bdbecc7627730.mockapi.io/movie/${id}`,{
        method:"GET"
        })
        .then((data)=>data.json())
        .then((mv)=>setMovie(mv))
        .then(()=>setShow(true))
    },[])
    console.log(movie);
  return (
    <div>
        {
            show?<EditForm movie={movie} id={id}/>:'...Loading'
        }
    </div>
  )
}
