import { Request, Response } from "express";
import {
    CustomError,
    PizzaDto,
    PizzaRepository,
    PizzaPartialDto,
    PizzaIdDto,
    PizzaUseCase,
} from "../../../../domain";

export class PizzaController {
    constructor(private readonly pizzaRepository: PizzaRepository) {}
    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        return res.status(500).json({ error: "Internal Server Error" });
    };

    createPizza = (req: Request, res: Response) => {
        const [error, pizzaDto] = PizzaDto.create(req.body);
        if (error) return res.status(400).json({ error });

        new PizzaUseCase(this.pizzaRepository)
            .create(pizzaDto!)
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };

    getPizzas = (_req: Request, res: Response) => {
        new PizzaUseCase(this.pizzaRepository)
            .getAll()
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };

    getPizzaById = (req: Request, res: Response) => {
        const [error, pizzaIdDto] = PizzaIdDto.create(req.params.pid);
        if (error) return res.status(400).json({ error });

        new PizzaUseCase(this.pizzaRepository)
            .getById(pizzaIdDto!)
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };

    deletePizzaById = (req: Request, res: Response) => {
        const [error, pizzaIdDto] = PizzaIdDto.create(req.params.pid);
        if (error) return res.status(400).json({ error });

        new PizzaUseCase(this.pizzaRepository)
            .deleteById(pizzaIdDto!)
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };

    updatePizzaById = (req: Request, res: Response) => {
        let [errorId, pizzaIdDto] = PizzaIdDto.create(req.params.pid);
        let [errorDto, pizzaDto] = PizzaDto.create(req.body);

        if (errorId) return res.status(400).json({ errorId });
        if (errorDto) return res.status(400).json({ errorDto });

        new PizzaUseCase(this.pizzaRepository)
            .updateById(pizzaIdDto!, pizzaDto!)
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };

    partialUpdatePizzaById = (req: Request, res: Response) => {
        let [errorId, pizzaIdDto] = PizzaIdDto.create(req.params.pid);
        let [errorDto, pizzaPartialDto] = PizzaPartialDto.create(req.body);

        if (errorId) return res.status(400).json({ errorId });
        if (errorDto) return res.status(400).json({ errorDto });

        new PizzaUseCase(this.pizzaRepository)
            .partialUpdateById(pizzaIdDto!, pizzaPartialDto!)
            .then((data) => res.json(data))
            .catch((error) => this.handleError(error, res));
    };
}
