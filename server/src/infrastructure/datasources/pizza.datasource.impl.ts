import { pizzaModel } from "../../data";
import {
    PizzaDatasource,
    CustomError,
    PizzaDto,
    PizzaEntity,
} from "../../domain";
import { PizzaMapper } from "../mappers/pizza.mapper";

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
            throw CustomError.internalServer();
        }
    };
}
