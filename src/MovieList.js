import React, { useEffect, useState } from 'react';
import Movie from './Movie';

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    function getMovies() {
        fetch("https://65f16bfe034bdbecc7627730.mockapi.io/movie")
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            })
    }

    return (
        <div className="movie-list">
            {movies.map((movie, index) => (
                <div key={index}>
                    <Movie movieTake={movie} />
                </div>
            ))}
        </div>
    );
}

export default MovieList;
