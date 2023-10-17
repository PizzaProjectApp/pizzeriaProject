import {
    BeverageDto,
    ProductIdDto,
    BeverageRepository,
    BeveragePartialDto,
} from "../../";

interface IBeverageUseCase {
    create(beverageDto: BeverageDto): Promise<BeverageDto>;
    getAll(): Promise<BeverageDto[]>;
    getById(productIdDto: ProductIdDto): Promise<BeverageDto>;
    deleteById(productIdDto: ProductIdDto): Promise<BeverageDto>;
    updateById(
        productIdDto: ProductIdDto,
        beverageDto: BeverageDto
    ): Promise<BeverageDto>;
    partialUpdateById(
        productIdDto: ProductIdDto,
        beveragePartialDto: BeveragePartialDto
    ): Promise<BeverageDto>;
}

export class BeverageUseCase implements IBeverageUseCase {
    constructor(private readonly beverageRepository: BeverageRepository) {}

    create = async (beverageDto: BeverageDto): Promise<BeverageDto> => {
        return await this.beverageRepository.create(beverageDto);
    };
    getAll = async (): Promise<BeverageDto[]> => {
        return await this.beverageRepository.getAll();
    };

    getById = async (productIdDto: ProductIdDto): Promise<BeverageDto> => {
        return await this.beverageRepository.getById(productIdDto);
    };

    deleteById = async (productIdDto: ProductIdDto): Promise<BeverageDto> => {
        return await this.beverageRepository.deleteById(productIdDto);
    };

    updateById = async (
        productIdDto: ProductIdDto,
        beverageDto: BeverageDto
    ): Promise<BeverageDto> => {
        return await this.beverageRepository.updateById(
            productIdDto,
            beverageDto
        );
    };

    partialUpdateById = async (
        productIdDto: ProductIdDto,
        beveragePartialDto: BeveragePartialDto
    ): Promise<BeverageDto> => {
        return await this.beverageRepository.partialUpdateById(
            productIdDto,
            beveragePartialDto
        );
    };
}
