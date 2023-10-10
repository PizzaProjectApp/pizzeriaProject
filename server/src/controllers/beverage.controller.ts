import { Request, Response } from "express";
import {
    DuplicatedProductError,
    InvalidArgValuesError,
} from "../errors/errors.error";
import BeverageService from "../services/beverage.service";

export default class BeverageController {
    readonly #beverageService;
    constructor() {
        this.#beverageService = new BeverageService();
    }
    //Add new Beverage
    //~> |GET
    addBeverage = async (req: Request, res: Response): Promise<void> => {
        try {
            const requiredKeys = [
                "name",
                "description",
                "price",
                "category",
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

            const newBeverage = req.body;

            await this.#beverageService.addBeverage(newBeverage);

            res.json({ message: `Beverage Successfully Added` });
        } catch (error) {
            if (error instanceof InvalidArgValuesError) {
                res.status(400).json({ message: "Invalid argument values" });
                return;
            } else if (error instanceof DuplicatedProductError) {
                res.status(409).json({ message: "Duplicated Product" });
                return;
            }
            res.status(500).json({ message: "Something went wrong" });
            return;
        }
    };

    // Retrieve a single Beverage with ID
    //~> |GET
    getBeverageById = async (req: Request, res: Response): Promise<void> => {
        try {
            const beverageId = req.params.bvgid;
            const response =
                await this.#beverageService.getBeverageById(beverageId);
            if (!response) {
                res.status(404).json({
                    message: `Not Found Beverage with id : ${beverageId}`,
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

    //Retrieve all Beverages
    //~> |GET
    getBeverages = async (_req: Request, res: Response): Promise<void> => {
        try {
            const response = await this.#beverageService.getBeverages();
            res.json(response);
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
            return;
        }
    };

    //Update Beverage
    //~> |UPDATE
    updateBeverageById = async (req: Request, res: Response): Promise<void> => {
        try {
            const beverageId = req.params.bvgid;
            const newData = req.body;
            const response = await this.#beverageService.updateBeverageById(
                beverageId,
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

    //Partially Update Beverage
    //~> |PARTIALLY UPDATE
    partialUpdateBeverageById = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const beverageId = req.params.bvgid;
            const newData = req.body;
            const response = await this.#beverageService.updateBeverageById(
                beverageId,
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

    //Retrieve all Beverages
    //~> |DELETE
    deleteBeverageById = async (req: Request, res: Response): Promise<void> => {
        try {
            const beverageId = req.params.bvgid;
            const response =
                await this.#beverageService.deleteBeverageById(beverageId);

            if (response.deletedCount === 0) {
                res.json({ message: "Beverage not found" });
                return;
            }

            res.json({ message: " Beverage Successfully Deleted" });
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
            return;
        }
    };
}
