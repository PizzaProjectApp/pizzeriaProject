"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomRouter_1 = __importDefault(require("../middlewares/CustomRouter"));
const pizza_controller_1 = __importDefault(require("../controllers/pizza.controller"));
const pizzaController = new pizza_controller_1.default();
class PizzaRouter extends CustomRouter_1.default {
    init() {
        this.post("/", pizzaController.addPizza);
        this.post("/", pizzaController.getPizzas);
    }
}
exports.default = PizzaRouter;
