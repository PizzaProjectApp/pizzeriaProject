import { logger } from "../../config";
import { pizzaModel } from "../../data";
import {
    PizzaDatasource,
    CustomError,
    PizzaDto,
    PizzaIdDto,
    PizzaEntity,
} from "../../domain";
import { PizzaMapper } from "../index";

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

    getById = async (pizzaIdDto: PizzaIdDto): Promise<PizzaEntity> => {
        const { id } = pizzaIdDto;
        try {
            const exists = await pizzaModel.findById(id);

            if (!exists) {
                throw CustomError.notFound(
                    `Pizza with ID: ${pizzaIdDto.id} not found`
                );
            }

            return PizzaMapper.PizzaEntityFromObject(exists);
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
}
