import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();
const database = new DatabaseMemory();

server.post('/videos', (request, reply) => {
    database.create( {
        title: 'Video 01',
        description: 'Este é o vídeo 01',
        duration: 180
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