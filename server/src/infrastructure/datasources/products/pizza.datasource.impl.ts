import { logger } from "../../../config";
import { pizzaModel } from "../../../data";
import {
    PizzaDatasource,
    CustomError,
    PizzaDto,
    ProductIdDto,
    PizzaEntity,
    PizzaPartialDto,
} from "../../../domain";
import { PizzaMapper } from "../../mappers";

export class PizzaDatasourceImpl implements PizzaDatasource {
    create = async (pizzaDto: PizzaDto): Promise<PizzaEntity> => {
        const { name, description, price, type, thumbnail, status } = pizzaDto;
        try {
            const exists = await pizzaModel.findOne({
                name,
                description,
                price,
            });

            if (exists)
                throw CustomError.badRequest(
                    "Pizza with the same properties already exists."
                );

            const pizza = await pizzaModel.create({
                name,
                description,
                price,
                type,
                thumbnail,
                status,
            });

            await pizza.save();

            return PizzaMapper.PizzaEntityFromObject(pizza);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            logger.error(
                "Error while searching for the pizza. Details:",
                error
            );
            throw CustomError.internalServer();
        }
    };

    getAll = async (): Promise<PizzaEntity[]> => {
        try {
            return await pizzaModel.find().lean();
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            logger.error(
                "Error while searching for all pizzas. Details:",
                error
            );
            throw CustomError.internalServer();
        }
    };

    getById = async (productIdDto: ProductIdDto): Promise<PizzaEntity> => {
        const { id } = productIdDto;
        try {
            const existsPizza = await pizzaModel.findById(id);

            if (!existsPizza) {
                throw CustomError.notFound(
                    `Pizza with ID: ${productIdDto.id} not found`
                );
            }

            return PizzaMapper.PizzaEntityFromObject(existsPizza);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            logger.error(
                "Error while searching for the pizza by ID. Details:",
                error
            );
            throw CustomError.internalServer();
        }
    };

    deleteById = async (productIdDto: ProductIdDto): Promise<PizzaEntity> => {
        const { id } = productIdDto;
        try {
            const deleted = await pizzaModel.findByIdAndDelete(id);
            if (!deleted) {
                throw CustomError.notFound(`Pizza with ID: ${id} not found`);
            }
            return PizzaMapper.PizzaEntityFromObject(deleted);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            logger.error("Error while deleting pizza by ID. Details:", error);
            throw CustomError.internalServer();
        }
    };

    updateById = async (
        productIdDto: ProductIdDto,
        pizzaDto: PizzaDto
    ): Promise<PizzaEntity> => {
        const { id } = productIdDto;
        try {
            const existsPizza = await pizzaModel.findOneAndUpdate(
                { _id: id },
                pizzaDto,
                { new: true }
            );
            if (!existsPizza) {
                throw CustomError.notFound(`Pizza with ID: ${id} not found`);
            }

            return PizzaMapper.PizzaEntityFromObject(existsPizza);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            logger.error("Error while updating pizza by ID. Details:", error);
            throw CustomError.internalServer();
        }
    };

    partialUpdateById = async (
        productIdDto: ProductIdDto,
        pizzaPartialDto: PizzaPartialDto
    ): Promise<PizzaEntity> => {
        const { id } = productIdDto;
        try {
            const existsPizza = await pizzaModel.findOneAndUpdate(
                { _id: id },
                pizzaPartialDto,
                { new: true }
            );
            if (!existsPizza) {
                throw CustomError.notFound(`Pizza with ID: ${id} not found`);
            }

            return PizzaMapper.PizzaEntityFromObject(existsPizza);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            logger.error(
                "Error while partial updating pizza by ID. Details:",
                error
            );
            throw CustomError.internalServer();
        }
    };
}
