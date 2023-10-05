import { Request, Response } from "express";
import {
    DuplicatedProductError,
    InvalidArgValuesError,
} from "../errors/errors";
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
            const newBeverage = req.body;

            await this.#beverageService.addBeverage(newBeverage);

            res.json({ message: `Beverage Successfully Added` });
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
        }
    };

    //Update Beverage
    //~> |UPDATE
    updateBeverage = async (req: Request, res: Response): Promise<void> => {
        try {
            const beverageName = req.params.bvgname;
            const { newData } = req.body;
            const response = await this.#beverageService.updateBeverage(
                beverageName,
                newData
            );
            res.json(response);
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
        }
    };

    //Retrieve all Beverages
    //~> |DELETE
    deleteBeverages = async (req: Request, res: Response): Promise<void> => {
        try {
            const beverageName = req.params.bvgname;
            const response =
                await this.#beverageService.deleteBeverage(beverageName);

            if (response.deletedCount === 0) {
                res.json({ message: "Beverage not found" });
                return;
            }

            res.json({ message: " Beverage Successfully Deleted" });
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
        }
    };
}
