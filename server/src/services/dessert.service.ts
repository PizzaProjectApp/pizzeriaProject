import { DuplicatedProductError } from "../errors/errors.error";
import { dessertModel } from "../data/mongodb/models/Dessert";

interface IDessert {
    name: string;
    description: string;
    price: number;
    type: "cold" | "hot";
    thumbnail: string[];
}

export default class DessertService {
    readonly #dessertModel;
    constructor() {
        this.#dessertModel = dessertModel;
    }

    addDessert = async (newDessert: IDessert): Promise<IDessert> => {
        try {
            const existingDessert = await this.#dessertModel.findOne({
                name: newDessert.name,
                description: newDessert.description,
                price: newDessert.price,
                type: newDessert.type,
            });

            if (existingDessert) {
                throw new DuplicatedProductError("");
            }

            const addedDessert = await this.#dessertModel.create(newDessert);

            const result: IDessert = {
                name: addedDessert.name,
                description: addedDessert.description!,
                price: addedDessert.price,
                type: addedDessert.type,
                thumbnail: addedDessert.thumbnail!,
            };

            return result;
        } catch (error) {
            if (error instanceof DuplicatedProductError) {
                throw error;
            }
            throw error;
        }
    };

    getDesserts = async () => {
        try {
            return this.#dessertModel.find().lean();
        } catch (error) {
            throw error;
        }
    };

    getDessertById = async (id: string): Promise<IDessert | null> => {
        try {
            return this.#dessertModel.findById({ _id: id }).lean();
        } catch (error) {
            throw error;
        }
    };

    updateDessertById = async (
        id: string,
        newData: Partial<IDessert>,
        usePatch: boolean = false
    ): Promise<object> => {
        try {
            const updatedDessert = await this.#dessertModel.findOneAndUpdate(
                { _id: id },
                usePatch ? { $set: newData } : newData,
                { new: true }
            );

            if (!updatedDessert) {
                return { message: "Dessert not found." };
            }

            return {
                message: "Dessert successfully updated.",
                updatedDessert,
            };
        } catch (error) {
            throw error;
        }
    };

    deleteDessertById = async (id: string): Promise<any> => {
        try {
            return await this.#dessertModel.deleteOne({ _id: id });
        } catch (error) {
            throw error;
        }
    };
}
