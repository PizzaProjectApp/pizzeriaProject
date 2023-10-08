import { DuplicatedProductError } from "../errors/errors";
import { beverageModel } from "../data/mongodb/models/Beverage";

interface IBeverage {
    name: String;
    description: String;
    price: Number;
    category: String;
    thumbnail: string[];
}

export default class BeverageService {
    readonly #beverageModel;
    constructor() {
        this.#beverageModel = beverageModel;
    }

    addBeverage = async (newBeverage: IBeverage): Promise<object> => {
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

            return addedBeverage;
        } catch (error) {
            if (error instanceof DuplicatedProductError) {
                throw error;
            }
            throw error;
        }
    };

    getBeverages = async () => {
        try {
            return this.#beverageModel.find().lean();
        } catch (error) {
            throw error;
        }
    };

    getBeverageById = async (id: string) => {
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
