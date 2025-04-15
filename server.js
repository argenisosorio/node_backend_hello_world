const express = require('express');
const moviesRouter = require('./routes/movies');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Rutas
app.use('/movies', moviesRouter);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor de películas corriendo en http://localhost:${PORT} 🎬`);
});