export const swaggerOptions = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Pizzeria E-commerce API",
            version: "1.0.0",
            description: "A simple express library API",
        },
        servers: [{ url: "http://localhost:3000/api/v1" }],
        tags: [
            {
                name: "Pizzas",
                description: "Operations about pizzas",
            },
            {
                name: "Empanadas",
                description: "Operations about empanadas",
            },
            {
                name: "Beverages",
                description: "Operations about beverages",
            },
            {
                name: "Desserts",
                description: "Operations about desserts",
            },
        ],
    },
    apis: ["./src/routes/*/*.ts"],
};
