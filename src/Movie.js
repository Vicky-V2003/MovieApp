import React, { useState } from 'react'
import Counter from './Counter'
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import { Card, CardActions, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function Movie({movieTake}) {
    const navigate=useNavigate();
    const props=movieTake;
    console.log(props);
    const [show, setShow] = useState(false);
    return (
        <Card className='movie-container'>
            <img className="movie-poster" src={props.poster} />
            <CardContent>
            <div className="movie-spec">
                <h2 className='movie-name'>
                    {props.name}
                    <IconButton color='primary' aria-label="Toggle-Description" onClick={() => { setShow(!show) }} >
                        {show ? <ExpandLessIcon fontSize="large" /> : <ExpandMoreIcon fontSize="large" />}
                    </IconButton>
                    <IconButton color='primary' aria-label="Movie-info" onClick={()=> navigate(`/portal/view/${movieTake.id}`)}>
                        <InfoIcon fontSize="medium" />
                    </IconButton>
                </h2>
                <h3 className="movie-rating">⭐{props.rating}</h3>
            </div>
            </CardContent>
            {show ? <p className='movie-summary'>{props.summary}</p>:null}
            <CardActions>
            <Counter/>
            <IconButton sx={{margin:"auto"}} aria-label="editMovie" onClick={()=>{navigate(`/portal/edit/${movieTake.id}`)}}>
                <EditIcon color="secondary"/>            
            </IconButton>
            </CardActions>
    </Card>
  )
}
