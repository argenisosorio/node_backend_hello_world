const Movie = require('../models/movie');

const getAllMovies = (req, res) => {
  try {
    const movies = Movie.getAll();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMovieById = (req, res) => {
  try {
    const movie = Movie.getById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createMovie = (req, res) => {
  try {
    const { title, description, year } = req.body;
    
    if (!title || !description || !year) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
    
    const newMovie = Movie.create({ title, description, year });
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMovie = (req, res) => {
  try {
    const updatedMovie = Movie.update(req.params.id, req.body);
    if (!updatedMovie) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }
    res.json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMovie = (req, res) => {
  try {
    const success = Movie.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
};