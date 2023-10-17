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

        //~> |Add Pizza
        router.post("/", controller.createPizza);

        //~> |Get a list of available pizzas
        router.get("/", controller.getPizzas);

        // Retrieve a single Pizza with ID
        router.get("/:pid", controller.getPizzaById);

        //~> |Put Pizzas
        router.put("/:pid", controller.updatePizzaById);

        // //~> |Partially Update an pizza by ID
        // router.patch("/:pid", controller.partialUpdatePizzaById);

        //~> |Delete Pizza by ID
        router.delete("/:pid", controller.deletePizzaById);

        return router;
    }
}
