import { Request, Response } from "express";
import {
    DuplicatedProductError,
    InvalidArgValuesError,
} from "../errors/errors.error";
import DessertService from "../services/dessert.service";

export default class DessertController {
    readonly #dessertService;
    constructor() {
        this.#dessertService = new DessertService();
    }
    //Add new Dessert
    //~> |GET
    addDessert = async (req: Request, res: Response): Promise<void> => {
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
            const newDessert = req.body;

            await this.#dessertService.addDessert(newDessert);

            res.json({ message: `Dessert Successfully Added` });
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

    // Retrieve a single Dessert with ID
    //~> |GET
    getDessertById = async (req: Request, res: Response): Promise<void> => {
        try {
            const dessertId = req.params.dstid;
            const response =
                await this.#dessertService.getDessertById(dessertId);
            if (!response) {
                res.status(404).json({
                    message: `Not Found Dessert with id : ${dessertId}`,
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

    //Retrieve all Desserts
    //~> |GET
    getDesserts = async (_req: Request, res: Response): Promise<void> => {
        try {
            const response = await this.#dessertService.getDesserts();
            res.json(response);
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
            return;
        }
    };

    //Update Dessert
    //~> |UPDATE
    updateDessert = async (req: Request, res: Response): Promise<void> => {
        try {
            const dessertId = req.params.dstid;
            const newData = req.body;
            const response = await this.#dessertService.updateDessertById(
                dessertId,
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

    //Partially Update Dessert
    //~> |PARTIALLY UPDATE
    partialUpdateDessertById = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const dessertId = req.params.dstid;
            const newData = req.body;
            const response = await this.#dessertService.updateDessertById(
                dessertId,
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

    //Retrieve all Desserts
    //~> |DELETE
    deleteDessertById = async (req: Request, res: Response): Promise<void> => {
        try {
            const dessertId = req.params.dstid;
            const response =
                await this.#dessertService.deleteDessertById(dessertId);

            if (response.deletedCount === 0) {
                res.json({ message: "Dessert not found" });
                return;
            }

            res.json({ message: " Dessert Successfully Deleted" });
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
            return;
        }
    };
}
