import { logger } from "../../../config";
import { beverageModel } from "../../../data";
import {
    BeverageDatasource,
    CustomError,
    BeverageDto,
    ProductIdDto,
    BeverageEntity,
    BeveragePartialDto,
    executePagination,
    PaginationDto
} from "../../../domain";
import { BeverageMapper } from "../../mappers";

export class BeverageDatasourceImpl implements BeverageDatasource {
    create = async (beverageDto: BeverageDto): Promise<BeverageEntity> => {
        const { name, description, price, category, thumbnail, status } = beverageDto;
        try {
            const exists = await beverageModel.findOne({
                name,
                description,
                price
            });

            if (exists) throw CustomError.badRequest("Beverage with the same properties already exists.");

            const beverage = await beverageModel.create({
                name,
                description,
                price,
                category,
                thumbnail,
                status
            });

            await beverage.save();

            return BeverageMapper.BeverageEntityFromObject(beverage);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            logger.error("Error while searching for the beverage. Details:", error);
            throw CustomError.internalServer();
        }
    };

    getAll = async (paginationDto: PaginationDto): Promise<BeverageEntity[]> => {
        const { page, limit, sort } = paginationDto;
        try {
            let sortOptions: { [key: string]: any } = {};

            if (sort === "asc") {
                sortOptions = { price: 1 };
            } else if (sort === "desc") {
                sortOptions = { price: -1 };
            }

            const products = await beverageModel
                .find()
                .skip((page - 1) * limit)
                .limit(limit)
                .sort(sortOptions);

            const docs: number = await beverageModel.countDocuments();

            const paginationResults = executePagination({
                page,
                limit,
                sort,
                productUrl: "beverages",
                docs,
                products
            });

            return paginationResults as unknown as BeverageEntity[];
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            logger.error("Error while searching for all beverages. Details:", error);
            throw CustomError.internalServer();
        }
    };

    getById = async (productIdDto: ProductIdDto): Promise<BeverageEntity> => {
        const { id } = productIdDto;
        try {
            const existsBeverage = await beverageModel.findById(id);

            if (!existsBeverage) {
                throw CustomError.notFound(`Beverage with ID: ${id} not found`);
            }

            return BeverageMapper.BeverageEntityFromObject(existsBeverage);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            logger.error("Error while searching for the beverage by ID. Details:", error);
            throw CustomError.internalServer();
        }
    };

    deleteById = async (productIdDto: ProductIdDto): Promise<BeverageEntity> => {
        const { id } = productIdDto;
        try {
            const deleted = await beverageModel.findByIdAndDelete(id);
            if (!deleted) {
                throw CustomError.notFound(`Beverage with ID: ${id} not found`);
            }
            return BeverageMapper.BeverageEntityFromObject(deleted);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            logger.error("Error while deleting beverage by ID. Details:", error);
            throw CustomError.internalServer();
        }
    };

    updateById = async (productIdDto: ProductIdDto, beverageDto: BeverageDto): Promise<BeverageEntity> => {
        const { id } = productIdDto;
        try {
            const existsBeverage = await beverageModel.findOneAndUpdate({ _id: id }, beverageDto, { new: true });
            if (!existsBeverage) {
                throw CustomError.notFound(`Beverage with ID: ${id} not found`);
            }

            return BeverageMapper.BeverageEntityFromObject(existsBeverage);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            logger.error("Error while updating beverage by ID. Details:", error);
            throw CustomError.internalServer();
        }
    };

    partialUpdateById = async (
        productIdDto: ProductIdDto,
        beveragePartialDto: BeveragePartialDto
    ): Promise<BeverageEntity> => {
        const { id } = productIdDto;
        try {
            const existsBeverage = await beverageModel.findOneAndUpdate({ _id: id }, beveragePartialDto, { new: true });
            if (!existsBeverage) {
                throw CustomError.notFound(`Beverage with ID: ${id} not found`);
            }

            return BeverageMapper.BeverageEntityFromObject(existsBeverage);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            logger.error("Error while partial updating beverage by ID. Details:", error);
            throw CustomError.internalServer();
        }
    };
}
