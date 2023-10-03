"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = require("express-handlebars");
const pizza_routes_1 = __importDefault(require("./routes/pizza.routes"));
class Server {
    constructor(options) {
        this.app = (0, express_1.default)();
        const { port } = options;
        this.port = port;
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.static(__dirname + "/public"));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.set("views", path_1.default.join(__dirname, "views"));
        this.app.engine(".hbs", (0, express_handlebars_1.engine)({
            extname: ".hbs",
            defaultLayout: "main",
            layoutsDir: path_1.default.join(this.app.get("views"), "layouts"),
            partialsDir: path_1.default.join(this.app.get("views"), "partials"),
            runtimeOptions: { allowProtoPropertiesByDefault: true },
        }));
        this.app.set("view engine", ".hbs");
        const pizzasRoutes = new pizza_routes_1.default();
        this.app.use("/api/v1/pizzas", pizzasRoutes.getRouter());
        this.app.use("*", (_req, res, _next) => {
            res.render("partials/notFound", { title: "404 Not Found" });
        });
    }
    async start() {
        this.app.listen(this.port, () => {
            console.log(`🚀 Server running on port ${this.port}. 
    bat ${new Date().toLocaleString()}`);
        });
    }
}
exports.default = Server;
