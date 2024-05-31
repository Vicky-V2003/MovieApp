import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { App1 } from './App';
import { useNavigate } from 'react-router-dom';

export default function Topbar({mode,setMode}) {
  const navigate=useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <Button color="inherit" onClick={()=>navigate("/portal/home")}>Home</Button>
        
        <Button color="inherit"onClick={()=>navigate("/portal/movie")}>Movies</Button>
        <Button color="inherit"onClick={()=>navigate("/portal/addmovie")}>Add-Movies</Button>
        <Button style={{marginLeft:"60%"}} color="inherit"
        onClick={()=>setMode(mode==="light"?"dark":"light")}
        >Mode</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}