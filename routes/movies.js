const express = require('express');
const router = express.Router();
const {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
} = require('../controllers/movies');

// CRUD Routes
router.get('/', getAllMovies);          // Obtener todas las películas
router.get('/:id', getMovieById);       // Obtener una película por ID
router.post('/', createMovie);          // Crear una nueva película
router.put('/:id', updateMovie);        // Actualizar una película
router.delete('/:id', deleteMovie);     // Eliminar una película

module.exports = router;