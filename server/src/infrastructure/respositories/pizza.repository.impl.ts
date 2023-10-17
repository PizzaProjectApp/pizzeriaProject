import {
    PizzaDatasource,
    PizzaDto,
    PizzaIdDto,
    PizzaEntity,
    PizzaRepository,
} from "../../domain";

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
    deleteById(pizzaIdDto: PizzaIdDto): Promise<PizzaEntity> {
        return this.pizzaDatasource.deleteById(pizzaIdDto);
    }
    updateById(
        pizzaIdDto: PizzaIdDto,
        pizzaDto: PizzaDto
    ): Promise<PizzaEntity> {
        return this.pizzaDatasource.updateById(pizzaIdDto, pizzaDto);
    }
}
