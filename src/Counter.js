import { Badge, IconButton } from '@mui/material';
import React, { useState } from 'react'

export default function Counter() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    return (
        <div> 
            <IconButton color="primary" aria-label="Like" onClick={() => setLike(like + 1)}>
                <Badge badgeContent={like} color='primary'>👍</Badge>
            </IconButton>
            <IconButton color="primary" aria-label="Dislike" onClick={() => setDislike(dislike + 1)}>
                <Badge badgeContent={dislike} color='primary'>👎</Badge>
                
            </IconButton>
        </div>
    );
}
