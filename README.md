# CRUD de Películas en Memoria con Node.js y Express

## Versiones

- **NodeJS**: v20.11.0  
- **NPM**: v10.2.4  

## Crear la base de datos

Conéctate a PostgreSQL y ejecuta:

```bash
# CREATE DATABASE tu_db OWNER tu_usuario;
```

Conéctate a la base de datos tu_db:

```bash
# \c tu_db;
```

Crea la tabla:

```bash
# CREATE TABLE peliculas (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  descripcion TEXT,
  año INTEGER,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Configura el archivo .env

```bash
DB_USER=tu_usuario
DB_HOST=localhost
DB_NAME=tu_db
DB_PASSWORD=tu_contraseña
DB_PORT=5432
```

## Probar la aplicación

1- Ejecute el siguiente comando para instalar las dependencias necesarias:

```bash
$ npm install
```

2- Ejecutar el servidor:

```bash
$ node server.js
```

3- Ejemplos de Uso con CURL:

Obtener todas las películas:

```bash
$ curl http://localhost:3000/movies
```

-----

Obtener una película específica

```bash
$ curl http://localhost:3000/movies/1
```

-----

Crear una nueva película

```bash
$ curl -X POST http://localhost:3000/movies -H "Content-Type: application/json" -d '{"title":"XXXXX","description":"XXXXXXX","year":2010}'
```

-----

Actualizar una película

```bash
$ curl -X PUT http://localhost:3000/movies/1 -H "Content-Type: application/json" -d '{"description":"ZZZZZZZZZZZ"}'
```

-----

Eliminar una película

```bash
$ curl -X DELETE http://localhost:3000/movies/1
```
