// Importamos la librería 'uuid' para generar identificadores únicos (UUID)
const { v4: uuidv4 } = require('uuid');

// Base de datos en memoria que almacena las películas
let moviesDB = [
  {
    id: '1', // Identificador único de la película
    title: 'El Padrino', // Título de la película
    description: 'Drama criminal sobre la familia mafiosa Corleone', // Descripción
    year: 1972 // Año de lanzamiento
  },
  {
    id: '2',
    title: 'Pulp Fiction',
    description: 'Historias interconectadas de criminales en Los Ángeles',
    year: 1994
  }
];

// Clase Movie que contiene métodos estáticos para realizar operaciones CRUD
class Movie {
  /**
   * Obtiene todas las películas de la base de datos.
   * @returns {Array} Lista de todas las películas.
   */
  static getAll() {
    return moviesDB;
  }

  /**
   * Busca una película por su ID.
   * @param {string} id - El ID de la película a buscar.
   * @returns {Object|undefined} La película encontrada o undefined si no existe.
   */
  static getById(id) {
    return moviesDB.find(movie => movie.id === id);
  }

  /**
   * Crea una nueva película y la agrega a la base de datos.
   * @param {Object} movieData - Datos de la nueva película (title, description, year).
   * @returns {Object} La película recién creada.
   */
  static create(movieData) {
    const newMovie = {
      id: uuidv4(), // Genera un ID único para la nueva película
      ...movieData // Combina los datos proporcionados con el nuevo ID
    };
    moviesDB.push(newMovie); // Agrega la nueva película a la base de datos
    return newMovie; // Devuelve la película creada
  }

  /**
   * Actualiza una película existente por su ID.
   * @param {string} id - El ID de la película a actualizar.
   * @param {Object} updateData - Datos a actualizar (title, description, year).
   * @returns {Object|null} La película actualizada o null si no se encuentra.
   */
  static update(id, updateData) {
    const movieIndex = moviesDB.findIndex(movie => movie.id === id); // Busca el índice de la película
    if (movieIndex === -1) return null; // Si no se encuentra, devuelve null
    
    // Actualiza los datos de la película combinando los existentes con los nuevos
    moviesDB[movieIndex] = {
      ...moviesDB[movieIndex],
      ...updateData
    };
    
    return moviesDB[movieIndex]; // Devuelve la película actualizada
  }

  /**
   * Elimina una película por su ID.
   * @param {string} id - El ID de la película a eliminar.
   * @returns {boolean} True si la película fue eliminada, false si no se encuentra.
   */
  static delete(id) {
    const movieIndex = moviesDB.findIndex(movie => movie.id === id); // Busca el índice de la película
    if (movieIndex === -1) return false; // Si no se encuentra, devuelve false
    
    moviesDB.splice(movieIndex, 1); // Elimina la película del arreglo
    return true; // Devuelve true para indicar que la eliminación fue exitosa
  }
}

// Exporta la clase Movie para que pueda ser utilizada en otras partes de la aplicación
module.exports = Movie;
