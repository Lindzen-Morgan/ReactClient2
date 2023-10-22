import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

function Homepage() {
  return <h2>Homepage</h2>;
}

function MovieList() {
  return <h2>Movie List</h2>;
}

function PersonList() {
  return <h2>Person List</h2>;
}

function GenreList() {
  return <h2>Genre List</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/persons" element={<PersonList />} />
        <Route path="/genres" element={<GenreList />} />
      </Routes>
    </Router>
  );
}

export default App;
