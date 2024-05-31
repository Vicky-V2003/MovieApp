import React, { useState } from 'react'
import AddMovie from './AddMovie';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Register from './register';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Topbar from './Topbar';
import Portal from './Portal';
import Home from './Home';
import NotFound from './NotFound';
import Movie from './Movie';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import EditMovie from './EditMovie';

function App() {
  const [mode,setMode]=useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div>
       <ThemeProvider theme={darkTheme}>
       <Paper style={{minHeight:"100vh", borderRadius:"0%"}} elevation={9} >
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/portal" element={<Portal mode={mode} setMode={setMode}/>}>
          <Route path="addmovie" element={<AddMovie/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="movie" element={<MovieList/>}/>
          <Route path="view/:id" element={<MovieDetails/>}/>
          <Route path="edit/:id" element={<EditMovie/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Paper>
      </ThemeProvider>
    </div>
  )
}

export default App;
