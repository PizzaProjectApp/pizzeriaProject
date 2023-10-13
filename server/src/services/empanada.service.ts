import { DuplicatedProductError } from "../errors/errors.error";
import { empanadaModel } from "../data/mongodb/models/Empanada";

interface IEmpanada {
    name: string;
    description: string;
    price: number;
    thumbnail: string[];
}

export default class EmpanadaService {
    readonly #empanadaModel;
    constructor() {
        this.#empanadaModel = empanadaModel;
    }

    addEmpanada = async (newEmpanada: IEmpanada): Promise<IEmpanada> => {
        try {
            const existingEmpanada = await this.#empanadaModel.findOne({
                name: newEmpanada.name,
                description: newEmpanada.description,
                price: newEmpanada.price,
            });

            if (existingEmpanada) {
                throw new DuplicatedProductError("");
            }

            const addedEmpanada = await this.#empanadaModel.create(newEmpanada);

            const result: IEmpanada = {
                name: addedEmpanada.name,
                description: addedEmpanada.description,
                price: addedEmpanada.price,
                thumbnail: addedEmpanada.thumbnail || [""],
            };

            return result;
        } catch (error) {
            if (error instanceof DuplicatedProductError) {
                throw error;
            }
            throw error;
        }
    };

    getEmpanadas = async (): Promise<IEmpanada> => {
        try {
            return this.#empanadaModel.find().lean();
        } catch (error) {
            throw error;
        }
    };

    getEmpanadaById = async (id: string): Promise<IEmpanada | null> => {
        try {
            return this.#empanadaModel.findById({ _id: id }).lean();
        } catch (error) {
            throw error;
        }
    };

    //Update a Empanada by id
    updateEmpanadaById = async (
        id: string,
        newData: Partial<IEmpanada>,
        usePatch: boolean = false
    ): Promise<object> => {
        try {
            const updatedEmpanada = await this.#empanadaModel.findOneAndUpdate(
                { _id: id },
                usePatch ? { $set: newData } : newData,
                { new: true }
            );

            if (!updatedEmpanada) {
                return { message: "Empanada not found." };
            }

            return {
                message: "Empanada successfully updated.",
                updatedEmpanada,
            };
        } catch (error) {
            throw error;
        }
    };

    deleteEmpanadaById = async (id: string): Promise<any> => {
        try {
            return await this.#empanadaModel.deleteOne({ _id: id });
        } catch (error) {
            throw error;
        }
    };
}
