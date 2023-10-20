import { DessertDto, DessertPartialDto, ProductIdDto, DessertEntity } from "../../";

export abstract class DessertRepository {
    abstract create(dessertDto: DessertDto): Promise<DessertEntity>;

    abstract getAll(): Promise<DessertEntity[]>;

    abstract getById(productIdDto: ProductIdDto): Promise<DessertEntity>;

    abstract deleteById(productIdDto: ProductIdDto): Promise<DessertEntity>;

    abstract updateById(productIdDto: ProductIdDto, dessertDto: DessertDto): Promise<DessertEntity>;

    abstract partialUpdateById(
        productIdDto: ProductIdDto,
        dessertPartialDto: DessertPartialDto
    ): Promise<DessertEntity>;
}
