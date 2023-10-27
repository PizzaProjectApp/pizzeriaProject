import { PizzaDto, ProductIdDto, PizzaPartialDto, PizzaEntity } from "../../";

export abstract class PizzaDatasource {
    abstract create(pizzaDto: PizzaDto): Promise<PizzaEntity>;

    abstract getAll(): Promise<PizzaEntity[]>;

    abstract getById(productIdDto: ProductIdDto): Promise<PizzaEntity>;

    abstract deleteById(productIdDto: ProductIdDto): Promise<PizzaEntity>;

    abstract updateById(productIdDto: ProductIdDto, pizzaDto: PizzaDto): Promise<PizzaEntity>;

    abstract partialUpdateById(productIdDto: ProductIdDto, pizzaPartialDto: PizzaPartialDto): Promise<PizzaEntity>;
}
