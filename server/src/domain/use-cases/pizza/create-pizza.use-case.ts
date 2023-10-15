import { PizzaDto } from "../../dtos/pizza.dto";
import { PizzaRepository } from "../../repositories/pizza.repository";

interface PizzaUseCase {
    execute(pizzaDto: PizzaDto): Promise<PizzaDto>;
}

export class CreatePizza implements PizzaUseCase {
    constructor(private readonly pizzaRepository: PizzaRepository) {}
    execute = async (pizzaDto: PizzaDto): Promise<PizzaDto> => {
        const pizza = await this.pizzaRepository.create(pizzaDto);
        return pizza;
    };
}
