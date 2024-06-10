// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//   response.write('oi')

//   return response.end();
// })

// server.listen(2121);

import { fastify } from 'fastify'

const server = fastify();

server.post('/videos', () => {
  return 'rota principal';
})

server.get('/videos', () => {
  return 'hello world';
})

// Route Parameter

server.put('/videos/:id', () => {
  return 'hello rocket';
})

server.delete('/videos/:id', () => {
  return 'hello rocket';
})

server.listen({
  port: 2121,
})