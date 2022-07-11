import express from "express";
import { routes } from "./routes.js";

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3000, () => {
    console.log("Welcome to the ISS Registries System (IRS)!");
    console.log("");
    console.log("We'll start in a few moments...");
});
