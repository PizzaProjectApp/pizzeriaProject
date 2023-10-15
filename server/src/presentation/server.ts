import Express, { Router } from "express";
import cors from "cors";
import morgan from "morgan";

// Swagger
import SwaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { swaggerOptions } from "../config/index";

interface Options {
    port: number;
    routes: Router;
}

export default class Server {
    public readonly app = Express();
    private readonly port: number;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port = 3100, routes } = options;
        this.port = port;
        this.routes = routes;
    }

    async start() {
        /* ★━━━━━━━━━━━★ Middlewares ★━━━━━━━━━━━★ */
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(Express.json());
        this.app.use(Express.urlencoded({ extended: true }));

        /* ★━━━━━━━━━━━★ Swagger Docs ★━━━━━━━━━━━★ */
        const swaggerSpecs = swaggerJSDoc(swaggerOptions);

        /* ★━━━━━━━━━━━★ Routes ★━━━━━━━━━━━★ */
        this.app.use(this.routes);

        this.app.use(
            "/api/docs",
            SwaggerUi.serve,
            SwaggerUi.setup(swaggerSpecs)
        );
        /* ★━━━━━━━━━━━★ Listener ★━━━━━━━━━━━★ */
        this.app.listen(this.port, () => {
            console.log(
                `🚀 Server running on port ${this.port}. 
    bat ${new Date().toLocaleString()}`
            );
        });
    }
}
