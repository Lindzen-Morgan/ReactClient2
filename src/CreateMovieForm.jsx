import React, { useState } from 'react';

function CreateMovieForm() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieRating, setMovieRating] = useState('');

  const handleMovieSubmit = (e) => {
    e.preventDefault();

    // Add code here to submit the movie data to your API
    // You can use Axios or fetch for making API requests

    // After submission, you can clear the form fields:
    setMovieTitle('');
    setMovieRating('');
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
