import axios from 'axios';

const BASE_URL = 'https://localhost:7155/Swagger/index.html';

// MovieLinks API calls
const movieLinksAPI = {
  createMovieLink: (movieLink) => axios.post(`${BASE_URL}/movielinks`, movieLink),
  updateMovieLink: (id, movieLink) => axios.put(`${BASE_URL}/movielinks/${id}`, movieLink),
  deleteMovieLink: (id) => axios.delete(`${BASE_URL}/movielinks/${id}`),
  createMovieGenreLink: (link) => axios.post(`${BASE_URL}/movielinks/create-link`, link),
};

// Movies API calls
const moviesAPI = {
  getAllMovies: () => axios.get(`${BASE_URL}/movies`),
  getMovieById: (id) => axios.get(`${BASE_URL}/movies/${id}`),
  createMovie: (movie) => axios.post(`${BASE_URL}/movies`, movie),
  updateMovie: (id, movie) => axios.put(`${BASE_URL}/movies/${id}`, movie),
  deleteMovie: (id) => axios.delete(`${BASE_URL}/movies/${id}`),
};


// Persons API calls
const personsAPI = {
    getAllPersons: () => axios.get(`${BASE_URL}/persons`),
    getPersonById: (id) => axios.get(`${BASE_URL}/persons/${id}`),
    createPerson: (person) => axios.post(`${BASE_URL}/persons`, person),
    updatePerson: (id, person) => axios.put(`${BASE_URL}/persons/${id}`, person),
    deletePerson: (id) => axios.delete(`${BASE_URL}/persons/${id}`),
  };
  
  // Genres API calls
  const genresAPI = {
    getAllGenres: () => axios.get(`${BASE_URL}/genres`),
    getGenreById: (id) => axios.get(`${BASE_URL}/genres/${id}`),
    createGenre: (genre) => axios.post(`${BASE_URL}/genres`, genre),
    updateGenre: (id, genre) => axios.put(`${BASE_URL}/genres/${id}`, genre),
    deleteGenre: (id) => axios.delete(`${BASE_URL}/genres/${id}`),
  };
  
  export { movieLinksAPI, moviesAPI, personsAPI, genresAPI };
