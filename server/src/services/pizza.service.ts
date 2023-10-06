// import { GetPizzasPaginatedError } from "../errors/errors";

import {
    DuplicatedProductError,
    InvalidArgValuesError,
} from "../errors/errors";
import { pizzaModel } from "../models/Pizza";
// import { PaginationParams } from "../types/types";
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

    // Add a new Pizza
    addPizza = async (newPizza: IPizza): Promise<object> => {
        try {
            if (!["whole", "half"].includes(newPizza.type)) {
                throw new InvalidArgValuesError("");
            }
            const existingPizza = await this.#pizzaModel.findOne({
                name: newPizza.name,
            });
            if (existingPizza) {
                throw new DuplicatedProductError("");
            }

            const addedPizza = await this.#pizzaModel.create(newPizza);
            return addedPizza;
        } catch (error) {
            if (error instanceof InvalidArgValuesError) {
                throw error;
            } else if (error instanceof DuplicatedProductError) {
                throw error;
            }
            throw error;
        }
    };

    getPizzaById = async (id: string) => {
        try {
            return this.#pizzaModel.findById(id).lean();
        } catch (error) {
            throw error;
        }
    };

    getPizzas = async () => {
        try {
            return this.#pizzaModel.find().lean();
        } catch (error) {
            throw error;
        }
    };

    deletePizza = async (id: string): Promise<any> => {
        try {
            return await this.#pizzaModel.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    };

    updatePizza = async (id: string, newData: object): Promise<object> => {
        try {
            await this.#pizzaModel.findByIdAndUpdate(id, newData);
            return { message: "Product successfully updated." };
        } catch (error) {
            throw error;
        }
    };

    // // Retrieve all pizzas
    // getPizzasPaginated = async (params: PaginationParams): Promise<object> => {
    //     try {
    //         // Extract parameters
    //         let { limit = 10, page = 1, query, sort } = params;

    //         // Parse query if provided
    //         const filterOptions = query ? JSON.parse(query) : {};

    //         // Determine sorting options based on sort parameter
    //         const sortOptions =
    //             sort === "desc"
    //                 ? { price: -1 }
    //                 : sort === "asc"
    //                 ? { price: 1 }
    //                 : {};

    //         const options = {
    //             limit,
    //             page,
    //             sort: sortOptions,
    //         };

    //         const pizzas = await this.#pizzaModel.paginate(
    //             filterOptions,
    //             options
    //         );

    //         // Destructure pagination properties
    //         const {
    //             docs,
    //             totalPages,
    //             hasPrevPage,
    //             hasNextPage,
    //             prevPage,
    //             nextPage,
    //         } = pizzas;

    //         // Determine the status based on the presence of pizzas
    //         const status = docs.length === 0 ? "error" : "success";

    //         // Build base URL for pagination links
    //         const baseUrl = `/api/v1/pizzas?limit=${limit}&query=${query}&sort=${sort}`;

    //         // Generate previous and next links if available
    //         const prevLink = hasPrevPage ? `${baseUrl}&page=${prevPage}` : null;
    //         const nextLink = hasNextPage ? `${baseUrl}&page=${nextPage}` : null;

    //         // Construct the result object
    //         const result = {
    //             status: status,
    //             payload: docs,
    //             page,
    //             totalPages,
    //             hasPrevPage,
    //             hasNextPage,
    //             prevPage,
    //             nextPage,
    //             prevLink,
    //             nextLink,
    //         };

    //         return result;
    //     } catch (error) {
    //         throw new GetPizzasPaginatedError(
    //             "Failed to get pizzas paginated "
    //         );
    //     }
    // };
}
