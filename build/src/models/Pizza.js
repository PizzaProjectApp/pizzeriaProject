"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pizzaModel = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const PizzaSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ["whole", "half"],
        default: "whole",
    },
    status: {
        type: Boolean,
        default: true,
        required: false,
    },
});
PizzaSchema.plugin(mongoose_paginate_v2_1.default);
exports.pizzaModel = (0, mongoose_1.model)("pizzas", PizzaSchema);
