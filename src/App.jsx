import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import MovieList from "./MovieList"; // Import MovieList component
import PersonList from "./PersonList"; // Import PersonList component
import GenreList from "./GenreList"; // Import GenreList component
import PersonDetails from "./PersonDetailsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/movies" component={MovieList} /> {}
        <Route path="/persons" component={PersonList} /> {}
        <Route path="/genres" component={GenreList} /> {}
        <Route path="/person/:id" component={PersonDetails} />
      </Switch>
    </Router>
  );
}

export default App;
