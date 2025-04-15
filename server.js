// Importamos el módulo 'express' para crear el servidor
const express = require('express');

// Importamos el enrutador de películas desde el archivo de rutas
const moviesRouter = require('./routes/movies');

// Creamos una instancia de la aplicación Express
const app = express();

// Definimos el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Middleware para procesar datos en formato JSON en las solicitudes
app.use(express.json());

// Rutas
// Asociamos el enrutador de películas a la ruta base '/movies'
// Todas las rutas definidas en 'moviesRouter' estarán disponibles bajo '/movies'
app.use('/movies', moviesRouter);

// Manejo de errores
// Middleware para capturar errores y devolver una respuesta con código 500
app.use((err, req, res, next) => {
  console.error(err.stack); // Imprime el error en la consola para depuración
  res.status(500).json({ error: 'Algo salió mal!' }); // Respuesta genérica de error
});

// Iniciar servidor
// Inicia el servidor y lo pone a escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor de películas corriendo en http://localhost:${PORT} 🎬`);
});
