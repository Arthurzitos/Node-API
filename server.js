import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();
const database = new DatabaseMemory();

server.post('/videos', (request, reply) => {
    const {title, description, duration }= request.body;
    database.create( {
        title: title,
        description: description,
        duration: duration,
    });

    console.log(database.list()); // lista o vídeo criado no terminal
    
    return reply.status(201).send();
});

server.get('/videos', () => {
    return 'Video listado';
});

server.put('/videos:id', () => {
    return 'Video atualizado';
});

server.delete('/videos:id', () => {
    return 'Video deletado';
});



server.listen({
    port: 3333,
});