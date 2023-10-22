import React, { useState, useEffect } from "react";
import axios from "axios";

function Homepage() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // Fetch the list of people from your API
    axios.get("https://localhost:7155/api/people")
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
            <a href={`/person/${person.id}`}>{person.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;
