export class PizzaEntity {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public price: string,
        public type: string,
        public thumbnail?: string,
        public status?: boolean
    ) {}
}
