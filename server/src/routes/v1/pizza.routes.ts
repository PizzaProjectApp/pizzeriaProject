import CustomRouter from "../../middlewares/CustomRouter";
import PizzaController from "../../controllers/pizza.controller";

//~~> | Pizza Controller
const pizzaController = new PizzaController();

export default class PizzaRouter extends CustomRouter {
    init() {
        //~> |Get a list of available pizzas
        this.get("/", pizzaController.getPizzas);

        // Retrieve a single Pizza with ID
        this.get("/:pid", pizzaController.getPizzaById);

        //~> |Add Pizza
        this.post("/", pizzaController.addPizza);

        //~> |Put Pizzas
        this.put("/:pid", pizzaController.updatePizzas);

        //~> |Partially Update an pizza by id
        this.patch("/:pid", pizzaController.partialUpdatePizzaById);

        //~> |Delete Pizza by name
        this.delete("/:pid", pizzaController.deletePizzas);
    }
}
