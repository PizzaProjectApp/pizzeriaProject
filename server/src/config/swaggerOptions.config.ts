export const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "E-commerce API",
            version: "1.0.0",
            description: "A simple express library API",
        },
        servers: [{ url: "http://localhost:3000" }],
    },
    apis: ["./src/routes/*.ts"],
};
