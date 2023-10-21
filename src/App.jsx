import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GenresPage from './GenresPage';
import MoviesPage from './MoviesPage';
import PeoplePage from './PeoplePage';
import PersonDetailsPage from './PersonDetailsPage'; // Make sure to import PersonDetailsPage

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/person/:id" component={PersonDetailsPage} />
          <Route path="/genres" component={GenresPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route path="/" component={PeoplePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
