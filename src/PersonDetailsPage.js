import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PersonDetailsPage() {
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');
  const [movieRating, setMovieRating] = useState('');

  useEffect(() => {
    // Fetch person details by ID and setGenres and setMovies accordingly.
    async function fetchPersonDetails() {
      try {
        const response = await fetch(`https://localhost:7155/api/person/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPerson(data);
          setGenres(data.genres);
          setMovies(data.movies);
        } else {
          // Handle errors
        }
      } catch (error) {
        // Handle network errors
      }
    }

    fetchPersonDetails();
  }, [id]);

  const handleMovieSubmit = async (e) => {
    e.preventDefault();
    // Make an API request to create a new movie
    try {
      const response = await fetch(`https://localhost:7155/api/movies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: movieTitle, rating: movieRating, personId: id }),
      });

      if (response.ok) {
        // Handle success (maybe update the list of movies)
        // Clear the input fields
        setMovieTitle('');
        setMovieRating('');
        // Refetch the updated data
        fetchPersonDetails();
      } else {
        // Handle errors
      }
    } catch (error) {
      // Handle network errors
    }
  };

  return (
    <div>
      <h1>Details for {person.name}</h1>
      <h3>Genres:</h3>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>

      <h3>Movies:</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>

      <h3>Add a Movie:</h3>
      <form onSubmit={handleMovieSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Movie Rating"
          value={movieRating}
          onChange={(e) => setMovieRating(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default PersonDetailsPage;
