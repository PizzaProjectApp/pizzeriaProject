import { Router } from "express";
import { EmpanadaDatasourceImpl, EmpanadaRepositoryImpl } from "../../../../infrastructure";
import { EmpanadaController } from "./empanada.controller";

export class EmpanadaRoutes {
    static get routes(): Router {
        const router = Router();

        const database = new EmpanadaDatasourceImpl();
        const empanadaRepository = new EmpanadaRepositoryImpl(database);

        const controller = new EmpanadaController(empanadaRepository);

        //~> |Get a list of available empanadas
        router.get("/", controller.getEmpanadas);

        //~> |Add a new empanada
        router.post("/", controller.createEmpanada);

        //~> |Get an empanada by ID
        router.get("/:empid", controller.getEmpanadaById);

        //~> |Update an empanada by ID
        router.put("/:empid", controller.updateEmpanadaById);

        //~> |Partially Update an empanada by ID
        router.patch("/:empid", controller.partialUpdateEmpanadaById);

        //~> |Delete an empanada by ID
        router.delete("/:empid", controller.deleteEmpanadaById);

        return router;
    }
}
