import { DuplicatedProductError } from "../errors/errors";
import { empanadaModel } from "../data/mongodb/models/Empanada";

interface IEmpanada {
    name: String;
    description: String;
    price: Number;
    thumbnail: string[];
}

export default class EmpanadaService {
    readonly #empanadaModel;
    constructor() {
        this.#empanadaModel = empanadaModel;
    }

    addEmpanada = async (newEmpanada: IEmpanada): Promise<object> => {
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

            return addedEmpanada;
        } catch (error) {
            if (error instanceof DuplicatedProductError) {
                throw error;
            }
            throw error;
        }
    };

    getEmpanadas = async () => {
        try {
            return this.#empanadaModel.find().lean();
        } catch (error) {
            throw error;
        }
    };

    getEmpanadaById = async (id: string) => {
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
