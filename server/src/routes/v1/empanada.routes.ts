import { Router } from "express";
import EmpanadaController from "../../controllers/empanada.controller";

//~~> | Empanada Controller
const empanadaController = new EmpanadaController();

export default class EmpanadaRouter {
    static get routes(): Router {
        const router = Router();

        //~> |Get a list of available empanadas
        router.get("/", empanadaController.getEmpanadas);

        //~> |Add a new empanada
        router.post("/", empanadaController.addEmpanada);

        //~> |Get an empanada by ID
        router.get("/:empid", empanadaController.getEmpanadaById);

        //~> |Update an empanada by ID
        router.put("/:empid", empanadaController.updateEmpanada);

        //~> |Partially Update an empanada by ID
        router.patch("/:empid", empanadaController.partialUpdateEmpanadaById);

        //~> |Delete an empanada by ID
        router.delete("/:empid", empanadaController.deleteEmpanadaById);

        return router;
    }
}
