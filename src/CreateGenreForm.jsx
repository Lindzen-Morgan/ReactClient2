import React, { useState } from 'react';
import axios from 'axios';

function CreateGenreForm() {
  const [genreName, setGenreName] = useState('');

  const handleGenreSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/Genres/Create', {
        name: genreName,
      });

      if (response.status === 200) {
        // Handle success
        // Clear the input field
        setGenreName('');
      } else {
        // Handle errors
      }
    } catch (error) {
      // Handle network errors
    }
  };

  return (
    <div>
      <h2>Create a New Genre</h2>
      <form onSubmit={handleGenreSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={genreName}
            onChange={(e) => setGenreName(e.target.value)}
          />
        </label>
        <button type="submit">Create Genre</button>
      </form>
    </div>
  );
}

export default CreateGenreForm;
