import { Router } from "express";

const routes = Router();

let database = ['Star Lord', 'Gamora', 'Groot', 'Drax', 'Nebulosa'];

routes.get('/astronautas', (request, response) => {
   return response.status(200).json(database);
});

routes.post('/astronautas', (request, response) => {
   try{
      const { name } = request.body;
      database.push(name);

      return response.status(201).json({"message": "Astronauta cadastrado com sucesso!"});
   }catch(error){
      return response.status(201).json({"message": `Erro ao cadastrar astronauta - ${error}`})
   }
});

export { routes }
