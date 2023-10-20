import { Router } from "express";
import { DessertDatasourceImpl, DessertRepositoryImpl } from "../../../../infrastructure";
import { DessertController } from "./dessert.controller";

export class DessertRoutes {
    static get routes(): Router {
        const router = Router();

        const database = new DessertDatasourceImpl();
        const dessertRepository = new DessertRepositoryImpl(database);

        const controller = new DessertController(dessertRepository);

        //~> |Get a list of available desserts
        router.get("/", controller.getDesserts);

        //~> |Add a new dessert
        router.post("/", controller.createDessert);

        //~> |Get an dessert by ID
        router.get("/:dstid", controller.getDessertById);

        //~> |Update an dessert by ID
        router.put("/:dstid", controller.updateDessertById);

        //~> |Partially Update an dessert by ID
        router.patch("/:dstid", controller.partialUpdateDessertById);

        //~> |Delete an dessert by ID
        router.delete("/:dstid", controller.deleteDessertById);

        return router;
    }
}
