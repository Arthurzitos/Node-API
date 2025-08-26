import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();

server.post('/videos', () => {
    return 'Video criado';
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