import React, { useState } from 'react';

function CreateGenreForm() {
  const [genreName, setGenreName] = useState('');

  const handleGenreSubmit = (e) => {
    e.preventDefault();

    // Add code here to submit the genre data to your API
    // You can use Axios or fetch for making API requests

    // After submission, you can clear the form fields:
    setGenreName('');
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
