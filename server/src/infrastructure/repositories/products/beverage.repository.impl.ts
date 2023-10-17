import {
    BeverageDatasource,
    BeverageDto,
    ProductIdDto,
    BeverageEntity,
    BeverageRepository,
    BeveragePartialDto,
} from "../../../domain";

export class BeverageRepositoryImpl implements BeverageRepository {
    constructor(private readonly beverageDatasource: BeverageDatasource) {}

    create = (beverageDto: BeverageDto): Promise<BeverageEntity> => {
        return this.beverageDatasource.create(beverageDto);
    };

    getAll = (): Promise<BeverageEntity[]> => {
        return this.beverageDatasource.getAll();
    };

    getById = (productIdDto: ProductIdDto): Promise<BeverageEntity> => {
        return this.beverageDatasource.getById(productIdDto);
    };

    deleteById(productIdDto: ProductIdDto): Promise<BeverageEntity> {
        return this.beverageDatasource.deleteById(productIdDto);
    }

    updateById(
        productIdDto: ProductIdDto,
        beverageDto: BeverageDto
    ): Promise<BeverageEntity> {
        return this.beverageDatasource.updateById(productIdDto, beverageDto);
    }

    partialUpdateById(
        productIdDto: ProductIdDto,
        beveragePartialDto: BeveragePartialDto
    ): Promise<BeverageEntity> {
        return this.beverageDatasource.partialUpdateById(
            productIdDto,
            beveragePartialDto
        );
    }
}
