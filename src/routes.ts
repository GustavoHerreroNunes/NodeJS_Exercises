import { Router } from "express";
import { AstronautasController } from "./controllers/astronautasController";

const routes = Router();
const astronautasController = new AstronautasController();

routes.get('/astronautas', astronautasController.consult);

routes.post('/astronautas', astronautasController.signUp);

export { routes }
