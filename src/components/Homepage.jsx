import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Homepage() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // Fetch the list of people from the API
    axios
      .get("http://localhost:7155/api/people")
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        // Handle errors here
      });
  }, []);

  return (
    <div>
      <h1>People</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <Link to={`/person/${person.id}`}>{person.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/movies">Movies</Link>
      <Link to="/persons">People</Link>
      <Link to="/genres">Genres</Link>
    </div>
  );
}

export default Homepage;
