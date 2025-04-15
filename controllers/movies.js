// Importamos el modelo Movie, que contiene las operaciones CRUD para la base de datos
const Movie = require('../models/movie');

/**
 * Controlador para obtener todas las películas.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.getAll(); // Obtiene todas las películas desde la base de datos
    res.json(movies); // Devuelve las películas en formato JSON
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores del servidor
  }
};

/**
 * Controlador para obtener una película por su ID.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.getById(req.params.id); // Busca la película por ID
    if (!movie) {
      return res.status(404).json({ error: 'Película no encontrada' }); // Si no existe, devuelve un error 404
    }
    res.json(movie); // Devuelve la película encontrada en formato JSON
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores del servidor
  }
};

/**
 * Controlador para crear una nueva película.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
const createMovie = async (req, res) => {
  try {
    const { title, description, year } = req.body; // Extrae los datos del cuerpo de la solicitud
    
    // Verifica que todos los campos obligatorios estén presentes
    if (!title || !description || !year) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' }); // Devuelve un error 400 si faltan datos
    }
    
    const newMovie = await Movie.create({ title, description, year }); // Crea una nueva película
    res.status(201).json(newMovie); // Devuelve la película creada con un código 201
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores del servidor
  }
};

/**
 * Controlador para actualizar una película existente.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.update(req.params.id, req.body); // Actualiza la película con los datos proporcionados
    if (!updatedMovie) {
      return res.status(404).json({ error: 'Película no encontrada' }); // Si no existe, devuelve un error 404
    }
    res.json(updatedMovie); // Devuelve la película actualizada en formato JSON
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores del servidor
  }
};

/**
 * Controlador para eliminar una película por su ID.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
const deleteMovie = async (req, res) => {
  try {
    const success = await Movie.delete(req.params.id); // Elimina la película por ID
    if (!success) {
      return res.status(404).json({ error: 'Película no encontrada' }); // Si no existe, devuelve un error 404
    }
    res.status(204).end(); // Devuelve un código 204 sin contenido
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores del servidor
  }
};

// Exportamos los controladores para que puedan ser utilizados en las rutas
module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
};