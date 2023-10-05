import { DuplicatedProductError } from "../errors/errors";
import { empanadaModel } from "../models/Empanada";

interface IEmpanada {
    name: String;
    description: String;
    price: Number;
}

export default class EmpanadaService {
    readonly #empanadaModel;
    constructor() {
        this.#empanadaModel = empanadaModel;
    }

    // Add a new Empanada
    addEmpanada = async (newEmpanada: IEmpanada): Promise<object> => {
        try {
            const existingEmpanada = await this.#empanadaModel.findOne({
                name: newEmpanada.name,
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
    //Get a list of available empanadas
    getEmpanadas = async () => {
        try {
            return this.#empanadaModel.find().lean();
        } catch (error) {
            throw error;
        }
    };
    //Delete a Empanada by name
    deleteEmpanada = async (name: string): Promise<any> => {
        try {
            return await this.#empanadaModel.deleteOne({ name });
        } catch (error) {
            throw error;
        }
    };

    //Update a Empanada by name
    updateEmpanada = async (name: string, newData: object): Promise<object> => {
        try {
            await this.#empanadaModel.findOneAndUpdate({ name }, newData);
            return { message: "Product successfully updated." };
        } catch (error) {
            throw error;
        }
    };
}
