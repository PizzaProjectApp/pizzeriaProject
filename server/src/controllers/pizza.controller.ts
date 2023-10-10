import { Request, Response } from "express";
import PizzaService from "../services/pizza.service";
import {
    DuplicatedProductError,
    InvalidArgValuesError,
} from "../errors/errors.error";

export default class PizzaController {
    readonly #pizzaService;
    constructor() {
        this.#pizzaService = new PizzaService();
    }

    //Add new Pizza
    //~> |GET
    addPizza = async (req: Request, res: Response): Promise<void> => {
        try {
            const requiredKeys = [
                "name",
                "description",
                "price",
                "type",
                "thumbnail",
            ];

            for (const key of requiredKeys) {
                if (!(key in req.body)) {
                    res.status(400).json({
                        message: `Missing required key: ${key}`,
                    });
                    return;
                }
            }
            const newProduct = req.body;

            await this.#pizzaService.addPizza(newProduct);

            res.json({ message: `Pizza Successfully Added` });
        } catch (error) {
            if (error instanceof InvalidArgValuesError) {
                res.status(400).json({ message: "Invalid argument values" });
                return;
            } else if (error instanceof DuplicatedProductError) {
                res.status(400).json({ message: "Duplicated Product" });
                return;
            }
            res.status(500).json({ message: "Something went wrong" });
            return;
        }
    };

    // Retrieve an single Pizza with ID
    //~> |GET
    getPizzaById = async (req: Request, res: Response): Promise<void> => {
        try {
            const pizzaId = req.params.pid;
            const response = await this.#pizzaService.getPizzaById(pizzaId);
            if (!response) {
                res.status(404).json({
                    message: `Not Found Pizza with id : ${pizzaId}`,
                });
                return;
            }
            res.json(response);
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
            return;
        }
    };

    //Retrieve all Pizzas
    //~> |GET
    getPizzas = async (_req: Request, res: Response): Promise<void> => {
        try {
            const response = await this.#pizzaService.getPizzas();
            res.json(response);
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
            return;
        }
    };

    //Update Pizza
    //~> |UPDATE
    updatePizza = async (req: Request, res: Response): Promise<void> => {
        try {
            const pizzaId = req.params.pid;
            const newData = req.body;
            const response = await this.#pizzaService.updatePizzaById(
                pizzaId,
                newData
            );
            res.json(response);
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
            return;
        }
    };

    //Partially Update Pizza
    //~> |PARTIALLY UPDATE
    partialUpdatePizzaById = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const pizzaId = req.params.pid;
            const newData = req.body;
            const response = await this.#pizzaService.updatePizzaById(
                pizzaId,
                newData,
                true
            );
            res.json(response);
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
            return;
        }
    };

    //Delete an single Pizza by ID
    //~> |DELETE
    deletePizzaById = async (req: Request, res: Response): Promise<void> => {
        try {
            const pizzaId = req.params.pid;
            const response = await this.#pizzaService.deletePizzaById(pizzaId);

            if (response.deletedCount === 0) {
                res.json({ message: "Pizza not found" });
                return;
            }

            res.json({ message: " Pizza Successfully Deleted" });
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
            return;
        }
    };
    // //Get all Pizza with specified limit/page/query/sort
    // //~> |GET
    // getPizzasPaginated = async (req: Request, res: Response): Promise<void> => {
    //     try {
    //         const products = await this.#pizzaService.getPizzasPaginated(
    //             req.query
    //         );
    //         res.json(products);
    //     } catch (error) {
    //         res.status(500).json({ message: "Something went wrong" });
    //     }
    // };
}
