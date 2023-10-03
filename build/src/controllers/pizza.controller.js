"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _PizzaController_pizzaService;
Object.defineProperty(exports, "__esModule", { value: true });
const pizza_service_1 = __importDefault(require("../services/pizza.service"));
const errors_1 = require("../errors/errors");
class PizzaController {
    constructor() {
        _PizzaController_pizzaService.set(this, void 0);
        this.addPizza = async (req, res) => {
            try {
                const requiredKeys = [
                    "name",
                    "description",
                    "price",
                    "type",
                    "status",
                ];
                for (const key of requiredKeys) {
                    if (!(key in req.body)) {
                        res.status(400).json({
                            message: `Missing required key: ${key}`,
                        });
                    }
                }
                const newProduct = req.body;
                await __classPrivateFieldGet(this, _PizzaController_pizzaService, "f").addPizza(newProduct);
                res.json({ message: `Missing required key:` });
            }
            catch (error) {
                console.error(error);
                if (error instanceof errors_1.InvalidArgValuesError) {
                    res.status(400).json({ message: "Invalid argument values" });
                }
                else if (error instanceof errors_1.DuplicatedProductError) {
                    res.status(400).json({ message: "Duplicated Product" });
                }
                res.status(500).json({ message: "Something went wrong" });
            }
        };
        this.getPizzas = async (_req, res) => {
            try {
                const response = await __classPrivateFieldGet(this, _PizzaController_pizzaService, "f").getPizzas();
                res.json(response);
            }
            catch (error) {
                throw error;
            }
        };
        __classPrivateFieldSet(this, _PizzaController_pizzaService, new pizza_service_1.default(), "f");
    }
}
_PizzaController_pizzaService = new WeakMap();
exports.default = PizzaController;
