import { PizzaDto } from "../../dtos/pizza.dto";
import { PizzaRepository } from "../../repositories/pizza.repository";

interface IPizzaUseCase {
    create(pizzaDto: PizzaDto): Promise<PizzaDto>;
}

export class PizzaUseCase implements IPizzaUseCase {
    constructor(private readonly pizzaRepository: PizzaRepository) {}
    create = async (pizzaDto: PizzaDto): Promise<PizzaDto> => {
        const pizza = await this.pizzaRepository.create(pizzaDto);
        return pizza;
    };
    getAll = async (): Promise<PizzaDto[]> => {
        const pizza = await this.pizzaRepository.getAll();
        return pizza;
    };
}
