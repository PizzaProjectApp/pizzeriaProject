import {
    EmpanadaDatasource,
    EmpanadaDto,
    ProductIdDto,
    EmpanadaEntity,
    EmpanadaRepository,
    EmpanadaPartialDto,
} from "../../../domain";

export class EmpanadaRepositoryImpl implements EmpanadaRepository {
    constructor(private readonly empanadaDatasource: EmpanadaDatasource) {}

    create = (empanadaDto: EmpanadaDto): Promise<EmpanadaEntity> => {
        return this.empanadaDatasource.create(empanadaDto);
    };
    getAll = (): Promise<EmpanadaEntity[]> => {
        return this.empanadaDatasource.getAll();
    };
    getById = (productIdDto: ProductIdDto): Promise<EmpanadaEntity> => {
        return this.empanadaDatasource.getById(productIdDto);
    };
    deleteById(productIdDto: ProductIdDto): Promise<EmpanadaEntity> {
        return this.empanadaDatasource.deleteById(productIdDto);
    }
    updateById(
        productIdDto: ProductIdDto,
        empanadaDto: EmpanadaDto
    ): Promise<EmpanadaEntity> {
        return this.empanadaDatasource.updateById(productIdDto, empanadaDto);
    }
    partialUpdateById(
        productIdDto: ProductIdDto,
        empanadaPartialDto: EmpanadaPartialDto
    ): Promise<EmpanadaEntity> {
        return this.empanadaDatasource.partialUpdateById(
            productIdDto,
            empanadaPartialDto
        );
    }
}
