import {
    PizzaDatasource,
    PizzaDto,
    PizzaEntity,
    PizzaRepository,
} from "../../domain";
import { PizzaIdDto } from "../../domain/dtos/pizza/pizza-id.dto";
export class PizzaRepositoryImpl implements PizzaRepository {
    constructor(private readonly pizzaDatasource: PizzaDatasource) {}

    create = (pizzaDto: PizzaDto): Promise<PizzaEntity> => {
        return this.pizzaDatasource.create(pizzaDto);
    };
    getAll = (): Promise<PizzaEntity[]> => {
        return this.pizzaDatasource.getAll();
    };
    getById = (pizzaIdDto: PizzaIdDto): Promise<PizzaEntity> => {
        return this.pizzaDatasource.getById(pizzaIdDto);
    };
}
