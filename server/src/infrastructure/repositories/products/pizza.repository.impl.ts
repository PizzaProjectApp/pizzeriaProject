import {
    PizzaDatasource,
    PizzaDto,
    ProductIdDto,
    PizzaEntity,
    PizzaRepository,
    PizzaPartialDto,
} from "../../../domain";

export class PizzaRepositoryImpl implements PizzaRepository {
    constructor(private readonly pizzaDatasource: PizzaDatasource) {}

    create = (pizzaDto: PizzaDto): Promise<PizzaEntity> => {
        return this.pizzaDatasource.create(pizzaDto);
    };
    getAll = (): Promise<PizzaEntity[]> => {
        return this.pizzaDatasource.getAll();
    };
    getById = (productIdDto: ProductIdDto): Promise<PizzaEntity> => {
        return this.pizzaDatasource.getById(productIdDto);
    };
    deleteById(productIdDto: ProductIdDto): Promise<PizzaEntity> {
        return this.pizzaDatasource.deleteById(productIdDto);
    }
    updateById(
        productIdDto: ProductIdDto,
        pizzaDto: PizzaDto
    ): Promise<PizzaEntity> {
        return this.pizzaDatasource.updateById(productIdDto, pizzaDto);
    }
    partialUpdateById(
        productIdDto: ProductIdDto,
        pizzaPartialDto: PizzaPartialDto
    ): Promise<PizzaEntity> {
        return this.pizzaDatasource.partialUpdateById(
            productIdDto,
            pizzaPartialDto
        );
    }
}
