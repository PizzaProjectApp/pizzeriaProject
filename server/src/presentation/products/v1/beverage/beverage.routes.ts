import { Router } from "express";
import { BeverageDatasourceImpl, BeverageRepositoryImpl } from "../../../../infrastructure";
import { BeverageController } from "./beverage.controller";

export class BeverageRoutes {
    static get routes(): Router {
        const router = Router();

        const database = new BeverageDatasourceImpl();
        const beverageRepository = new BeverageRepositoryImpl(database);

        const controller = new BeverageController(beverageRepository);

        //~> |Get a list of available beverages
        router.get("/", controller.getBeverages);

        //~> |Add a new beverage
        router.post("/", controller.createBeverage);

        //~> |Get an beverage by ID
        router.get("/:bvgid", controller.getBeverageById);

        //~> |Update an beverage by ID
        router.put("/:bvgid", controller.updateBeverageById);

        //~> |Partially Update an beverage by ID
        router.patch("/:bvgid", controller.partialUpdateBeverageById);

        //~> |Delete an beverage by ID
        router.delete("/:bvgid", controller.deleteBeverageById);

        return router;
    }
}
