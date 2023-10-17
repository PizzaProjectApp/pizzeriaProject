import { PizzaIdDto, PizzaDto, PizzaEntity } from "../index";

export abstract class PizzaRepository {
    abstract create(PizzaDto: PizzaDto): Promise<PizzaEntity>;
    abstract getAll(): Promise<PizzaEntity[]>;
    abstract getById(pizzaIdDto: PizzaIdDto): Promise<PizzaEntity>;
    abstract deleteById(pizzaIdDto: PizzaIdDto): Promise<PizzaEntity>;
}
