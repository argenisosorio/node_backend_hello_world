# CRUD de Películas en Memoria con Node.js y Express

## Versiones

- **NodeJS**: v20.11.0  
- **NPM**: v10.2.4  

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