import { PizzaDto } from "../dtos/pizza.dto";
import { PizzaEntity } from "../entities/pizza.entity";

export abstract class PizzaRepository {
    abstract create(PizzaDto: PizzaDto): Promise<PizzaEntity>;
}
