import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import MovieList from "./MovieList"; // Import your MovieList component
import PersonList from "./PersonList"; // Import your PersonList component
import GenreList from "./GenreList"; // Import your GenreList component
import PersonDetails from "./PersonDetailsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/movies" component={MovieList} /> {/* Add this route */}
        <Route path="/persons" component={PersonList} /> {/* Add this route */}
        <Route path="/genres" component={GenreList} /> {/* Add this route */}
        <Route path="/person/:id" component={PersonDetails} />
      </Switch>
    </Router>
  );
}

export default App;
