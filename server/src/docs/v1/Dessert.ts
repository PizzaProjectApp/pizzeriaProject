/**
 * @swagger
 * components:
 *   schemas:
 *     Dessert:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the dessert
 *         description:
 *           type: string
 *           description: Description of the dessert
 *         price:
 *           type: number
 *           description: Price of the dessert
 *         type:
 *           type: string
 *           enum: [cold, hot]
 *           default: cold
 *           description: Type of dessert (cold or hot)
 *         thumbnail:
 *           type: array
 *           items:
 *             type: string
 *           default: [""]
 *           description: Array of thumbnail URLs (["www.image1.com", "www.image2.com"])
 */
//~> |
/**
 * @swagger
 * tags:
 *   name: Desserts
 *   description: Operations related to desserts
 */
//~> |
/**
 * @swagger
 * /desserts:
 *   get:
 *     summary: Get a list of available desserts
 *     tags: [Desserts]
 *     responses:
 *       200:
 *         description: List of desserts retrieved successfully
 *       500:
 *         description: Internal server error
 */
//~> |
/**
 * @swagger
 * /desserts:
 *   post:
 *     summary: Add a new dessert
 *     tags: [Desserts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dessert'
 *     responses:
 *       201:
 *         description: Dessert added successfully
 *       400:
 *         description: Bad request
 */
//~> |
/**
 * @swagger
 * /desserts/{dstid}:
 *   get:
 *     summary: Get a dessert by ID
 *     tags: [Desserts]
 *     parameters:
 *       - name: dstid
 *         in: path
 *         required: true
 *         description: ID of the dessert to get
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dessert retrieved successfully
 *       404:
 *         description: Dessert not found
 */
//~> |
/**
 * @swagger
 * /desserts/{dstname}:
 *   put:
 *     summary: Update a dessert by name
 *     tags: [Desserts]
 *     parameters:
 *       - name: dstname
 *         in: path
 *         required: true
 *         description: Name of the dessert to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dessert'
 *     responses:
 *       204:
 *         description: Dessert updated successfully
 *       404:
 *         description: Dessert not found
 *       400:
 *         description: Bad request
 */
//~> |
/**
 * @swagger
 * /desserts/{dstname}:
 *   delete:
 *     summary: Delete a dessert by name
 *     tags: [Desserts]
 *     parameters:
 *       - name: dstname
 *         in: path
 *         required: true
 *         description: Name of the dessert to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Dessert deleted successfully
 *       404:
 *         description: Dessert not found
 */
