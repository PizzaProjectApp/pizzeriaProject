import { Router } from "express";
import PizzaController from "../../controllers/pizza.controller";

//~~> | Pizza Controller
const pizzaController = new PizzaController();

export default class PizzaRouter {
    static get routes(): Router {
        const router = Router();

        //~> |Get a list of available pizzas
        router.get("/", pizzaController.getPizzas);

        // Retrieve a single Pizza with ID
        router.get("/:pid", pizzaController.getPizzaById);

        //~> |Add Pizza
        router.post("/", pizzaController.addPizza);

        //~> |Put Pizzas
        router.put("/:pid", pizzaController.updatePizza);

        //~> |Partially Update an pizza by ID
        router.patch("/:pid", pizzaController.partialUpdatePizzaById);

        //~> |Delete Pizza by ID
        router.delete("/:pid", pizzaController.deletePizzaById);

        return router;
    }
}
