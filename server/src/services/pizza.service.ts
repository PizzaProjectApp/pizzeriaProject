import {
    DuplicatedProductError,
    InvalidArgValuesError,
} from "../errors/errors.error";
import { pizzaModel } from "../data/mongodb/models/Pizza";

interface IPizza {
    name: string;
    description: string;
    price: number;
    type: "whole" | "half";
    thumbnail: string[];
}
export default class PizzaService {
    readonly #pizzaModel;
    constructor() {
        this.#pizzaModel = pizzaModel;
    }

    addPizza = async (newPizza: IPizza): Promise<IPizza> => {
        try {
            if (!["whole", "half"].includes(newPizza.type)) {
                throw new InvalidArgValuesError("");
            }
            const existingPizza = await this.#pizzaModel.findOne({
                name: newPizza.name,
                price: newPizza.price,
                type: newPizza.type,
            });
            if (existingPizza) {
                throw new DuplicatedProductError("");
            }

            const addedPizza = await this.#pizzaModel.create(newPizza);

            const result: IPizza = {
                name: addedPizza.name,
                description: addedPizza.description,
                price: addedPizza.price,
                type: addedPizza.type,
                thumbnail: addedPizza.thumbnail || [""],
            };

            return result;
        } catch (error) {
            if (error instanceof InvalidArgValuesError) {
                throw error;
            } else if (error instanceof DuplicatedProductError) {
                throw error;
            }
            throw error;
        }
    };

    getPizzaById = async (id: string): Promise<IPizza | null> => {
        try {
            return this.#pizzaModel.findById({ _id: id }).lean();
        } catch (error) {
            throw error;
        }
    };

    getPizzas = async (): Promise<IPizza> => {
        try {
            return this.#pizzaModel.find().lean();
        } catch (error) {
            throw error;
        }
    };

    updatePizzaById = async (
        id: string,
        newData: Partial<IPizza>,
        usePatch: boolean = false
    ): Promise<object> => {
        try {
            const updatedPizza = await this.#pizzaModel.findOneAndUpdate(
                { _id: id },
                usePatch ? { $set: newData } : newData,
                { new: true }
            );

            if (!updatedPizza) {
                return { message: "Pizza not found." };
            }

            return {
                message: "Pizza successfully updated.",
                updatedPizza,
            };
        } catch (error) {
            throw error;
        }
    };

    deletePizzaById = async (id: string): Promise<any> => {
        try {
            return await this.#pizzaModel.findByIdAndDelete({ _id: id });
        } catch (error) {
            throw error;
        }
    };
}
