import React, { useState, useEffect } from 'react';
import { genresAPI } from './api'; // Import genresAPI from api.js file

function GenreList() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetches list of all Genres
    genresAPI.getAllGenres()
      .then((response) => {
        setGenres(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching genres:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Genres</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {genres.map((genre) => (
            <li key={genre.genreID}>{genre.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GenreList;
