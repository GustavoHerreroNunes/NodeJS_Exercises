import { Router } from "express";
import astronautasController from "./controllers/astronautasController.js";

const routes = Router();

routes.get('/astronautas', astronautasController.consult);

routes.post('/astronautas', astronautasController.signUp);

export { routes }
