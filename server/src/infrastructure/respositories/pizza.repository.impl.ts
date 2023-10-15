import {
    PizzaDatasource,
    PizzaDto,
    PizzaEntity,
    PizzaRepository,
} from "../../domain";

export class PizzaRepositoryImpl implements PizzaRepository {
    constructor(private readonly pizzaDatasource: PizzaDatasource) {}

    create = (pizzaDto: PizzaDto): Promise<PizzaEntity> => {
        return this.pizzaDatasource.create(pizzaDto);
    };
}
