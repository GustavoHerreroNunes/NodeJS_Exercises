import database from "../database.js";

const astronautasController = {
    signUp: (request, response) => {
        try{
            const { name } = request.body;
            database.push(name);
      
            return response.status(201).json({"message": "Astronauta cadastrado com sucesso!"});
         }catch(error){
            return response.status(201).json({"message": `Erro ao cadastrar astronauta - ${error}`})
         }
    },

    consult: (request, response) => {
        return response.status(200).json(database);
    }
}

export default astronautasController