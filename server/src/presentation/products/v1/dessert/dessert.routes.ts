import { Router } from "express";

export default class DessertRoutes {
    static get routes(): Router {
        const router = Router();

        // //~> |Get a list of available desserts
        // router.get("/", dessertController.getDesserts);

        // //~> |Add a new dessert
        // router.post("/", dessertController.addDessert);

        // //~> |Get an dessert by ID
        // router.get("/:dstid", dessertController.getDessertById);

        // //~> |Update an dessert by ID
        // router.put("/:dstid", dessertController.updateDessert);

        // //~> |Partially Update an dessert by ID
        // router.patch("/:dstid", dessertController.partialUpdateDessertById);

        // //~> |Delete an dessert by ID
        // router.delete("/:dstid", dessertController.deleteDessertById);

        return router;
    }
}
