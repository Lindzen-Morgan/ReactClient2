import React, { useState, useEffect } from 'react';
import CreateGenreForm from './CreateGenreForm';
import CreateMovieForm from './CreateMovieForm';
import axios from 'axios';

function PeoplePage() {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [movieRatings, setMovieRatings] = useState([]);

  useEffect(() => {
    // Fetch the list of people from the API
    axios.get('https://localhost:7155/api/people')
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        // Handle errors here
      });
  }, []);

  useEffect(() => {
    // Fetch additional details for the selected person when selectedPerson
    if (selectedPerson) {
      // Fetch associated genres
      axios.get(`https://localhost:7155/api/genres/${selectedPerson.id}`)
        .then((response) => {
          setGenres(response.data);
        })
        .catch((error) => {
          // Handle errors here
        });

      // Fetch associated movies
      axios.get(`https://localhost:7155/api/movies/${selectedPerson.id}`)
        .then((response) => {
          setMovies(response.data);
        })
        .catch((error) => {
          // Handle errors here
        });

      // Fetch associated movie ratings
      axios.get(`https://localhost:7155/api/movieRatings/${selectedPerson.id}`)
        .then((response) => {
          setMovieRatings(response.data);
        })
        .catch((error) => {
          // Handle errors here
        });
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

          <h3>Movie Ratings:</h3>
          <ul>
            {movieRatings.map((rating) => (
              <li key={rating.id}>{rating.rating}</li>
            ))}
          </ul>
        </div>
      )}

      <CreateGenreForm />
      <CreateMovieForm />
    </div>
  );
}

export default PeoplePage;
