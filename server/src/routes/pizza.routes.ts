import CustomRouter from "../middlewares/CustomRouter";
import PizzaController from "../controllers/pizza.controller";

//~~> | Product Controller
const pizzaController = new PizzaController();

export default class PizzaRouter extends CustomRouter {
    init() {
        //~> |Get Pizzas
        this.get("/", pizzaController.getPizzas);

        // Retrieve a single Pizza with ID
        this.get("/:pid", pizzaController.getPizzaById);

        //~> |Add Pizza
        this.post("/", pizzaController.addPizza);

        //~> |Put Pizzas
        this.put("/:pname", pizzaController.updatePizzas);

        //~> |Delete Pizzas
        this.delete("/:pname", pizzaController.deletePizzas);
    }
}
