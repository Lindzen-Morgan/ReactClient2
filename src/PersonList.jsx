
import React, { useState, useEffect } from 'react';
import { personsAPI } from './api'; // Import personsAPI from api.js file
import axios from 'axios';
function PersonList() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Fetches list of all persons in DB
    personsAPI.getAllPersons()
      .then((response) => {
        setPersons(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching persons:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Persons</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {persons.map((person) => (
            <li key={person.personID}>{person.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PersonList;
