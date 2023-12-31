import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import CreateMovieForm from './CreateMovieForm'; // Import CreateMovieForm
import axios from 'axios';

function PersonDetailsPage() {
  const { id } = useParams();
  const [person, setPerson] = useState({});
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');
  const [movieRating, setMovieRating] = useState('');

  useEffect(() => {
    // Fetch person details by ID and setGenres and setMovies.
    async function fetchPersonDetails() {
      try {
        const response = await axios.get(`https://localhost:7155/api/person/${id}`);
        setPerson(response.data);
        setGenres(response.data.genres);
        setMovies(response.data.movies);
      } catch (error) {
        // Handle errors
      }
    }

    fetchPersonDetails();
  }, [id]);

  const handleMovieSubmit = async (e) => {
    e.preventDefault();
    // Make an API request to create a new movie
    try {
      const response = await axios.post('https://localhost:7155/api/movies', {
        title: movieTitle,
        rating: movieRating,
        personId: id,
      });

      if (response.status === 201) {
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
