import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function CreateMovieForm() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieRating, setMovieRating] = useState('');

  const handleMovieSubmit = async (e) => {
    e.preventDefault();

    // Create a movie object from the form data
    const newMovie = {
      title: movieTitle,
      rating: parseFloat(movieRating), // Parse to a float
    };

    try {
      // Send a POST request to API
      const response = await axios.post('https://localhost:7155/api/movies', newMovie);

      if (response.status === 201) {
        // Handle success
        console.log('Movie created successfully');
        // Clear the form fields
        setMovieTitle('');
        setMovieRating('');
      } else {
        // Handle errors
        console.error('Failed to create the movie');
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Movie</h2>
      <form onSubmit={handleMovieSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            value={movieRating}
            onChange={(e) => setMovieRating(e.target.value)}
          />
        </label>
        <button type="submit">Create Movie</button>
      </form>
    </div>
  );
}

export default CreateMovieForm;
