// Importamos el módulo 'express' para crear rutas
const express = require('express');

// Creamos un enrutador de Express para manejar las rutas relacionadas con películas
const router = express.Router();

// Importamos los controladores que contienen la lógica para manejar las solicitudes
const {
  getAllMovies,   // Controlador para obtener todas las películas
  getMovieById,   // Controlador para obtener una película por su ID
  createMovie,    // Controlador para crear una nueva película
  updateMovie,    // Controlador para actualizar una película existente
  deleteMovie     // Controlador para eliminar una película
} = require('../controllers/movies');

// Definimos las rutas CRUD (Crear, Leer, Actualizar, Eliminar) para las películas

/**
 * Ruta para obtener todas las películas.
 * Método HTTP: GET
 * URL: /
 * Controlador: getAllMovies
 */
router.get('/', getAllMovies);

/**
 * Ruta para obtener una película por su ID.
 * Método HTTP: GET
 * URL: /:id
 * Controlador: getMovieById
 */
router.get('/:id', getMovieById);

/**
 * Ruta para crear una nueva película.
 * Método HTTP: POST
 * URL: /
 * Controlador: createMovie
 */
router.post('/', createMovie);

/**
 * Ruta para actualizar una película existente.
 * Método HTTP: PUT
 * URL: /:id
 * Controlador: updateMovie
 */
router.put('/:id', updateMovie);

/**
 * Ruta para eliminar una película por su ID.
 * Método HTTP: DELETE
 * URL: /:id
 * Controlador: deleteMovie
 */
router.delete('/:id', deleteMovie);

// Exportamos el enrutador para que pueda ser utilizado en otras partes de la aplicación
module.exports = router;
