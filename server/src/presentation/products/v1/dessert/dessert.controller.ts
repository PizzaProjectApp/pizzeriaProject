import { Request, Response } from "express";
import {
    CustomError,
    DessertDto,
    DessertRepository,
    DessertPartialDto,
    ProductIdDto,
    DessertUseCase,
} from "../../../../domain";

export class DessertController {
    constructor(private readonly dessertRepository: DessertRepository) {}
    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        return res.status(500).json({ error: "Internal Server Error" });
    };

    createDessert = (req: Request, res: Response) => {
        const [error, dessertDto] = DessertDto.create(req.body);
        if (error) return res.status(400).json({ error });

        new DessertUseCase(this.dessertRepository)
            .create(dessertDto!)
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };

    getDesserts = (_req: Request, res: Response) => {
        new DessertUseCase(this.dessertRepository)
            .getAll()
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };

    getDessertById = (req: Request, res: Response) => {
        const [error, productIdDto] = ProductIdDto.create(req.params.dstid);
        if (error) return res.status(400).json({ error });

        new DessertUseCase(this.dessertRepository)
            .getById(productIdDto!)
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };

    deleteDessertById = (req: Request, res: Response) => {
        const [error, productIdDto] = ProductIdDto.create(req.params.dstid);
        if (error) return res.status(400).json({ error });

        new DessertUseCase(this.dessertRepository)
            .deleteById(productIdDto!)
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };

    updateDessertById = (req: Request, res: Response) => {
        let [errorId, productIdDto] = ProductIdDto.create(req.params.dstid);
        let [errorDto, dessertDto] = DessertDto.create(req.body);

        if (errorId) return res.status(400).json({ errorId });
        if (errorDto) return res.status(400).json({ errorDto });

        new DessertUseCase(this.dessertRepository)
            .updateById(productIdDto!, dessertDto!)
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };

    partialUpdateDessertById = (req: Request, res: Response) => {
        let [errorId, productIdDto] = ProductIdDto.create(req.params.dstid);
        let [errorDto, dessertPartialDto] = DessertPartialDto.create(req.body);

        if (errorId) return res.status(400).json({ errorId });
        if (errorDto) return res.status(400).json({ errorDto });

        new DessertUseCase(this.dessertRepository)
            .partialUpdateById(productIdDto!, dessertPartialDto!)
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };
}
