# Basic API REST Application with Node.js - Hello World Example

## Versions

- **NodeJS**: v20.11.0  
- **NPM**: v10.2.4  

## Getting Started

### Install Packages

1- Run the following command to install the required dependencies:

```bash
$ npm install
```

2- Run the server

```bash
$ node server.js
```

You will see this message in the console:

Server running on http://localhost:3000

3- Test your API

GET: Open your browser in http://localhost:3000

You'll see: Hello from Node.js!

POST: Use Postman or curl to send data:
    
```bash
$ curl -X POST http://localhost:3000/greet -H "Content-Type: application/json" -d '{"name":"David"}'
```

Answer:

{"message":"Hi, David!"}
