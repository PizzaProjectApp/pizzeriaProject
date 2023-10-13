import { Router } from "express";
import BeverageController from "../../controllers/beverage.controller";

//~~> | Empanada Controller
const beverageController = new BeverageController();

export default class BeverageRouter {
    static get routes(): Router {
        const router = Router();

        //~> |Get a list of available beverages
        router.get("/", beverageController.getBeverages);

        //~> |Add a new beverage
        router.post("/", beverageController.addBeverage);

        //~> |Get an beverage by ID
        router.get("/:bvgid", beverageController.getBeverageById);

        //~> |Update an beverage by ID
        router.put("/:bvgid", beverageController.updateBeverageById);

        //~> |Partially Update an beverage by ID
        router.patch("/:bvgid", beverageController.partialUpdateBeverageById);

        //~> |Delete an beverage by ID
        router.delete("/:bvgid", beverageController.deleteBeverageById);

        return router;
    }
}
