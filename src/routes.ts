import express from 'express';

const routes= express.Router();

routes.get('/', (request, response) => {
  return response.json({messsage: "hello worldd"})
})

export default routes;