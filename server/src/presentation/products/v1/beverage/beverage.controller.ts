import { Request, Response } from "express";
import {
    CustomError,
    BeverageDto,
    BeverageRepository,
    BeveragePartialDto,
    ProductIdDto,
    BeverageUseCase,
} from "../../../../domain";

export class BeverageController {
    constructor(private readonly beverageRepository: BeverageRepository) {}
    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        return res.status(500).json({ error: "Internal Server Error" });
    };

    createBeverage = (req: Request, res: Response) => {
        const [error, beverageDto] = BeverageDto.create(req.body);
        if (error) return res.status(400).json({ error });

        new BeverageUseCase(this.beverageRepository)
            .create(beverageDto!)
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };

    getBeverages = (_req: Request, res: Response) => {
        new BeverageUseCase(this.beverageRepository)
            .getAll()
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };

    getBeverageById = (req: Request, res: Response) => {
        const [error, productIdDto] = ProductIdDto.create(req.params.bvgid);
        if (error) return res.status(400).json({ error });

        new BeverageUseCase(this.beverageRepository)
            .getById(productIdDto!)
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };

    deleteBeverageById = (req: Request, res: Response) => {
        const [error, productIdDto] = ProductIdDto.create(req.params.bvgid);
        if (error) return res.status(400).json({ error });

        new BeverageUseCase(this.beverageRepository)
            .deleteById(productIdDto!)
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };

    updateBeverageById = (req: Request, res: Response) => {
        let [errorId, productIdDto] = ProductIdDto.create(req.params.bvgid);
        let [errorDto, beverageDto] = BeverageDto.create(req.body);

        if (errorId) return res.status(400).json({ errorId });
        if (errorDto) return res.status(400).json({ errorDto });

        new BeverageUseCase(this.beverageRepository)
            .updateById(productIdDto!, beverageDto!)
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };

    partialUpdateBeverageById = (req: Request, res: Response) => {
        let [errorId, productIdDto] = ProductIdDto.create(req.params.bvgid);
        let [errorDto, beveragePartialDto] = BeveragePartialDto.create(
            req.body
        );

        if (errorId) return res.status(400).json({ errorId });
        if (errorDto) return res.status(400).json({ errorDto });

        new BeverageUseCase(this.beverageRepository)
            .partialUpdateById(productIdDto!, beveragePartialDto!)
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };
}
