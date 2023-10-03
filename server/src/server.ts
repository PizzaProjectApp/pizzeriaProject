import Express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { engine } from "express-handlebars";
import PizzaRouter from "./routes/pizza.routes";

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
        this.app.use(Express.static(__dirname + "/public"));
        this.app.use(Express.json());
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
        this.app.use("/api/v1/pizzas", pizzasRoutes.getRouter());

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
