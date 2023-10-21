import React, { useState, useEffect } from 'react';
import CreateGenreForm from './CreateGenreForm';
import CreateMovieForm from './CreateMovieForm'; // Import CreateMovieForm here
import axios from 'axios';

function PeoplePage() {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    // Fetch the list of people from the API when the component mounts
    axios.get('https://localhost:7155/api/people')
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        // Handle errors here
      });
  }, []);

  useEffect(() => {
    // Fetch additional details for the selected person when selectedPerson changes
    if (selectedPerson) {
      // Fetch details for the selected person, such as genres, movies, and ratings
    }
  }, [selectedPerson]);

  const handlePersonClick = (person) => {
    // Set the selected person when a person is clicked
    setSelectedPerson(person);
  };

  return (
    <div>
      <h1>People</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id} onClick={() => handlePersonClick(person)}>
            {person.name}
          </li>
        ))}
      </ul>

      {selectedPerson && (
        <div>
          <h2>Details for {selectedPerson.name}</h2>
          <h3>Genres:</h3>
          <ul>
            {/* Display associated genres */}
          </ul>

          <h3>Movies:</h3>
          <ul>
            {/* Display associated movies */}
          </ul>

          <h3>Movie Ratings:</h3>
          <ul>
            {/* Display associated movie ratings */}
          </ul>
        </div>
      )}

      <CreateGenreForm />
      <CreateMovieForm /> {/* Use CreateMovieForm here */}
    </div>
  );
}

export default PeoplePage;
