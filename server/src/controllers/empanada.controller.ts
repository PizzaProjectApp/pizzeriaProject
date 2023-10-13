import { Request, Response } from "express";
import {
    DuplicatedProductError,
    InvalidArgValuesError,
} from "../errors/errors.error";
import EmpanadaService from "../services/empanada.service";

export default class EmpanadaController {
    readonly #empanadaService;
    constructor() {
        this.#empanadaService = new EmpanadaService();
    }
    //Add new Empanada
    //~> |GET
    addEmpanada = async (req: Request, res: Response) => {
        try {
            const requiredKeys = ["name", "description", "price", "thumbnail"];

            for (const key of requiredKeys) {
                if (!(key in req.body)) {
                    res.status(400).json({
                        message: `Missing required key: ${key}`,
                    });
                    return;
                }
            }
            const newEmpanada = req.body;

            await this.#empanadaService.addEmpanada(newEmpanada);

            res.json({ message: `Empanada Successfully Added` });
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

    // Retrieve a single Empanada with ID
    //~> |GET
    getEmpanadaById = async (req: Request, res: Response) => {
        try {
            const empanadaId = req.params.empid;
            const response =
                await this.#empanadaService.getEmpanadaById(empanadaId);
            if (!response) {
                res.status(404).json({
                    message: `Not Found Empanada with id : ${empanadaId}`,
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

    //Retrieve all Empanadas
    //~> |GET
    getEmpanadas = async (_req: Request, res: Response) => {
        try {
            const response = await this.#empanadaService.getEmpanadas();
            res.json(response);
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
            return;
        }
    };

    //Update Empanada
    //~> |UPDATE
    updateEmpanada = async (req: Request, res: Response) => {
        try {
            const empanadaId = req.params.empid;
            const newData = req.body;
            const response = await this.#empanadaService.updateEmpanadaById(
                empanadaId,
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

    //Partially Update Empanada
    //~> |PARTIALLY UPDATE
    partialUpdateEmpanadaById = async (req: Request, res: Response) => {
        try {
            const empanadaId = req.params.empid;
            const newData = req.body;
            const response = await this.#empanadaService.updateEmpanadaById(
                empanadaId,
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

    //Retrieve all Empanadas
    //~> |DELETE
    deleteEmpanadaById = async (req: Request, res: Response) => {
        try {
            const empanadaId = req.params.empnid;
            const response =
                await this.#empanadaService.deleteEmpanadaById(empanadaId);

            if (response.deletedCount === 0) {
                res.json({ message: "Empanada not found" });
                return;
            }

            res.json({ message: " Empanada Successfully Deleted" });
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
            return;
        }
    };
}
