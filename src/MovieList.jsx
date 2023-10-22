import React, { useState, useEffect } from 'react';
import { moviesAPI } from './api';  
import axios from 'axios';
function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // When the component mounts, fetch the list of movies from Filmsystemet4
    moviesAPI.getAllMovies()
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.movieID}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
