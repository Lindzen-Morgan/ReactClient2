import React, { useState, useEffect } from 'react';
import CreateGenreForm from './CreateGenreForm'; // Import CreateGenreForm
import axios from 'axios';

function GenresPage() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Fetch genres from the API and update the state
    axios.get('https://localhost:7155/api/genres')
      .then((response) => {
        setGenres(response.data);
      })
      .catch((error) => {
        // Handle errors here
      });
  }, []);

  return (
    <div>
      <h1>Genres</h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <CreateGenreForm />
    </div>
  );
}

export default GenresPage;
