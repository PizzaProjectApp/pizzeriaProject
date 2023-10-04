import CustomRouter from "../../middlewares/CustomRouter";
import PizzaController from "../../controllers/pizza.controller";

//~~> | Product Controller
const pizzaController = new PizzaController();

export default class PizzaRouter extends CustomRouter {
    init() {
        /**
         * @swagger
         * tags:
         *   - name: Pizzas
         *     description: Operations about pizzas
         */

        /**
         * @swagger
         * /pizzas:
         *   get:
         *     summary: Get a list of available pizzas
         *     tags:
         *       - Pizzas
         *     responses:
         *       200:
         *         description: List of pizzas retrieved successfully
         *       500:
         *         description: Internal server error
         */

        //~> |Get a list of available pizzas
        this.get("/", pizzaController.getPizzas);

        /**
         * @swagger
         * /pizzas/{pid}:
         *   get:
         *     summary: Retrieve a single pizza by ID
         *     tags:
         *       - Pizzas
         *     parameters:
         *       - name: pid
         *         in: path
         *         required: true
         *         description: ID of the pizza to retrieve
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Pizza retrieved successfully
         *       404:
         *         description: Pizza not found
         */

        // Retrieve a single Pizza with ID
        this.get("/:pid", pizzaController.getPizzaById);

        /**
         * @swagger
         * /pizzas:
         *   post:
         *     summary: Add a new pizza
         *     tags:
         *       - Pizzas
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             required:
         *               - name
         *               - description
         *               - price
         *               - type
         *               - thumbnail
         *             properties:
         *               name:
         *                 type: string
         *                 description: Name of the pizza
         *               description:
         *                 type: string
         *                 description: Description of the pizza
         *               price:
         *                 type: number
         *                 description: Price of the pizza
         *               type:
         *                 type: string
         *                 description: Type of pizza ("whole", "half")
         *               thumbnail:
         *                 type: array
         *                 items:
         *                   type: string
         *                 description: Array of thumbnail URLs (["www.imagen1.com", "www.imagen2.com"])
         *     responses:
         *       201:
         *         description: Pizza added successfully
         *       400:
         *         description: Bad request
         */

        //~> |Add Pizza
        this.post("/", pizzaController.addPizza);

        /**
         * @swagger
         * /pizzas/{pname}:
         *   put:
         *     summary: Update a pizza by name
         *     tags:
         *       - Pizzas
         *     parameters:
         *       - name: pname
         *         in: path
         *         required: true
         *         description: Name of the pizza to update
         *         schema:
         *           type: string
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               name:
         *                 type: string
         *                 description: New name of the pizza
         *               description:
         *                 type: string
         *                 description: New description of the pizza
         *               price:
         *                 type: number
         *                 description: New price of the pizza
         *               type:
         *                 type: string
         *                 description: New type of pizza ("whole", "half")
         *               thumbnail:
         *                 type: array
         *                 items:
         *                   type: string
         *                 description: New array of thumbnail URLs
         *     responses:
         *       204:
         *         description: Pizza updated successfully
         *       404:
         *         description: Pizza not found
         */

        //~> |Put Pizzas
        this.put("/:pname", pizzaController.updatePizzas);

        /**
         * @swagger
         * /pizzas/{pname}:
         *   delete:
         *     summary: Delete a pizza by name
         *     tags:
         *       - Pizzas
         *     parameters:
         *       - name: pname
         *         in: path
         *         required: true
         *         description: Name of the pizza to delete
         *         schema:
         *           type: string
         *     responses:
         *       204:
         *         description: Pizza deleted successfully
         *       404:
         *         description: Pizza not found
         */

        //~> |Delete Pizza by name
        this.delete("/:pname", pizzaController.deletePizzas);
    }
}
