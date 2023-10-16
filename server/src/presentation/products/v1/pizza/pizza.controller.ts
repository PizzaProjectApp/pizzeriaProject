import { Request, Response } from "express";
import { CustomError, PizzaDto, PizzaRepository } from "../../../../domain";
import { PizzaUseCase } from "../../../../domain/use-cases";
import { PizzaIdDto } from "../../../../domain/dtos/pizza/pizza-id.dto";

export class PizzaController {
    constructor(private readonly pizzaRepository: PizzaRepository) {}
    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }

        console.log(error);
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
}
