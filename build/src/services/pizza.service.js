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
var _PizzaService_pizzaModel;
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = require("../models/Pizza");
class PizzaService {
    constructor() {
        _PizzaService_pizzaModel.set(this, void 0);
        this.getPizzas = async () => {
            try {
                return __classPrivateFieldGet(this, _PizzaService_pizzaModel, "f").find().lean();
            }
            catch (error) {
                throw error;
            }
        };
        this.deletePizza = async (name) => {
            try {
                return await __classPrivateFieldGet(this, _PizzaService_pizzaModel, "f").deleteOne({ name });
            }
            catch (error) {
                throw error;
            }
        };
        this.updatePizza = async (name, newData) => {
            try {
                await __classPrivateFieldGet(this, _PizzaService_pizzaModel, "f").findOneAndUpdate({ name }, newData);
                return { message: "Product successfully updated." };
            }
            catch (error) {
                throw error;
            }
        };
        __classPrivateFieldSet(this, _PizzaService_pizzaModel, Pizza_1.pizzaModel, "f");
    }
    async addPizza(newPizza) {
        try {
            const addedPizza = await __classPrivateFieldGet(this, _PizzaService_pizzaModel, "f").create(newPizza);
            return addedPizza;
        }
        catch (error) {
            throw error;
        }
    }
}
_PizzaService_pizzaModel = new WeakMap();
exports.default = PizzaService;
