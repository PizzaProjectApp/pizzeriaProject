import Express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";

// Handlebars
import { engine } from "express-handlebars";

// Swagger
import SwaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { swaggerOptions } from "./config/swaggerOptions.config";

// Routes
import PizzaRouter from "./routes/v1/pizza.routes";

interface Options {
    port: number;
}

export default class Server {
    public readonly app = Express();
    private readonly port: number;

    constructor(options: Options) {
        const { port } = options;

        this.port = port;
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(Express.json());
        const swaggerSpecs = swaggerJSDoc(swaggerOptions);
        this.app.use(Express.static(__dirname + "/public"));
        this.app.use(Express.urlencoded({ extended: true }));

        this.app.set("views", path.join(__dirname, "views"));

        this.app.engine(
            ".hbs",
            engine({
                extname: ".hbs",
                defaultLayout: "main",
                layoutsDir: path.join(this.app.get("views"), "layouts"),
                partialsDir: path.join(this.app.get("views"), "partials"),
                runtimeOptions: { allowProtoPropertiesByDefault: true },
            })
        );
        this.app.set("view engine", ".hbs");

        /* ★━━━━━━━━━━━★ Routes ★━━━━━━━━━━━★ */
        const pizzasRoutes = new PizzaRouter();
        //~>

        this.app.use("/api/v1/pizzas", pizzasRoutes.getRouter());
        this.app.use("/", SwaggerUi.serve, SwaggerUi.setup(swaggerSpecs));

        /* ★━━━━━━━━━━━★ Templates ★━━━━━━━━━━━★ */
        this.app.use("*", (_req, res, _next) => {
            res.render("partials/notFound", { title: "404 Not Found" });
        });
    }

    async start() {
        this.app.listen(this.port, () => {
            console.log(
                `🚀 Server running on port ${this.port}. 
    bat ${new Date().toLocaleString()}`
            );
        });
    }
}
