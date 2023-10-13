import { Router } from "express";
import DessertController from "../../controllers/dessert.controller";

//~~> | Dessert Controller
const dessertController = new DessertController();

export default class DessertRouter {
    static get routes(): Router {
        const router = Router();

        //~> |Get a list of available desserts
        router.get("/", dessertController.getDesserts);

        //~> |Add a new dessert
        router.post("/", dessertController.addDessert);

        //~> |Get an dessert by ID
        router.get("/:dstid", dessertController.getDessertById);

        //~> |Update an dessert by ID
        router.put("/:dstid", dessertController.updateDessert);

        //~> |Partially Update an dessert by ID
        router.patch("/:dstid", dessertController.partialUpdateDessertById);

        //~> |Delete an dessert by ID
        router.delete("/:dstid", dessertController.deleteDessertById);

        return router;
    }
}
