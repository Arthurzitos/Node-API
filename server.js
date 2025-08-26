// Criando server nativo com Node puro

// import {createServer} from 'node:http';

// const server = createServer ((request, response) => {
//     response.write('Servidor rodando!');
//     return response.end();
// })

// server.listen(3333);

// ------------------------------------------>

// Criando server utilizando o Framework Fastify:

import { fastify } from 'fastify';

const server = fastify();

server.get('/', () => {
    return 'Hello World!';
});

server.get('/hello', () => {
    return 'Hello User!';
});

server.get('/node', () => {
    return 'Hello Node.js!';
});

server.listen({
    port: 3333,
});