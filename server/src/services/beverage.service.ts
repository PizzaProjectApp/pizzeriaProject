import { DuplicatedProductError } from "../errors/errors";
import { beverageModel } from "../models/Beverage";

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

    // Add a new Beverage
    addBeverage = async (newBeverage: IBeverage): Promise<object> => {
        try {
            const existingBeverage = await this.#beverageModel.findOne({
                name: newBeverage.name,
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
    //Get a list of available beverages
    getBeverages = async () => {
        try {
            return this.#beverageModel.find().lean();
        } catch (error) {
            throw error;
        }
    };

    getBeverageById = async (id: any) => {
        try {
            parseInt(id);
            return this.#beverageModel.findById(id).lean();
        } catch (error) {
            throw error;
        }
    };

    //Delete a Beverage by name
    deleteBeverage = async (name: string): Promise<any> => {
        try {
            return await this.#beverageModel.deleteOne({ name });
        } catch (error) {
            throw error;
        }
    };

    //Update a Beverage by name
    updateBeverage = async (
        name: string,
        newData: IBeverage
    ): Promise<object> => {
        try {
            await this.#beverageModel.findOneAndUpdate({ name }, newData);
            return { message: "Product successfully updated." };
        } catch (error) {
            throw error;
        }
    };
}
