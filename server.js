import {createServer} from 'node:http';

const server = createServer (() => {
    response.write('Servidor rodando!');
    return response.end();
})

server.listen(3333);