import BeverageController from "../../controllers/beverage.controller";
import CustomRouter from "../../middlewares/CustomRouter";

//~~> | Empanada Controller
const beverageController = new BeverageController();

export default class BeverageRouter extends CustomRouter {
    init() {
        /**
         * @swagger
         * components:
         *   schemas:
         *     Beverage:
         *       type: object
         *       properties:
         *         name:
         *           type: string
         *           description: Name of the beverage
         *         description:
         *           type: string
         *           description: Description of the beverage
         *         price:
         *           type: number
         *           description: Price of the beverage
         *         category:
         *           type: string
         *           description: Category of beverage
         *         thumbnail:
         *           type: array
         *           items:
         *             type: string
         *           default: [""]
         *           description: Array of thumbnail URLs (["www.image1.com", "www.image2.com"])
         */

        /**
         * @swagger
         * tags:
         *   name: Beverages
         *   description: Operations related to beverages
         */

        /**
         * @swagger
         * /beverages:
         *   get:
         *     summary: Get a list of available beverages
         *     tags: [Beverages]
         *     responses:
         *       200:
         *         description: List of beverages retrieved successfully
         *       500:
         *         description: Internal server error
         */

        //~> |Get a list of available beverages
        this.get("/", beverageController.getBeverages);

        /**
         * @swagger
         * /beverages:
         *   post:
         *     summary: Add a new beverage
         *     tags: [Beverages]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/Beverage'
         *     responses:
         *       201:
         *         description: Beverage added successfully
         *       400:
         *         description: Bad request
         */
        //~> |Add a new beverage
        this.post("/", beverageController.addBeverage);

        /**
         * @swagger
         * /beverages/{bvgid}:
         *   get:
         *     summary: Get a beverage by ID
         *     tags: [Beverages]
         *     parameters:
         *       - name: bvgid
         *         in: path
         *         required: true
         *         description: ID of the beverage to get
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Beverage retrieved successfully
         *       404:
         *         description: Beverage not found
         */
        //~> |Get an beverage by ID
        this.get("/:bvgid", beverageController.getBeverageById);

        /**
         * @swagger
         * /beverages/{bvgname}:
         *   put:
         *     summary: Update a beverage by name
         *     tags: [Beverages]
         *     parameters:
         *       - name: bvgname
         *         in: path
         *         required: true
         *         description: Name of the beverage to update
         *         schema:
         *           type: string
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/Beverage'
         *     responses:
         *       204:
         *         description: Beverage updated successfully
         *       404:
         *         description: Beverage not found
         *       400:
         *         description: Bad request
         */

        //~> |Update an beverage by name
        this.put("/:bvgname", beverageController.updateBeverage);

        /**
         * @swagger
         * /beverages/{bvgname}:
         *   delete:
         *     summary: Delete a beverage by name
         *     tags: [Beverages]
         *     parameters:
         *       - name: bvgname
         *         in: path
         *         required: true
         *         description: Name of the beverage to delete
         *         schema:
         *           type: string
         *     responses:
         *       204:
         *         description: Beverage deleted successfully
         *       404:
         *         description: Beverage not found
         */

        //~> |Delete an beverage by name
        this.delete("/:bvgname", beverageController.deleteBeverages);
    }
}
