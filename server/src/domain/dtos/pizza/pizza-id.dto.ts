export class PizzaIdDto {
    private constructor(public id: string) {}
    static create = (id: string): [string?, PizzaIdDto?] => {
        if (id.length <= 23) return ["Id too short"];

        return [undefined, new PizzaIdDto(id)];
    };
}
