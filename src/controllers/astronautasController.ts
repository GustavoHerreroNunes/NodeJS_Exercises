import { Request, Response } from "express";
import { database } from "../database";

const isEmpty = (name: string) => {
    return (name === '');
}

export class AstronautasController{
    signUp(request: Request, response: Response): Response{
        try{
            const { name } = request.body;

            if(isEmpty(name)){
                return response.status(203).json({"message": "Erro ao cadastrar astronauta - Nome não fonecido"});
            }else{
                database.push(name);
          
                return response.status(201).json({"message": "Astronauta cadastrado com sucesso!"});
            }

         }catch(error){
            return response.status(201).json({"message": `Erro ao cadastrar astronauta - ${error}`})
         }
    }

    consult(request: Request, response: Response): Response{
        return response.status(200).json(database);
    }
}
