import { Request, Response } from "express";
import {
    DuplicatedProductError,
    InvalidArgValuesError,
} from "../errors/errors";
import EmpanadaService from "../services/empanada.service";

export default class EmpanadaController {
    readonly #empanadaService;
    constructor() {
        this.#empanadaService = new EmpanadaService();
    }
    //Add new Empanada
    //~> |GET
    addEmpanada = async (req: Request, res: Response): Promise<void> => {
        try {
            const newProduct = req.body;

            await this.#empanadaService.addEmpanada(newProduct);

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
    getEmpanadaById = async (req: Request, res: Response): Promise<void> => {
        try {
            const EmpanadaId = req.params.empid;
            const response =
                await this.#empanadaService.getEmpanadaById(EmpanadaId);
            if (!response) {
                res.status(404).json({
                    message: `Not Found Empanada with id : ${EmpanadaId}`,
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
    getEmpanadas = async (_req: Request, res: Response): Promise<void> => {
        try {
            const response = await this.#empanadaService.getEmpanadas();
            res.json(response);
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
        }
    };

    //Update Empanada
    //~> |UPDATE
    updateEmpanadas = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, newData } = req.body;
            const response = await this.#empanadaService.updateEmpanada(
                name,
                newData
            );
            res.json(response);
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
        }
    };

    //Retrieve all Empanadas
    //~> |DELETE
    deleteEmpanadas = async (req: Request, res: Response): Promise<void> => {
        try {
            const EmpanadaName = req.params.empname;
            const response =
                await this.#empanadaService.deleteEmpanada(EmpanadaName);

            if (response.deletedCount === 0) {
                res.json({ message: "Empanada not found" });
                return;
            }

            res.json({ message: " Empanada Successfully Deleted" });
        } catch (error) {
            res.status(500).json({
                message: "Something went wrong",
            });
        }
    };
}
