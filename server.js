import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();

const database = new DatabaseMemory();

server.post('/videos', (request, reply) => {
  const {title, description, duration } = request.body;

  database.create({
    // sort answers - when the name is equal of propery can use in this way.
    title,
    description,
    duration,
  })

  return reply.status(201).send();
})

server.get('/videos', (request) => {
  const search = request.query.search;

  const videos = database.list(search);

  return videos;
})

server.put('/videos/:id', (request, reply) => {
  const videoId = request.params.id;
  const {title, description, duration } = request.body;

  const video = database.update(videoId, {
    title,
    description,
    duration,
  })

  return reply.status(204).send();
})

server.delete('/videos/:id', (request, reply) => {
  const id = request.params.id;

  database.delete(id);

  return reply.status(204).send();
})

server.listen({
  port: 2121,
})