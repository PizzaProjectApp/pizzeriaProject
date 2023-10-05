import { DuplicatedProductError } from "../errors/errors";
import { dessertModel } from "../models/Dessert";

interface IDessert {
    name: String;
    description: String;
    price: Number;
    type: "cold" | "hot";
    thumbnail: string[];
}
export default class DessertService {
    readonly #dessertModel;
    constructor() {
        this.#dessertModel = dessertModel;
    }

    // Add a new Dessert
    addDessert = async (newDessert: IDessert): Promise<object> => {
        try {
            const existingDessert = await this.#dessertModel.findOne({
                name: newDessert.name,
            });

            if (existingDessert) {
                throw new DuplicatedProductError("");
            }

            const addedDessert = await this.#dessertModel.create(newDessert);

            return addedDessert;
        } catch (error) {
            if (error instanceof DuplicatedProductError) {
                throw error;
            }
            throw error;
        }
    };
    //Get a list of available desserts
    getDesserts = async () => {
        try {
            return this.#dessertModel.find().lean();
        } catch (error) {
            throw error;
        }
    };

    getDessertById = async (id: any) => {
        try {
            parseInt(id);
            return this.#dessertModel.findById(id).lean();
        } catch (error) {
            throw error;
        }
    };

    //Delete a Dessert by name
    deleteDessert = async (name: string): Promise<any> => {
        try {
            return await this.#dessertModel.deleteOne({ name });
        } catch (error) {
            throw error;
        }
    };

    //Update a Dessert by name
    updateDessert = async (
        name: string,
        newData: IDessert
    ): Promise<object> => {
        try {
            await this.#dessertModel.findOneAndUpdate({ name }, newData);
            return { message: "Dessert successfully updated." };
        } catch (error) {
            throw error;
        }
    };
}
