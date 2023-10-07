import { __dirname } from "../utils/pathUtils";

export const swaggerOptions = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Pizzeria E-commerce API",
            version: "1.0.0",
            description: "A simple express library API",
        },
        servers: [{ url: "http://localhost:3000/api/v1" }],
    },
    apis: [`${__dirname}/docs/v1/*.ts`],
};
