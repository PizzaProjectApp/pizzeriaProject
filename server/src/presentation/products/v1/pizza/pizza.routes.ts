import { Router } from "express";
import {
    PizzaDatasourceImpl,
    PizzaRepositoryImpl,
} from "../../../../infrastructure";
import { PizzaController } from "./pizza.controller";

export class PizzaRoutes {
    static get routes(): Router {
        const router = Router();

        const database = new PizzaDatasourceImpl();
        const pizzaRepository = new PizzaRepositoryImpl(database);

        const controller = new PizzaController(pizzaRepository);

        router.post("/", controller.createPizza);

        // //~> |Get a list of available pizzas
        // router.get("/", controller.getPizzas);

        // // Retrieve a single Pizza with ID
        // router.get("/:pid", controller.getPizzaById);

        // //~> |Add Pizza
        // router.post("/", controller.addPizza);

        // //~> |Put Pizzas
        // router.put("/:pid", controller.updatePizza);

        // //~> |Partially Update an pizza by ID
        // router.patch("/:pid", controller.partialUpdatePizzaById);

        // //~> |Delete Pizza by ID
        // router.delete("/:pid", controller.deletePizzaById);

        return router;
    }
}
