export class PizzaDto {
    private constructor(
        public name: string,
        public description: string,
        public price: string,
        public type: string,
        public thumbnail?: string,
        public status?: boolean
    ) {}
    static create(object: { [key: string]: any }): [string?, PizzaDto?] {
        const { name, description, price, type, thumbnail, status } = object;
        if (!name) return ["Missing name"];
        if (name.length < 5) return ["Name too short"];
        if (!description) return ["Missing description"];
        if (!price) return ["Missing price"];
        if (!type) return ["Missing type"];

        return [
            undefined,
            new PizzaDto(name, description, price, type, thumbnail, status),
        ];
    }
}
