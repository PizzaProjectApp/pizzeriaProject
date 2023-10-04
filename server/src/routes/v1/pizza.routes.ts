import CustomRouter from "../../middlewares/CustomRouter";
import PizzaController from "../../controllers/pizza.controller";

//~~> | Product Controller
const pizzaController = new PizzaController();

export default class PizzaRouter extends CustomRouter {
    init() {
        /**
         * @swagger
         * components:
         *   schemas:
         *     Pizza:
         *       type: object
         *       properties:
         *         id:
         *           type: string
         *            description: the auto-generated
         *         name:
         *           type: string
         *           description: nose
         *             type: string
         *         description:
         *           type: string
         *           description: la description
         *       required:
         *         - name
         *         - description
         *       example:
         *         id: ni idea
         *         name: este mismo
         *
         */
        /**
         * @swagger
         * /tasks:
         *  get:
         *    summary: Retrieve all Pizzas
         *      responses:
         *        200:
         *          description: All Pizzas items with their details(data).
         *            content:
         *            application/json:
         *            schema: array
         *            items:
         *              $ref:'#components/schemas/Task'
         */
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
