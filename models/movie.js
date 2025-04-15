const { v4: uuidv4 } = require('uuid');

// "Base de datos" en memoria
let moviesDB = [
  {
    id: '1',
    title: 'El Padrino',
    description: 'Crime drama about the Corleone mafia family',
    year: 1972
  },
  {
    id: '2',
    title: 'Pulp Fiction',
    description: 'Interconnected stories of criminals in Los Angeles',
    year: 1994
  }
];

class Movie {
  static getAll() {
    return moviesDB;
  }

  static getById(id) {
    return moviesDB.find(movie => movie.id === id);
  }

  static create(movieData) {
    const newMovie = {
      id: uuidv4(),
      ...movieData
    };
    moviesDB.push(newMovie);
    return newMovie;
  }

  static update(id, updateData) {
    const movieIndex = moviesDB.findIndex(movie => movie.id === id);
    if (movieIndex === -1) return null;
    
    moviesDB[movieIndex] = {
      ...moviesDB[movieIndex],
      ...updateData
    };
    
    return moviesDB[movieIndex];
  }

  static delete(id) {
    const movieIndex = moviesDB.findIndex(movie => movie.id === id);
    if (movieIndex === -1) return false;
    
    moviesDB.splice(movieIndex, 1);
    return true;
  }
}

module.exports = Movie;