import { PizzaDto, PizzaIdDto, PizzaRepository } from "../../index";

interface IPizzaUseCase {
    create(pizzaDto: PizzaDto): Promise<PizzaDto>;
    getAll(): Promise<PizzaDto[]>;
    getById(pizzaIdDto: PizzaIdDto): Promise<PizzaDto>;
    deleteById(pizzaIdDto: PizzaIdDto): Promise<PizzaDto>;
}

export class PizzaUseCase implements IPizzaUseCase {
    constructor(private readonly pizzaRepository: PizzaRepository) {}

    create = async (pizzaDto: PizzaDto): Promise<PizzaDto> => {
        return await this.pizzaRepository.create(pizzaDto);
    };
    getAll = async (): Promise<PizzaDto[]> => {
        return await this.pizzaRepository.getAll();
    };

    getById = async (pizzaIdDto: PizzaIdDto): Promise<PizzaDto> => {
        return await this.pizzaRepository.getById(pizzaIdDto);
    };

    deleteById = async (pizzaIdDto: PizzaIdDto): Promise<PizzaDto> => {
        return await this.pizzaRepository.deleteById(pizzaIdDto);
    };
}
