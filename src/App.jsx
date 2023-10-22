import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import PersonDetails from "./PersonDetailsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/person/:id" component={PersonDetails} />
      </Switch>
    </Router>
  );
}

export default App;
