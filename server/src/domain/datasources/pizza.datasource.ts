import { PizzaDto } from "../dtos/pizza.dto";
import { PizzaEntity } from "../entities/pizza.entity";

export abstract class PizzaDatasource {
    abstract create(pizzaDto: PizzaDto): Promise<PizzaEntity>;
    abstract getAll(): Promise<PizzaEntity[]>;
}
