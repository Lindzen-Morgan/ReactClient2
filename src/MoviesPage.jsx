import React, { useState, useEffect } from 'react';
import CreateMovieForm from './CreateMovieForm'; // Import CreateMovieForm
import axios from 'axios';

function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from the API and update the state
    axios.get('https://localhost:7155/api/movies')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        // Handle errors here
      });
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <CreateMovieForm />
    </div>
  );
}

export default MoviesPage;
