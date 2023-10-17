import { PizzaPartialDto } from "../dtos/pizza/pizza-partial.dto";
import { PizzaIdDto, PizzaDto, PizzaEntity } from "../index";

export abstract class PizzaRepository {
    abstract create(PizzaDto: PizzaDto): Promise<PizzaEntity>;
    abstract getAll(): Promise<PizzaEntity[]>;
    abstract getById(pizzaIdDto: PizzaIdDto): Promise<PizzaEntity>;
    abstract deleteById(pizzaIdDto: PizzaIdDto): Promise<PizzaEntity>;
    abstract updateById(
        pizzaIdDto: PizzaIdDto,
        pizzaDto: PizzaDto
    ): Promise<PizzaEntity>;
    abstract partialUpdateById(
        pizzaIdDto: PizzaIdDto,
        pizzaPartialDto: PizzaPartialDto
    ): Promise<PizzaEntity>;
}
