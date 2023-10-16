import { PizzaIdDto } from "../dtos/pizza/pizza-id.dto";
import { PizzaDto } from "../dtos/pizza/pizza.dto";
import { PizzaEntity } from "../entities/pizza.entity";
export abstract class PizzaRepository {
    abstract create(PizzaDto: PizzaDto): Promise<PizzaEntity>;
    abstract getAll(): Promise<PizzaEntity[]>;
    abstract getById(pizzaIdDto: PizzaIdDto): Promise<PizzaEntity>;
}
