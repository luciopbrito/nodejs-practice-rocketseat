// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//   response.write('oi')

//   return response.end();
// })

// server.listen(2121);

import { fastify } from 'fastify'

const server = fastify();

server.get('/', () => {
  return 'rota principal';
})
server.get('/hello', () => {
  return 'hello world';
})
server.get('/rocketseat', () => {
  return 'hello rocket';
})

server.listen({
  port: 2121,
})