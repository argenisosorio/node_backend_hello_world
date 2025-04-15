// Importamos el pool de conexión a la base de datos desde la configuración
const pool = require('../config/db');

// Clase Movie que contiene métodos estáticos para realizar operaciones CRUD
// (Crear, Leer, Actualizar, Eliminar) en la tabla "peliculas" de la base de datos.
class Movie {
  /**
   * Obtiene todas las películas de la base de datos.
   * @returns {Array} Lista de todas las películas.
   */
  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM peliculas ORDER BY id');
    return rows; // Devuelve todas las filas obtenidas de la consulta
  }

  /**
   * Busca una película por su ID.
   * @param {number} id - El ID de la película a buscar.
   * @returns {Object|undefined} La película encontrada o undefined si no existe.
   */
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM peliculas WHERE id = $1', [id]);
    return rows[0]; // Devuelve la primera fila encontrada o undefined si no hay resultados
  }

  /**
   * Crea una nueva película en la base de datos.
   * @param {Object} movieData - Datos de la nueva película (title, description, year).
   * @param {string} movieData.title - Título de la película.
   * @param {string} movieData.description - Descripción de la película.
   * @param {number} movieData.year - Año de lanzamiento de la película.
   * @returns {Object} La película recién creada.
   */
  static async create({ title, description, year }) {
    const { rows } = await pool.query(
      'INSERT INTO peliculas (titulo, descripcion, año) VALUES ($1, $2, $3) RETURNING *',
      [title, description, year]
    );
    return rows[0]; // Devuelve la película creada
  }

  /**
   * Actualiza una película existente en la base de datos.
   * @param {number} id - El ID de la película a actualizar.
   * @param {Object} updateData - Datos a actualizar (title, description, year).
   * @param {string} [updateData.title] - Nuevo título de la película (opcional).
   * @param {string} [updateData.description] - Nueva descripción de la película (opcional).
   * @param {number} [updateData.year] - Nuevo año de lanzamiento de la película (opcional).
   * @returns {Object|null} La película actualizada o null si no se encuentra.
   */
  static async update(id, { title, description, year }) {
    const { rows } = await pool.query(
      `UPDATE peliculas 
       SET titulo = COALESCE($1, titulo), 
           descripcion = COALESCE($2, descripcion), 
           año = COALESCE($3, año)
       WHERE id = $4
       RETURNING *`,
      [title, description, year, id]
    );
    return rows[0]; // Devuelve la película actualizada o null si no se encuentra
  }

  /**
   * Elimina una película de la base de datos por su ID.
   * @param {number} id - El ID de la película a eliminar.
   * @returns {boolean} True si la película fue eliminada, false si no se encuentra.
   */
  static async delete(id) {
    const { rowCount } = await pool.query('DELETE FROM peliculas WHERE id = $1', [id]);
    return rowCount > 0; // Devuelve true si se eliminó al menos una fila
  }
}

// Exportamos la clase Movie para que pueda ser utilizada en otras partes de la aplicación
module.exports = Movie;