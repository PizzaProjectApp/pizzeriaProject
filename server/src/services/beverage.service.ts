import { DuplicatedProductError } from "../errors/errors.error";
import { beverageModel } from "../data/mongodb/models/Beverage";

interface IBeverage {
    name: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string[];
}

export default class BeverageService {
    readonly #beverageModel;
    constructor() {
        this.#beverageModel = beverageModel;
    }

    addBeverage = async (newBeverage: IBeverage): Promise<IBeverage> => {
        try {
            const existingBeverage = await this.#beverageModel.findOne({
                name: newBeverage.name,
                description: newBeverage.description,
                price: newBeverage.price,
                category: newBeverage.category,
            });

            if (existingBeverage) {
                throw new DuplicatedProductError("");
            }

            const addedBeverage = await this.#beverageModel.create(newBeverage);
            const result: IBeverage = {
                name: addedBeverage.name,
                description: addedBeverage.description,
                price: addedBeverage.price,
                category: addedBeverage.category,
                thumbnail: addedBeverage.thumbnail || [""],
            };

            return result;
        } catch (error) {
            if (error instanceof DuplicatedProductError) {
                throw error;
            }
            throw error;
        }
    };

    getBeverages = async (): Promise<IBeverage> => {
        try {
            return this.#beverageModel.find().lean();
        } catch (error) {
            throw error;
        }
    };

    getBeverageById = async (id: string): Promise<IBeverage | null> => {
        try {
            parseInt(id);
            return this.#beverageModel.findById({ _id: id }).lean();
        } catch (error) {
            throw error;
        }
    };

    updateBeverageById = async (
        id: string,
        newData: Partial<IBeverage>,
        usePatch: boolean = false
    ): Promise<object> => {
        try {
            const updatedBeverage = await this.#beverageModel.findOneAndUpdate(
                { _id: id },
                usePatch ? { $set: newData } : newData,
                { new: true }
            );

            if (!updatedBeverage) {
                return { message: "Beverage not found." };
            }

            return {
                message: "Beverage successfully updated.",
                updatedBeverage,
            };
        } catch (error) {
            throw error;
        }
    };

    deleteBeverageById = async (id: string): Promise<any> => {
        try {
            return await this.#beverageModel.deleteOne({ _id: id });
        } catch (error) {
            throw error;
        }
    };
}
