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
 *         thumbnail:
 *           type: array
 *           items:
 *             type: string
 *           default: [""]
 *           description: Array of thumbnail URLs (["www.imagen1.com", "www.imagen2.com"])
 */
//~> |
/**
 * @swagger
 * tags:
 *   - name: Empanadas
 *     description: Operations related to empanadas
 */
//~> |
/**
 * @swagger
 * /empanadas:
 *   get:
 *     summary: Get a list of available empanadas
 *     tags:
 *       - Empanadas
 *     responses:
 *       200:
 *         description: List of empanadas retrieved successfully
 *       500:
 *         description: Internal server error
 */
//~> |
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
//~> |
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
//~> |
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
//~> |
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
