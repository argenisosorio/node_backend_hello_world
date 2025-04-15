// Carga las variables de entorno desde un archivo .env
require('dotenv').config();

// Importa el módulo 'pg' para manejar conexiones a PostgreSQL
const { Pool } = require('pg');

// Configuración del pool de conexiones a PostgreSQL
// Los valores se obtienen de las variables de entorno definidas en el archivo .env
const pool = new Pool({
  user: process.env.DB_USER,       // Usuario de la base de datos
  host: process.env.DB_HOST,       // Host donde se encuentra la base de datos
  database: process.env.DB_NAME,   // Nombre de la base de datos
  password: process.env.DB_PASSWORD, // Contraseña del usuario de la base de datos
  port: process.env.DB_PORT,       // Puerto en el que escucha PostgreSQL
});

// Prueba de conexión inicial para verificar que la base de datos está accesible
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    // Si ocurre un error, se imprime en la consola
    console.error('Error al conectar a PostgreSQL:', err);
  } else {
    // Si la conexión es exitosa, se imprime la fecha y hora actual del servidor
    console.log('Conexión exitosa a PostgreSQL:', res.rows[0]);
  }
});

// Exporta el pool de conexiones para que pueda ser utilizado en otras partes de la aplicación
module.exports = pool;