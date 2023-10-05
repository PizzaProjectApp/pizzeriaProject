import EmpanadaController from "../../controllers/empanada.controller";
import CustomRouter from "../../middlewares/CustomRouter";

//~~> | Empanada Controller
const empanadaController = new EmpanadaController();

export default class EmpanadaRouter extends CustomRouter {
    init() {
        /**
         * @swagger
         * components:
         *   schemas:
         *     Empanada:
         *       type: object
         *       properties:
         *         name:
         *           type: string
         *         description:
         *           type: string
         *         price:
         *           type: number
         *         status:
         *           type: boolean
         */

        /**
         * @swagger
         * tags:
         *   - name: Empanadas
         *     description: Operations about empanadas
         */
        /**
         * @swagger
         * /empanadas:
         *   post:
         *     summary: Add a new empanada
         *     tags:
         *       - Empanadas
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/Empanada'
         *     responses:
         *       201:
         *         description: Empanada added successfully
         *       400:
         *         description: Bad request
         */

        this.post("/", empanadaController.addEmpanada);

        /**
         * @swagger
         * /empanadas/{empid}:
         *   get:
         *     summary: Get an empanada by ID
         *     tags:
         *       - Empanadas
         *     parameters:
         *       - name: empid
         *         in: path
         *         required: true
         *         description: ID of the empanada to get
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Empanada retrieved successfully
         *       404:
         *         description: Empanada not found
         */

        this.get("/:empid", empanadaController.getEmpanadaById);

        /**
         * @swagger
         * /empanadas/{empname}:
         *   put:
         *     summary: Update an empanada by name
         *     tags:
         *       - Empanadas
         *     parameters:
         *       - name: empname
         *         in: path
         *         required: true
         *         description: Name of the empanada to update
         *         schema:
         *           type: string
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/Empanada'
         *     responses:
         *       200:
         *         description: Empanada updated successfully
         *       404:
         *         description: Empanada not found
         *       400:
         *         description: Bad request
         */

        this.put("/:empname", empanadaController.updateEmpanadas);

        /**
         * @swagger
         * /empanadas/{empname}:
         *   delete:
         *     summary: Delete an empanada by name
         *     tags:
         *       - Empanadas
         *     parameters:
         *       - name: empname
         *         in: path
         *         required: true
         *         description: Name of the empanada to delete
         *         schema:
         *           type: string
         *     responses:
         *       204:
         *         description: Empanada deleted successfully
         *       404:
         *         description: Empanada not found
         */

        this.delete("/:empname", empanadaController.deleteEmpanadas);
    }
}
